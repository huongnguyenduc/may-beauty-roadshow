"use client";

import type { ReactNode } from "react";
import { useState } from "react";

const GROWTH_CHALLENGES = [
  "Tỷ lệ chuyển đổi thấp",
  "Chi phí Ads cao nhưng ROAS thấp",
  "Khó kết nối Livestream – Video – Affiliate",
  "KOC/KOL chưa hiệu quả",
  "Thiếu công cụ đo lường.",
] as const;

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Vietnamese phone number validation (formats: +84, 0, with hyphens/spaces)
const PHONE_REGEX = /^(\+84|0)[1-9]\d{8,9}$/;

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

function ErrorMessage({ children }: { children: ReactNode }) {
  return <p className="text-xs text-red-600 mt-1">{children}</p>;
}

function SuccessModal() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex items-center gap-3 rounded-[42.5px] bg-[#e2e4e5] px-4 py-4 shadow-lg">
        <svg
          className="h-16 w-16 flex-shrink-0 text-[#509e53]"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm font-medium text-[#509e53] whitespace-nowrap">
          Đã đăng ký thành công
        </p>
      </div>
    </div>
  );
}

function ErrorModal({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="flex flex-col items-center gap-4 rounded-[15px] bg-white px-8 py-8 shadow-lg max-w-sm">
        <svg
          className="h-12 w-12 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4v2m0-6a9 9 0 100 18 9 9 0 000-18z"
          />
        </svg>
        <p className="text-base text-center text-black font-medium">{message}</p>
        <button
          onClick={onClose}
          className="h-10 rounded-[37px] bg-brand-red px-8 text-sm font-bold uppercase text-white transition hover:opacity-95"
        >
          Đóng
        </button>
      </div>
    </div>
  );
}

type SubmissionStatus = "idle" | "loading" | "success" | "error";

export function RegistrationForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    companyEmail: "",
    phone: "",
    growthChallenges: [] as string[],
    speakerQuestion: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    // Validate required fields
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Họ và tên là bắt buộc";
    }
    if (!formData.jobTitle.trim()) {
      newErrors.jobTitle = "Chức danh là bắt buộc";
    }
    if (!formData.companyEmail.trim()) {
      newErrors.companyEmail = "Email công ty là bắt buộc";
    } else if (!EMAIL_REGEX.test(formData.companyEmail)) {
      newErrors.companyEmail = "Email không hợp lệ";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Số điện thoại là bắt buộc";
    } else if (!PHONE_REGEX.test(formData.phone.replace(/[\s-]/g, ""))) {
      newErrors.phone = "Số điện thoại không hợp lệ (ví dụ: 0901234567 hoặc +84901234567)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      const isChecked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        growthChallenges: isChecked
          ? [...prev.growthChallenges, value]
          : prev.growthChallenges.filter((item) => item !== value),
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmissionStatus("loading");
      (async () => {
        try {
          const res = await fetch("/api/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          if (!res.ok || !data.ok) {
            setErrorMessage(data.error || "Gửi thất bại. Vui lòng thử lại.");
            setSubmissionStatus("error");
            return;
          }
          // Reset form and show success
          setFormData({
            fullName: "",
            jobTitle: "",
            companyEmail: "",
            phone: "",
            growthChallenges: [],
            speakerQuestion: "",
          });
          setSubmissionStatus("success");
          // Auto-hide success after 3 seconds
          setTimeout(() => {
            setSubmissionStatus("idle");
          }, 3000);
        } catch (err) {
          setErrorMessage(err instanceof Error ? err.message : "Lỗi mạng");
          setSubmissionStatus("error");
        } finally {
          setIsSubmitting(false);
        }
      })();
    }
  };

  return (
    <form
      id="registration-form"
      className="flex max-xl:pb-8 w-full scroll-mt-24 sm:mx-auto sm:max-w-[588px] flex-col gap-6 sm:gap-[60px] rounded-[15px] border border-brand-border bg-white p-8"
      action="#"
      method="post"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="fullName">Họ và Tên*</FieldLabel>
        <input
          id="fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          value={formData.fullName}
          onChange={handleChange}
          className="h-9 w-full border-0 border-b border-brand-border bg-transparent pb-1 text-base text-black outline-none transition focus:border-brand-red"
        />
        {errors.fullName && <ErrorMessage>{errors.fullName}</ErrorMessage>}
      </div>

      <div className="flex flex-col gap-2">
        <FieldLabel htmlFor="jobTitle">Chức Danh*</FieldLabel>
        <input
          id="jobTitle"
          name="jobTitle"
          type="text"
          autoComplete="organization-title"
          value={formData.jobTitle}
          onChange={handleChange}
          className="h-9 w-full border-0 border-b border-brand-border bg-transparent pb-1 text-base text-black outline-none transition focus:border-brand-red"
        />
        {errors.jobTitle && <ErrorMessage>{errors.jobTitle}</ErrorMessage>}
      </div>

      <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-8">
        <div className="flex min-w-0 flex-col gap-2">
          <FieldLabel htmlFor="companyEmail">Email Công Ty*</FieldLabel>
          <input
            id="companyEmail"
            name="companyEmail"
            type="email"
            autoComplete="email"
            value={formData.companyEmail}
            onChange={handleChange}
            className="h-9 w-full border-0 border-b border-brand-border bg-transparent pb-1 text-base text-black outline-none transition focus:border-brand-red"
          />
          {errors.companyEmail && <ErrorMessage>{errors.companyEmail}</ErrorMessage>}
        </div>
        <div className="flex min-w-0 flex-col gap-2">
          <FieldLabel htmlFor="phone">Số điện thoại*</FieldLabel>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formData.phone}
            onChange={handleChange}
            className="h-9 w-full border-0 border-b border-brand-border bg-transparent pb-1 text-base text-black outline-none transition focus:border-brand-red"
          />
          {errors.phone && <ErrorMessage>{errors.phone}</ErrorMessage>}
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
                className="flex cursor-pointer items-center gap-2 text-xs leading-snug text-black sm:text-[12px] sm:leading-normal"
              >
                <input
                  id={id}
                  name="growthChallenges"
                  type="checkbox"
                  value={label}
                  checked={formData.growthChallenges.includes(label)}
                  onChange={handleChange}
                  className="h-4 w-4 shrink-0 rounded-sm border border-neutral-400 text-brand-red accent-brand-red"
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
          value={formData.speakerQuestion}
          onChange={handleChange}
          className="min-h-[114px] w-full resize-y border-0 border-b border-brand-border bg-transparent pb-2 text-base text-black outline-none transition focus:border-brand-red"
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="h-11 md:w-full md:max-w-[320px] rounded-[37px] bg-brand-red px-8 text-base font-extrabold uppercase text-white transition hover:opacity-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
        >
          {isSubmitting ? "Đang gửi..." : "Submit"}
        </button>
      </div>

      {submissionStatus === "success" && <SuccessModal />}
      {submissionStatus === "error" && (
        <ErrorModal
          message={errorMessage}
          onClose={() => setSubmissionStatus("idle")}
        />
      )}
    </form>
  );
}
