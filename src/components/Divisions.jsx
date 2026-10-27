import React, { useState } from 'react';
import { 
  CottonIcon, 
  OilDropIcon, 
  RiceStalkIcon, 
  PolishingIcon, 
  FeedPelletsIcon, 
  LeafIcon 
} from './Icons';
import { ChevronDown, ArrowRight, Check } from 'lucide-react';

export default function Divisions({ onSelectDivision }) {
  // State to track which cards are expanded
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleInquire = (title) => {
    if (onSelectDivision) {
      onSelectDivision(title);
    } else {
      const contactElem = document.querySelector('#contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const divisions = [
    {
      id: 'cotton',
      title: 'Cotton Ginning Factory',
      description: 'Ginning of raw cotton into lint and seed, one of our founding operations.',
      badge: '200 bales per day',
      color: '#5f7d6a',
      image: '/assets/images/cotton-ginning.jpg',
      icon: CottonIcon,
      specs: [
        { label: 'Established', value: '2011 (Founding Unit)' },
        { label: 'Location', value: 'Jhol Road, Tando Adam, Sindh' },
        { label: 'Primary Output', value: 'Grade-A raw cotton lint & premium seed for oil mill' },
        { label: 'Key Machinery', value: 'Saw ginning batteries, pre-cleaners, hydraulic press' },
      ],
    },
    {
      id: 'oil',
      title: 'Oil Mill',
      description: 'Edible oil extraction with oil cake produced as a by-product for feed use.',
      badge: 'Oil 1,000 kg/day · Oil cake 30 tons/day',
      color: '#b28731',
      image: '/assets/images/oil-mill.jpg',
      icon: OilDropIcon,
      specs: [
        { label: 'Established', value: '2011' },
        { label: 'Location', value: 'Tando Adam Complex, Sindh' },
        { label: 'Primary Output', value: 'Edible cooking oil & high-protein cattle oil cake' },
        { label: 'Extraction Method', value: 'Mechanical screw expellers without chemical solvents' },
      ],
    },
    {
      id: 'rice-mill',
      title: 'Rice Mill',
      description: 'Milling of IRRI-6 rice with dedicated hulling, polishing, and grading streams.',
      badge: '140 MT per day',
      color: '#9c8b5e',
      image: '/assets/images/rice-mill.jpg',
      icon: RiceStalkIcon,
      specs: [
        { label: 'Variety', value: 'IRRI-6 Long Grain Rice' },
        { label: 'Location', value: 'Tando Adam, Sindh' },
        { label: 'Capacity', value: '140 Metric Tons per day' },
        { label: 'Processing Line', value: 'De-husking, multi-pass whitening & precision color sorting' },
      ],
    },
    {
      id: 'rice-polishing',
      title: 'Rice Polishing Unit',
      description: 'Located at Port Qasim Industrial Area for high-capacity export grading.',
      badge: '240 tons per day',
      color: '#8e8055',
      image: '/assets/images/rice-polishing.jpeg',
      icon: PolishingIcon,
      specs: [
        { label: 'Location', value: 'Port Qasim Industrial Area, Karachi' },
        { label: 'Export Advantage', value: 'Direct proximity to Karachi seaport container terminals' },
        { label: 'Capacity', value: '240 Tons per day' },
        { label: 'Specialization', value: 'Export-grade silky water polishing, length sorting & packaging' },
      ],
    },
    {
      id: 'feed',
      title: 'Feed Mill',
      description: 'Dairy feed pellets formulated for livestock health and milk yield maximization.',
      badge: '10 MT per day',
      color: '#4e6538',
      image: '/assets/images/feed-mill.jpg',
      icon: FeedPelletsIcon,
      specs: [
        { label: 'Capacity', value: '10 Metric Tons per day' },
        { label: 'Formulation', value: 'High-density steam pellets with bypass protein & minerals' },
        { label: 'Key Ingredients', value: 'Locally produced cottonseed cake, wheat bran, essential premix' },
        { label: 'Key Benefit', value: 'Low moisture stability (<11%) & enhanced rumen digestibility' },
      ],
    },
    {
      id: 'biochar',
      title: 'Biochar',
      description: 'Started in 2026 for carbon sequestration. Produces Organic Carbon Enhancers for Soil, Dairy & Poultry.',
      badge: '1 MT/day, scaling to 5 tons/day',
      color: '#232724',
      image: '/assets/images/biochar.jpg',
      icon: LeafIcon,
      specs: [
        { label: 'Established', value: '2026 (ESG Initiative)' },
        { label: 'Technology', value: 'Controlled oxygen-deprived high-heat pyrolysis' },
        { label: 'Capacity', value: '1 MT/day scaling to 5 tons/day' },
        { label: 'Impact', value: 'Permanent carbon sequestration and circular agro-waste utilization' },
      ],
    },
  ];

  return (
    <section id="divisions" className="bg-[#f3efe6] py-16 sm:py-24 border-b border-neutral-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <div className="max-w-3xl mb-12 reveal-on-scroll">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b87e28] block mb-2">
            What We Do
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight mb-4">
            Our production divisions
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            Five processing units under one roof of expertise, each serving a different link in the agricultural chain. Click any card to inspect operational specifications.
          </p>
        </div>

        {/* 6 Divisions Grid with Staggered Delays & Interactive Expand/Collapse */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-start">
          {divisions.map((div, idx) => {
            const IconComponent = div.icon;
            const isOpen = !!expandedCards[div.id];
            const delays = ['delay-100', 'delay-150', 'delay-200', 'delay-250', 'delay-300', 'delay-400'];
            const delayClass = delays[idx % delays.length];

            return (
              <div
                key={div.id}
                className={`bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 reveal-on-scroll ${delayClass}`}
              >
                {/* Visual Block with HD photograph and top-right icon badge */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-neutral-100 group">
                  <img
                    src={div.image}
                    alt={div.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/90 backdrop-blur-xs border border-white/60 shadow-xs transition-transform duration-300 group-hover:scale-105">
                    <IconComponent className="w-5 h-5 text-[#173824]" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 mb-2">
                      {div.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-600 leading-relaxed mb-4">
                      {div.description}
                    </p>
                  </div>

                  {/* Capacity Badge */}
                  <div className="pt-1 mb-5">
                    <span className="inline-block bg-[#ede6d6] text-neutral-800 text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-md">
                      {div.badge}
                    </span>
                  </div>

                  {/* Smooth Accordion Drawer for Operations & Specs */}
                  <div className={`accordion-wrapper ${isOpen ? 'is-open' : ''}`}>
                    <div className="accordion-content">
                      <div className="pt-4 pb-2 border-t border-neutral-200/80 space-y-3.5">
                        <div className="text-[11px] uppercase tracking-wider font-bold text-[#b87e28]">
                          Operational Specifications
                        </div>
                        <div className="grid grid-cols-1 gap-2.5">
                          {div.specs.map((spec, sIdx) => (
                            <div key={sIdx} className="bg-neutral-50/90 border border-neutral-200/80 rounded-lg p-2.5">
                              <span className="text-[10px] uppercase font-bold text-neutral-500 block">
                                {spec.label}
                              </span>
                              <span className="text-xs font-semibold text-neutral-900 block mt-0.5 leading-snug">
                                {spec.value}
                              </span>
                            </div>
                          ))}
                        </div>

                        {/* Inquire for this Division Button */}
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => handleInquire(div.title)}
                            className="w-full py-2.5 px-3 rounded-md bg-[#173824] hover:bg-[#0e2215] text-white text-xs font-bold transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs focus:ring-2 focus:ring-[#173824]"
                          >
                            <span>Inquire for {div.title}</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Card Open/Close Button */}
                  <div className="pt-4 border-t border-neutral-200/80 mt-2">
                    <button
                      type="button"
                      onClick={() => toggleCard(div.id)}
                      className="w-full flex items-center justify-between text-xs font-bold text-neutral-700 hover:text-[#173824] py-1 cursor-pointer transition-colors group/btn"
                      aria-expanded={isOpen}
                    >
                      <span>
                        {isOpen ? 'Hide Specifications' : 'View Operations & Specs'}
                      </span>
                      <span className={`p-1 rounded-md bg-neutral-100 group-hover/btn:bg-neutral-200 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        <ChevronDown className="w-3.5 h-3.5 text-neutral-600" />
                      </span>
                    </button>
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
