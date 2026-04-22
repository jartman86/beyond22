import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Continuum of Care", description: "Coordinated care resources across the veteran recovery arc." };
export default function Page() {
  return <PlaceholderPage label="Mental Health Services — 05" headline="Continuum of Care" subheadline="Coordinated care across the full recovery arc — from acute crisis to long-term wellbeing." referralNote />;
}
