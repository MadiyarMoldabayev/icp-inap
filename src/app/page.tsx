"use client";

import { useState, useCallback } from "react";
import { I18nContext, Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Statistics from "@/components/Statistics";
import Mission from "@/components/Mission";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Team from "@/components/Team";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ru");
  const t = useCallback((key: string) => getTranslation(key, locale), [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <About />
        <Statistics />
        <Mission />
        <Projects />
        <Research />
        <Team />
        <Articles />
        <Contact />
      </main>
      <Footer />
    </I18nContext.Provider>
  );
}
