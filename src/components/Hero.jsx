import React, { useState } from 'react';
import { ArrowDown, Eye, Image as ImageIcon } from 'lucide-react';

export default function Hero() {
  const [showPhotoTexture, setShowPhotoTexture] = useState(false);

  return (
    <section 
      className="relative text-white py-20 sm:py-28 lg:py-32 overflow-hidden"
      style={{
        backgroundColor: '#173824',
        backgroundImage: 'repeating-linear-gradient(45deg, #173824, #173824 20px, #1a3f29 20px, #1a3f29 22px)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Location Kicker */}
          <div className="inline-block mb-4">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#cf9338]">
              Tando Adam, Sindh
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6">
            Processing, trading and services for Pakistan's agriculture
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg lg:text-xl text-neutral-200/90 leading-relaxed max-w-2xl mb-8 font-normal">
            From cotton ginning and rice milling to dairy feed and biochar, Alok Agro Industries has been growing since 2015.
          </p>

          {/* Action Buttons (Strictly rectangular with rounded-md, no pill shapes) */}
          <div className="flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#divisions"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#cf9338] text-neutral-950 font-semibold text-sm sm:text-base hover:bg-[#b87e28] transition-colors focus:ring-2 focus:ring-[#cf9338] focus:ring-offset-2 focus:ring-offset-[#173824]"
            >
              Our Services
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-white/40 text-white font-medium text-sm sm:text-base hover:bg-white/10 transition-colors focus:ring-2 focus:ring-white/40"
            >
              Contact Us
            </a>
          </div>

          {/* Hero image slot label matching mockup */}
          <div className="pt-4 border-t border-white/15 inline-block">
            <p className="text-xs font-mono text-neutral-300/80 tracking-wide">
              Hero image slot: replace this background with /assets/images/hero.jpg
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
