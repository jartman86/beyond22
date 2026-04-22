import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Counseling", description: "Individual and group counseling resources for veterans." };
export default function Page() {
  return <PlaceholderPage label="Mental Health Services — 02" headline="Counseling" subheadline="Individual and group counseling from providers with documented veteran experience." referralNote />;
}
