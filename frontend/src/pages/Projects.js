import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageHero } from './Products';

const Projects = () => {
  const projects = [
    {
      id: 'apartment-projects',
      title: 'Apartment projects',
      description: 'Planned material supply for residential apartment and multi-unit housing projects across structural and finishing stages.',
      image: 'https://images.unsplash.com/photo-1515829231605-2d8e4455af56?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YXBhcnRtZW50JTIwYnVpbGRpbmclMjB3aXRob3V0JTIwYmFja2dyb3VuZCUyMHdoaXRlfGVufDB8fDB8fHww',
    },
    {
      id: 'individual-houses',
      title: 'Individual houses',
      description: 'Quality building materials for individual house construction, renovations, and custom residential villa projects.',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    },
    {
      id: 'commercial-buildings',
      title: 'Commercial buildings',
      description: 'Tailored supply approach for commercial buildings, offices, retail shops, warehouses, and institutional facilities.',
      image: 'https://media.istockphoto.com/id/1958541858/photo/office-building-dusk.webp?a=1&b=1&s=612x612&w=0&k=20&c=S7da8VhW2N0wh7qZphUDn3RVUixDByfnGOuhEbSagjk=',
    },
    {
      id: 'contractor-projects',
      title: 'Contractor projects',
      description: 'Dependable sourcing, competitive pricing, and smooth delivery coordination working directly with builders and developers.',
      image: 'https://media.istockphoto.com/id/1164943425/photo/turning-dreams-into-winning-designs.webp?a=1&b=1&s=612x612&w=0&k=20&c=3Sij8KM4BiVK4_YsgcbAbxXdI6qKXE7FmFChuBnu28M=',
    },
    {
      id: 'completed-ongoing-supply',
      title: 'Completed / ongoing supply photos',
      description: 'A comprehensive portfolio showcasing structured bulk procurement, ongoing site deliveries, and successfully finished projects.',
      image: 'https://images.unsplash.com/photo-1664183338647-2b98504afc83?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q29tcGxldGVkJTIwJTJGJTIwb25nb2luZyUyMHN1cHBseSUyMHBob3Rvc3xlbnwwfHwwfHx8MA%3D%3D',
    },
  ];

  return (
    <div>
      <PageHero title="Projects & Client Portfolio" crumb="Projects" />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-bold tracking-[0.25em] uppercase text-[#FF7A00] mb-3">
              Our Portfolio 🏗️
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Our Construction Portfolio</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
              Explore the diverse range of residential, commercial, and contractor projects we proudly support with dependable material sourcing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <div 
                key={p.id}
                className="group rounded-2xl overflow-hidden border border-gray-100 bg-white shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-56 overflow-hidden bg-white">
                  <img 
                    src={p.image} 
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                  <h3 className="absolute bottom-4 left-4 right-4 text-xl font-bold text-white">
                    {p.title}
                  </h3>
                </div>
                <div className="p-6 flex flex-col flex-grow justify-between">
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">{p.description}</p>
                  <a 
                    href="https://wa.me/7904872045?text=Hi%20Bhart,%20I%20would%20like%20to%20discuss%20a%20project%20similar%20to%20your%20portfolio."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-[#FF7A00] transition-colors"
                  >
                    Ask Project Details <ArrowRight size={16} />
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

export default Projects;