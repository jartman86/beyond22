import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Life Coaching", description: "Veteran-led coaching for transition, purpose, and identity beyond service." };
export default function Page() {
  return <PlaceholderPage label="Programs — 08" headline="Life Coaching" subheadline="Veteran-led coaching for transition, purpose, career, and identity beyond service. Not therapy — something different." />;
}
