import type { Metadata } from "next";
import { Montserrat, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "ICP-INAP | Институт Современной Политики",
  description:
    "Общественный Фонд «Институт современной политики» — ведущая исследовательская и правозащитная организация Казахстана.",
  openGraph: {
    title: "ICP-INAP | Institute of Contemporary Politics",
    description: "Leading research and advocacy organization in Kazakhstan.",
    url: "https://icp-inap.kz",
    siteName: "ICP-INAP",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru" className={cn("h-full", montserrat.variable, "font-sans", geist.variable)}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
