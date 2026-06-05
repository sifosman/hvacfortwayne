"use client";

import { useState } from "react";
import PageCTA from "@/components/PageCTA";
import {
  type HomeSize,
  type SystemType,
  type EfficiencyTier,
  homeSizeLabels,
  systemTypeLabels,
  efficiencyLabels,
  replacementCosts,
  costDrivers,
} from "@/app/lib/hvac-data";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+12607869284";

const steps = [
  { id: 1, label: "Home Size" },
  { id: 2, label: "System" },
  { id: 3, label: "Efficiency" },
];

function formatCurrency(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export default function Estimator() {
  const [step, setStep] = useState(1);
  const [homeSize, setHomeSize] = useState<HomeSize | null>(null);
  const [systemType, setSystemType] = useState<SystemType | null>(null);
  const [efficiency, setEfficiency] = useState<EfficiencyTier | null>(null);

  function reset() {
    setStep(1);
    setHomeSize(null);
    setSystemType(null);
    setEfficiency(null);
  }

  const estimate =
    homeSize && systemType && efficiency
      ? replacementCosts[homeSize][systemType][efficiency]
      : null;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">
            2026 Allen County Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
            HVAC Replacement <br />
            <span className="text-red-600 italic">Cost Estimator</span>
          </h1>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            Get an instant price range for AC or furnace replacement in Fort Wayne.
            Based on actual Allen County jobs — not vague national averages.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Stepper */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {steps.map((s) => (
              <div key={s.id} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-colors ${
                    step >= s.id
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s.id}
                </div>
                <span
                  className={`hidden sm:block text-xs font-bold uppercase tracking-wider ${
                    step >= s.id ? "text-slate-900" : "text-gray-400"
                  }`}
                >
                  {s.label}
                </span>
                {s.id < steps.length && (
                  <div
                    className={`w-8 h-px ${
                      step > s.id ? "bg-red-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Home Size */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-black text-slate-900 text-center mb-8 tracking-tight uppercase">
                How big is your home?
              </h2>
              <div className="grid gap-4">
                {(Object.keys(homeSizeLabels) as HomeSize[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setHomeSize(key);
                      setStep(2);
                    }}
                    className="text-left bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <div className="text-lg font-bold text-slate-900">
                      {homeSizeLabels[key]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: System Type */}
          {step === 2 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-black text-slate-900 text-center mb-8 tracking-tight uppercase">
                What do you need replaced?
              </h2>
              <div className="grid gap-4">
                {(Object.keys(systemTypeLabels) as SystemType[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSystemType(key);
                      setStep(3);
                    }}
                    className="text-left bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <div className="text-lg font-bold text-slate-900">
                      {systemTypeLabels[key]}
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setStep(1);
                  setHomeSize(null);
                }}
                className="mt-6 text-sm text-slate-500 hover:text-red-600 font-semibold underline"
              >
                ← Back to Home Size
              </button>
            </div>
          )}

          {/* Step 3: Efficiency */}
          {step === 3 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-black text-slate-900 text-center mb-8 tracking-tight uppercase">
                Choose your efficiency tier
              </h2>
              <div className="grid gap-4">
                {(Object.keys(efficiencyLabels) as EfficiencyTier[]).map(
                  (key) => (
                    <button
                      key={key}
                      onClick={() => {
                        setEfficiency(key);
                        setStep(4);
                      }}
                      className="text-left bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                    >
                      <div className="text-lg font-bold text-slate-900">
                        {efficiencyLabels[key]}
                      </div>
                    </button>
                  )
                )}
              </div>
              <button
                onClick={() => {
                  setStep(2);
                  setSystemType(null);
                }}
                className="mt-6 text-sm text-slate-500 hover:text-red-600 font-semibold underline"
              >
                ← Back to System Type
              </button>
            </div>
          )}

          {/* Results */}
          {step === 4 && estimate && (
            <div className="animate-fadeIn" aria-live="polite">
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-8 text-center">
                <div className="text-sm font-black uppercase tracking-widest text-slate-500 mb-3">
                  Estimated Range for Fort Wayne
                </div>
                <div className="text-4xl md:text-5xl font-black text-slate-900">
                  {formatCurrency(estimate.min)} –{" "}
                  {formatCurrency(estimate.max)}
                </div>
                <div className="mt-3 text-lg text-slate-600 font-medium">
                  {estimate.label} — {homeSizeLabels[homeSize!]}
                </div>
                <p className="mt-6 text-sm text-slate-500 max-w-lg mx-auto leading-relaxed">
                  This is a market-range estimate based on actual Allen County
                  HVAC replacement jobs. Your final quote depends on ductwork
                  condition, electrical panel capacity, and refrigerant line
                  requirements.
                </p>
              </div>

              {/* Cost Drivers */}
              <div className="mt-8 grid gap-4">
                <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight">
                  What can push this price up or down?
                </h3>
                {costDrivers.map((driver) => (
                  <div
                    key={driver.title}
                    className="bg-slate-50 rounded-xl border-l-4 border-red-600 p-5"
                  >
                    <h4 className="font-bold text-slate-900 mb-1">
                      {driver.title}
                    </h4>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {driver.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-10 text-center">
                <a
                  href={PHONE_HREF}
                  className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-10 py-5 rounded-full shadow-xl hover:bg-slate-900 transition-all text-lg"
                >
                  Get an Exact Written Quote — Call {PHONE}
                </a>
                <p className="mt-4 text-sm text-slate-500">
                  Free in-home estimate. No pressure, no upsell.
                </p>
              </div>

              <button
                onClick={reset}
                className="mt-8 mx-auto block text-sm text-slate-500 hover:text-red-600 font-semibold underline"
              >
                ← Start Over
              </button>
            </div>
          )}
        </div>
      </section>

      <PageCTA
        title="Prefer to Talk to a Human?"
        subtitle="Our dispatch team is available 24/7. We'll answer your questions and schedule a free in-home estimate at your convenience."
      />
    </main>
  );
}
