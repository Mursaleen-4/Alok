import React from 'react';

export default function About() {
  const milestones = [
    {
      year: '2011',
      title: 'Founding Units',
      description: 'Cotton ginning factory and oil mill begin operations in Tando Adam.',
      stat: '200 bales & 1,000 kg/day',
    },
    {
      year: 'Expansion',
      title: 'Grain Processing',
      description: 'Rice mill added at Tando Adam complex, processing premium IRRI-6 rice.',
      stat: '140 MT / day capacity',
    },
    {
      year: 'Port Qasim',
      title: 'Export Logistics',
      description: 'High-speed rice polishing unit commissioned at Port Qasim Industrial Area.',
      stat: '240 tons / day export line',
    },
    {
      year: '2026',
      title: 'ESG & Biochar',
      description: 'Biochar production starts in line with ESG circularity and carbon removal.',
      stat: '1 MT/day scaling to 5 MT/day',
    },
  ];

  return (
    <section id="about" className="bg-[#f3efe6] py-16 sm:py-24 border-b border-neutral-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <div className="max-w-3xl mb-14 reveal-on-scroll">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b87e28] block mb-3">
            About Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight mb-6">
            Built on cotton, grown into a full agro group
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            Alok Agro Industries started in 2011 as a cotton ginning factory and oil mill. We later added a rice mill processing IRRI-6 rice, and a rice polishing unit at Port Qasim Industrial Area. In 2026 we began producing biochar for carbon sequestration.
          </p>
        </div>

        {/* Milestone Timeline Grid with Staggered Scroll-Reveal and Interactive Hover Cards */}
        <div className="pt-8 border-t-2 border-[#cf9338]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {milestones.map((item, index) => {
            const delays = ['delay-100', 'delay-200', 'delay-300', 'delay-400'];
            return (
              <div 
                key={index} 
                className={`p-5 rounded-xl border border-neutral-200/50 hover:border-neutral-300 hover:bg-white hover:shadow-sm hover:-translate-y-1 transition-all duration-300 cursor-default group reveal-on-scroll ${delays[index]}`}
              >
                {/* Year Badge & Active Accent indicator */}
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173824] group-hover:text-[#cf9338] transition-colors">
                    {item.year}
                  </h3>
                  <div className="w-2 h-2 rounded-full bg-neutral-300 group-hover:bg-[#cf9338] transition-colors" />
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-1.5">
                  {item.title}
                </div>

                <p className="text-sm text-neutral-700 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="pt-2 border-t border-neutral-200/60">
                  <span className="text-[11px] font-mono font-semibold text-[#173824] bg-[#173824]/8 px-2 py-1 rounded">
                    {item.stat}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
