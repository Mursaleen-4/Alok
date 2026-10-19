import React from 'react';
import { LeafIcon } from './Icons';
import { ShieldCheck, Trees, Sprout, ArrowUpRight } from 'lucide-react';

export default function Sustainability() {
  return (
    <section id="sustainability" className="bg-[#f3efe6] py-16 sm:py-24 border-b border-neutral-300/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b87e28] block mb-2">
                Sustainability
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

          {/* Right Visual Card with HD Biochar Photo */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-[16/10] bg-[#232724] flex items-center justify-center shadow-sm">
              <img
                src="/assets/images/biochar.jpg"
                alt="Biochar for carbon sequestration"
                className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-80 hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="relative z-10 p-4 rounded-xl bg-black/30 backdrop-blur-[2px] border border-white/20">
                <LeafIcon className="w-16 h-16 text-white" />
              </div>
              <span className="absolute bottom-4 left-5 z-10 text-xs font-mono font-medium text-white/95 tracking-wider uppercase bg-black/40 px-2.5 py-1 rounded-xs backdrop-blur-xs">
                PHOTO: BIOCHAR.JPG
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
