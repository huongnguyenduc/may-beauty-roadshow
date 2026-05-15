"use client";

import Image from "next/image";
import Link from "next/link";
import { figmaAssets } from "./figma-assets";

export function HeroSection() {
  const handleScrollToRegistration = () => {
    const target = document.getElementById("registration-form");
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
  };

  return (
    <section id="hero-section" className="relative w-full overflow-hidden" aria-label="Hero">
      <div className="relative w-full md:hidden">
        <Image
          src={figmaAssets.heroFullMobile}
          alt="Beauty Roadshow Winning beauty consumers in the age of shoppertainment"
          width={860}
          height={1084}
          className="block h-auto w-full"
          sizes="100vw"
          priority
        />
      </div>

      <div className="relative hidden w-full md:block">
        <Image
          src={figmaAssets.heroFullDesktop}
          alt="Beauty Roadshow Winning beauty consumers in the age of shoppertainment"
          width={2880}
          height={1552}
          className="block h-auto w-full"
          sizes="100vw"
          priority
        />
      </div>

      <div className="absolute inset-0 z-20">
        <button
          type="button"
          onClick={handleScrollToRegistration}
          className="absolute left-[34.88%] top-[87.92%] h-[3.98%] w-[26.40%] border-0 bg-transparent p-0 md:left-[11.32%] md:top-[86.34%] md:h-[6.12%] md:w-[17.22%]"
          aria-label="Đăng kí tham dự"
        />
        <Link
          href="https://www.facebook.com/OnPointVietnam"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chi tiết chương trình"
          className="absolute left-[34.42%] top-[93.17%] block h-[3.87%] w-[28.02%] bg-transparent md:left-[31.46%] md:top-[86.60%] md:h-[5.99%] md:w-[18.26%]"
        >
          <span className="sr-only">Chi tiết chương trình</span>
        </Link>
      </div>
    </section>
  );
}
