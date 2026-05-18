import type { Metadata } from "next";
import Script from "next/script";
import { gilroy } from "./fonts";
import "./globals.css";

const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? process.env.GOOGLE_ANALYTICS_ID;

export const metadata: Metadata = {
  title: "Beauty Roadshow | OnPoint",
  description: "Đăng ký tham dự miễn phí",
  icons: {
    icon: "https://www.onpoint.vn/favicon-32x32.png?v=f9bbce19532d55db72dce9d5ae590834",
    apple: [
      {
        url: "https://www.onpoint.vn/icons/icon-192x192.png?v=f9bbce19532d55db72dce9d5ae590834",
        sizes: "192x192",
      },
      {
        url: "https://www.onpoint.vn/icons/icon-512x512.png?v=f9bbce19532d55db72dce9d5ae590834",
        sizes: "512x512",
      },
    ],
  },
  openGraph: {
    title: "Beauty Roadshow | OnPoint",
    description: "Đăng ký tham dự miễn phí",
    images: ["https://s3.ap-southeast-1.amazonaws.com/public.onpoint.vn/home-meta.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty Roadshow | OnPoint",
    description: "Đăng ký tham dự miễn phí",
    images: ["https://s3.ap-southeast-1.amazonaws.com/public.onpoint.vn/home-meta.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body className={`${gilroy.variable} font-sans antialiased bg-white text-black`}>
        {googleAnalyticsId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
