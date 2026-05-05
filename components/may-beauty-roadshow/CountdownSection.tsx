"use client";

import { Fragment, useEffect, useState } from "react";

/** Mốc thời gian bắt đầu sự kiện (ISO 8601). Có thể ghi đè bằng NEXT_PUBLIC_ROADSHOW_EVENT_AT. */
function getEventStartMs(): number {
  const raw =
    typeof process.env.NEXT_PUBLIC_ROADSHOW_EVENT_AT === "string" &&
    process.env.NEXT_PUBLIC_ROADSHOW_EVENT_AT.length > 0
      ? process.env.NEXT_PUBLIC_ROADSHOW_EVENT_AT
      : "2026-05-14T14:00:00+07:00";
  const ms = Date.parse(raw);
  return Number.isNaN(ms) ? Date.parse("2026-05-14T14:00:00+07:00") : ms;
}

const LABELS = [
  { key: "d", label: "NGÀY", labelClass: "text-countdown-label-soft", valueMinWidthClass: "min-w-[3ch]" },
  { key: "h", label: "GIỜ", labelClass: "text-countdown-label", valueMinWidthClass: "min-w-[2ch]" },
  { key: "m", label: "PHÚT", labelClass: "text-countdown-label", valueMinWidthClass: "min-w-[2ch]" },
  { key: "s", label: "GIÂY", labelClass: "text-countdown-label", valueMinWidthClass: "min-w-[2ch]" },
] as const;

function splitRemaining(ms: number): { d: number; h: number; m: number; s: number } {
  if (ms <= 0) return { d: 0, h: 0, m: 0, s: 0 };
  const totalSec = Math.floor(ms / 1000);
  return {
    d: Math.floor(totalSec / 86400),
    h: Math.floor((totalSec % 86400) / 3600),
    m: Math.floor((totalSec % 3600) / 60),
    s: totalSec % 60,
  };
}

export function CountdownSection() {
  const [parts, setParts] = useState<{ d: number; h: number; m: number; s: number } | null>(null);

  useEffect(() => {
    const target = getEventStartMs();

    let id: number | undefined;

    function tick() {
      const remaining = target - Date.now();
      if (remaining <= 0) {
        setParts({ d: 0, h: 0, m: 0, s: 0 });
        if (id !== undefined) window.clearInterval(id);
        return;
      }
      setParts(splitRemaining(remaining));
    }

    tick();
    id = window.setInterval(tick, 1000);
    return () => {
      if (id !== undefined) window.clearInterval(id);
    };
  }, []);

  const display = parts ?? { d: 0, h: 0, m: 0, s: 0 };
  const values: string[] = [
    String(display.d),
    String(display.h).padStart(2, "0"),
    String(display.m).padStart(2, "0"),
    String(display.s).padStart(2, "0"),
  ];

  return (
    <section
      aria-labelledby="countdown-heading"
      className="flex w-full shrink-0 flex-col items-center bg-white py-10 text-center lg:justify-start lg:py-0 lg:pt-[44px]"
    >
      <h2
        id="countdown-heading"
        className="mx-auto mb-6 max-w-[519px] px-2 text-[20px] sm:text-[clamp(1.5rem,4vw,2.5rem)] font-bold uppercase leading-normal text-brand-red lg:mb-[3px] lg:w-[519px] lg:max-w-none lg:px-0 lg:text-[40px]"
      >
        Sự kiện diễn ra sau
      </h2>
      <div className="w-full max-w-full px-2 pb-1">
        <div
          className="mx-auto inline-grid justify-items-center gap-x-4 gap-y-1 sm:gap-x-8 lg:gap-x-[61px] [grid-template-rows:auto_auto]"
          role="timer"
          aria-label="Đồng hồ đếm ngược sự kiện"
          aria-live="polite"
        >
          {LABELS.map((unit, index) => (
            <Fragment key={unit.key}>
              <span
                style={{ gridColumn: index * 2 + 1, gridRow: 1 }}
                className={`inline-block text-center tabular-nums text-[40px] sm:text-[clamp(2.5rem,8vw,5rem)] font-black leading-normal text-black lg:text-[80px] ${unit.valueMinWidthClass}`}
              >
                {values[index]}
              </span>
              <span
                style={{ gridColumn: index * 2 + 1, gridRow: 2 }}
                className={`mt-1 text-center text-[12px] sm:text-[15px] font-medium normal-case ${unit.labelClass}`}
              >
                {unit.label}
              </span>
              {index < LABELS.length - 1 ? (
                <span
                  style={{ gridColumn: index * 2 + 2, gridRow: 1 }}
                  className="flex shrink-0 items-center justify-center self-center text-[24px] sm:text-[clamp(1.75rem,5vw,3.125rem)] font-normal leading-none text-black lg:text-[50px] lg:leading-normal"
                  aria-hidden="true"
                >
                  :
                </span>
              ) : null}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
