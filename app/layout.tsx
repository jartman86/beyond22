import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { CrisisBar } from "@/components/nav/CrisisBar";
import { TopNav } from "@/components/nav/TopNav";
import { Footer } from "@/components/layout/Footer";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz", "SOFT", "WONK"],
  display: "swap",
});

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Beyond22 | Save the 22",
    template: "%s — Beyond22 | Save the 22",
  },
  description:
    "Beyond22 is a veteran-founded nonprofit preventing veteran suicide through the Patriot Alert response network, peer intervention, and family support.",
  metadataBase: new URL("https://beyond22.org"),
  openGraph: {
    siteName: "Beyond22",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "theme-color": "#F2EDE4",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} h-full`}
    >
      <body
        className="min-h-full flex flex-col"
        style={{
          fontFamily: "var(--font-ibm-plex-sans), system-ui, sans-serif",
        }}
      >
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <CrisisBar />
        <TopNav />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
