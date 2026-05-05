import Image from "next/image";
import { figmaAssets } from "./figma-assets";

/**
 * Speaker and Guest section from Figma node 283:118 (desktop) and 283:339 (mobile).
 * Displays featured speakers and guests for the event.
 */
export function SpeakerSection() {
  return (
    <section
      className="relative w-full mt-8"
      aria-label="Speakers and Guests"
    >
      <div className="relative w-full md:hidden aspect-[431/345]">
        <Image
          src={figmaAssets.speakersSectionMobile}
          alt="Diễn giả và khách mời - Speakers and Guests"
          width={431}
          height={345}
          className="block h-auto w-full"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative hidden w-full md:block aspect-[1440/1107]">
        <Image
          src={figmaAssets.speakersSection}
          alt="Diễn giả và khách mời - Speakers and Guests"
          width={1440}
          height={1107}
          className="block w-full"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
