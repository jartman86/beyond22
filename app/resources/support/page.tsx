import type { Metadata } from "next";
import { PlaceholderPage } from "@/lib/placeholderPage";

export const metadata: Metadata = {
  title: "Support",
  description: "Long-term support resources for veterans and families — after the crisis, for the long road.",
};

export default function SupportPage() {
  return (
    <PlaceholderPage
      label="Support"
      headline="For the long road."
      subheadline="After the crisis. For families. For peers. For the ones who need a warm hand, not a warm line."
      note="Long-term support directory under construction. Check back soon."
    />
  );
}
