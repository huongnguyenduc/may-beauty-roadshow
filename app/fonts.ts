import localFont from "next/font/local";

/** SVN-Gilroy — files live in `/font` at project root */
export const gilroy = localFont({
  src: [
    { path: "../font/SVN-Gilroy Thin.otf", weight: "100", style: "normal" },
    { path: "../font/SVN-Gilroy Thin Italic.otf", weight: "100", style: "italic" },
    { path: "../font/SVN-Gilroy Xlight.otf", weight: "200", style: "normal" },
    { path: "../font/SVN-Gilroy Xlight Italic.otf", weight: "200", style: "italic" },
    { path: "../font/SVN-Gilroy Light.otf", weight: "300", style: "normal" },
    { path: "../font/SVN-Gilroy Light Italic.otf", weight: "300", style: "italic" },
    { path: "../font/SVN-Gilroy Regular.otf", weight: "400", style: "normal" },
    { path: "../font/SVN-Gilroy Italic.otf", weight: "400", style: "italic" },
    { path: "../font/SVN-Gilroy Medium.otf", weight: "500", style: "normal" },
    { path: "../font/SVN-Gilroy Medium Italic.otf", weight: "500", style: "italic" },
    { path: "../font/SVN-Gilroy SemiBold.otf", weight: "600", style: "normal" },
    { path: "../font/SVN-Gilroy SemiBold Italic.otf", weight: "600", style: "italic" },
    { path: "../font/SVN-Gilroy Bold.otf", weight: "700", style: "normal" },
    { path: "../font/SVN-Gilroy Bold Italic.otf", weight: "700", style: "italic" },
    { path: "../font/SVN-Gilroy XBold.otf", weight: "800", style: "normal" },
    { path: "../font/SVN-Gilroy XBold Italic.otf", weight: "800", style: "italic" },
    { path: "../font/SVN-Gilroy Heavy.otf", weight: "850", style: "normal" },
    { path: "../font/SVN-Gilroy Heavy Italic.otf", weight: "850", style: "italic" },
    { path: "../font/SVN-Gilroy Black.otf", weight: "900", style: "normal" },
    { path: "../font/SVN-Gilroy Black Italic.otf", weight: "900", style: "italic" },
  ],
  variable: "--font-gilroy",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});
