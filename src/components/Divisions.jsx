import React from 'react';
import { 
  CottonIcon, 
  OilDropIcon, 
  RiceStalkIcon, 
  PolishingIcon, 
  FeedPelletsIcon, 
  LeafIcon 
} from './Icons';

export default function Divisions({ onSelectDivision }) {
  const divisions = [
    {
      id: 'cotton',
      title: 'Cotton Ginning Factory',
      description: 'Ginning of raw cotton into lint and seed, one of our founding operations.',
      badge: '200 bales per day',
      color: '#5f7d6a',
      image: '/assets/images/cotton-ginning.jpg',

      icon: CottonIcon,
      details: {
        established: '2011',
        location: 'Jhol Road, Tando Adam, Sindh',
        output: 'Premium raw cotton lint and quality seeds for edible oil extraction',
      }
    },
    {
      id: 'oil',
      title: 'Oil Mill',
      description: 'Edible oil extraction with oil cake produced as a by-product for feed use.',
      badge: 'Oil 1,000 kg/day · Oil cake 30 tons/day',
      color: '#b28731',
      image: '/assets/images/oil-mill.jpg',
      icon: OilDropIcon,
      details: {
        established: '2011',
        location: 'Tando Adam Complex',
        output: 'Unrefined/refined edible oil and high-protein cotton seed oil cake',
      }
    },
    {
      id: 'rice-mill',
      title: 'Rice Mill',
      description: 'Milling of IRRI-6 rice.',
      badge: '140 MT per day',
      color: '#9c8b5e',
      image: '/assets/images/rice-mill.jpg',
      icon: RiceStalkIcon,
      details: {
        variety: 'IRRI-6 Long Grain Rice',
        location: 'Tando Adam, Sindh',
        capacity: '140 Metric Tons per day',
      }
    },
    {
      id: 'rice-polishing',
      title: 'Rice Polishing Unit',
      description: 'Located at Port Qasim Industrial Area.',
      badge: '240 tons per day',
      color: '#8e8055',
      image: '/assets/images/rice-polishing.jpeg',
      icon: PolishingIcon,
      details: {
        location: 'Port Qasim Industrial Area, Karachi',
        capacity: '240 Tons per day',
        purpose: 'Advanced export-grade polishing and grading for bulk shipment',
      }
    },
    {
      id: 'feed',
      title: 'Feed Mill',
      description: 'Dairy feed pellets for livestock and dairy farms.',
      badge: '10 MT per day',
      color: '#4e6538',
      image: '/assets/images/feed-mill.jpg',
      icon: FeedPelletsIcon,
      details: {
        capacity: '10 MT per day',
        formulation: 'High-nutrition dairy cattle pellets using locally produced oil cakes',
      }
    },
    {
      id: 'biochar',
      title: 'Biochar',
      description: 'Started in 2026 for carbon sequestration. Produces Organic Carbon Enhancers for Soil, Dairy & Poultry.',
      badge: '1 MT/day, scaling to 5 tons/day',
      color: '#232724',
      image: '/assets/images/biochar.jpg',
      icon: LeafIcon,
      details: {
        started: '2026',
        purpose: 'Carbon sequestration and agricultural soil conditioning',
        capacity: '1 MT/day scaling to 5 tons/day',
      }
    },
  ];

  return (
    <section id="divisions" className="bg-[#f3efe6] py-16 sm:py-24 border-b border-neutral-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b87e28] block mb-2">
            What We Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight mb-4">
            Our production divisions
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            Five processing units under one roof of expertise, each serving a different link in the agricultural chain.
          </p>
        </div>

        {/* 6 Divisions Grid matching mockup exactly */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {divisions.map((div) => {
            const IconComponent = div.icon;
            return (
              <div
                key={div.id}
                className="bg-white rounded-2xl overflow-hidden border border-neutral-200/80 shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow-md"
              >
                {/* Visual Block with HD photograph and top-right icon badge */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100 group">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/90 backdrop-blur-xs border border-white/60 shadow-xs">
                    <IconComponent className="w-5 h-5 text-[#173824]" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                      {div.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-6">
                      {div.description}
                    </p>
                  </div>

                  {/* Capacity Badge */}
                  <div className="pt-2">
                    <span className="inline-block bg-[#ede6d6] text-neutral-800 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-md">
                      {div.badge}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
