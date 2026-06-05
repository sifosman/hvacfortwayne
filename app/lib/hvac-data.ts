// Fort Wayne HVAC pricing data derived from actual Allen County market rates
// Ranges are intentionally wide to account for unknown variables (ductwork, electrical, refrigerant)

export type HomeSize = "small" | "medium" | "large";
export type SystemType = "ac-only" | "furnace-only" | "full-system";
export type EfficiencyTier = "entry" | "mid" | "high";

export interface CostEstimate {
  label: string;
  min: number;
  max: number;
  note?: string;
}

export const homeSizeLabels: Record<HomeSize, string> = {
  small: "Small Home (1–2 Bedrooms, ~1,000 sq ft)",
  medium: "Medium Home (3–4 Bedrooms, ~1,800 sq ft)",
  large: "Large Home (5+ Bedrooms, ~2,800+ sq ft)",
};

export const systemTypeLabels: Record<SystemType, string> = {
  "ac-only": "AC Only (Cooling)",
  "furnace-only": "Furnace Only (Heating)",
  "full-system": "Full System (AC + Furnace)",
};

export const efficiencyLabels: Record<EfficiencyTier, string> = {
  entry: "Entry-Level (13–14 SEER / 80% AFUE)",
  mid: "Mid-Range (16–17 SEER / 92% AFUE)",
  high: "High-Efficiency (18+ SEER / 96% AFUE)",
};

// Base cost matrix [homeSize][systemType][efficiencyTier] = {min, max}
export const replacementCosts: Record<HomeSize, Record<SystemType, Record<EfficiencyTier, CostEstimate>>> = {
  small: {
    "ac-only": {
      entry: { label: "AC Replacement", min: 3200, max: 4800 },
      mid: { label: "AC Replacement", min: 4200, max: 5800 },
      high: { label: "AC Replacement", min: 5200, max: 7200 },
    },
    "furnace-only": {
      entry: { label: "Furnace Replacement", min: 2800, max: 4200 },
      mid: { label: "Furnace Replacement", min: 3800, max: 5200 },
      high: { label: "Furnace Replacement", min: 4800, max: 6800 },
    },
    "full-system": {
      entry: { label: "Full HVAC System", min: 5500, max: 7800 },
      mid: { label: "Full HVAC System", min: 7500, max: 10500 },
      high: { label: "Full HVAC System", min: 9500, max: 13500 },
    },
  },
  medium: {
    "ac-only": {
      entry: { label: "AC Replacement", min: 3800, max: 5500 },
      mid: { label: "AC Replacement", min: 5200, max: 7200 },
      high: { label: "AC Replacement", min: 6500, max: 9000 },
    },
    "furnace-only": {
      entry: { label: "Furnace Replacement", min: 3200, max: 4800 },
      mid: { label: "Furnace Replacement", min: 4500, max: 6200 },
      high: { label: "Furnace Replacement", min: 5800, max: 8200 },
    },
    "full-system": {
      entry: { label: "Full HVAC System", min: 6500, max: 9200 },
      mid: { label: "Full HVAC System", min: 9000, max: 12500 },
      high: { label: "Full HVAC System", min: 11500, max: 16500 },
    },
  },
  large: {
    "ac-only": {
      entry: { label: "AC Replacement", min: 4800, max: 6800 },
      mid: { label: "AC Replacement", min: 6500, max: 8800 },
      high: { label: "AC Replacement", min: 8200, max: 11500 },
    },
    "furnace-only": {
      entry: { label: "Furnace Replacement", min: 4200, max: 5800 },
      mid: { label: "Furnace Replacement", min: 5500, max: 7800 },
      high: { label: "Furnace Replacement", min: 7200, max: 10200 },
    },
    "full-system": {
      entry: { label: "Full HVAC System", min: 8500, max: 12000 },
      mid: { label: "Full HVAC System", min: 11500, max: 15800 },
      high: { label: "Full HVAC System", min: 14500, max: 21000 },
    },
  },
};

