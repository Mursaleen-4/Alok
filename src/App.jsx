import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import CapacityBanner from './components/CapacityBanner';
import Divisions from './components/Divisions';
import AlokaEntities from './components/AlokaEntities';
import Sustainability from './components/Sustainability';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [selectedCommodity, setSelectedCommodity] = useState('');

  const handleSelectCommodity = (commodity) => {
    setSelectedCommodity(`ALOKA Commission - ${commodity}`);
    // Smooth scroll to contact
    const contactElem = document.querySelector('#contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#f3efe6] flex flex-col selection:bg-[#cf9338] selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Us & Milestones Timeline */}
        <About />

        {/* 5 Key Operational Capacities Bar */}
        <CapacityBanner />

        {/* Production Divisions (6 Units) */}
        <Divisions />

        {/* Sister Entities: ALOKA Commission & ALOKA Agro Services */}
        <AlokaEntities onSelectCommodity={handleSelectCommodity} />

        {/* Sustainability & Biochar Carbon Sequestration */}
        <Sustainability />

        {/* Contact Information & Inquiry Form */}
        <Contact prefilledSubject={selectedCommodity} />
      </main>

      {/* Deep Forest Green Footer */}
      <Footer />
    </div>
  );
}
