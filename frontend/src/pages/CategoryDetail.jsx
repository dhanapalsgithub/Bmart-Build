import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { categories, company } from '../mock/mock';

// அனைத்துப் பிரிவுகளுக்கும்மான சப்-கேட்டகிரி தரவுகள் (Sub-categories data for all items)
const subCategoriesData = {
  cement: [
    { 
      id: 'acc-cement', 
      name: 'ACC Cement (OPC & PPC)', 
      desc: 'High-performance ACC OPC 43/53 and durable PPC cement for all structural needs.', 
      img: '/warehouse/ACC_Cement_PPC.webp', 
      count: '10 products' 
    },
    { 
      id: 'ambuja-cement', 
      name: 'Ambuja Cement', 
      desc: 'Superior strength Ambuja OPC and PPC cement ensuring crack-resistant buildings.', 
      img: '/warehouse/ambuja_cement_PPC.webp', 
      count: '12 products' 
    },
    { 
      id: 'coromandel-cement', 
      name: 'Coromandel Cement', 
      desc: 'Coromandel OPC 43/53 and PPC variants engineered for ultimate durability.', 
      img: '/warehouse/Coromandel_OPC_53.webp', 
      count: '8 products' 
    },
    { 
      id: 'chettinad-cement', 
      name: 'Chettinad Cement', 
      desc: 'Chettinad Supreme variants designed for fast setting and high strength.', 
      img: '/warehouse/classic.webp', 
      count: '16 products' 
    },
    { 
      id: 'chettinad-cement-super', 
      name: 'Chettinad Supergrade Cement', 
      desc: 'Chettinad supergrade. Supreme variants designed for fast setting and high strength.', 
      img: '/warehouse/supergrade.webp', 
      count: '17 products' 
    },
    { 
      id: 'hbc-chettinad-cement', 
      name: 'HBC-Chettinad Cement', 
      desc: 'HBC supergrade. Supreme variants designed for fast setting and high strength.', 
      img: '/warehouse/HBC.webp', 
      count: '17 products' 
    },
    { 
      id: 'dalmia-cement', 
      name: 'Dalmia Cement (Insta Pro & Supreme)', 
      desc: 'Dalmia Insta Pro and Supreme variants designed for fast setting and high strength.', 
      img: '/warehouse/Dalmia_insta pro.webp', 
      count: '9 products' 
    },
    { 
      id: 'jsw-cement', 
      name: 'JSW Cement (Concreel & Pro)', 
      desc: 'Eco-friendly JSW Concreel, Compcem, and Pro cement for green buildings.', 
      img: '/warehouse/JSW_Concreel.webp', 
      count: '11 products' 
    },
    { 
      id: 'maha-cement', 
      name: 'Maha Cement', 
      desc: 'Maha OPC 43/53 and PPC cement known for superior binding and longevity.', 
      img: '/warehouse/Maha_OPC 43.webp', 
      count: '10 products' 
    },
    { 
      id: 'ramco-cement', 
      name: 'Ramco Cement & Supercrete', 
      desc: 'Ramco PPC and Supercrete variants trusted for heavy construction and roofing.', 
      img: '/warehouse/Ramco_PPC.webp', 
      count: '14 products' 
    },
    { 
      id: 'sankar-cement', 
      name: 'Sankar Cement (CSK)', 
      desc: 'Classic Sankar CSK cement providing high compressive strength and finish.', 
      img: '/warehouse/Sankar_CSK.webp', 
      count: '7 products' 
    },
    { 
      id: 'white-and-special', 
      name: 'Specialty & White Cement / GGBS', 
      desc: 'White cement, fine GGBS, and special-grade cements for decorative and industrial works.', 
      img: '/warehouse/GGBS_fine.webp', 
      count: '15 products' 
    }
  ],
  steel: [

    { 
      id: 'tmt-bars', 
      name: 'TMT Bars', 
      desc: 'High tensile strength TMT bars for earthquake-resistant concrete reinforcement.', 
      img: '/warehouse/tmt-bars_1783947662.jpg', 
      count: '58 products' 
    },
    { 
      id: 'angle', 
      name: 'Angle', 
      desc: 'High-strength structural angles for framing, brackets, and industrial support.', 
      img: '/warehouse/angle_1783947756 (1).jpg', 
      count: '0 products' 
    },
    { 
      id: 'mesh-binding', 
      name: 'Mesh & Binding', 
      desc: 'Durable steel mesh and binding wires for concrete reinforcement and bundling.', 
      img: '/warehouse/mesh-binding_1783947740.jpg', 
      count: '1 products' 
    },
    { 
      id: 'purlin', 
      name: 'Purlin', 
      desc: 'Roof framing purlins designed to support roof decks and structural loads.', 
      img: '/warehouse/purlin_1783947733.jpg', 
      count: '0 products' 
    },
    { 
      id: 'roofing-sheets-plates', 
      name: 'Roofing Sheets & Plates', 
      desc: 'Corrugated roofing sheets and steel plates for industrial and shed roofing.', 
      img: '/warehouse/roofing-sheets-plates_1783947715.jpg', 
      count: '0 products' 
    },
    
    { 
      id: 'stainless-steel', 
      name: 'Stainless Steel', 
      desc: 'Corrosion-resistant stainless steel sections and sheets for premium applications.', 
      img: '/warehouse/stainless-steel_1783947703.jpg', 
      count: '0 products' 
    },
    { 
      id: 'steel-pipes-tubes', 
      name: 'Steel Pipes & Tubes', 
      desc: 'Industrial grade steel pipes and hollow tubes for structural and fluid piping.', 
      img: '/warehouse/steel-pipes-tubes_1783947691.jpg', 
      count: '0 products' 
    },
    
    { 
      id: 'structural-steel', 
      name: 'Structural Steel', 
      desc: 'Heavy-duty steel beams, channels, and columns for heavy construction.', 
      img: '/warehouse/structural-steel_1783947674.jpg', 
      count: '17 products' 
    }
  ],
  'flyash-blocks': [
    { 
      id: 'concrete-pipe', 
      name: 'Concrete Pipe', 
      desc: 'High-strength reinforced concrete pipes for drainage, sewage, and water flow systems.', 
      img: '/warehouse/concrete-pipe_1784532821.jpg', 
      count: '3 products' 
    },
    { 
      id: 'concrete-wall', 
      name: 'Concrete Wall', 
      desc: 'Precast concrete wall panels and structures for rapid and secure boundary and partition walls.', 
      img: '/warehouse/concrete-wall_1784532816.jpg', 
      count: '0 products' 
    },
    { 
      id: 'precast-concrete', 
      name: 'Precast Concrete', 
      desc: 'Durable precast blocks, hollow slabs, and custom concrete elements for fast construction.', 
      img: '/warehouse/precast-concrete_1784532811.jpg', 
      count: '3 products' 
    },
    { 
      id: 'ready-mix-concrete', 
      name: 'READY-MIX CONCRETE (RMC)', 
      desc: 'Quality-assured ready-mix concrete delivered directly via transit mixers for heavy structures.', 
      img: '/warehouse/ready-mix-concrete-rmc_1784532761.jpg', 
      count: '6 products' 
    }
  ],
  consumables: [
    { id: 'safety-gear', name: 'Site Safety Equipment', desc: 'Helmets, safety belts, boots, and high-visibility vests.', img: '/Product/product12.jpg', count: '35 products' },
    { id: 'fasteners', name: 'Tapes, Nails & Fasteners', desc: 'Industrial tapes, screws, and binding wires.', img: '/Product/product8.jpg', count: '50 products' }
  ],
  'adhesive-paste': [
    { 
      id: 'cpvc-pipe-adhesive', 
      name: 'CPVC & PVC Pipe Adhesives', 
      desc: 'High-strength solvent cements and welding solutions for leak-proof pipe and plumbing fittings.', 
      img: '/warehouse/O2kSNma4Lexz.jpg', 
      count: '15 products' 
    },
    { 
      id: 'tile-adhesive-white', 
      name: 'White Tile Adhesives (Roff, Slabfix, Hi-Bond)', 
      desc: 'Polymer-modified white tile adhesives for ceramic, vitrified, and marble tiles on walls/floors.', 
      img: '/warehouse/udKp9w2lUHWt.jpg', 
      count: '65 products' 
    },
    { 
      id: 'tile-adhesive-grey', 
      name: 'Grey Tile Adhesives & Mortars', 
      desc: 'Heavy-duty cement-based grey tile adhesives and mortar mixes for durable tile and stone fixing.', 
      img: '/warehouse/ueoZkCJg1qk3.jpg', 
      count: '80 products' 
    },
    { 
      id: 'block-jointing-mortar', 
      name: 'Block Jointing & AAC Adhesives', 
      desc: 'Specialized thin-bed mortar and block bond adhesives for AAC blocks and brick masonry.', 
      img: '/warehouse/3bFMl5je0pA9.jpg', 
      count: '25 products' 
    },
    { 
      id: 'specialty-epoxy-waterproofing', 
      name: 'Specialty Epoxy & Waterproof Adhesives', 
      desc: 'Multi-purpose, epoxy, and latex-additive adhesives for high-moisture and industrial applications.', 
      img: '/warehouse/atul_ultra_epoxy_adhesive_18kg_high_strength_two_c_1780728459.jpg', 
      count: '13 products' 
    }
  ],
  painting: [
    { 
      id: 'interior-paints', 
      name: 'Interior Paints', 
      desc: 'Rich interior emulsions and smooth wall paints for a luxurious finish inside your home.', 
      img: '/warehouse/interior-paints_1784103688.jpg', 
      count: '166 products' 
    },
    { 
      id: 'primers-undercoats', 
      name: 'Primers & Undercoats', 
      desc: 'High-quality wall primers and undercoats for strong paint adhesion and longevity.', 
      img: '/warehouse/primers-undercoats_1783949445.jpg', 
      count: '94 products' 
    },
    { 
      id: 'exterior-paints', 
      name: 'Exterior Paints', 
      desc: 'Weatherproof exterior emulsions and weather shields designed to withstand harsh climates.', 
      img: '/warehouse/exterior-paints_1783949575.jpg', 
      count: '95 products' 
    },
    { 
      id: 'wood-coatings-polishes', 
      name: 'Wood Coatings & Polishes', 
      desc: 'PU wood finishes, lacquers, and polishes to protect and enhance wooden surfaces.', 
      img: '/warehouse/wood-coatings-polishes_1784103723.jpg', 
      count: '35 products' 
    },
    { 
      id: 'industrial-protective-coatings', 
      name: 'Industrial & Protective Coatings', 
      desc: 'Rust-shield primers and heavy-duty industrial coatings for metallic and structural safety.', 
      img: '/warehouse/industrial-protective-coatings_1784103699.jpg', 
      count: '39 products' 
    },
    { 
      id: 'decorative-wall-textures', 
      name: 'Decorative Wall Textures', 
      desc: 'Special designer wall textures and illusion finishes to create stunning feature walls.', 
      img: '/warehouse/decorative-wall-textures_1784103708.jpg', 
      count: '26 products' 
    }
  ],
  electrical: [
    { 
      id: 'wires-cables', 
      name: 'Wires & Cables', 
      desc: 'Flame-retardant copper wiring, flexible cables, and armored power lines.', 
      img: '/warehouse/wires-cables_1783946178.jpg', 
      count: '69 products' 
    },
    { 
      id: 'switches-sockets', 
      name: 'Switches & Sockets', 
      desc: 'Modular switches, power sockets, cover plates, and designer electrical accessories.', 
      img: '/warehouse/switches-sockets_1783946193.jpg', 
      count: '36 products' 
    },
    { 
      id: 'led-lights-fixtures', 
      name: 'LED Lights & Fixtures', 
      desc: 'Energy-efficient LED bulbs, panel lights, flood lights, tube lights, and ceiling fittings.', 
      img: '/warehouse/led-lights-fixtures_1783946205.jpg', 
      count: '20 products' 
    },
    { 
      id: 'circuit-breakers-distribution', 
      name: 'Circuit Breakers & Distribution', 
      desc: 'Miniature Circuit Breakers (MCB), RCCB, isolators, and distribution boards for electrical safety.', 
      img: '/warehouse/circuit-breakers-distribution-boards_1783946214.jpg', 
      count: '46 products' 
    },
    { 
      id: 'solar-panels-inverters', 
      name: 'Solar Panels & Inverters', 
      desc: 'High-efficiency solar panels, power inverters, and renewable energy components.', 
      img: '/warehouse/solar-panels-inverters_1783946199.jpg', 
      count: '0 products' 
    }
  ],
  plumbing: [
    { 
      id: 'drainage-waste-fittings', 
      name: 'Drainage & Waste Fittings', 
      desc: 'Heavy-duty drainage pipes, traps, and waste fittings for efficient wastewater disposal.', 
      img: '/warehouse/drainage-waste-fittings_1784532512.jpg', 
      count: '1 products' 
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
      count: '80 products' 
    },
    { 
      id: 'outdoor-parking-tiles', 
      name: 'Outdoor & Parking Tiles', 
      desc: 'Heavy-duty anti-skid parking tiles and outdoor pavers designed for driveways and gardens.', 
      img: '/warehouse/outdoor-parking-tiles_1784006389.jpg', 
      count: '2 products' 
    },
    { 
      id: 'wall-tiles', 
      name: 'Wall Tiles', 
      desc: 'Designer ceramic and vitrified wall tiles perfect for kitchens, bathrooms, and feature walls.', 
      img: '/warehouse/wall-tiles_1784006377.jpg', 
      count: '0 products' 
    }
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