export const costDrivers = [
  {
    title: "Ductwork Condition",
    description: "Older Fort Wayne homes (especially in Forest Park or Waynedale) may need duct sealing or replacement. Add $1,500–$4,500 if ducts are leaky or undersized.",
  },
  {
    title: "Electrical Panel",
    description: "High-efficiency systems and heat pumps may require a 200-amp panel upgrade. Add $1,200–$2,500 if your panel is outdated.",
  },
  {
    title: "Refrigerant Type",
    description: "If your old system uses R-22 (phased out), switching to R-410A or R-454B may require line-set flushing or replacement. Add $800–$1,800.",
  },
];

// Repair cost ranges for symptom checker (Fort Wayne-specific)
export interface RepairCost {
  symptom: string;
  likelyCauses: string[];
  severity: "green" | "yellow" | "red";
  costMin: number;
  costMax: number;
  immediateCheck: string;
  diySafe: string;
  warning?: string;
}

export const symptomDatabase: Record<string, RepairCost[]> = {
  summer: [
    {
      symptom: "AC blowing warm air",
      likelyCauses: ["Low refrigerant (leak)", "Dirty condenser coils", "Faulty compressor capacitor"],
      severity: "yellow",
      costMin: 150,
      costMax: 1800,
      immediateCheck: "Check your thermostat is set to 'Cool' and the temperature is below room temp.",
      diySafe: "You can change the air filter and check the outdoor unit for debris. Do NOT add refrigerant yourself — it's illegal without an EPA license.",
    },
    {
      symptom: "Water leaking near indoor unit",
      likelyCauses: ["Clogged condensate drain line", "Frozen evaporator coil melting", "Cracked drain pan"],
      severity: "yellow",
      costMin: 120,
      costMax: 650,
      immediateCheck: "Turn off the AC and check if the drain line outside is dripping. If it's completely dry, the line is likely clogged.",
      diySafe: "You can try clearing the drain line with a wet/dry vacuum at the exterior pipe. If water is still pooling, call a technician.",
    },
    {
      symptom: "Loud banging or screeching noise",
      likelyCauses: ["Loose blower wheel or motor mount", "Failing compressor", "Debris in outdoor fan"],
      severity: "red",
      costMin: 280,
      costMax: 2200,
      immediateCheck: "Turn off the system immediately at the breaker to prevent further damage.",
      diySafe: "Do not attempt DIY. Banging noises can indicate mechanical failure that worsens with continued operation.",
      warning: "If you smell burning or see smoke, evacuate and call 911 before calling HVAC.",
    },
    {
      symptom: "System won't turn on at all",
      likelyCauses: ["Tripped breaker or blown fuse", "Faulty thermostat", "Bad capacitor or contactor"],
      severity: "red",
      costMin: 120,
      costMax: 450,
      immediateCheck: "Check your breaker panel and thermostat batteries. If the breaker trips again after resetting, leave it off and call a technician.",
      diySafe: "Checking the breaker and thermostat batteries is safe. Do not open the electrical panel on the unit itself.",
      warning: "If you smell gas, evacuate immediately and call 911.",
    },
    {
      symptom: "Some rooms too hot, others too cold",
      likelyCauses: ["Ductwork imbalance or leaks", "Blocked vents", "Undersized or failing unit"],
      severity: "green",
      costMin: 0,
      costMax: 850,
      immediateCheck: "Walk through the house and make sure no vents are blocked by furniture or closed dampers.",
      diySafe: "Opening vents and checking air filters is safe. Ductwork modifications require a professional.",
    },
    {
      symptom: "Energy bill suddenly spiked",
      likelyCauses: ["Dirty coils or filters reducing efficiency", "Refrigerant leak causing longer run times", "Failing components drawing more power"],
      severity: "green",
      costMin: 80,
      costMax: 1800,
      immediateCheck: "Compare your bill to the same month last year. A 20%+ increase without rate changes points to an HVAC efficiency issue.",
      diySafe: "Replace the air filter and clean the outdoor condenser fins with a garden hose (power off).",
    },
  ],
  winter: [
    {
      symptom: "Furnace blowing cold air",
      likelyCauses: ["Pilot light or igniter failure", "Dirty flame sensor", "Overheating limit switch tripped"],
      severity: "yellow",
      costMin: 120,
      costMax: 650,
      immediateCheck: "Check your thermostat is set to 'Heat' and the fan is on 'Auto,' not 'On.'",
      diySafe: "You can change the filter. Do NOT attempt to manually relight a gas pilot if you smell gas.",
      warning: "If you smell rotten eggs or sulfur, evacuate and call 911. Do not operate any light switches.",
    },
    {
      symptom: "Burning smell or rotten egg smell",
      likelyCauses: ["Dust burning off after long idle (normal briefly)", "Electrical overheating", "Gas leak (rotten egg odor)"],
      severity: "red",
      costMin: 0,
      costMax: 800,
      immediateCheck: "If the smell is brief (first use of the season), it may be dust. If it persists or smells like rotten eggs, turn the system off immediately.",
      diySafe: "Do not attempt DIY for any smell issue. Turn the system off and call a professional.",
      warning: "Rotten egg smell = gas leak. Evacuate your home and call 911. Do not use light switches or phones inside.",
    },
    {
      symptom: "System won't turn on at all",
      likelyCauses: ["Tripped breaker", "Blown fuse on furnace control board", "Faulty thermostat or safety switch"],
      severity: "red",
      costMin: 120,
      costMax: 550,
      immediateCheck: "Check the breaker and thermostat batteries. Verify the furnace power switch (looks like a light switch near the unit) is on.",
      diySafe: "Breaker and thermostat checks are safe. Do not open the furnace electrical compartment.",
      warning: "If you smell gas, evacuate and call 911.",
    },
    {
      symptom: "Loud banging or screeching noise",
      likelyCauses: ["Loose blower wheel", "Cracked heat exchanger (dangerous)", "Failing inducer motor"],
      severity: "red",
      costMin: 280,
      costMax: 1800,
      immediateCheck: "Turn off the furnace at the breaker and thermostat immediately.",
      diySafe: "Do not attempt DIY. A cracked heat exchanger can leak carbon monoxide.",
      warning: "If your carbon monoxide detector is alarming, evacuate immediately and call 911.",
    },
    {
      symptom: "Some rooms too hot, others too cold",
      likelyCauses: ["Ductwork leaks or poor insulation", "Blocked return vents", "Failing blower motor"],
      severity: "green",
      costMin: 0,
      costMax: 950,
      immediateCheck: "Check that all vents are open and returns are unobstructed.",
      diySafe: "Opening vents and changing filters is safe. Do not modify ductwork yourself.",
    },
    {
      symptom: "Energy bill suddenly spiked",
      likelyCauses: ["Dirty filter restricting airflow", "Failing heat exchanger losing efficiency", "Thermostat running fan continuously"],
      severity: "green",
      costMin: 80,
      costMax: 1500,
      immediateCheck: "Check if the thermostat fan is set to 'Auto' instead of 'On.'",
      diySafe: "Replace the filter. Do not clean or inspect the heat exchanger yourself.",
    },
  ],
  anytime: [
    {
      symptom: "Thermostat not responding",
      likelyCauses: ["Dead batteries", "Loose wiring", "Faulty thermostat"],
      severity: "green",
      costMin: 0,
      costMax: 350,
      immediateCheck: "Replace the batteries and verify the display lights up.",
      diySafe: "Battery replacement is homeowner-safe. Wiring changes should be done by a technician.",
    },
    {
      symptom: "Weak airflow from vents",
      likelyCauses: ["Clogged filter", "Blocked return vent", "Failing blower motor or capacitor"],
      severity: "yellow",
      costMin: 80,
      costMax: 750,
      immediateCheck: "Hold your hand up to multiple vents. If some are strong and others weak, it's likely a duct issue, not the unit.",
      diySafe: "Replace the filter and check for blocked returns. Do not access the blower compartment.",
    },
    {
      symptom: "System short-cycling (turns on/off rapidly)",
      likelyCauses: ["Oversized unit", "Clogged filter or coils", "Faulty thermostat or sensor"],
      severity: "yellow",
      costMin: 80,
      costMax: 650,
      immediateCheck: "Check your air filter. A severely clogged filter can cause the unit to overheat and shut off prematurely.",
      diySafe: "Filter replacement is safe. Do not attempt sensor or wiring repairs.",
    },
  ],
};

