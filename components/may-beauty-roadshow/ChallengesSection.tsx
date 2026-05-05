import Image from "next/image";
import { figmaAssets } from "./figma-assets";

/**
 * Business Challenges section from Figma node 37:125 (desktop) and 283:304 (mobile).
 * Highlights growth challenges in the beauty industry.
 */
export function ChallengesSection() {
  return (
    <section
      className="relative w-full mt-8 overflow-hidden mx-auto px-4 md:px-6 xl:max-w-6xl"
      aria-label="Business Challenges"
    >
      <div className="relative w-full md:hidden">
        <Image
          src={figmaAssets.challengesSectionMobile}
          alt="Những bài toán tăng trưởng nan giải trong ngành làm đẹp - Business Challenges"
          width={330}
          height={530}
          className="block h-auto w-full"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative hidden w-full md:block">
        <div className="mx-auto flex w-full max-w-6xl justify-center">
          <Image
            src={figmaAssets.challengesSection}
            alt="Những bài toán tăng trưởng nan giải trong ngành làm đẹp - Business Challenges"
            width={1137}
            height={877}
            className="block h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 1137px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
