import React from 'react';

export default function About() {
  const milestones = [
    {
      year: '2015',
      description: 'Cotton ginning factory and oil mill begin operations.',
    },
    {
      year: 'Expansion',
      description: 'Rice mill added, processing IRRI-6 rice.',
    },
    {
      year: 'Port Qasim',
      description: 'Rice polishing unit set up at Port Qasim Industrial Area, 240 tons per day.',
    },
    {
      year: '2026',
      description: 'Biochar production starts in line with ESG considerations.',
    },
  ];

  return (
    <section id="about" className="bg-[#f3efe6] py-16 sm:py-24 border-b border-neutral-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-[#b87e28] block mb-3">
            About Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight mb-6">
            Built on cotton, grown into a full agro group
          </h2>
          <p className="text-neutral-700 text-base sm:text-lg leading-relaxed">
            Alok Agro Industries started in 2015 as a cotton ginning factory and oil mill. We later added a rice mill processing IRRI-6 rice, and a rice polishing unit at Port Qasim Industrial Area. In 2026 we began producing biochar for carbon sequestration.
          </p>
        </div>

        {/* Milestone Timeline Grid */}
        <div className="pt-8 border-t-2 border-[#cf9338]/60 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {milestones.map((item, index) => (
            <div key={index} className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#173824]">
                {item.year}
              </h3>
              <p className="text-sm sm:text-base text-neutral-700 leading-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