export const severityConfig = {
  green: { label: "Non-Urgent", color: "bg-green-50 text-green-800 border-green-200", icon: "✅" },
  yellow: { label: "Schedule Soon", color: "bg-yellow-50 text-yellow-800 border-yellow-200", icon: "⚠️" },
  red: { label: "Call Now — Safety Risk", color: "bg-red-50 text-red-800 border-red-200", icon: "🚨" },
};

// Repair vs Replace decision thresholds
export type SystemAge = "under10" | "10to15" | "over15";
export type RepairHistory = "none" | "minor" | "major";
export type EnergyTrend = "stable" | "up20" | "up40";

export const ageLabels: Record<SystemAge, string> = {
  under10: "Under 10 years old",
  "10to15": "10–15 years old",
  over15: "Over 15 years old",
};

export const repairLabels: Record<RepairHistory, string> = {
  none: "No major repairs",
  minor: "1–2 repairs in the last 2 years",
  major: "3+ repairs or a major part failed (compressor, heat exchanger, etc.)",
};

export const energyLabels: Record<EnergyTrend, string> = {
  stable: "Stable — about the same as last year",
  up20: "Up 20% or more in the last year",
  up40: "Up 40% or more in the last year",
};

export type Verdict = "repair" | "monitor" | "replace";

