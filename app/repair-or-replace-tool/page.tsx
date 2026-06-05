import type { Metadata } from "next";
import DecisionTool from "./DecisionTool";

export const metadata: Metadata = {
  title: "Repair or Replace HVAC Tool | Fort Wayne Homeowners",
  description:
    "Should you repair your old AC or furnace, or replace it? Answer 3 simple questions and get an honest recommendation based on Fort Wayne's climate and energy costs.",
  keywords:
    "repair or replace hvac fort wayne, when to replace furnace, should I repair or replace my ac, 15 year old furnace worth repairing",
  alternates: { canonical: "https://hvacrepairfortwayne.com/repair-or-replace-tool" },
};

export default function RepairOrReplacePage() {
  return <DecisionTool />;
}
