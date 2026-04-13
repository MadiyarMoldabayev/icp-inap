"use client";

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { BarChart3, Scale, Globe2 } from "lucide-react";
import Image from "next/image";

export default function About() {
  const { t } = useI18n();
  const loc = t("nav.home") === "Home" ? "en" : t("nav.home") === "Басты бет" ? "kz" : "ru";

  const pillars = [
    { icon: BarChart3, title: t("about.feature1.title"), desc: t("about.feature1.desc"), stat: "1 229", statLabel: loc === "ru" ? "респондентов" : "respondents" },
    { icon: Scale, title: t("about.feature2.title"), desc: t("about.feature2.desc"), stat: "23 335", statLabel: loc === "ru" ? "НПО в Казахстане" : "NGOs in Kazakhstan" },
    { icon: Globe2, title: t("about.feature3.title"), desc: t("about.feature3.desc"), stat: "4", statLabel: loc === "ru" ? "конвенции ООН" : "UN conventions" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top: text + map illustration */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.7 }}>
            <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--accent)] mb-4">{t("nav.about")}</p>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] mb-4 leading-snug">
              {t("about.title")}
            </h2>
            <p className="text-sm text-[var(--fg-secondary)] leading-relaxed mb-4">
              {t("about.description")}
            </p>
            <p className="text-xs text-[var(--fg-muted)] leading-relaxed">
              {loc === "ru"
                ? "По данным 2023 года — 23 335 зарегистрированных НПО (18 204 активны), рост в 7 раз с 2003 года. Исследования охватывают Астану, Алматы, Шымкент, Караганду, Актобе, Семей и Актау."
                : "As of 2023 — 23,335 registered NGOs (18,204 active), 7x growth since 2003. Research covers Astana, Almaty, Shymkent, Karaganda, Aktobe, Semey, and Aktau."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-[9/5]">
              <Image src="/illustrations/map-kz.svg" alt="Research coverage across Kazakhstan" fill className="object-contain" />
            </div>
          </motion.div>
        </div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.12 }}>
                <div className="card p-6 h-full group">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-glow)] flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5 text-[var(--accent)]" />
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--fg)] mb-2">{p.title}</h3>
                  <p className="text-xs text-[var(--fg-muted)] leading-relaxed mb-5">{p.desc}</p>
                  <div className="pt-4 border-t border-[var(--border)] flex items-baseline gap-2">
                    <span className="text-xl font-bold text-[var(--fg)]">{p.stat}</span>
                    <span className="text-[10px] text-[var(--fg-muted)] uppercase tracking-wider">{p.statLabel}</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
