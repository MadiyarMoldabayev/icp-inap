"use client";

import { useI18n } from "@/lib/i18n";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Ripple } from "@/components/ui/ripple";
import Image from "next/image";

export default function Statistics() {
  const { t } = useI18n();
  const loc = t("nav.home") === "Home" ? "en" : t("nav.home") === "Басты бет" ? "kz" : "ru";

  const stats = [
    { value: 104076, label: { ru: "жертв домашнего насилия зарегистрировано в 2024", en: "domestic violence victims registered in 2024", kz: "2024 жылы тіркелген құрбандар" }, color: "#16a34a" },
    { value: 56854, label: { ru: "из них — женщины", en: "of them — women", kz: "оның ішінде — әйелдер" }, color: "#0d9488" },
    { value: 70, label: { ru: "кризисных центров по стране", en: "crisis centers nationwide", kz: "ел бойынша дағдарыс орталықтары" }, color: "#0891b2" },
    { value: 23335, label: { ru: "зарегистрированных НПО", en: "registered NGOs", kz: "тіркелген ҮЕҰ" }, color: "#059669" },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — data viz illustration with ripple behind */}
          <BlurFade delay={0.15} inView>
            <div className="relative order-2 lg:order-1">
              <div className="relative w-full aspect-[3/2]">
                <Image src="/illustrations/data-viz.svg" alt="Data visualization" fill className="object-contain" />
              </div>
            </div>
          </BlurFade>

          {/* Right — numbers */}
          <div className="order-1 lg:order-2">
            <BlurFade delay={0.1} inView>
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#16a34a] mb-4">{t("stats.title")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)] leading-snug mb-3">
                {loc === "ru" ? "Данные, которые требуют действий" : "Data that demands action"}
              </h2>
              <p className="text-sm text-[var(--fg-muted)] mb-8">
                {loc === "ru" ? "Рост в 3.5× после Закона 2024 года о криминализации домашнего насилия." : "3.5x growth after the 2024 Law criminalizing domestic violence."}
              </p>
            </BlurFade>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <BlurFade key={i} delay={0.2 + i * 0.1} inView>
                  <div className="relative rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] p-5 overflow-hidden group hover:border-[var(--fg-muted)] transition-all hover:-translate-y-1 shadow-sm">
                    <div className="w-1.5 h-1.5 rounded-full mb-3" style={{ background: s.color, opacity: 0.7 }} />
                    <p className="text-2xl sm:text-3xl font-bold text-[var(--fg)] tracking-tight mb-1 tabular-nums">
                      <NumberTicker value={s.value} className="text-[var(--fg)]" />
                    </p>
                    <p className="text-xs text-[var(--fg-muted)] leading-relaxed">{s.label[loc as "ru"|"kz"|"en"]}</p>
                  </div>
                </BlurFade>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
