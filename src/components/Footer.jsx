import React from 'react';

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#0e2215] text-white py-14 sm:py-16 border-t border-[#1a3826]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start justify-between">
          
          {/* Left Column: Branding, Location, Entity Badges, Copyright */}
          <div className="md:col-span-8 space-y-5">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-black text-white tracking-tight">
                Alok Agro Industries
              </h3>
              <p className="text-sm text-neutral-300 mt-1 font-normal">
                Jhol Road, Tando Adam, Sindh
              </p>
            </div>

            {/* 3 Entity Logo Badges matching mockup */}
            <div className="flex flex-wrap gap-2.5 pt-1">
              <span className="logo-badge-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-[#cf9338]" />
                <span>LOGO · ALOK AGRO</span>
              </span>
              <span className="logo-badge-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-[#9e5c24]" />
                <span>LOGO · ALOKA COMMISSION</span>
              </span>
              <span className="logo-badge-dark">
                <span className="w-1.5 h-1.5 rounded-full bg-[#284e5a]" />
                <span>LOGO · ALOKA AGRO SERVICES</span>
              </span>
            </div>

            <div className="pt-4">
              <p className="text-xs text-neutral-400">
                &copy; 2026 Alok Agro Industries. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Column: Navigation Links */}
          <div className="md:col-span-4 flex md:justify-end">
            <nav className="flex flex-col space-y-2.5 text-right sm:text-right">
              <button
                type="button"
                onClick={() => scrollTo('#about')}
                className="text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer text-left md:text-right"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => scrollTo('#divisions')}
                className="text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer text-left md:text-right"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => scrollTo('#aloka')}
                className="text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer text-left md:text-right"
              >
                ALOKA
              </button>
              <button
                type="button"
                onClick={() => scrollTo('#sustainability')}
                className="text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer text-left md:text-right"
              >
                Sustainability
              </button>
              <button
                type="button"
                onClick={() => scrollTo('#contact')}
                className="text-sm text-neutral-300 hover:text-white transition-colors cursor-pointer text-left md:text-right"
              >
                Contact
              </button>
            </nav>
          </div>

        </div>
      </div>
    </footer>
  );
}
