import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Vereen Digital — Performance Marketing & AI SEO",
  description:
    "Vereen Digital is a performance marketing partner for high-growth B2B companies. AI SEO, Google Ads, Meta Ads and ChatGPT Ads, measured against pipeline — not clicks.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={jakarta.variable}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M48 85 C44 85 36 78 28 58 C22 42 16 26 15 15 C21 16 26 19 32 30 C40 45 47 62 49 76 Z' fill='%2389BC30'/><path d='M48 85 C50 75 56 56 67 38 C76 23 85 15 88 15 C87 28 78 46 68 62 C60 75 53 83 48 85 Z' fill='%2389BC30'/><path d='M50 82 C55 68 68 45 85 24 C88 20 90 16 88 15 C80 18 68 30 58 48 C50 63 48 76 50 82 Z' fill='%23A5DC3C'/></svg>" />
      </head>
      <body className="antialiased bg-paper text-dark selection:bg-green selection:text-white">
        {children}
      </body>
    </html>
  );
}
