"use client";

import { useI18n } from "@/lib/i18n";
import { BookOpen, BarChart, AlertTriangle, Lightbulb, ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";

const iconList = [BookOpen, AlertTriangle, Lightbulb, BarChart];

export default function Research() {
  const { t } = useI18n();
  const loc = t("nav.home") === "Home" ? "en" : t("nav.home") === "Басты бет" ? "kz" : "ru";

  const papers = [
    { key: "research.whitebook", meta: "2024 · 297 p. · ISBN 978-601-08-4628-9", extra: loc === "ru" ? "С.А. Коновалов, Д.М. Айкенова, А.Н. Кушкимбаев. Министерство культуры и информации РК." : "S.A. Konovalov, D.M. Aikenova, A.N. Kushkimbayev." },
    { key: "research.violence", meta: "2024 · 369 p. · 10 FGDs · 7 cities", extra: loc === "ru" ? "81 участник из 150+ НПО. Астана, Алматы, Шымкент, Караганда, Актобе, Семей, Актау." : "81 participants from 150+ NGOs across 7 cities." },
    { key: "research.consciousness", meta: "2024 · 1 229 respondents", extra: loc === "ru" ? "72% казахской этничности, 18,6% русской. Анализ «Ұят» как фактора уязвимости." : "72% Kazakh, 18.6% Russian. 'Uyat' as vulnerability factor." },
    { key: "research.quality", meta: "2024–2025 · all regions", extra: loc === "ru" ? "Методологическое пособие ISBN 978-601-08-4631-9." : "Manual ISBN 978-601-08-4631-9." },
  ];

  return (
    <section id="research" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <BlurFade delay={0.1} inView>
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#16a34a] mb-4">{t("nav.research")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)] leading-snug mb-3">{t("research.title")}</h2>
              <p className="text-base text-[var(--fg-muted)] mb-10">{t("research.subtitle")}</p>
            </BlurFade>

            <div className="space-y-3">
              {papers.map((p, i) => {
                const Icon = iconList[i];
                return (
                  <BlurFade key={p.key} delay={0.2 + i * 0.08} inView>
                    <div className="relative rounded-xl bg-[var(--bg-elevated)] border border-[var(--border)] p-5 group overflow-hidden hover:border-[var(--fg-muted)] transition-all hover:-translate-y-0.5 shadow-sm">
                      {i === 0 && <BorderBeam size={50} duration={12} colorFrom="#16a34a" colorTo="#34d399" />}
                      <div className="flex items-start gap-4">
                        <div className="w-9 h-9 rounded-lg bg-[rgba(22,163,74,0.08)] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                          <Icon className="w-4 h-4 text-[#16a34a]" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-mono text-[var(--fg-muted)] mb-1">{p.meta}</p>
                          <h3 className="text-base font-semibold text-[var(--fg)] mb-1 group-hover:text-[#16a34a] transition-colors">{t(`${p.key}.title`)}</h3>
                          <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-1">{t(`${p.key}.desc`)}</p>
                          <p className="text-xs text-[var(--fg-muted)]">{p.extra}</p>
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-[var(--fg-muted)] group-hover:text-[var(--fg-secondary)] transition-opacity flex-shrink-0" />
                      </div>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>

          <BlurFade delay={0.3} inView direction="right">
            <div className="relative hidden lg:block sticky top-32">
              <div className="relative w-full aspect-square max-w-[400px] ml-auto">
                <Image src="/illustrations/research-docs.svg" alt="Publications" fill className="object-contain" />
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
