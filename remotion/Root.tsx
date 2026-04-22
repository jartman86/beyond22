import { Composition } from "remotion";
import { HeroSequence } from "./HeroSequence";
import { TwentyTwoViz } from "./TwentyTwoViz";

export function RemotionRoot() {
  return (
    <>
      <Composition
        id="HeroSequence"
        component={HeroSequence}
        durationInFrames={240} // 8 seconds at 30fps
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="TwentyTwoViz"
        component={TwentyTwoViz}
        durationInFrames={180} // 6 seconds at 30fps
        fps={30}
        width={1200}
        height={900}
      />
    </>
  );
}
