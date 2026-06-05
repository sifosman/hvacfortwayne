import type { Metadata } from "next";
import Estimator from "./Estimator";

export const metadata: Metadata = {
  title: "HVAC Replacement Cost Estimator | Fort Wayne & Allen County",
  description:
    "Get an instant, local price range for AC and furnace replacement in Fort Wayne, IN. Based on real Allen County HVAC jobs — no email required.",
  keywords:
    "hvac replacement cost fort wayne, furnace replacement cost allen county, ac installation cost fort wayne, hvac estimator indiana",
  alternates: { canonical: "https://hvacrepairfortwayne.com/ac-furnace-cost-estimator-fort-wayne" },
};

export default function CostEstimatorPage() {
  return <Estimator />;
}
