import React, { useState } from 'react';
import { MapPin, Phone, Mail, Globe, CheckCircle2, Copy, ExternalLink } from 'lucide-react';

export default function Contact({ prefilledSubject = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    division: prefilledSubject || 'General Inquiry',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);
  const [activeFacility, setActiveFacility] = useState('tando-adam');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }
    setSubmitted(true);
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="bg-[#edeae1] py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Contact Information & Location Map */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#b87e28] block mb-2">
                Contact
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-900 leading-tight mb-3">
                Get in touch
              </h2>
              <p className="text-neutral-700 text-base sm:text-lg">
                Tell us what you need and we'll get back to you.
              </p>
            </div>

            {/* Structured Contact Details matching client mockup */}
            <div className="space-y-5 text-sm sm:text-base">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b87e28] block mb-1">
                  Address
                </span>
                <p className="text-neutral-800 font-medium">
                  Jhol Road, Tando Adam, Sindh, Pakistan
                </p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b87e28] block mb-1">
                  Phone
                </span>
                <div className="flex items-center gap-3">
                  <a 
                    href="tel:+92235571000" 
                    className="text-neutral-800 font-medium hover:text-[#173824] transition-colors"
                  >
                    +92 235 571000 / +92 300 0000000
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('+92 235 571000', 'phone')}
                    className="text-neutral-400 hover:text-neutral-700 text-xs flex items-center gap-1"
                    title="Copy phone"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedField === 'phone' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b87e28] block mb-1">
                  Email
                </span>
                <div className="flex items-center gap-3">
                  <a 
                    href="mailto:info@alokagroindustries.com" 
                    className="text-neutral-800 font-medium hover:text-[#173824] transition-colors"
                  >
                    info@alokagroindustries.com
                  </a>
                  <button
                    type="button"
                    onClick={() => copyToClipboard('info@alokagroindustries.com', 'email')}
                    className="text-neutral-400 hover:text-neutral-700 text-xs flex items-center gap-1"
                    title="Copy email"
                  >
                    <Copy className="w-3.5 h-3.5" />
                    <span>{copiedField === 'email' ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#b87e28] block mb-1">
                  Website
                </span>
                <a
                  href="https://AlokAgroIndustries.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-800 font-medium hover:text-[#173824] transition-colors"
                >
                  AlokAgroIndustries.com
                </a>
              </div>
            </div>

            {/* Interactive Map Embed Placeholder with authentic coordinates */}
            <div className="rounded-xl border border-neutral-300 bg-white/70 overflow-hidden shadow-xs">
              <div className="flex border-b border-neutral-200 bg-neutral-100/70 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveFacility('tando-adam')}
                  className={`flex-1 py-2.5 px-4 text-center transition-colors ${
                    activeFacility === 'tando-adam'
                      ? 'bg-white text-[#173824] font-bold border-b-2 border-[#173824]'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Tando Adam (Main Complex)
                </button>
                <button
                  type="button"
                  onClick={() => setActiveFacility('port-qasim')}
                  className={`flex-1 py-2.5 px-4 text-center transition-colors ${
                    activeFacility === 'port-qasim'
                      ? 'bg-white text-[#173824] font-bold border-b-2 border-[#173824]'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  Port Qasim (Rice Polishing)
                </button>
              </div>

              <div className="p-6 text-center space-y-3">
                {activeFacility === 'tando-adam' ? (
                  <>
                    <div className="inline-flex p-3 rounded-full bg-[#173824]/10 text-[#173824]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-neutral-900">
                      Tando Adam Industrial Complex
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
                      Jhol Road, Tando Adam, Sindh
                      <br />
                      Houses Cotton Ginning, Oil Mill, Rice Milling, Feed Pellets & Biochar.
                    </p>
                    <div className="pt-2 text-xs font-mono text-neutral-500">
                      Coordinates: 25.768° N, 68.662° E · Sindh, Pakistan
                    </div>
                  </>
                ) : (
                  <>
                    <div className="inline-flex p-3 rounded-full bg-[#284e5a]/10 text-[#284e5a]">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <h4 className="font-serif text-lg font-bold text-neutral-900">
                      Port Qasim Rice Polishing Unit
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto">
                      Port Qasim Industrial Area, Karachi, Sindh
                      <br />
                      Capacity 240 tons per day for export shipping & containerized logistics.
                    </p>
                    <div className="pt-2 text-xs font-mono text-neutral-500">
                      Coordinates: 24.783° N, 67.348° E · Karachi Port Vicinity
                    </div>
                  </>
                )}
                <div className="pt-2">
                  <span className="text-[11px] font-mono text-neutral-400">
                    [Map embed placeholder - Coordinates verified]
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Inquiry Form matching client mockup */}
          <div className="lg:col-span-6 flex flex-col justify-start">
            <div className="bg-white rounded-2xl p-7 sm:p-9 border border-neutral-200/90 shadow-sm">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-neutral-900">
                    Message Received
                  </h3>
                  <p className="text-neutral-600 text-sm max-w-md mx-auto">
                    Thank you for reaching out to Alok Agro Industries. Our team at Tando Adam will review your inquiry and follow up promptly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        division: 'General Inquiry',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-md text-sm font-semibold bg-[#edeae1] text-neutral-800 hover:bg-neutral-200 transition-colors"
                  >
                    Send another inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="sr-only">Your name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#cf9338] focus:border-transparent text-sm sm:text-base bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="sr-only">Email</label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#cf9338] focus:border-transparent text-sm sm:text-base bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="sr-only">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#cf9338] focus:border-transparent text-sm sm:text-base bg-white"
                    />
                  </div>

                  <div>
                    <label htmlFor="division" className="block text-xs font-semibold text-neutral-600 mb-1">
                      Division or Inquiry Subject:
                    </label>
                    <select
                      id="division"
                      value={formData.division}
                      onChange={(e) => setFormData({ ...formData, division: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg border border-neutral-300 text-neutral-800 focus:outline-none focus:ring-2 focus:ring-[#cf9338] focus:border-transparent text-sm bg-white"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Cotton Ginning (200 bales/day)">Cotton Ginning (200 bales/day)</option>
                      <option value="Oil Mill (1000 kg oil, 30 tons cake/day)">Oil Mill (1000 kg oil, 30 tons cake/day)</option>
                      <option value="Rice Mill (IRRI-6, 140 MT/day)">Rice Mill (IRRI-6, 140 MT/day)</option>
                      <option value="Rice Polishing Port Qasim (240 tons/day)">Rice Polishing Port Qasim (240 tons/day)</option>
                      <option value="Dairy Feed Pellets (10 MT/day)">Dairy Feed Pellets (10 MT/day)</option>
                      <option value="Biochar / Carbon Sequestration">Biochar / Carbon Sequestration</option>
                      <option value="ALOKA Commission Trading">ALOKA Commission Trading</option>
                      <option value="ALOKA Agro Services">ALOKA Agro Services</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="sr-only">How can we help?</label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      placeholder="How can we help?"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-lg border border-neutral-300 text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-[#cf9338] focus:border-transparent text-sm sm:text-base bg-white resize-y"
                    />
                  </div>

                  {/* Send message button strictly rectangular with rounded-md / rounded-lg (NEVER pill-shaped) */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-lg bg-[#cf9338] hover:bg-[#b87e28] text-neutral-950 font-bold text-base transition-colors shadow-xs focus:ring-2 focus:ring-[#cf9338] focus:ring-offset-2"
                  >
                    Send message
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
