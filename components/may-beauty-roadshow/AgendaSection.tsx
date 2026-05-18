import Image from "next/image";
import { figmaAssets } from "./figma-assets";

/**
 * Agenda section from Figma node 55:191 (desktop) and 283:430 (mobile).
 * Displays the event schedule and timeline.
 */
export function AgendaSection() {
  return (
    <section
      id="agenda-section"
      className="relative w-full overflow-hidden"
      aria-label="Event Agenda"
    >
      <div className="relative w-full md:hidden">
        <Image
          src={figmaAssets.agendaSectionMobile}
          alt="Agenda - Event Schedule"
          width={425}
          height={508}
          className="block h-auto w-full"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative hidden w-full md:block">
        <Image
          src={figmaAssets.agendaSection}
          alt="Agenda - Event Schedule"
          width={1440}
          height={1697}
          className="block h-auto w-full"
          sizes="100vw"
          priority
        />
      </div>
    </section>
  );
}
