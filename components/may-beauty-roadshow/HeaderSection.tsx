import Image from "next/image";
import Link from "next/link";
import { figmaAssets } from "./figma-assets";

/**
 * Top header bar from Figma nodes 3:21 (desktop) and 227:3 (mobile).
 */
export function HeaderSection() {
  return (
    <header
      id="header-section"
      className="relative w-full bg-white"
      data-testid="beauty-header"
    >
      <div className="mx-auto box-border flex w-full flex-row items-center justify-between gap-0 px-8 py-0 min-h-[92px] md:max-w-2xl lg:max-w-4xl xl:max-w-6xl xl:min-h-[204px] xl:px-0 xl:pb-6 xl:pt-6">
        <div className="relative h-[49px] w-[128px] shrink-0 xl:h-[92px] xl:w-[239px]">
          <Image
            src={figmaAssets.headerLogo}
            alt="Beauty Roadshow"
            width={128}
            height={49}
            className="h-full w-full object-contain object-left"
            priority
            sizes="(min-width: 1280px) 239px, 128px"
          />
        </div>

        <Link
          href="#registration-form"
          className="inline-flex h-[28.55px] w-[106.61px] shrink-0 items-center justify-center rounded-[37.193px] bg-brand-red px-0 text-center text-[10px] font-extrabold leading-none text-white transition-opacity hover:opacity-90 xl:h-[53.6px] xl:w-[200.17px] xl:text-[20px]"
        >
          ĐĂNG KÝ NGAY
        </Link>
      </div>
    </header>
  );
}
