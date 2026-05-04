import type { Metadata } from "next";
import { gilroy } from "./fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "May Beauty Roadshow",
  description: "Đăng ký tham dự miễn phí",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${gilroy.variable} font-sans antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
