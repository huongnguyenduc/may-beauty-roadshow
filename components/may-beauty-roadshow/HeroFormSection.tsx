import Image from "next/image";
import { figmaAssets } from "./figma-assets";
import { RegistrationForm } from "./RegistrationForm";

export function HeroFormSection() {
  return (
    <section
      className="relative w-full overflow-x-clip bg-white"
      aria-labelledby="hero-register-heading"
    >
      <div className="pointer-events-none absolute left-1/2 top-[40%] z-0 h-[min(100vw,1122px)] w-[min(100vw,1121px)] -translate-x-1/2 opacity-30 mix-blend-multiply xl:left-[-268px] xl:top-[367px] xl:h-[1122px] xl:w-[1121px] xl:translate-x-0">
        <div className="relative h-full w-full">
          <Image
            src={figmaAssets.gradient}
            alt=""
            fill
            className="object-cover"
            sizes="1121px"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1280px] px-4 pb-16 pt-4 sm:px-6 xl:min-h-[909px] xl:px-0 xl:pb-20 xl:pt-0">
        <h2 id="hero-register-heading" className="sr-only">
          Đăng ký tham dự miễn phí
        </h2>

        <div className="relative flex flex-col gap-10 xl:min-h-[909px] xl:gap-0">
          <div className="xl:absolute xl:left-[152px] xl:top-[73px] xl:pr-4">
            <p className="text-center text-[clamp(1.75rem,5vw,3.125rem)] font-black leading-[1.4] text-black xl:text-left xl:text-[50px]">
              ĐĂNG KÝ THAM DỰ
            </p>
            <p className="text-center text-[clamp(1.75rem,5vw,3.125rem)] font-black leading-[1.4] text-brand-red xl:text-left xl:text-[50px]">
              MIỄN PHÍ
            </p>
          </div>

          <div className="relative mx-auto aspect-[373/503] w-full max-w-[373px] xl:absolute xl:left-[133px] xl:top-[236px] xl:mx-0">
            <Image
              src={figmaAssets.sku}
              alt="Hình ảnh sản phẩm làm đẹp trưng bày trong giỏ mua sắm minh họa cho sự kiện roadshow"
              fill
              className="object-cover"
              sizes="(max-width: 1280px) 90vw, 373px"
              priority
            />
          </div>

          <div className="relative -mt-4 w-full max-w-[576px] self-center sm:-mt-8 xl:absolute xl:left-[51px] xl:top-[677px] xl:mt-0 xl:max-w-[576px] xl:self-auto">
            <Image
              src={figmaAssets.podium}
              alt="Bục kính minh họa không gian trưng bày sản phẩm"
              width={576}
              height={232}
              className="h-auto w-full object-cover"
              sizes="(max-width: 1280px) 100vw, 576px"
            />
          </div>

          <div className="rounded-[40px] bg-brand-panel px-3 py-8 sm:px-6 sm:py-10 xl:absolute xl:left-[648px] xl:top-[10px] xl:w-[632px] xl:px-[22px] xl:pb-10 xl:pt-10">
            <RegistrationForm />
          </div>
        </div>
      </div>
    </section>
  );
}
