import Image from "next/image";
import { figmaAssets } from "./figma-assets";

/**
 * Benefits section from Figma node 50:64 (desktop) and 283:322 (mobile).
 * Showcases what attendees will receive after the event.
 */
export function BenefitsSection() {
  return (
    <section
      className="relative w-full mx-auto px-4 md:px-6 mt-8 md:mt-14 xl:mt-[140px] xl:max-w-6xl"
      aria-label="Event Benefits"
    >
      <div className="relative w-full md:hidden">
        <Image
          src={figmaAssets.benefitsSectionMobile}
          alt="Bạn sẽ nhận được gì sau sự kiện - Event Benefits"
          width={331}
          height={375}
          className="block h-auto w-full"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative hidden w-full md:block">
        <div className="mx-auto flex w-full max-w-6xl justify-center">
          <Image
            src={figmaAssets.benefitsSection}
            alt="Bạn sẽ nhận được gì sau sự kiện - Event Benefits"
            width={1137}
            height={1204}
            className="block h-auto w-full"
            sizes="(max-width: 1024px) 100vw, 1137px"
            priority
          />
        </div>
      </div>
    </section>
  );
}
