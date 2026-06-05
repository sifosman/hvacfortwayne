"use client";

import { useState } from "react";
import PageCTA from "@/components/PageCTA";
import {
  symptomDatabase,
  severityConfig,
  type RepairCost,
} from "@/app/lib/hvac-data";

const PHONE = "(260) 786-9284";
const PHONE_HREF = "tel:+12607869284";

type SeasonKey = "summer" | "winter" | "anytime";

const seasonOptions: { key: SeasonKey; label: string; emoji: string }[] = [
  { key: "summer", label: "Summer — AC Issue", emoji: "☀️" },
  { key: "winter", label: "Winter — Heating Issue", emoji: "❄️" },
  { key: "anytime", label: "Anytime — General Problem", emoji: "🔧" },
];

function formatCurrency(n: number) {
  if (n === 0) return "Free / DIY";
  return `$${n.toLocaleString()}`;
}

export default function SymptomChecker() {
  const [step, setStep] = useState(1);
  const [season, setSeason] = useState<SeasonKey | null>(null);
  const [result, setResult] = useState<RepairCost | null>(null);

  function reset() {
    setStep(1);
    setSeason(null);
    setResult(null);
  }

  const symptoms = season ? symptomDatabase[season] : [];
  const severity = result ? severityConfig[result.severity] : null;

  return (
    <main className="bg-white min-h-screen">
      {/* Hero */}
      <section className="bg-slate-50 py-16 md:py-24 border-b border-gray-200">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <span className="text-red-600 font-black uppercase tracking-[0.3em] text-[10px]">
            Quick Diagnosis
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-tighter uppercase leading-tight">
            HVAC Symptom <br />
            <span className="text-red-600 italic">Checker</span>
          </h1>
          <p className="text-lg text-slate-600 mt-6 max-w-2xl mx-auto leading-relaxed">
            What's happening with your system? Pick your season and symptom to see
            the most likely cause, typical Fort Wayne repair cost, and whether
            it's safe to wait or if you need same-day service.
          </p>
        </div>
      </section>

      {/* Tool */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Stepper */}
          <div className="flex items-center justify-center gap-4 mb-12">
            {[1, 2].map((s) => (
              <div key={s} className="flex items-center gap-4">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-black transition-colors ${
                    step >= s
                      ? "bg-red-600 text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s}
                </div>
                <span
                  className={`hidden sm:block text-xs font-bold uppercase tracking-wider ${
                    step >= s ? "text-slate-900" : "text-gray-400"
                  }`}
                >
                  {s === 1 ? "Season" : "Symptom"}
                </span>
                {s < 2 && (
                  <div
                    className={`w-8 h-px ${
                      step > s ? "bg-red-600" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Season */}
          {step === 1 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-black text-slate-900 text-center mb-8 tracking-tight uppercase">
                When is this happening?
              </h2>
              <div className="grid gap-4">
                {seasonOptions.map((opt) => (
                  <button
                    key={opt.key}
                    onClick={() => {
                      setSeason(opt.key);
                      setStep(2);
                    }}
                    className="text-left bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-300 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center gap-4"
                  >
                    <span className="text-3xl">{opt.emoji}</span>
                    <div className="text-lg font-bold text-slate-900">
                      {opt.label}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Symptom */}
          {step === 2 && symptoms.length > 0 && (
            <div className="animate-fadeIn">
              <h2 className="text-2xl font-black text-slate-900 text-center mb-8 tracking-tight uppercase">
                What are you experiencing?
              </h2>
              <div className="grid gap-3">
                {symptoms.map((item) => (
                  <button
                    key={item.symptom}
                    onClick={() => {
                      setResult(item);
                      setStep(3);
                    }}
                    className="text-left bg-white rounded-2xl border border-gray-200 p-5 hover:border-red-300 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    <div className="text-base font-bold text-slate-900">
                      {item.symptom}
                    </div>
                  </button>
                ))}
              </div>
              <button
                onClick={() => {
                  setStep(1);
                  setSeason(null);
                }}
                className="mt-6 text-sm text-slate-500 hover:text-red-600 font-semibold underline"
              >
                ← Back to Season
              </button>
            </div>
          )}

          {/* Result */}
          {step === 3 && result && severity && (
            <div className="animate-fadeIn" aria-live="polite">
              {/* Severity Banner */}
              <div
                className={`rounded-2xl border p-6 text-center mb-6 ${severity.color}`}
              >
                <div className="text-3xl mb-2">{severity.icon}</div>
                <div className="text-sm font-black uppercase tracking-widest">
                  {severity.label}
                </div>
              </div>

              {/* Main Result Card */}
              <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                <h2 className="text-2xl font-black text-slate-900 mb-2">
                  {result.symptom}
                </h2>

                {/* Likely Causes */}
                <div className="mt-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-3">
                    Most Likely Causes in Fort Wayne
                  </h3>
                  <ul className="space-y-2">
                    {result.likelyCauses.map((cause) => (
                      <li
                        key={cause}
                        className="flex items-start gap-2 text-slate-700"
                      >
                        <span className="text-red-500 mt-1">•</span>
                        {cause}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cost */}
                <div className="mt-6 bg-slate-50 rounded-xl p-5">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                    Typical Repair Cost in Fort Wayne
                  </h3>
                  <div className="text-2xl font-black text-slate-900">
                    {formatCurrency(result.costMin)} –{" "}
                    {formatCurrency(result.costMax)}
                  </div>
                  <p className="text-sm text-slate-500 mt-1">
                    Based on actual Allen County HVAC service calls. Your exact
                    cost depends on parts and labor after inspection.
                  </p>
                </div>

                {/* Immediate Check */}
                <div className="mt-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                    1 Thing to Check Right Now
                  </h3>
                  <p className="text-slate-700 leading-relaxed bg-yellow-50 rounded-xl p-4 border-l-4 border-yellow-400">
                    {result.immediateCheck}
                  </p>
                </div>

                {/* DIY Safety */}
                <div className="mt-6">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                    Can I Fix This Myself?
                  </h3>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    {result.diySafe}
                  </p>
                </div>

                {/* Warning */}
                {result.warning && (
                  <div className="mt-6 bg-red-50 rounded-xl p-5 border-l-4 border-red-600">
                    <h3 className="text-sm font-black uppercase tracking-widest text-red-800 mb-2">
                      ⚠️ Safety Warning
                    </h3>
                    <p className="text-red-800 text-sm leading-relaxed font-medium">
                      {result.warning}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <div className="mt-8 text-center">
                  {result.severity === "red" || result.severity === "yellow" ? (
                    <>
                      <a
                        href={PHONE_HREF}
                        className="inline-block bg-red-600 text-white font-black uppercase tracking-wider px-10 py-5 rounded-full shadow-xl hover:bg-slate-900 transition-all text-lg"
                      >
                        Call Now for Same-Day Service — {PHONE}
                      </a>
                      <p className="mt-3 text-sm text-slate-500">
                        Average response time in Allen County: 45 minutes
                      </p>
                    </>
                  ) : (
                    <>
                      <a
                        href={PHONE_HREF}
                        className="inline-block bg-slate-900 text-white font-black uppercase tracking-wider px-10 py-4 rounded-full shadow-xl hover:bg-red-600 transition-all"
                      >
                        Schedule a Tune-Up — {PHONE}
                      </a>
                      <p className="mt-3 text-sm text-slate-500">
                        A $129 tune-up can prevent this from becoming an
                        emergency.
                      </p>
                    </>
                  )}
                </div>
              </div>

              <button
                onClick={reset}
                className="mt-8 mx-auto block text-sm text-slate-500 hover:text-red-600 font-semibold underline"
              >
                ← Check Another Symptom
              </button>
            </div>
          )}
        </div>
      </section>

      <PageCTA
        title="Don't Guess — Get It Checked"
        subtitle="Remote symptom checkers can never replace a hands-on inspection. If you're unsure, our technicians will diagnose the exact issue and give you a flat-rate quote before any work begins."
      />
    </main>
  );
}
