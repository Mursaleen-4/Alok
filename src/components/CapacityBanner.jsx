import React from 'react';

export default function CapacityBanner() {
  const capacities = [
    {
      stat: '200',
      unit: 'bales per day',
      division: 'Cotton ginning',
      delay: 'delay-100',
    },
    {
      stat: '140',
      unit: 'MT per day',
      division: 'Rice mill',
      delay: 'delay-150',
    },
    {
      stat: '240',
      unit: 'tons per day',
      division: 'Rice polishing',
      delay: 'delay-200',
    },
    {
      stat: '10',
      unit: 'MT per day',
      division: 'Dairy feed pellets',
      delay: 'delay-250',
    },
    {
      stat: '1',
      unit: 'MT per day',
      division: 'Biochar',
      delay: 'delay-300',
    },
  ];

  return (
    <section className="bg-[#173824] py-14 border-y border-[#234d34]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-10 text-center">
          {capacities.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center justify-center p-3 rounded-lg hover:bg-white/5 transition-all duration-300 cursor-default group reveal-on-scroll ${item.delay}`}
            >
              <span className="font-serif text-4xl sm:text-5xl font-black text-[#cf9338] mb-1 group-hover:scale-105 transition-transform duration-300">
                {item.stat}
              </span>
              <span className="text-sm font-semibold text-neutral-200 mb-0.5">
                {item.unit}
              </span>
              <span className="text-xs text-neutral-400 font-medium">
                {item.division}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
