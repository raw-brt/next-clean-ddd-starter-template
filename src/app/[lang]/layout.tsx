import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { Locale } from "@/dictionaries";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Clean Architecture Boilerplate",
  description: "A modern Next.js boilerplate with Clean Architecture and DDD principles",
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "es" }];
}

export default function RootLayout({
  children,
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 