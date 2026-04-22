export type Program = {
  slug: string;
  title: string;
  category: "camp" | "retreat" | "clinical" | "therapy" | "coaching" | "excursion" | "health";
  shortDescription: string;
  longDescription: string | null;
  image: string | null;
  referralOnly: boolean;
  disclaimer: string | null;
  status: "placeholder" | "draft" | "live";
};

export const psychedelicDisclaimer =
  "Psychedelic-assisted therapy is an evolving field. Laws, clinical evidence, and program safety vary significantly. Beyond22 provides directory information for research purposes; we make no medical recommendations and assume no responsibility for outcomes. Always consult a licensed clinician before beginning any new treatment.";

export const programs: Program[] = [
  {
    slug: "camps",
    title: "Camps",
    category: "camp",
    shortDescription:
      "Structured wilderness experiences that reconnect veterans with themselves and each other, away from the noise.",
    longDescription: null,
    image: null,
    referralOnly: false,
    disclaimer: null,
    status: "placeholder",
  },
  {
    slug: "excursions",
    title: "Excursions",
    category: "excursion",
    shortDescription:
      "Purpose-driven field expeditions — climbing, paddling, hiking — designed around challenge, brotherhood, and earned rest.",
    longDescription: null,
    image: null,
    referralOnly: false,
    disclaimer: null,
    status: "placeholder",
  },
  {
    slug: "retreats",
    title: "Retreats",
    category: "retreat",
    shortDescription:
      "Quiet, intentional time for veterans and their families. Processing, resetting, and rebuilding from solid ground.",
    longDescription: null,
    image: null,
    referralOnly: false,
    disclaimer: null,
    status: "placeholder",
  },
  {
    slug: "family-camps",
    title: "Family Camps",
    category: "camp",
    shortDescription:
      "When a veteran struggles, the whole family carries it. Family Camps bring everyone together — to heal together.",
    longDescription: null,
    image: null,
    referralOnly: false,
    disclaimer: null,
    status: "placeholder",
  },
  {
    slug: "psychedelic-treatment",
    title: "Psychedelic Treatment Centers",
    category: "clinical",
    shortDescription:
      "Vetted referral directory of clinicians and retreat centers operating within legal frameworks — Oregon and Colorado regulated programs, ketamine providers, FDA-authorized trials.",
    longDescription: null,
    image: null,
    referralOnly: true,
    disclaimer: psychedelicDisclaimer,
    status: "placeholder",
  },
  {
    slug: "peptide-therapy",
    title: "Peptide Therapy + Labs",
    category: "therapy",
    shortDescription:
      "Emerging therapeutic protocols with growing evidence bases. Directory of vetted providers and lab partners.",
    longDescription: null,
    image: null,
    referralOnly: false,
    disclaimer: null,
    status: "placeholder",
  },
  {
    slug: "health",
    title: "Health",
    category: "health",
    shortDescription:
      "Physical health programs, nutrition, fitness, and preventive care resources for veterans and their families.",
    longDescription: null,
    image: null,
    referralOnly: false,
    disclaimer: null,
    status: "placeholder",
  },
  {
    slug: "life-coaching",
    title: "Life Coaching",
    category: "coaching",
    shortDescription:
      "Veteran-led coaching for transition, purpose, career, and identity beyond service. Not therapy — something different.",
    longDescription: null,
    image: null,
    referralOnly: false,
    disclaimer: null,
    status: "placeholder",
  },
];