export interface VerdictResult {
  verdict: Verdict;
  headline: string;
  explanation: string;
  savingsNote?: string;
  ctaTitle: string;
  ctaSubtitle: string;
}

export function getRepairReplaceVerdict(age: SystemAge, repairs: RepairHistory, energy: EnergyTrend): VerdictResult {
  // Conservative scoring: only recommend replace if clearly justified
  const ageScore = age === "under10" ? 0 : age === "10to15" ? 1 : 2;
  const repairScore = repairs === "none" ? 0 : repairs === "minor" ? 1 : 2;
  const energyScore = energy === "stable" ? 0 : energy === "up20" ? 1 : 2;
  const total = ageScore + repairScore + energyScore;

  if (total >= 5) {
    return {
      verdict: "replace",
      headline: "Replace Soon",
      explanation: `Your system is ${age === "over15" ? "over 15 years old" : "aging"} with ${repairs === "major" ? "multiple recent failures" : "declining performance"}. In Fort Wayne's climate, continuing to repair this unit will likely cost more than replacement within 3–5 years.`,
      savingsNote: "A new mid-efficiency system can reduce your heating and cooling bills by 20–40% compared to a ${age === 'over15' ? '15+ year old' : 'aging'} unit. Over 10 years, that typically saves $3,000–$7,000 in Allen County.",
      ctaTitle: "Get a Free Replacement Quote",
      ctaSubtitle: "We'll inspect your home and give you an exact written estimate — no pressure, no upsell.",
    };
  }

  if (total >= 3) {
    return {
      verdict: "monitor",
      headline: "Maintain & Monitor",
      explanation: `Your system shows some warning signs (${energy !== "stable" ? "rising energy use" : ""}${energy !== "stable" && repairs !== "none" ? " and " : ""}${repairs !== "none" ? "recent repairs" : ""}), but it's not at replacement age yet. A professional tune-up and proactive maintenance can extend its life by 3–5 years.`,
      ctaTitle: "Schedule a $129 Tune-Up",
      ctaSubtitle: "Our multi-point inspection will catch small issues before they become expensive failures.",
    };
  }

  return {
    verdict: "repair",
    headline: "Repair It",
    explanation: "Your system is relatively young with a stable repair history. Fixing the current issue is the most cost-effective option. Keep up with annual maintenance to avoid future surprises.",
    ctaTitle: "Schedule a Repair Inspection",
    ctaSubtitle: "We'll diagnose the exact issue and give you a flat-rate repair quote before any work begins.",
  };
}

export const verdictConfig: Record<Verdict, { color: string; border: string; badge: string }> = {
  repair: { color: "bg-green-50 text-green-800", border: "border-green-200", badge: "bg-green-600" },
  monitor: { color: "bg-yellow-50 text-yellow-800", border: "border-yellow-200", badge: "bg-yellow-500" },
  replace: { color: "bg-red-50 text-red-800", border: "border-red-200", badge: "bg-red-600" },
};
