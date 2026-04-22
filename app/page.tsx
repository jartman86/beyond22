import type { Metadata } from "next";
import { HeroSequence } from "@/components/hero/HeroSequence";
import { TwentyTwoCounter } from "@/components/sections/TwentyTwoCounter";
import { PatriotAlertIntro } from "@/components/sections/PatriotAlertIntro";
import { MissionBlock } from "@/components/sections/MissionBlock";
import { PatriotAlertExplainer } from "@/components/sections/PatriotAlertExplainer";
import { ProgramsPreview } from "@/components/sections/ProgramsPreview";
import { JoesStory } from "@/components/sections/JoesStory";
import { BoardGrid } from "@/components/sections/BoardGrid";
import { TakeActionBlock } from "@/components/sections/TakeActionBlock";

export const metadata: Metadata = {
  title: "Beyond22 | Save the 22",
  description:
    "Beyond22 is a veteran-founded nonprofit preventing veteran suicide through the Patriot Alert response network, peer intervention, and family support.",
};

export default function HomePage() {
  return (
    <>
      <HeroSequence />
      <TwentyTwoCounter />
      <PatriotAlertIntro />
      <MissionBlock />
      <PatriotAlertExplainer />
      <ProgramsPreview />
      <JoesStory variant="teaser" />
      <BoardGrid />
      <TakeActionBlock />
    </>
  );
}
