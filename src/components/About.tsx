"use client";

import { useI18n } from "@/lib/i18n";
import { BarChart3, Scale, Globe2 } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { BorderBeam } from "@/components/ui/border-beam";
import { NumberTicker } from "@/components/ui/number-ticker";
import Image from "next/image";

export default function About() {
  const { t } = useI18n();
  const loc = t("nav.home") === "Home" ? "en" : t("nav.home") === "Басты бет" ? "kz" : "ru";

  const pillars = [
    { icon: BarChart3, title: t("about.feature1.title"), desc: t("about.feature1.desc"), val: 1229, label: loc === "ru" ? "респондентов" : "respondents", color: "#16a34a" },
    { icon: Scale, title: t("about.feature2.title"), desc: t("about.feature2.desc"), val: 23335, label: loc === "ru" ? "НПО в Казахстане" : "NGOs in Kazakhstan", color: "#0d9488" },
    { icon: Globe2, title: t("about.feature3.title"), desc: t("about.feature3.desc"), val: 4, label: loc === "ru" ? "конвенции ООН" : "UN conventions", color: "#0891b2" },
  ];

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top: text + map */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <BlurFade delay={0.1} inView>
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#16a34a] mb-4">{t("nav.about")}</p>
            </BlurFade>
            <BlurFade delay={0.2} inView>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)] mb-4 leading-snug">{t("about.title")}</h2>
            </BlurFade>
            <BlurFade delay={0.3} inView>
              <p className="text-base text-[var(--fg-muted)] leading-relaxed mb-4">{t("about.description")}</p>
            </BlurFade>
            <BlurFade delay={0.4} inView>
              <p className="text-sm text-[var(--fg-muted)] leading-relaxed">
                {loc === "ru"
                  ? "23 335 зарегистрированных НПО (18 204 активны) — рост в 7 раз с 2003 года. Исследования в Астане, Алматы, Шымкенте, Караганде, Актобе, Семее и Актау."
                  : "23,335 registered NGOs (18,204 active) — 7x growth since 2003. Research across Astana, Almaty, Shymkent, Karaganda, Aktobe, Semey, Aktau."}
              </p>
            </BlurFade>
          </div>

          <BlurFade delay={0.3} inView direction="right">
            <div className="relative w-full aspect-[9/5]">
              <Image src="/illustrations/map-kz.svg" alt="Research coverage" fill className="object-contain" />
            </div>
          </BlurFade>
        </div>

        {/* Pillar cards with BorderBeam */}
        <div className="grid md:grid-cols-3 gap-5">
          {pillars.map((p, i) => {
            const Icon = p.icon;
            return (
              <BlurFade key={i} delay={0.2 + i * 0.12} inView>
                <div className="relative rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] p-6 h-full group overflow-hidden hover:border-[var(--fg-muted)] transition-all duration-300 hover:-translate-y-1 shadow-sm">
                  <BorderBeam size={60} duration={10 + i * 2} colorFrom={p.color} colorTo="#34d399" delay={i * 2} />
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-5 group-hover:scale-105 transition-transform" style={{ background: `${p.color}15` }}>
                    <Icon className="w-5 h-5" style={{ color: p.color }} />
                  </div>
                  <h3 className="text-base font-semibold text-[var(--fg)] mb-2">{p.title}</h3>
                  <p className="text-sm text-[var(--fg-muted)] leading-relaxed mb-5">{p.desc}</p>
                  <div className="pt-4 border-t border-[var(--border)] flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-[var(--fg)] tabular-nums">
                      <NumberTicker value={p.val} className="text-[var(--fg)]" />
                    </span>
                    <span className="text-xs text-[var(--fg-muted)] uppercase tracking-wider">{p.label}</span>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
