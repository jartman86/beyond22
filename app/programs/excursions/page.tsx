import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Excursions", description: "Purpose-driven field expeditions for veterans." };
export default function Page() {
  return <PlaceholderPage label="Programs — 02" headline="Excursions" subheadline="Purpose-driven field expeditions — climbing, paddling, hiking — designed around challenge, brotherhood, and earned rest." />;
}
