import React, { useState } from 'react';
import { LeafIcon, SoilSproutIcon, DairyCowIcon, PoultryBirdIcon } from './Icons';
import { ArrowUpRight, Check, ArrowRight, ChevronDown, FlaskConical, Calendar, ShieldCheck } from 'lucide-react';

export default function Sustainability({ onSelectProduct }) {
  const [expandedProducts, setExpandedProducts] = useState({});

  const toggleProduct = (id) => {
    setExpandedProducts((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const biocharProducts = [
    {
      id: 'soil',
      title: 'Organic Carbon Enhancer for Soil',
      brand: 'ALOKA CARBONON',
      category: 'Soil & Agriculture Regeneration',
      image: '/assets/images/carbon-enhancer-soil.jpg',
      icon: SoilSproutIcon,
      accentColor: '#173824',
      badge: 'wt 15 kg',
      specs: [
        { label: 'Water Retention', value: 'Up to 133%' },
        { label: 'Fixed Carbon', value: '40.25%' },
        { label: 'pH', value: '7.2 Neutral' },
        { label: 'Application', value: 'Once / 2 years' },
      ],
      benefits: [
        'Improve seed germination percentage',
        'High water retention up to 133%',
        'Absorbs Nitrogen & increases microbial activity',
        'Neutralize soil pH',
        'Use once every 2 years',
        'Reduce the need for chemical fertilizers by up to 40%',
        'Best mode of carbon sequestration',
      ],
      labAnalysis: [
        { parameter: 'Moisture Content', value: '< 7.8%' },
        { parameter: 'Bulk Density', value: '0.34 - 0.38 g/cm³' },
        { parameter: 'Ash Content', value: '4.6%' },
        { parameter: 'Surface Area (BET)', value: '> 285 m²/g' },
        { parameter: 'Organic Matter', value: '> 92%' },
        { parameter: 'Recommended Dosage', value: '500 - 800 kg per acre once every 24 months' },
      ],
      packaging: '15 kg multi-wall craft bag with moisture barrier lining. Shelf life: 36 months in ambient dry storage.',
    },
    {
      id: 'dairy',
      title: 'Organic Carbon Enhancer for Dairy',
      brand: 'ALOKA CARBONON',
      category: 'Livestock & Ruminant Nutrition',
      image: '/assets/images/carbon-enhancer-dairy.jpg',
      icon: DairyCowIcon,
      accentColor: '#b28731',
      badge: 'wt 15 kg · Usage: 0.3% of DM',
      specs: [
        { label: 'Milk Yield Increase', value: '8% to 10%' },
        { label: 'Rumen GHG Reduction', value: 'Up to 70%' },
        { label: 'Fixed Carbon', value: '40.35%' },
        { label: 'Usage', value: '0.3% of DM' },
      ],
      benefits: [
        'Improve protein, starch & fat digestability',
        'High daily weight gain',
        'Best remedy for diarrhea & coccidiosis',
        'Better dung quality',
        'Improve milk production by 8% to 10%',
        'Detoxify feed and reduce rumen toxin activity',
        'Improve rumen environment by absorbing excessive gases',
        'Reduce GHG production in rumen upto 70%',
      ],
      labAnalysis: [
        { parameter: 'Feed Grade Purity', value: '100% Pyrolyzed Biomass' },
        { parameter: 'Particle Size', value: '0.5 mm - 1.2 mm uniform granule' },
        { parameter: 'Rumen Gas Absorption', value: 'High affinity for methane & CO₂' },
        { parameter: 'Heavy Metals', value: 'Non-detectable / ISO 22000 compliant' },
        { parameter: 'Recommended Dosage', value: '0.3% of Dry Matter (~40-60g per adult cow/day)' },
        { parameter: 'Compatibility', value: 'Compatible with all TMR, silage, and grain rations' },
      ],
      packaging: '15 kg heat-sealed food-grade polypropylene bag. Store in dry ventilated livestock feed room.',
    },
    {
      id: 'poultry',
      title: 'Organic Carbon Enhancer for Poultry',
      brand: 'ALOKA CARBONON',
      category: 'Avian Health & Flock Productivity',
      image: '/assets/images/carbon-enhancer-poultry.jpg',
      icon: PoultryBirdIcon,
      accentColor: '#284e5a',
      badge: 'wt 15 kg · Usage: 0.3% of DM',
      specs: [
        { label: 'Antibiotics Reduction', value: 'Up to 30%' },
        { label: 'Water Absorptivity', value: '139%' },
        { label: 'Fixed Carbon', value: '40.25%' },
        { label: 'Usage', value: '0.3% of DM' },
      ],
      benefits: [
        'Stimulate growth of chicken on daily basis',
        'Improve protein & fat digestability',
        'Best remedy for diarrhea',
        'Better litter quality & less dirty eggs',
        'Reduce pododermatitis & breast blisters',
        'Improve gizzard health',
        'Reduce requirement of antibiotics, minerals & vitamins by up to 30%',
        'Detoxify poultry feed & bind mycotoxins in intestinal tract',
        'Reduce ammonia emissions from litter effectively',
      ],
      labAnalysis: [
        { parameter: 'Water Absorptivity', value: '139% (Rapid moisture binding)' },
        { parameter: 'Particle Size', value: 'Micro-ground 0.2 mm - 0.8 mm' },
        { parameter: 'Mycotoxin Binding', value: 'Aflatoxin B1 & Ochratoxin adsorption' },
        { parameter: 'Litter Ammonia Control', value: 'Reduces volatilized NH₃ up to 45%' },
        { parameter: 'Recommended Mixing', value: '3 kg per 1 Metric Ton of complete poultry feed' },
        { parameter: 'Flock Suitability', value: 'Broilers, commercial layers & breeder parents' },
      ],
      packaging: '15 kg multi-layer moisture-proof barrier sack. Shelf life 24 months.',
    },
  ];

  const handleInquire = (productTitle) => {
    if (onSelectProduct) {
      onSelectProduct(productTitle);
    } else {
      const contactElem = document.querySelector('#contact');
      if (contactElem) {
        contactElem.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="sustainability" className="bg-[#f3efe6] py-16 sm:py-24 border-b border-neutral-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-20">
        
        {/* Top Split Overview: Biochar & Sustainability */}
        <div id="biochar" className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6 reveal-on-scroll">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b87e28] block mb-2">
                Sustainability & Carbon Innovation
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight">
                Biochar for a lower-carbon future
              </h2>
            </div>

            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              We began processing biochar in 2026, following ESG considerations and to support carbon sequestration. Current capacity is 1 MT per day, with the intention to increase to 5 tons per day.
            </p>

            {/* Environmental & Agronomic Key Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white p-4 rounded-xl border border-neutral-200/90 space-y-1 hover:border-neutral-300 transition-colors">
                <span className="text-xs font-bold text-[#173824] uppercase tracking-wider block">
                  Capacity Trajectory
                </span>
                <p className="text-sm font-semibold text-neutral-900">
                  1 MT/day &rarr; 5 MT/day
                </p>
                <p className="text-xs text-neutral-500">
                  Active expansion planned to meet circular economy benchmarks
                </p>
              </div>

              <div className="bg-white p-4 rounded-xl border border-neutral-200/90 space-y-1 hover:border-neutral-300 transition-colors">
                <span className="text-xs font-bold text-[#173824] uppercase tracking-wider block">
                  Soil Conditioning
                </span>
                <p className="text-sm font-semibold text-neutral-900">
                  Moisture & Nutrient Retention
                </p>
                <p className="text-xs text-neutral-500">
                  Enhancing local soil structure for drought resilience
                </p>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#173824] hover:text-[#0e2215] transition-colors group"
              >
                <span>Inquire about Biochar bulk supply & ESG metrics</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>

          {/* Right Visual Card with Clear HD Biochar Photo */}
          <div className="lg:col-span-6 reveal-on-scroll delay-150">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] border border-neutral-300/80 shadow-sm bg-neutral-100 group">
              <img
                src="/assets/images/biochar.jpg"
                alt="Biochar for carbon sequestration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 z-10 p-2.5 rounded-lg bg-white/90 backdrop-blur-xs border border-white/60 shadow-xs transition-transform duration-300 group-hover:scale-105">
                <LeafIcon className="w-6 h-6 text-[#173824]" />
              </div>
            </div>
          </div>

        </div>

        {/* Section 2: Biochar Products Showcase */}
        <div className="pt-8 border-t-2 border-[#cf9338]/60">
          <div className="max-w-3xl mb-12 reveal-on-scroll">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b87e28] block mb-2">
              ALOKA CARBONON PRODUCTS
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-black text-neutral-900 leading-tight mb-4">
              Organic Carbon Enhancers
            </h3>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              Three specialized biochar formulations processed by <strong>Alok Agro Industries (Tando Adam)</strong> and marketed by <strong>Aloka Agro Services</strong> to enhance agricultural soil, boost dairy livestock yield, and protect poultry flocks. Click each card to reveal detailed laboratory specifications.
            </p>
          </div>

          {/* 3 Products Grid with Interactive Open/Close Lab Drawers */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {biocharProducts.map((prod, pIdx) => {
              const IconComp = prod.icon;
              const isOpen = !!expandedProducts[prod.id];
              const delays = ['delay-100', 'delay-200', 'delay-300'];
              const delayClass = delays[pIdx % delays.length];

              return (
                <div
                  key={prod.id}
                  className={`bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 reveal-on-scroll ${delayClass}`}
                >
                  {/* Top Image Showcase with Packaging Photo & Top-Right Logo Badge */}
                  <div className="relative h-64 sm:h-72 w-full bg-[#f6f4ee] p-4 flex items-center justify-center border-b border-neutral-200/70 group overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />

                    {/* Top-Right Logo Badge */}
                    <div className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/95 backdrop-blur-xs border border-white/70 shadow-xs transition-transform duration-300 group-hover:scale-105">
                      <IconComp className="w-6 h-6" />
                    </div>

                    {/* Brand Pill Badge */}
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="text-[11px] font-mono font-semibold bg-neutral-900/80 text-white px-2.5 py-1 rounded-md tracking-wider">
                        {prod.badge}
                      </span>
                    </div>
                  </div>

                  {/* Product Content Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Category Label */}
                      <span className="text-[11px] font-bold uppercase tracking-widest text-[#b87e28] block mb-1">
                        {prod.category}
                      </span>

                      {/* Product Name */}
                      <h4 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 mb-4 leading-snug">
                        {prod.title}
                      </h4>

                      {/* Specs Summary Row */}
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {prod.specs.map((s, idx) => (
                          <div key={idx} className="bg-neutral-50 border border-neutral-200/80 rounded-md p-2">
                            <span className="text-[10px] uppercase font-semibold text-neutral-500 block">
                              {s.label}
                            </span>
                            <span className="text-xs font-bold text-neutral-900 block mt-0.5">
                              {s.value}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Benefits Checklist */}
                      <div className="mb-5">
                        <span className="text-xs font-bold uppercase tracking-wider text-neutral-800 block mb-2.5">
                          Verified Benefits:
                        </span>
                        <ul className="space-y-2">
                          {prod.benefits.map((benefit, bIdx) => (
                            <li key={bIdx} className="flex items-start gap-2 text-xs sm:text-sm text-neutral-700 leading-normal">
                              <Check className="w-4 h-4 text-[#173824] shrink-0 mt-0.5" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Smooth Accordion for Lab Analysis & Dosing */}
                      <div className={`accordion-wrapper ${isOpen ? 'is-open' : ''}`}>
                        <div className="accordion-content">
                          <div className="pt-4 pb-3 border-t border-neutral-200/90 space-y-3 bg-[#faf9f5] -mx-6 sm:-mx-7 px-6 sm:px-7 mt-3">
                            <div className="flex items-center gap-1.5 text-xs font-bold text-[#173824] uppercase tracking-wider">
                              <FlaskConical className="w-3.5 h-3.5" />
                              <span>Certified Lab Analysis</span>
                            </div>

                            <div className="grid grid-cols-1 gap-1.5">
                              {prod.labAnalysis.map((item, lIdx) => (
                                <div key={lIdx} className="flex justify-between items-baseline py-1 border-b border-neutral-200/60 text-xs">
                                  <span className="text-neutral-600 font-medium">{item.parameter}</span>
                                  <span className="text-neutral-900 font-bold text-right ml-2">{item.value}</span>
                                </div>
                              ))}
                            </div>

                            <div className="pt-2 text-xs text-neutral-600 space-y-1">
                              <span className="font-bold text-neutral-800 block">Packaging & Storage:</span>
                              <p className="text-[11px] leading-relaxed text-neutral-600">
                                {prod.packaging}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Card Expand/Collapse Toggle Button */}
                      <div className="pt-3 border-t border-neutral-200/80 mb-5">
                        <button
                          type="button"
                          onClick={() => toggleProduct(prod.id)}
                          className="w-full flex items-center justify-between text-xs font-bold text-neutral-700 hover:text-[#173824] py-1 cursor-pointer transition-colors group/pbtn"
                          aria-expanded={isOpen}
                        >
                          <span>
                            {isOpen ? 'Hide Lab Specs & Analysis' : 'View Lab Analysis & Dosing Guide'}
                          </span>
                          <span className={`p-1 rounded-md bg-neutral-100 group-hover/pbtn:bg-neutral-200 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                            <ChevronDown className="w-3.5 h-3.5 text-neutral-600" />
                          </span>
                        </button>
                      </div>

                    </div>

                    {/* Action Button */}
                    <div className="pt-2">
                      <button
                        type="button"
                        onClick={() => handleInquire(prod.title)}
                        className="w-full py-3 px-4 rounded-md bg-[#cf9338] hover:bg-[#b87e28] text-neutral-950 font-bold text-sm transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xs focus:ring-2 focus:ring-[#cf9338]"
                      >
                        <span>Inquire for Supply</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
