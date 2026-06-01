"use client";

import { useState } from "react";
import Link from "next/link";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+12607869284";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [areasOpen, setAreasOpen] = useState(false);
  const [guidesOpen, setGuidesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="font-black text-slate-900 leading-none text-xl uppercase tracking-tighter">
            Fort Wayne
          </span>
          <span className="font-bold text-red-600 leading-none text-sm uppercase tracking-[0.2em]">
            HVAC REPAIR
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700">
          <Link href="/" className="hover:text-red-600 transition-colors">Home</Link>

          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-red-600 transition-colors"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Services
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <Link href="/ac-repair-fort-wayne" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">AC Repair</Link>
                <Link href="/furnace-repair-fort-wayne" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Furnace Repair</Link>
                <Link href="/hvac-maintenance-fort-wayne" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">HVAC Maintenance</Link>
                <Link href="/emergency-hvac-fort-wayne" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Emergency HVAC</Link>
                <Link href="/ac-installation-fort-wayne" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">AC Installation</Link>
                <Link href="/indoor-air-quality-fort-wayne" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Indoor Air Quality</Link>
                <Link href="/heat-pump-installation-fort-wayne" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Heat Pump Installation</Link>
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-red-600 transition-colors"
              onMouseEnter={() => setGuidesOpen(true)}
              onMouseLeave={() => setGuidesOpen(false)}
            >
              Guides
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </button>
            {guidesOpen && (
              <div
                className="absolute top-full left-0 w-72 bg-white border border-gray-100 rounded-lg shadow-lg py-2"
                onMouseEnter={() => setGuidesOpen(true)}
                onMouseLeave={() => setGuidesOpen(false)}
              >
                <Link href="/fort-wayne-hvac-guide" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Fort Wayne HVAC Guide</Link>
                <Link href="/hvac-cost-guide-fort-wayne" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">HVAC Cost Guide 2026</Link>
                <Link href="/heat-pumps-fort-wayne" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Heat Pumps in Fort Wayne</Link>
                <Link href="/allen-county-energy-savings" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Energy Savings & Rebates</Link>
              </div>
            )}
          </div>

          <div className="relative group">
            <button
              className="flex items-center gap-1 hover:text-red-600 transition-colors"
              onMouseEnter={() => setAreasOpen(true)}
              onMouseLeave={() => setAreasOpen(false)}
            >
              Areas We Serve
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
            </button>
            {areasOpen && (
              <div
                className="absolute top-full right-0 w-56 bg-white border border-gray-100 rounded-lg shadow-lg py-2 max-h-80 overflow-y-auto"
                onMouseEnter={() => setAreasOpen(true)}
                onMouseLeave={() => setAreasOpen(false)}
              >
                <Link href="/aboite" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Aboite</Link>
                <Link href="/waynedale" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Waynedale</Link>
                <Link href="/pine-valley" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Pine Valley</Link>
                <Link href="/forest-park" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Forest Park</Link>
                <Link href="/arlington-park" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Arlington Park</Link>
                <Link href="/new-haven" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">New Haven</Link>
                <Link href="/huntertown" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Huntertown</Link>
                <Link href="/leo-cedarville" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Leo-Cedarville</Link>
                <Link href="/grabill" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Grabill</Link>
                <Link href="/hoagland" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Hoagland</Link>
                <Link href="/monroeville" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Monroeville</Link>
                <Link href="/woodburn" className="block px-4 py-2 hover:bg-gray-50 hover:text-red-600">Woodburn</Link>
              </div>
            )}
          </div>

          <a
            href={PHONE_HREF}
            className="bg-slate-900 text-white px-5 py-2.5 rounded-md font-black uppercase tracking-wider hover:bg-red-600 transition-all shadow-lg text-xs"
          >
            {PHONE}
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6 text-slate-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3">
          <Link href="/" className="block font-semibold text-slate-700" onClick={() => setMobileOpen(false)}>Home</Link>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Services</p>
          <Link href="/ac-repair-fort-wayne" className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>AC Repair</Link>
          <Link href="/furnace-repair-fort-wayne" className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>Furnace Repair</Link>
          <Link href="/hvac-maintenance-fort-wayne" className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>HVAC Maintenance</Link>
          <Link href="/emergency-hvac-fort-wayne" className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>Emergency HVAC</Link>
          <Link href="/ac-installation-fort-wayne" className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>AC Installation</Link>
          <Link href="/indoor-air-quality-fort-wayne" className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>Indoor Air Quality</Link>
          <Link href="/heat-pump-installation-fort-wayne" className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>Heat Pump Installation</Link>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Guides</p>
          <Link href="/fort-wayne-hvac-guide" className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>Fort Wayne HVAC Guide</Link>
          <Link href="/hvac-cost-guide-fort-wayne" className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>HVAC Cost Guide 2026</Link>
          <Link href="/heat-pumps-fort-wayne" className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>Heat Pumps in Fort Wayne</Link>
          <Link href="/allen-county-energy-savings" className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>Energy Savings & Rebates</Link>
          <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mt-2">Areas We Serve</p>
          {["Aboite","Waynedale","Pine Valley","Forest Park","Arlington Park","New Haven","Huntertown","Leo-Cedarville","Grabill","Hoagland","Monroeville","Woodburn"].map((area) => (
            <Link key={area} href={`/${area.toLowerCase().replace(/\s+/g, "-")}`} className="block text-sm text-slate-600" onClick={() => setMobileOpen(false)}>
              {area}
            </Link>
          ))}
          <a href={PHONE_HREF} className="block bg-red-600 text-white text-center py-3 rounded-md font-bold mt-4">
            Call {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
