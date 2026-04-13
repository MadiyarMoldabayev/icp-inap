"use client";

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { BookOpen, BarChart, AlertTriangle, Lightbulb, ArrowUpRight } from "lucide-react";
import Image from "next/image";

const icons = [BookOpen, AlertTriangle, Lightbulb, BarChart];

export default function Research() {
  const { t } = useI18n();
  const loc = t("nav.home") === "Home" ? "en" : t("nav.home") === "Басты бет" ? "kz" : "ru";

  const papers = [
    {
      key: "research.whitebook", meta: "2024 · 297 p. · ISBN 978-601-08-4628-9",
      extra: loc === "ru" ? "Авторы: С.А. Коновалов, Д.М. Айкенова, А.Н. Кушкимбаев. При поддержке Министерства культуры и информации РК." : "Authors: S.A. Konovalov, D.M. Aikenova, A.N. Kushkimbayev.",
    },
    {
      key: "research.violence", meta: "2024 · 369 p. · 10 FGDs · 7 cities",
      extra: loc === "ru" ? "81 участник из 150+ НПО. Астана, Алматы, Шымкент, Караганда, Актобе, Семей, Актау." : "81 participants from 150+ NGOs across 7 cities.",
    },
    {
      key: "research.consciousness", meta: "2024 · 1 229 respondents",
      extra: loc === "ru" ? "72% казахской этничности, 18,6% русской, 9,4% других. Анализ «Ұят» как фактора уязвимости." : "72% Kazakh, 18.6% Russian, 9.4% other. Analysis of 'Uyat' as vulnerability factor.",
    },
    {
      key: "research.quality", meta: "2024–2025 · all regions",
      extra: loc === "ru" ? "Методологическое пособие ISBN 978-601-08-4631-9." : "Methodological manual ISBN 978-601-08-4631-9.",
    },
  ];

  return (
    <section id="research" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — text + cards */}
          <div>
            <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="mb-10">
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--accent)] mb-4">{t("nav.research")}</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] leading-snug mb-3">{t("research.title")}</h2>
              <p className="text-sm text-[var(--fg-secondary)]">{t("research.subtitle")}</p>
            </motion.div>

            <div className="space-y-3">
              {papers.map((p, i) => {
                const Icon = icons[i];
                return (
                  <motion.div key={p.key} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.08 }}>
                    <div className="card p-5 group">
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-[var(--accent-glow)] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4 text-[var(--accent)]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[9px] font-mono text-[var(--fg-muted)] mb-1">{p.meta}</p>
                          <h3 className="text-sm font-semibold text-[var(--fg)] mb-1 group-hover:text-[var(--accent)] transition-colors">{t(`${p.key}.title`)}</h3>
                          <p className="text-[11px] text-[var(--fg-muted)] leading-relaxed mb-1">{t(`${p.key}.desc`)}</p>
                          <p className="text-[10px] text-[var(--fg-muted)] opacity-50">{p.extra}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[var(--fg-muted)] opacity-0 group-hover:opacity-50 transition-opacity flex-shrink-0" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right — research docs illustration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block sticky top-32"
          >
            <div className="relative w-full aspect-square max-w-[420px] ml-auto">
              <Image src="/illustrations/research-docs.svg" alt="Research publications" fill className="object-contain" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
