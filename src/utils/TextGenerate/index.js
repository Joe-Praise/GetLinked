import { bannerText } from "./sample";
import Typewriter from "typewriter-effect";

export function TypewriterEffect() {
  return (
    <>
      <Typewriter
        options={{
          strings: [bannerText],
          autoStart: true,
          loop: true,
          delay: 200,
          deleteSpeed: 200,
        }}
      />
    </>
  );
}
