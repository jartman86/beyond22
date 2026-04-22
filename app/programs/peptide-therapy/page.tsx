import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Peptide Therapy + Labs", description: "Emerging peptide therapy protocols and vetted provider directory." };
export default function Page() {
  return <PlaceholderPage label="Programs — 06" headline="Peptide Therapy + Labs" subheadline="Emerging therapeutic protocols with growing evidence bases. Directory of vetted providers and lab partners." referralNote />;
}
