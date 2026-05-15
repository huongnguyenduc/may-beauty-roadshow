import Image from "next/image";
import { CountdownSection } from "./CountdownSection";
import { HeroFormSection } from "./HeroFormSection";
import { HeaderSection } from "./HeaderSection";
import { HeroSection } from "./HeroSection";
import { figmaAssets } from "./figma-assets";
import { SpeakerSection } from "./SpeakerSection";
import { ChallengesSection } from "./ChallengesSection";
import { BenefitsSection } from "./BenefitsSection";
import { AgendaSection } from "./AgendaSection";
import { FooterSection } from "@/components/may-beauty-roadshow/FooterSection";
import { StickyRegistrationButton } from "./StickyRegistrationButton";

export function MayBeautyRoadshow() {
  return (
    <div className="flex w-full flex-col bg-white">
      <HeaderSection />
      <HeroSection />
      <CountdownSection />
      <SpeakerSection />
      <div className="relative w-full overflow-hidden">
        <div className="relative z-10 flex w-full flex-col">
          <ChallengesSection />
          <BenefitsSection />
        </div>

        <div
          className="pointer-events-none w-[771px] h-[1352px] absolute top-[30%] left-[8%] hidden -translate-x-2/3 -translate-y-1/3 md:block"
          aria-hidden="true"
        >
            <Image
              src={figmaAssets.gradientChallengeBenefit}
              alt=""
              width={771}
              height={1352}
              className="block h-auto w-full"
              sizes="(max-width: 771px) 100vw, 771px"
            />
        </div>
      </div>
      <AgendaSection />
      <HeroFormSection />
      <FooterSection />
      <StickyRegistrationButton />
    </div>
  );
}
