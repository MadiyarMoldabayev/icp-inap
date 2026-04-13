"use client";

import { useI18n } from "@/lib/i18n";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 60]);
  const imgY = useTransform(scrollYProgress, [0, 0.6], [0, -40]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Subtle bg gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-10%,rgba(79,140,255,0.07),transparent)]" />

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left — text */}
        <motion.div style={{ opacity, y }}>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--accent)] mb-5"
          >
            {t("about.founded")}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-[2.75rem] font-bold tracking-tight leading-[1.15] text-[var(--fg)] mb-5"
          >
            {t("hero.title")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-sm text-[var(--fg-secondary)] max-w-md leading-relaxed mb-8"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-3 mb-12"
          >
            <button
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2.5 rounded-full bg-[var(--accent)] text-white text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-blue-500/20"
            >
              {t("hero.cta")}
            </button>
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-6 py-2.5 rounded-full border border-[var(--border)] text-[var(--fg-secondary)] text-sm font-semibold hover:border-white/15 hover:text-[var(--fg)] transition-all"
            >
              {t("hero.projects_cta")}
            </button>
          </motion.div>

          {/* Quick stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            className="flex items-center gap-8"
          >
            {[
              { val: "297", label: "pages White Book" },
              { val: "5 000+", label: "respondents" },
              { val: "7", label: "cities" },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-lg font-bold text-[var(--fg)]">{s.val}</p>
                <p className="text-[9px] uppercase tracking-wider text-[var(--fg-muted)]">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right — illustration */}
        <motion.div
          style={{ y: imgY }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative hidden lg:block"
        >
          <div className="relative w-full aspect-square max-w-[500px] ml-auto">
            <Image src="/illustrations/hero-abstract.svg" alt="" fill className="object-contain" priority />
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </section>
  );
}
