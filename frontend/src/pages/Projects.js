import React from 'react';
import { ArrowRight } from 'lucide-react';
import { PageHero } from './Products';

const Projects = () => {
  const projects = [
    {
      id: 'apartment-projects',
      title: 'Apartment projects',
      description: 'Planned material supply for residential apartment and multi-unit housing projects across structural and finishing stages.',
      image: 'https://images.pexels.com/photos/439416/pexels-photo-439416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
      image: 'https://images.pexels.com/photos/7706385/pexels-photo-7706385.jpeg',
    },
    {
      id: 'contractor-projects',
      title: 'Contractor projects',
      description: 'Dependable sourcing, competitive pricing, and smooth delivery coordination working directly with builders and developers.',
      image: 'https://images.pexels.com/photos/15063590/pexels-photo-15063590.jpeg',
    },
    {
      id: 'completed-ongoing-supply',
      title: 'Completed / ongoing supply photos',
      description: 'A comprehensive portfolio showcasing structured bulk procurement, ongoing site deliveries, and successfully finished projects.',
      image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
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
                    href="https://wa.me/919360380276?text=Hi%20Bhart,%20I%20would%20like%20to%20discuss%20a%20project%20similar%20to%20your%20portfolio."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-gray-900 group-hover:text-[#FF7A00] transition-colors"
                  >
                    View Project Details <ArrowRight size={16} />
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