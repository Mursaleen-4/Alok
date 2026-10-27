import React from 'react';
import { LeafIcon, SoilSproutIcon, DairyCowIcon, PoultryBirdIcon } from './Icons';
import { ArrowUpRight, Check, ArrowRight, Package } from 'lucide-react';

export default function Sustainability({ onSelectProduct }) {
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
        { label: 'pH', value: '7.2' },
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
          <div className="lg:col-span-6 space-y-6">
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
              <div className="bg-white p-4 rounded-xl border border-neutral-200/90 space-y-1">
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

              <div className="bg-white p-4 rounded-xl border border-neutral-200/90 space-y-1">
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
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#173824] hover:text-[#0e2215] transition-colors"
              >
                Inquire about Biochar bulk supply & ESG metrics
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Visual Card with Clear HD Biochar Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] border border-neutral-300/80 shadow-sm bg-neutral-100 group">
              <img
                src="/assets/images/biochar.jpg"
                alt="Biochar for carbon sequestration"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 z-10 p-2.5 rounded-lg bg-white/90 backdrop-blur-xs border border-white/60 shadow-xs">
                <LeafIcon className="w-6 h-6 text-[#173824]" />
              </div>
            </div>
          </div>

        </div>

        {/* Section 2: Biochar Products Showcase */}
        <div className="pt-8 border-t-2 border-[#cf9338]/60">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b87e28] block mb-2">
              ALOKA CARBONON PRODUCTS
            </span>
            <h3 className="font-serif text-2xl sm:text-4xl font-black text-neutral-900 leading-tight mb-4">
              Organic Carbon Enhancers
            </h3>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              Three specialized biochar formulations processed by <strong>Alok Agro Industries (Tando Adam)</strong> and marketed by <strong>Aloka Agro Services</strong> to enhance agricultural soil, boost dairy livestock yield, and protect poultry flocks.
            </p>
          </div>

          {/* 3 Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {biocharProducts.map((prod) => {
              const IconComp = prod.icon;
              return (
                <div
                  key={prod.id}
                  className="bg-white rounded-2xl overflow-hidden border border-neutral-200/90 shadow-sm flex flex-col justify-between transition-all duration-200 hover:shadow-md"
                >
                  {/* Top Image Showcase with Packaging Photo & Top-Right Logo Badge */}
                  <div className="relative h-64 sm:h-72 w-full bg-[#f6f4ee] p-4 flex items-center justify-center border-b border-neutral-200/70 group overflow-hidden">
                    <img
                      src={prod.image}
                      alt={prod.title}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Top-Right Logo Badge matching mockup pattern */}
                    <div className="absolute top-3 right-3 z-10 p-2 rounded-lg bg-white/95 backdrop-blur-xs border border-white/70 shadow-xs">
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
                      <div className="mb-6">
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
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 border-t border-neutral-200">
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
