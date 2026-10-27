import React from 'react';

// Cotton boll icon matching the mockup
export const CottonIcon = ({ className = "w-10 h-10 text-white" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="24" cy="18" r="6" />
    <circle cx="17" cy="25" r="5.5" />
    <circle cx="31" cy="25" r="5.5" />
    <circle cx="24" cy="28" r="5" />
    <path d="M24 33v9" />
    <path d="M24 37c-3 1.5-6 1-7-1" />
    <path d="M24 37c3 1.5 6 1 7-1" />
  </svg>
);

// Oil drop icon
export const OilDropIcon = ({ className = "w-10 h-10 text-white" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 8c-7 9.5-12 17-12 23a12 12 0 0 0 24 0c0-6-5-13.5-12-23z" />
    <path d="M20 28a6 6 0 0 0 5 5" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);

// Rice stalk icon
export const RiceStalkIcon = ({ className = "w-10 h-10 text-white" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M24 42V8" />
    <path d="M24 12c-4-4-9-2-9 3 0 4 5 5 9 1" />
    <path d="M24 14c4-4 9-2 9 3 0 4-5 5-9 1" />
    <path d="M24 20c-4-4-9-2-9 3 0 4 5 5 9 1" />
    <path d="M24 22c4-4 9-2 9 3 0 4-5 5-9 1" />
    <path d="M24 28c-4-4-9-2-9 3 0 4 5 5 9 1" />
    <path d="M24 30c4-4 9-2 9 3 0 4-5 5-9 1" />
  </svg>
);

// Rice polishing sparkle icon
export const PolishingIcon = ({ className = "w-10 h-10 text-white" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 9l2.5 6.5L30 18l-6.5 2.5L21 27l-2.5-6.5L12 18l6.5-2.5L21 9z" />
    <path d="M33 28l1.5 3.5L38 33l-3.5 1.5L33 38l-1.5-3.5L28 33l3.5-1.5L33 28z" strokeWidth="2" />
    <circle cx="15" cy="34" r="2.5" fill="currentColor" stroke="none" />
  </svg>
);

// Feed mill pellets icon
export const FeedPelletsIcon = ({ className = "w-10 h-10 text-white" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="24" cy="17" rx="5" ry="4" transform="rotate(-15 24 17)" />
    <ellipse cx="17" cy="30" rx="5" ry="4" transform="rotate(25 17 30)" />
    <ellipse cx="32" cy="28" rx="5" ry="4" transform="rotate(-30 32 28)" />
  </svg>
);

// Biochar leaf icon
export const LeafIcon = ({ className = "w-10 h-10 text-white" }) => (
  <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 36c4-14 14-24 26-26-2 16-10 26-26 26z" />
    <path d="M12 36c7-7 14-13 22-17" />
  </svg>
);

// ALOKA Commission trade exchange arrows icon
export const TradeArrowsIcon = ({ className = "w-12 h-12 text-white" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M46 22H18" />
    <path d="M38 14l8 8-8 8" />
    <path d="M18 42h28" />
    <path d="M26 50l-8-8 8-8" />
  </svg>
);

// ALOKA Agro Services factory icon
export const AgroServicesIcon = ({ className = "w-12 h-12 text-white" }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 48V28l12 6V20l14 8v-8l10 6v22H14z" />
    <path d="M22 48v-8h6v8" />
    <path d="M36 48v-8h6v8" />
    <line x1="10" y1="48" x2="54" y2="48" />
  </svg>
);

// Soil Sprout Icon for Organic Carbon Enhancer for Soil
export const SoilSproutIcon = ({ className = "w-6 h-6 text-[#173824]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M7 20h10" />
    <path d="M12 20v-8" />
    <path d="M12 12c-3-3-3-7 0-9 3 2 3 6 0 9z" />
    <path d="M12 16c2-1 4-1 6 0" />
    <path d="M12 14c-2-1-4-1-6 0" />
  </svg>
);

// Dairy Cow / Bovine Icon for Organic Carbon Enhancer for Dairy
export const DairyCowIcon = ({ className = "w-6 h-6 text-[#b28731]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 14c0 3 2 5 5 5h6c3 0 5-2 5-5V9l-2-2-1 1-3-1-3 1-1-1-2 2v5z" />
    <path d="M8 19v2" />
    <path d="M16 19v2" />
    <circle cx="9" cy="13" r="1" fill="currentColor" />
    <circle cx="15" cy="13" r="1" fill="currentColor" />
  </svg>
);

// Poultry Bird Icon for Organic Carbon Enhancer for Poultry
export const PoultryBirdIcon = ({ className = "w-6 h-6 text-[#284e5a]" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18c2-3 5-5 8-5 2 0 4 1 5 3" />
    <path d="M16 8a4 4 0 0 0-4-4c-2 0-3 1-4 3l-4 3 4 2c1 3 3 5 6 5a7 7 0 0 0 5-2" />
    <path d="M18 10l3-1-2 3" />
    <circle cx="13" cy="7" r="1" fill="currentColor" />
    <path d="M10 21v-3" />
    <path d="M14 21v-3" />
  </svg>
);
