import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vereen Digital — Marketing at a human pace",
  description:
    "Vereen Digital is a performance marketing partner for mid-market B2B companies. AI SEO, paid search, paid social and website development, measured against pipeline — not clicks.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
