"use client";

import type { ReactNode } from "react";

const GROWTH_CHALLENGES = [
  "Tỷ lệ chuyển đổi thấp",
  "Chi phí Ads cao nhưng ROAS thấp",
  "Khó kết nối Livestream – Video – Affiliate",
  "KOC/KOL chưa hiệu quả",
  "Thiếu công cụ đo lường.",
] as const;

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: ReactNode }) {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-normal leading-5 text-brand-ink"
    >
      {children}
    </label>
  );
}

export function RegistrationForm() {
  return (
    <form
      className="mx-auto flex w-full max-w-[588px] flex-col gap-[60px] rounded-[15px] border border-brand-border bg-white p-6 sm:p-8"
      action="#"
      method="post"
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="fullName">Họ và Tên*</FieldLabel>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          required
          className="h-[27px] w-full border-0 border-b border-brand-border bg-transparent pb-1 text-base text-black outline-none transition focus:border-brand-red"
        />
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="jobTitle">Chức Danh*</FieldLabel>
        <input
          id="jobTitle"
          name="jobTitle"
          type="text"
          autoComplete="organization-title"
          required
          className="h-[27px] w-full border-0 border-b border-brand-border bg-transparent pb-1 text-base text-black outline-none transition focus:border-brand-red"
        />
      </div>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-8">
        <div className="flex min-w-0 flex-col gap-2">
          <FieldLabel htmlFor="companyEmail">Email Công Ty*</FieldLabel>
          <input
            id="companyEmail"
            name="companyEmail"
            type="email"
            autoComplete="email"
            required
            className="h-[27px] w-full border-0 border-b border-brand-border bg-transparent pb-1 text-base text-black outline-none transition focus:border-brand-red"
          />
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <FieldLabel htmlFor="phone">Số điện thoại*</FieldLabel>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className="h-[27px] w-full border-0 border-b border-brand-border bg-transparent pb-1 text-base text-black outline-none transition focus:border-brand-red"
          />
        </div>
      </div>

      <fieldset className="flex min-w-0 flex-col gap-4 border-0 p-0">
        <legend className="text-sm font-normal text-black">Bài toán tăng trưởng bạn đang gặp?</legend>
        <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-8">
          {GROWTH_CHALLENGES.map((label, index) => {
            const id = `growth-${index}`;
            return (
              <label
                key={label}
                htmlFor={id}
                className="flex cursor-pointer items-start gap-2 text-xs leading-snug text-black sm:text-[12px] sm:leading-normal"
              >
                <input
                  id={id}
                  name="growthChallenges"
                  type="checkbox"
                  value={label}
                  className="mt-[3px] size-[9px] shrink-0 rounded-sm border border-neutral-400 text-brand-red accent-brand-red"
                />
                <span className="min-w-0">{label}</span>
              </label>
            );
          })}
        </div>
      </fieldset>

      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="speakerQuestion">
          Câu hỏi dành cho diễn giả/ khách mời tại sự kiện?
        </FieldLabel>
        <textarea
          id="speakerQuestion"
          name="speakerQuestion"
          rows={4}
          className="min-h-[114px] w-full resize-y border-0 border-b border-brand-border bg-transparent pb-2 text-base text-black outline-none transition focus:border-brand-red"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="h-11 w-full max-w-[524px] rounded-[37px] bg-brand-red px-8 text-base font-extrabold uppercase text-white transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
