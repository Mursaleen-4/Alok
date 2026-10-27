import React, { useState } from 'react';
import { TradeArrowsIcon, AgroServicesIcon } from './Icons';
import { Check, ArrowRight } from 'lucide-react';

export default function AlokaEntities({ onSelectCommodity }) {
  const commodities = [
    'Rice',
    'Cotton',
    'Oil cakes',
    'Oil',
    'Dairy feed',
    'Feed ingredients',
    'Related products',
  ];

  const [activeCommodity, setActiveCommodity] = useState(null);

  const handleCommodityClick = (item) => {
    setActiveCommodity(item === activeCommodity ? null : item);
    if (onSelectCommodity) {
      onSelectCommodity(item);
    }
  };

  return (
    <section id="aloka" className="bg-[#f3efe6] py-16 sm:py-24 border-b border-neutral-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20 sm:space-y-28">
        
        {/* Entity 1: ALOKA Commission */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#9e5c24] bg-[#9e5c24]/10 border border-[#9e5c24]/20 px-3 py-1.5 rounded-md mb-3">
                Commodity Trading Division
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight">
                ALOKA Commission
              </h2>
            </div>

            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              A proprietorship engaged in trading agricultural commodities as commission agents.
            </p>

            {/* Commodities Tag Chips */}
            <div>
              <span className="text-xs uppercase tracking-wider font-semibold text-neutral-500 block mb-3">
                Traded Commodities (Click to select for inquiry):
              </span>
              <div className="flex flex-wrap gap-2.5">
                {commodities.map((item) => {
                  const isSelected = activeCommodity === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => handleCommodityClick(item)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${
                        isSelected
                          ? 'bg-[#9e5c24] text-white border-[#9e5c24]'
                          : 'bg-white text-neutral-800 border-neutral-300 hover:border-neutral-400 hover:bg-neutral-50'
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#9e5c24] hover:text-[#7d4619] transition-colors"
              >
                Inquire about commission trading
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Visual Card with Clear HD Photo and Top-Right Logo Badge */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-neutral-100 shadow-sm border border-neutral-300/80 group">
              <img
                src="/assets/images/aloka-commission.jpg"
                alt="Agricultural Commodity Trading"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 z-10 p-2.5 rounded-lg bg-white/90 backdrop-blur-xs border border-white/60 shadow-xs">
                <TradeArrowsIcon className="w-6 h-6 text-[#9e5c24]" />
              </div>
            </div>
          </div>
        </div>

        {/* Entity 2: ALOKA Agro Services */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Visual Card with Clear HD Photo and Top-Right Logo Badge */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-neutral-100 shadow-sm border border-neutral-300/80 group">
              <img
                src="/assets/images/aloka-agro-services.jpg"
                alt="Agricultural Equipment and Services"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-4 right-4 z-10 p-2.5 rounded-lg bg-white/90 backdrop-blur-xs border border-white/60 shadow-xs">
                <AgroServicesIcon className="w-6 h-6 text-[#284e5a]" />
              </div>
            </div>
          </div>

          {/* Right Text Column */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div>
              <span className="inline-block text-xs uppercase tracking-widest font-bold text-[#284e5a] bg-[#284e5a]/10 border border-[#284e5a]/20 px-3 py-1.5 rounded-md mb-3">
                Agricultural Promotion & Industry Services
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight">
                ALOKA Agro Services
              </h2>
            </div>

            <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
              Provides services to the agricultural industry and assists with its promotion.
            </p>

            <div className="bg-white/80 border border-neutral-200/80 rounded-xl p-5 space-y-3">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-neutral-800">
                Primary Industry Services:
              </h4>
              <ul className="text-sm text-neutral-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#284e5a] mt-2 shrink-0" />
                  <span>Agricultural supply chain coordination and bulk logistics across Sindh and regional hubs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#284e5a] mt-2 shrink-0" />
                  <span>Crop grading, quality assessment, and warehouse staging support</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#284e5a] mt-2 shrink-0" />
                  <span>Industry promotion, grower partnerships, and modern sustainable practices enablement</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#284e5a] hover:text-[#1c3842] transition-colors"
              >
                Connect with Agro Services team
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
