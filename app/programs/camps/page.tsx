import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Camps", description: "Structured wilderness experiences for veterans." };
export default function Page() {
  return <PlaceholderPage label="Programs — 01" headline="Camps" subheadline="Structured wilderness experiences that reconnect veterans with themselves and each other, away from the noise." />;
}
