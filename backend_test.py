#!/usr/bin/env python3
"""
Backend API Tests for BMART Quote Endpoints
Tests the /api/quotes endpoints using the production backend URL
"""

import requests
import json
from datetime import datetime

# Load backend URL from frontend/.env
BACKEND_URL = "https://bmart-shop.preview.emergentagent.com"
BASE_URL = f"{BACKEND_URL}/api"

def print_test_header(test_name):
    print(f"\n{'='*80}")
    print(f"TEST: {test_name}")
    print(f"{'='*80}")

def print_result(passed, message):
    status = "✅ PASS" if passed else "❌ FAIL"
    print(f"{status}: {message}")

def test_create_quote_valid():
    """Test 1: POST /api/quotes with valid data"""
    print_test_header("POST /api/quotes with valid data")
    
    payload = {
        "name": "Test User",
        "phone": "+91 9876543210",
        "email": "test@example.com",
        "city": "Trichy",
        "product": "Cement & Blocks",
        "message": "Need 100 bags"
    }
    
    try:
        response = requests.post(f"{BASE_URL}/quotes", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        # Check status code
        if response.status_code != 200:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return None
        
        data = response.json()
        
        # Validate response structure
        checks = []
        checks.append(("id field exists", "id" in data))
        checks.append(("name matches", data.get("name") == payload["name"]))
        checks.append(("phone matches", data.get("phone") == payload["phone"]))
        checks.append(("email matches", data.get("email") == payload["email"]))
        checks.append(("city matches", data.get("city") == payload["city"]))
        checks.append(("product matches", data.get("product") == payload["product"]))
        checks.append(("message matches", data.get("message") == payload["message"]))
        checks.append(("synced_to_sheet is false", data.get("synced_to_sheet") == False))
        checks.append(("created_at exists", "created_at" in data))
        checks.append(("_id not in response", "_id" not in data))
        
        all_passed = True
        for check_name, result in checks:
            print_result(result, check_name)
            if not result:
                all_passed = False
        
        if all_passed:
            print_result(True, "All validations passed for POST /api/quotes with valid data")
            return data.get("id")
        else:
            print_result(False, "Some validations failed")
            return None
            
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return None

def test_create_quote_missing_required():
    """Test 2: POST /api/quotes with missing required fields"""
    print_test_header("POST /api/quotes with missing required fields (no phone)")
    
    payload = {
        "name": "Test User",
        "email": "test@example.com",
        "city": "Trichy",
        "product": "Cement & Blocks",
        "message": "Need 100 bags"
        # Missing 'phone' field
    }
    
    try:
        response = requests.post(f"{BASE_URL}/quotes", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        # Should return 422 validation error
        if response.status_code == 422:
            print_result(True, "Correctly returned 422 validation error for missing phone")
            return True
        else:
            print_result(False, f"Expected status 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_create_quote_missing_name():
    """Test 2b: POST /api/quotes with missing name field"""
    print_test_header("POST /api/quotes with missing required fields (no name)")
    
    payload = {
        "phone": "+91 9876543210",
        "email": "test@example.com",
        "city": "Trichy",
        "product": "Cement & Blocks",
        "message": "Need 100 bags"
        # Missing 'name' field
    }
    
    try:
        response = requests.post(f"{BASE_URL}/quotes", json=payload, timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {json.dumps(response.json(), indent=2)}")
        
        # Should return 422 validation error
        if response.status_code == 422:
            print_result(True, "Correctly returned 422 validation error for missing name")
            return True
        else:
            print_result(False, f"Expected status 422, got {response.status_code}")
            return False
            
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_get_quotes(created_id):
    """Test 3: GET /api/quotes"""
    print_test_header("GET /api/quotes")
    
    try:
        response = requests.get(f"{BASE_URL}/quotes", timeout=10)
        print(f"Status Code: {response.status_code}")
        
        # Check status code
        if response.status_code != 200:
            print_result(False, f"Expected status 200, got {response.status_code}")
            return False
        
        data = response.json()
        print(f"Number of quotes returned: {len(data)}")
        
        if len(data) > 0:
            print(f"First quote: {json.dumps(data[0], indent=2)}")
        
        # Validate response structure
        checks = []
        checks.append(("Response is a list", isinstance(data, list)))
        
        if len(data) > 0:
            first_quote = data[0]
            checks.append(("First quote has id", "id" in first_quote))
            checks.append(("First quote has name", "name" in first_quote))
            checks.append(("First quote has phone", "phone" in first_quote))
            checks.append(("First quote has created_at", "created_at" in first_quote))
            checks.append(("No _id in response", "_id" not in first_quote))
            
            # Check if our created quote is in the list
            if created_id:
                found = any(q.get("id") == created_id for q in data)
                checks.append(("Created quote found in list", found))
            
            # Check sorting (should be descending by created_at)
            if len(data) > 1:
                try:
                    first_time = datetime.fromisoformat(data[0]["created_at"].replace('Z', '+00:00'))
                    second_time = datetime.fromisoformat(data[1]["created_at"].replace('Z', '+00:00'))
                    checks.append(("Sorted by created_at descending", first_time >= second_time))
                except Exception:
                    checks.append(("Sorted by created_at descending", False))
        
        all_passed = True
        for check_name, result in checks:
            print_result(result, check_name)
            if not result:
                all_passed = False
        
        if all_passed:
            print_result(True, "All validations passed for GET /api/quotes")
            return True
        else:
            print_result(False, "Some validations failed")
            return False
            
    except Exception as e:
        print_result(False, f"Exception occurred: {str(e)}")
        return False

def test_mongodb_persistence():
    """Test 4: Verify data persists in MongoDB"""
    print_test_header("MongoDB Persistence Check")
    
    try:
        from pymongo import MongoClient
        client = MongoClient("mongodb://localhost:27017")
        db = client["test_database"]
        
        # Count quotes in database
        count = db.quotes.count_documents({})
        print(f"Total quotes in MongoDB: {count}")
        
        if count > 0:
            # Get the most recent quote
            latest = db.quotes.find_one(sort=[("created_at", -1)])
            print(f"Latest quote in DB: {latest}")
            print_result(True, f"Data persists in MongoDB ({count} quotes found)")
            return True
        else:
            print_result(False, "No quotes found in MongoDB")
            return False
            
    except Exception as e:
        print_result(False, f"Could not verify MongoDB persistence: {str(e)}")
        return False

def main():
    print("\n" + "="*80)
    print("BMART BACKEND QUOTE ENDPOINTS TEST SUITE")
    print(f"Backend URL: {BACKEND_URL}")
    print("="*80)
    
    results = {
        "test1_create_valid": False,
        "test2_missing_phone": False,
        "test2b_missing_name": False,
        "test3_get_quotes": False,
        "test4_mongodb": False
    }
    
    # Test 1: Create quote with valid data
    created_id = test_create_quote_valid()
    results["test1_create_valid"] = created_id is not None
    
    # Test 2: Missing required fields
    results["test2_missing_phone"] = test_create_quote_missing_required()
    results["test2b_missing_name"] = test_create_quote_missing_name()
    
    # Test 3: Get quotes
    results["test3_get_quotes"] = test_get_quotes(created_id)
    
    # Test 4: MongoDB persistence
    results["test4_mongodb"] = test_mongodb_persistence()
    
    # Summary
    print("\n" + "="*80)
    print("TEST SUMMARY")
    print("="*80)
    passed = sum(1 for v in results.values() if v)
    total = len(results)
    
    for test_name, result in results.items():
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status}: {test_name}")
    
    print(f"\nTotal: {passed}/{total} tests passed")
    print("="*80)
    
    return passed == total

if __name__ == "__main__":
    success = main()
    exit(0 if success else 1)
