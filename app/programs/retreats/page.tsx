import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Retreats", description: "Quiet, intentional time for veterans and their families." };
export default function Page() {
  return <PlaceholderPage label="Programs — 03" headline="Retreats" subheadline="Quiet, intentional time for veterans and their families. Processing, resetting, and rebuilding from solid ground." />;
}
