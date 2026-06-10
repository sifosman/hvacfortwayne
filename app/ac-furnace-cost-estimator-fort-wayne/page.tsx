import type { Metadata } from "next";
import Estimator from "./Estimator";

export const metadata: Metadata = {
  title: "HVAC Cost Calculator Fort Wayne | AC & Furnace Repair & Replacement Estimates",
  description:
    "Get an instant HVAC cost estimate for Fort Wayne. Calculate AC repair, furnace replacement, or mini-split installation costs based on real Allen County pricing. No email required.",
  keywords:
    "hvac cost calculator, hvac repair cost calculator, ac cost calculator, furnace cost calculator, hvac replacement cost calculator, hvac cost estimator, hvac replacement cost fort wayne, ac installation cost fort wayne",
  alternates: { canonical: "https://hvacrepairfortwayne.com/ac-furnace-cost-estimator-fort-wayne" },
};

export default function CostEstimatorPage() {
  return <Estimator />;
}
