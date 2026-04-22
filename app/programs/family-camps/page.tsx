import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Family Camps", description: "Family camps for veterans and their families to heal together." };
export default function Page() {
  return <PlaceholderPage label="Programs — 04" headline="Family Camps" subheadline="When a veteran struggles, the whole family carries it. Family Camps bring everyone together — to heal together." />;
}
