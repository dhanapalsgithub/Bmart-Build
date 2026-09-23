import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories, company } from '../mock/mock';

// அனைத்துப் பிரிவுகளுக்கும்மான சப்-கேட்டகிரி தரவுகள் (Sub-categories data for all items)
const subCategoriesData = {
  cement: [
    { 
      id: 'Ramco Cement', 
      name: 'Ramco Cement ', 
      desc: 'High-performance  cement for all structural needs.', 
      img: '/warehouse/ramco-cement-2219524806-o59jbjfz.jpg', 
      count: '100products' 
    },
    { 
      id: 'Chettinad', 
      name: 'Chettinad Cement', 
      desc: 'Superior strength Ambuja OPC and PPC cement ensuring crack-resistant buildings.', 
      img: '/warehouse/chettinad-cement (1).jpg', 
      count: '120products' 
    },
    { 
      id: 'UltraTech-cement', 
      name: 'Ultratech Cement', 
      desc: ' variants engineered for ultimate durability.', 
      img: '/warehouse/1_Front_shot_Main_Image_6424b44c-46a2-41fb-b061-2fd56c7731c6.webp', 
      count: '80products' 
    },
    { 
      id: 'Dalmia-cement', 
      name: 'Dalmia Cement', 
      desc: 'DalmiaSupreme variants designed for fast setting and high strength.', 
      img: '/warehouse/ramco-super-fast-cement-packaging-size-50-kg.jpg', 
      count: '160products' 
    },
    { 
      id: 'chettinad-cement-super', 
      name: 'Chettinad Supergrade Cement', 
      desc: 'Chettinad supergrade. Supreme variants designed for fast setting and high strength.', 
      img: '/warehouse/supergrade.webp', 
      count: '170products' 
    },
    { 
      id: 'hbc-chettinad-cement', 
      name: 'HBC-Chettinad Cement', 
      desc: 'HBC supergrade. Supreme variants designed for fast setting and high strength.', 
      img: '/warehouse/HBC.webp', 
      count: '170products' 
    },
    { 
      id: 'dalmia-cement', 
      name: 'Dalmia Cement (Insta Pro & Supreme)', 
      desc: 'Dalmia Insta Pro and Supreme variants designed for fast setting and high strength.', 
      img: '/warehouse/Dalmia_insta pro.webp', 
      count: '90products' 
    },
    { 
      id: 'jsw-cement', 
      name: 'JSW Cement (Concreel & Pro)', 
      desc: 'Eco-friendly JSW Concreel, Compcem, and Pro cement for green buildings.', 
      img: '/warehouse/JSW_Concreel.webp', 
      count: '110products' 
    },
    { 
      id: 'maha-cement', 
      name: 'Maha Cement', 
      desc: 'Maha OPC 43/53 and PPC cement known for superior binding and longevity.', 
      img: '/warehouse/Maha_OPC 43.webp', 
      count: '100 products' 
    },
    { 
      id: 'ramco-cement', 
      name: 'Ramco Cement & Supercrete', 
      desc: 'Ramco PPC and Supercrete variants trusted for heavy construction and roofing.', 
      img: '/warehouse/Ramco_PPC.webp', 
      count: '140 products' 
    },
    { 
      id: 'sankar-cement', 
      name: 'Sankar Cement (CSK)', 
      desc: 'Classic Sankar CSK cement providing high compressive strength and finish.', 
      img: '/warehouse/Sankar_CSK.webp', 
      count: '700 products' 
    },
    { 
      id: 'white-and-special', 
      name: 'Specialty & White Cement / GGBS', 
      desc: 'White cement, fine GGBS, and special-grade cements for decorative and industrial works.', 
      img: '/warehouse/GGBS_fine.webp', 
      count: '150 products' 
    }
  ],
  steel: [

    { 
      id: 'tmt-bars', 
      name: 'TMT Bars', 
      desc: 'High tensile strength TMT bars for earthquake-resistant concrete reinforcement.', 
      img: '/warehouse/radha-tmt-550-steel-bars-1000x1000-1.webp', 
      count: '580 products' 
    },
    { 
      id: 'angle', 
      name: 'Angle', 
      desc: 'High-strength structural angles for framing, brackets, and industrial support.', 
      img: '/warehouse/angle_1783947756 (1).jpg', 
      count: '200 products' 
    },
    { 
      id: 'mesh-binding', 
      name: 'Mesh & Binding', 
      desc: 'Durable steel mesh and binding wires for concrete reinforcement and bundling.', 
      img: '/warehouse/mesh-binding_1783947740.jpg', 
      count: '100 products' 
    },
    { 
      id: 'purlin', 
      name: 'Purlin', 
      desc: 'Roof framing purlins designed to support roof decks and structural loads.', 
      img: '/warehouse/purlin_1783947733.jpg', 
      count: '2000 products' 
    },
    { 
      id: 'roofing-sheets-plates', 
      name: 'Roofing Sheets & Plates', 
      desc: 'Corrugated roofing sheets and steel plates for industrial and shed roofing.', 
      img: '/warehouse/roofing-sheets-plates_1783947715.jpg', 
      count: '2000 products' 
    },
    
    { 
      id: 'stainless-steel', 
      name: 'Stainless Steel', 
      desc: 'Corrosion-resistant stainless steel sections and sheets for premium applications.', 
      img: '/warehouse/stainless-steel_1783947703.jpg', 
      count: '1500 products' 
    },
    { 
      id: 'steel-pipes-tubes', 
      name: 'Steel Pipes & Tubes', 
      desc: 'Industrial grade steel pipes and hollow tubes for structural and fluid piping.', 
      img: '/warehouse/steel-pipes-tubes_1783947691.jpg', 
      count: '500 products' 
    },
    
    { 
      id: 'structural-steel', 
      name: 'Structural Steel', 
      desc: 'Heavy-duty steel beams, channels, and columns for heavy construction.', 
      img: '/warehouse/structural-steel_1783947674.jpg', 
      count: '1700 products' 
    }
  ],
  'flyash-blocks': [
     { 
      id: 'fly ash bricks', 
      name: 'fly ash bricks', 
      desc: 'High-strength reinforced  brick.', 
      img: '/warehouse/flyash-bricks-500x500.webp', 
      count: '2000 products' 
    },
    { 
      id: 'interlocking fly ash bricks', 
      name: 'interlocking fly ash bricks', 
      desc: 'High-strength reinforced interlock brick.', 
      img: '/warehouse/Interlocking-Bricks.jpg', 
      count: '2000 products' 
    },
    { 
      id: 'paver interlocking fly ash bricks', 
      name: 'paver interlocking fly ash bricks', 
      desc: 'Precast concrete wall panels and structures for rapid and secure boundary and partition walls.', 
      img: '/warehouse/Concrete-Cosmic-Interlocking-Paver-Block.jpg', 
      count: '2000 products' 
    },
    { 
      id: 'precast-concrete', 
      name: 'Precast Concrete', 
      desc: 'Durable precast blocks, hollow slabs, and custom concrete elements for fast construction.', 
      img: '/warehouse/precast-concrete_1784532811.jpg', 
      count: '30products' 
    },
    { 
      id: 'red bricks', 
      name: 'Red bricks ', 
      desc: 'Quality-assured  delivered directly via transit for heavy structures.', 
      img: '/warehouse/red-brick.webp', 
      count: '60products' 
    }
  ],
  'aac-blocks':[
    { 
      id: 'Ncl Blocks', 
      name: 'Ncl blocks ', 
      desc: 'Quality-assured  delivered directly via transit for heavy structures.', 
      img: '/warehouse/aac-block.jpg', 
      count: '600 products' 
    },
    { 
      id: 'Birlanu blocks', 
      name: 'Birlanu blocks ', 
      desc: 'Quality-assured  delivered directly via transit for heavy structures.', 
      img: '/warehouse/birlanu.png', 
      count: '600 products' 
    },
      { 
      id: 'Renacon blocks', 
      name: 'Renacon blocks ', 
      desc: 'Quality-assured  delivered directly via transit for heavy structures.', 
      img: '/warehouse/Untitled-design-1.png', 
      count: '600 products' 
    },
     { 
      id: 'Licon blocks', 
      name: 'Licon blocks ', 
      desc: 'Quality-assured  delivered directly via transit for heavy structures.', 
      img: '/warehouse/licon-aac-block-8-inch.jpeg', 
      count: '600 products' 
    },
   
   



  ],


  consumables: [
    { id: 'safety-gear', name: 'Site Safety Equipment', desc: 'Helmets, safety belts, boots, and high-visibility vests.', img: '/Product/product12.jpg', count: '35 products' },
    { id: 'fasteners', name: 'Tapes, Nails & Fasteners', desc: 'Industrial tapes, screws, and binding wires.', img: '/Product/product8.jpg', count: '50 products' }
  ],
  'adhesive-paste': [
     { 
      id: 'Ramco-adhesive', 
      name: 'Ramco Adhesives', 
      desc: 'High-strength solvent cements', 
      img: '/warehouse/ramco-tile-fix-tiles-paste-t2-of-40kg-50-kg-bag20240102112308.jpeg', 
      count: '1500 products' 
    },
    { 
      id: 'UltraTech-adhesive', 
      name: 'Ultratech Adhesives', 
      desc: 'High-strength solvent cements and welding solutions for leak-proof pipe and plumbing fittings.', 
      img: '/warehouse/tilefixo-x-tra-plus-white-removebg-preview.png', 
      count: '1500 products' 
    },
    { 
      id: 'Chettinad', 
      name: ' Tile Adhesives (Roff, Slabfix, Hi-Bond)', 
      desc: 'Polymer-modified white tile adhesives for ceramic, vitrified, and marble tiles on walls/floors.', 
      img: '/warehouse/product-jpeg-500x500 (1).webp', 
      count: '650 products' 
    },
    { 
      id: 'Chettinad', 
      name: ' Tile Adhesives & Mortars', 
      desc: 'Heavy-duty cement-based grey tile adhesives and mortar mixes for durable tile and stone fixing.', 
      img: '/warehouse/pipe-angle-250x250.webp', 
      count: '80 products' 
    },
    { 
      id: 'block-jointing-mortar', 
      name: 'Block Jointing & AAC Adhesives', 
      desc: 'Specialized thin-bed mortar and block bond adhesives for AAC blocks and brick masonry.', 
      img: '/warehouse/3bFMl5je0pA9.jpg', 
      count: '250products' 
    },
    { 
      id: 'specialty-epoxy-waterproofing', 
      name: 'Specialty Epoxy & Waterproof Adhesives', 
      desc: 'Multi-purpose, epoxy, and latex-additive adhesives for high-moisture and industrial applications.', 
      img: '/warehouse/atul_ultra_epoxy_adhesive_18kg_high_strength_two_c_1780728459.jpg', 
      count: '130products' 
    }
  ],
  painting: [
    { 
      id: 'Asian-paints', 
      name: 'Asian Paints', 
      desc: 'Rich interior emulsions and smooth wall paints for a luxurious finish inside your home.', 
      img: '/warehouse/4-ace-paint-4l-white-asianpaints-original-imafdyj2swhbxynh.webp', 
      count: '166 products' 
    },
    { 
      id: '4K Paints', 
      name: '4k Paints', 
      desc: 'High-quality wall primers and undercoats for strong paint adhesion and longevity.', 
      img: '/warehouse/new-product-500x500.webp', 
      count: '94 products' 
    },
    { 
      id: 'Dulux-paints', 
      name: 'Exterior Paints', 
      desc: 'Weatherproof exterior emulsions and weather shields designed to withstand harsh climates.', 
      img: '/warehouse/360_F_307175294_MN5sbf6gLKR6CkDrMp9Qy5dqIBNlNOmZ.jpg', 
      count: '95 products' 
    },
    { 
      id: 'wood-coatings-polishes', 
      name: 'Wood Coatings & Polishes', 
      desc: 'PU wood finishes, lacquers, and polishes to protect and enhance wooden surfaces.', 
      img: '/warehouse/wood-coatings-polishes_1784103723.jpg', 
      count: '350products' 
    },
    { 
      id: 'industrial-protective-coatings', 
      name: 'Industrial & Protective Coatings', 
      desc: 'Rust-shield primers and heavy-duty industrial coatings for metallic and structural safety.', 
      img: '/warehouse/industrial-protective-coatings_1784103699.jpg', 
      count: '390products' 
    },
    { 
      id: 'decorative-wall-textures', 
      name: 'Decorative Wall Textures', 
      desc: 'Special designer wall textures and illusion finishes to create stunning feature walls.', 
      img: '/warehouse/decorative-wall-textures_1784103708.jpg', 
      count: '260products' 
    }
  ],
  electrical: [
    { 
      id: 'wires-cables', 
      name: 'Wires & Cables', 
      desc: 'Flame-retardant copper wiring, flexible cables, and armored power lines.', 
      img: '/warehouse/black-pvc-insulated-copper-wire-500x500.webp', 
      count: '690products' 
    },
    { 
      id: 'switches-sockets', 
      name: 'Switches & Sockets', 
      desc: 'Modular switches, power sockets, cover plates, and designer electrical accessories.', 
      img: '/warehouse/light-switches-and-electrical-sockets-500x500.webp', 
      count: '360products' 
    },
    { 
      id: 'led-lights-fixtures', 
      name: 'LED Lights & Fixtures', 
      desc: 'Energy-efficient LED bulbs, panel lights, flood lights, tube lights, and ceiling fittings.', 
      img: '/warehouse/led-lights-fixtures_1783946205.jpg', 
      count: '200products' 
    },
    { 
      id: 'circuit-breakers-distribution', 
      name: 'Circuit Breakers & Distribution', 
      desc: 'Miniature Circuit Breakers (MCB), RCCB, isolators, and distribution boards for electrical safety.', 
      img: '/warehouse/circuit-breakers-distribution-boards_1783946214.jpg', 
      count: '460products' 
    },
    { 
      id: 'solar-panels-inverters', 
      name: 'Solar Panels & Inverters', 
      desc: 'High-efficiency solar panels, power inverters, and renewable energy components.', 
      img: '/warehouse/solar-panels-inverters_1783946199.jpg', 
      count: '20products' 
    }
  ],
  plumbing: [
    { 
      id: 'drainage-waste-fittings', 
      name: 'Drainage & Waste Fittings', 
      desc: 'Heavy-duty drainage pipes, traps, and waste fittings for efficient wastewater disposal.', 
      img: '/warehouse/drainage-waste-fittings_1784532512.jpg', 
      count: '10products' 
    },
    { 
      id: 'plumbing-pipes-fittings', 
      name: 'Plumbing Pipes & Fittings', 
      desc: 'Leak-proof UPVC, CPVC, and PVC plumbing pipes along with heavy-duty connectors.', 
      img: '/warehouse/plumbing-pipes-fittings_1784532466.jpg', 
      count: '216 products' 
    },
    { 
      id: 'sanitary-ware', 
      name: 'Sanitary Ware', 
      desc: 'Modern ceramic wash basins, water closets (WC), and stylish bathroom fixtures.', 
      img: '/warehouse/sanitary-ware_1784532460.jpg', 
      count: '570 products' 
    },
    { 
      id: 'shower-bath-fittings', 
      name: 'Shower & Bath Fittings', 
      desc: 'Overhead showers, concealed diverters, and premium bath accessory sets.', 
      img: '/warehouse/shower-bath-fittings_1784532455 (1).jpg', 
      count: '201 products' 
    },
    { 
      id: 'valves-control-fittings', 
      name: 'Valves & Control Fittings', 
      desc: 'Brass ball valves, gate valves, and industrial flow control mechanisms.', 
      img: '/warehouse/valves-control-fittings_1784532446.jpg', 
      count: '20 products' 
    },
    { 
      id: 'faucets-taps', 
      name: 'Faucets & Taps', 
      desc: 'Durable chrome-plated water taps, basin mixers, and long-body faucets.', 
      img: '/warehouse/faucets-taps_1784532472.jpg', 
      count: '417 products' 
    }
  ],
  tiles: [
    { 
      id: 'floor-tiles', 
      name: 'Floor Tiles', 
      desc: 'Premium glossy and matte finish vitrified and ceramic floor tiles for living spaces and interiors.', 
      img: '/warehouse/floor-tiles_1784006369.jpg', 
      count: '800products' 
    },
    { 
      id: 'outdoor-parking-tiles', 
      name: 'Outdoor & Parking Tiles', 
      desc: 'Heavy-duty anti-skid parking tiles and outdoor pavers designed for driveways and gardens.', 
      img: '/warehouse/outdoor-parking-tiles_1784006389.jpg', 
      count: '2000products',
    },
    { 
      id: 'wall-tiles', 
      name: 'Wall Tiles', 
      desc: 'Designer ceramic and vitrified wall tiles perfect for kitchens, bathrooms, and feature walls.', 
      img: '/warehouse/wall-tiles_1784006377.jpg', 
      count: '200products',
    }
  ],

 'Plywood & Timber': [
    {
      id: 'Plywood Door', 
      name: 'PlyWood Doors', 
      desc: 'Designer Plywood Doors and vitrified  perfect for kitchens, bathrooms, and feature alls.', 
      img: '/warehouse/wooden-doors-design-icon-set_1284-21226.avif', 
      count: '1000products',
    },
     {
      id: 'Plywood sheet',
      name: 'Plywood sheet',
      desc: 'Plywood sheet and require thickness',
      img: '/warehouse/single-sheet-plywood-is-resting-horizontally-white-backdrop-showing-its-layers-natural-wood-grain_1103944-20824.avif',
      count: '2000 products',
    },
     {
      id: 'Pure Wood pulp',
      name: 'Pure Wood pulp',
      desc: 'Designer ceramic and vitrified wall tiles perfect for kitchens, bathrooms, and feature walls.', 
      img: '/warehouse/Quality-Pure-Wood-Pulp-A3-A4-4K-Kraft-Paper-Thick-for-Packing.avif',
      count: '2000products',
    },
    {
      id: 'Greenply Plywodd',
      name: 'Greenply Plywood',
      desc: 'Greenply Plywood',
      img: '/warehouse/greenply-plywood-used-in-making-door-furniture-and-other-construction-items-810.jpg',
      count: '2000products',
    },
     {
      id: 'Wooden Planlk',
      name: 'Wooden Plank',
      desc: 'Timber Products',
      img: '/warehouse/wooden-plank-background-with-natural-texture-cut-out-transparent-png.webp',
      count: '2000products',
    },
     {
      id: 'Dowel laminated timber',
      name: 'Dowel Laminated Timber',
      desc: 'laminated timber',
      img: '/warehouse/Cross-Laminated-Timber-2.png',
      count: '350products',
    },
    {
      id: 'Drewno konstruckcyjne',
      name: 'Drewno konstruckcyjne',
      desc: 'timber',
      img: '/warehouse/images.jfif',
      count: '350products',
    },
    {
      id: 'Wooden Rectangular Brown timber',
      name: 'Wooden rectangular timber',
      desc: 'laminated timber',
      img: '/warehouse/wooden-rectangular-timber-brown-2227115691-e89d82iv.avif',
      count: '350products',
    },
    {
      id: 'Hardwood Timber',
      name: 'Hardwood Timber',
      desc: 'untreated Oak',
      img: '/warehouse/model_paal_eiken_hou-yxdnXmMT.jpg',
      count: '350products',
    },
     

  ],
};

