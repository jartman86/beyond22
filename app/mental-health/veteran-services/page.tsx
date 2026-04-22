import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Veteran Services", description: "VA-familiar providers and veteran mental health service networks." };
export default function Page() {
  return <PlaceholderPage label="Mental Health Services — 01" headline="Veteran Services" subheadline="VA-familiar providers, peer support networks, and Vet Center resources." referralNote />;
}
