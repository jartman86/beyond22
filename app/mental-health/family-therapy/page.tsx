import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";
export const metadata: Metadata = { title: "Family Therapy + Crisis Intervention", description: "Family therapy and crisis intervention resources for veteran families." };
export default function Page() {
  return <PlaceholderPage label="Mental Health Services — 03" headline="Family Therapy + Crisis Intervention" subheadline="For the whole family — not just the veteran. Crisis intervention resources and family-focused therapy providers." referralNote crisisWarning />;
}
