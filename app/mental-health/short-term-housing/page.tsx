import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Short Term Housing", description: "Safe housing resources for veterans in crisis and transition." };
export default function Page() {
  return <PlaceholderPage label="Mental Health Services — 04" headline="Short Term Housing" subheadline="Safe housing during crisis and transition. Vetted providers and emergency shelter resources." referralNote />;
}
