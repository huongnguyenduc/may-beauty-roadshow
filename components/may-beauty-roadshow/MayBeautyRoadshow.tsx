import { CountdownSection } from "./CountdownSection";
import { HeroFormSection } from "./HeroFormSection";

export function MayBeautyRoadshow() {
  return (
    <div className="flex w-full flex-col gap-12 bg-white xl:gap-[66px]">
      <CountdownSection />
      <HeroFormSection />
    </div>
  );
}
