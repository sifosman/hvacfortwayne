import type { Metadata } from "next";
import SymptomChecker from "./SymptomChecker";

export const metadata: Metadata = {
  title: "HVAC Symptom Checker | What's Wrong With My System? Fort Wayne",
  description:
    "Is your AC blowing warm air? Furnace making noise? Water leaking? Pick your symptom and get the most likely cause, typical Fort Wayne repair cost, and whether it's safe to wait.",
  keywords:
    "ac blowing warm air fort wayne, furnace making noise, water leaking from ac unit, hvac burning smell, some rooms hotter than others, hvac symptom checker",
  alternates: { canonical: "https://hvacrepairfortwayne.com/hvac-symptom-checker" },
};

export default function SymptomCheckerPage() {
  return <SymptomChecker />;
}
