"use client";

import { useState } from "react";
import PageCTA from "@/components/PageCTA";
import {
  type SystemAge,
  type RepairHistory,
  type EnergyTrend,
  ageLabels,
  repairLabels,
  energyLabels,
  getRepairReplaceVerdict,
  verdictConfig,
} from "@/app/lib/hvac-data";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+12607869284";

const steps = [
  { id: 1, label: "System Age" },
  { id: 2, label: "Repairs" },
  { id: 3, label: "Energy Bills" },
];

export default function DecisionTool() {
  const [step, setStep] = useState(1);
  const [age, setAge] = useState<SystemAge | null>(null);
  const [repairs, setRepairs] = useState<RepairHistory | null>(null);
  const [energy, setEnergy] = useState<EnergyTrend | null>(null);

  function reset() {
    setStep(1);
    setAge(null);
    setRepairs(null);
    setEnergy(null);
  }

  const result =
    age && repairs && energy
      ? getRepairReplaceVerdict(age, repairs, energy)
      : null;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">
            Honest Recommendation
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
            Repair or Replace? <br />
            <span className="text-red-600 italic">Decision Tool</span>
          </h1>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            The “$5,000 rule” doesn't tell the whole story. Answer 3 quick
            questions and get a recommendation tailored to Fort Wayne's climate,
            energy costs, and your system's actual condition.
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

          {/* Step 1: Age */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-black text-slate-900 text-center mb-8 tracking-tight uppercase">
                How old is your HVAC system?
              </h2>
              <div className="grid gap-4">
                {(Object.keys(ageLabels) as SystemAge[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setAge(key);
                      setStep(2);
                    }}
                    className="text-left bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <div className="text-lg font-bold text-slate-900">
                      {ageLabels[key]}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Repairs */}
          {step === 2 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-black text-slate-900 text-center mb-8 tracking-tight uppercase">
                What's the repair history?
              </h2>
              <div className="grid gap-4">
                {(Object.keys(repairLabels) as RepairHistory[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setRepairs(key);
                      setStep(3);
                    }}
                    className="text-left bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <div className="text-lg font-bold text-slate-900">
                      {repairLabels[key]}
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setStep(1);
                  setAge(null);
                }}
                className="mt-6 text-sm text-slate-500 hover:text-red-600 font-semibold underline"
              >
                ← Back
              </button>
            </div>
          )}

          {/* Step 3: Energy */}
          {step === 3 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-black text-slate-900 text-center mb-8 tracking-tight uppercase">
                How have your energy bills changed?
              </h2>
              <div className="grid gap-4">
                {(Object.keys(energyLabels) as EnergyTrend[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setEnergy(key);
                      setStep(4);
                    }}
                    className="text-left bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <div className="text-lg font-bold text-slate-900">
                      {energyLabels[key]}
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setStep(2);
                  setRepairs(null);
                }}
                className="mt-6 text-sm text-slate-500 hover:text-red-600 font-semibold underline"
              >
                ← Back
              </button>
            </div>
          )}

          {/* Results */}
          {step === 4 && result && (
            <div className="animate-fadeIn" aria-live="polite">
              <div
                className={`rounded-2xl border p-8 text-center ${verdictConfig[result.verdict].color} ${verdictConfig[result.verdict].border}`}
              >
                <div
                  className={`inline-block text-white text-sm font-black uppercase tracking-widest px-4 py-1 rounded-full mb-4 ${verdictConfig[result.verdict].badge}`}
                >
                  {result.headline}
                </div>
                <h2 className="text-3xl font-black text-slate-900 mb-4">
                  {result.headline}
                </h2>
                <p className="text-slate-700 leading-relaxed max-w-lg mx-auto">
                  {result.explanation}
                </p>
                {result.savingsNote && (
                  <div className="mt-6 bg-white/60 rounded-xl p-5 text-sm text-slate-700">
                    {result.savingsNote}
                  </div>
                )}
              </div>

              <div className="mt-8 bg-slate-50 rounded-2xl border border-gray-200 p-6 text-center">
                <p className="text-xs text-slate-500 mb-4 uppercase tracking-widest font-bold">
                  This is a general guide. A technician inspecting your specific
                  unit may recommend differently.
                </p>
                <a
                  href={PHONE_HREF}
                  className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-10 py-4 rounded-full shadow-xl hover:bg-slate-900 transition-all"
                >
                  {result.ctaTitle} — Call {PHONE}
                </a>
                <p className="mt-3 text-sm text-slate-500">
                  {result.ctaSubtitle}
                </p>
                {result.verdict === "repair" && (
                  <div className="mt-4 text-sm text-slate-600">
                    Want to avoid the next breakdown?{" "}
                    <a
                      href="/hvac-maintenance-fort-wayne"
                      className="text-red-600 font-bold underline"
                    >
                      See our $129 tune-up →
                    </a>
                  </div>
                )}
                {result.verdict === "replace" && (
                  <div className="mt-4 text-sm text-slate-600">
                    Curious about costs?{" "}
                    <a
                      href="/ac-furnace-cost-estimator-fort-wayne"
                      className="text-red-600 font-bold underline"
                    >
                      Try the Cost Estimator →
                    </a>
                  </div>
                )}
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
        title="Still Not Sure?"
        subtitle="Every situation is different. Call us for an honest, no-pressure inspection. We'll never recommend replacement unless it truly makes sense for your home."
      />
    </main>
  );
}