const CategoryDetail = () => {
  const { categoryId } = useParams();
  
  const categoryInfo = categories.find(c => c.id === categoryId) || { name: 'Products', desc: 'Explore our collection' };
  const items = subCategoriesData[categoryId] || [
    { id: 'default-1', name: categoryInfo.name, desc: categoryInfo.desc, img: categoryInfo.img || '/warehouse/cement.jpg', count: 'Available now' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 relative overflow-hidden text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
            <Link to="/" className="hover:text-amber-400">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-amber-400">Products</Link>
            <span>/</span>
            <span className="text-amber-400 font-medium">{categoryInfo.name}</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-2">{categoryInfo.name}</h1>
          <p className="text-gray-400 text-sm">All types of {categoryInfo.name} & related construction solutions</p>
        </div>
      </section>

      {/* Sub-categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((sub) => (
              <div key={sub.id} className="group rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg transition-all bg-white flex flex-col justify-between">
                <div>
                  {/* Image Container with Pure White Background */}
                  <div className="w-full aspect-[4/3] bg-white flex items-center justify-center p-6 overflow-hidden">
                    <img 
                      src={sub.img} 
                      alt={sub.name} 
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{sub.name}</h3>
                    <p className="text-amber-600 text-xs font-semibold mb-3">{sub.count}</p>
                    <p className="text-gray-600 text-sm mb-5 leading-relaxed">{sub.desc}</p>
                  </div>
                </div>
                <div className="px-6 pb-6 pt-0">
                  <a 
                    href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent('Hi BMART, I want a quote for ' + sub.name)}`} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 font-bold text-amber-600 hover:text-amber-700 hover:gap-3 transition-all text-sm"
                  >
                    Enquire Now <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CategoryDetail;