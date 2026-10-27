import React from 'react';
import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section 
      className="relative text-white py-20 sm:py-28 lg:py-32 overflow-hidden bg-[#173824]"
    >
      {/* Background HD Image with authentic forest green overlay (no gradients) */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 ease-out scale-100 hover:scale-102"
        style={{ backgroundImage: "url('/assets/images/hero.jpg')" }}
      />
      {/* Solid deep forest green color wash for high contrast and color scheme match */}
      <div className="absolute inset-0 bg-[#173824]/88 backdrop-brightness-95" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Location Kicker with opening animation */}
          <div className="inline-block mb-4 animate-hero-fade">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#cf9338] bg-black/20 border border-white/10 px-3 py-1 rounded-md">
              Tando Adam, Sindh
            </span>
          </div>

          {/* Main Headline with staggered opening animation */}
          <h1 
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-6 animate-hero-fade"
            style={{ animationDelay: '150ms' }}
          >
            Processing, trading and services for Pakistan's agriculture
          </h1>

          {/* Subtitle with staggered opening animation */}
          <p 
            className="text-base sm:text-lg lg:text-xl text-neutral-200/95 leading-relaxed max-w-2xl mb-8 font-normal animate-hero-fade"
            style={{ animationDelay: '300ms' }}
          >
            From cotton ginning and rice milling to dairy feed and biochar, Alok Agro Industries has been growing since 2011.
          </p>

          {/* Action Buttons (Strictly rectangular with rounded-md, no pill shapes) */}
          <div 
            className="flex flex-wrap items-center gap-4 mb-10 animate-hero-fade"
            style={{ animationDelay: '450ms' }}
          >
            <a
              href="#divisions"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-[#cf9338] text-neutral-950 font-semibold text-sm sm:text-base hover:bg-[#b87e28] hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-[#cf9338] focus:ring-offset-2 focus:ring-offset-[#173824] shadow-sm"
            >
              Our Divisions & Specs
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-md border border-white/40 text-white font-medium text-sm sm:text-base hover:bg-white/10 hover:border-white/70 hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-white/40"
            >
              Contact Us
            </a>
          </div>

          {/* Subtle scroll cue indicator */}
          <div 
            className="pt-6 border-t border-white/15 inline-flex items-center gap-2 text-xs text-neutral-300 font-medium tracking-wide animate-hero-fade"
            style={{ animationDelay: '600ms' }}
          >
            <a href="#about" className="inline-flex items-center gap-2 hover:text-white transition-colors group">
              <span>Scroll to explore group overview</span>
              <span className="p-1 rounded-full bg-white/10 group-hover:bg-white/20 transition-colors animate-bounce">
                <ArrowDown className="w-3.5 h-3.5 text-[#cf9338]" />
              </span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
