import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Health", description: "Physical health programs and resources for veterans and families." };
export default function Page() {
  return <PlaceholderPage label="Programs — 07" headline="Health" subheadline="Physical health programs, nutrition, fitness, and preventive care resources for veterans and their families." />;
}
