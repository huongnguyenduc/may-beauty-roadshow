"use client";

import { useEffect, useState } from "react";

export function StickyRegistrationButton() {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const headerSection = document.getElementById("header-section");
    const registrationForm = document.getElementById("registration-form");

    if (!headerSection || !registrationForm) {
      return;
    }

    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeaderVisible(entry?.isIntersecting ?? false);
      },
      {
        threshold: 0.1,
      }
    );

    const formObserver = new IntersectionObserver(
      ([entry]) => {
        setIsFormVisible(entry?.isIntersecting ?? false);
      },
      {
        threshold: 0.1,
      }
    );

    headerObserver.observe(headerSection);
    formObserver.observe(registrationForm);

    return () => {
      headerObserver.disconnect();
      formObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    const shouldShow = !isHeaderVisible && !isFormVisible;

    if (shouldShow) {
      setIsMounted(true);
      const animationFrame = window.requestAnimationFrame(() => {
        setIsShown(true);
      });

      return () => {
        window.cancelAnimationFrame(animationFrame);
      };
    }

    setIsShown(false);
    const timeoutId = window.setTimeout(() => {
      setIsMounted(false);
    }, 220);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isFormVisible, isHeaderVisible]);

  const handleClick = () => {
    const target = document.getElementById("registration-form");
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  if (!isMounted) {
    return null;
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-extrabold text-white shadow-[0_12px_30px_rgba(229,0,0,0.28)] transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2 focus:ring-offset-white sm:bottom-6 sm:right-6 sm:px-6 sm:py-3.5 sm:text-base ${
        isShown
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-4 scale-95 opacity-0"
      }`}
      aria-label="Đăng kí ngay"
    >
      <svg
        aria-hidden="true"
        className="h-5 w-5 shrink-0"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M4 10h8.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M9.5 5.5L14 10l-4.5 4.5"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span>ĐĂNG KÝ NGAY</span>
    </button>
  );
}