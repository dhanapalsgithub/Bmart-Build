from fastapi import FastAPI, APIRouter
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List
import uuid
import asyncio
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

# ---- Quote / Lead models ----
class QuoteCreate(BaseModel):
    name: str
    phone: str
    email: str = ""
    city: str = ""
    product: str = ""
    message: str = ""

class Quote(BaseModel):
    model_config = ConfigDict(extra="ignore")

    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    phone: str
    email: str = ""
    city: str = ""
    product: str = ""
    message: str = ""
    synced_to_sheet: bool = False
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


async def _forward_to_google_sheet(payload: dict) -> bool:
    """Forward a quote to a Google Apps Script Web App (Google Sheet). Non-blocking failure."""
    script_url = os.environ.get('GOOGLE_SCRIPT_URL', '').strip()
    if not script_url:
        return False
    try:
        import requests
        resp = await asyncio.to_thread(
            requests.post, script_url, json=payload, timeout=15
        )
        return resp.status_code == 200
    except Exception as e:
        logger.error(f"Google Sheet sync failed: {e}")
        return False


# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

@api_router.post("/quotes", response_model=Quote)
async def create_quote(input: QuoteCreate):
    quote = Quote(**input.model_dump())
    doc = quote.model_dump()
    doc['created_at'] = doc['created_at'].isoformat()

    # forward to Google Sheet (if configured)
    synced = await _forward_to_google_sheet({
        "name": quote.name,
        "phone": quote.phone,
        "email": quote.email,
        "city": quote.city,
        "product": quote.product,
        "message": quote.message,
        "created_at": doc['created_at'],
    })
    doc['synced_to_sheet'] = synced
    quote.synced_to_sheet = synced

    await db.quotes.insert_one(doc)
    return quote

@api_router.get("/quotes", response_model=List[Quote])
async def get_quotes():
    quotes = await db.quotes.find({}, {"_id": 0}).sort("created_at", -1).to_list(1000)
    for q in quotes:
        if isinstance(q.get('created_at'), str):
            q['created_at'] = datetime.fromisoformat(q['created_at'])
    return quotes

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()