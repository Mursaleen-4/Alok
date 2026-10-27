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
          
          {/* Left Column: Official Logo, Branding, Location, Copyright */}
          <div className="md:col-span-8 space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="bg-white p-2 rounded-xl border border-white/20 shadow-xs inline-flex items-center justify-center shrink-0">
                <img
                  src="/assets/images/logo.jpeg"
                  alt="Alok Agro Industries Logo"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Alok Agro Industries
                </h3>
                <p className="text-sm text-neutral-300 mt-0.5 font-normal">
                  Jhol Road, Tando Adam, Sindh
                </p>
                <p className="text-xs text-[#cf9338] font-medium tracking-wide mt-1">
                  Processing, Trading & Agricultural Services
                </p>
              </div>
            </div>

            <div className="pt-2">
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
