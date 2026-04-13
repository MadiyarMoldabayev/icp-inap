"use client";

import { useI18n } from "@/lib/i18n";
import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import Image from "next/image";

function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  useEffect(() => {
    if (!inView) return;
    let c = 0; const step = Math.max(1, Math.ceil(target / 50));
    const t = setInterval(() => { c += step; if (c >= target) { setVal(target); clearInterval(t); } else setVal(c); }, 30);
    return () => clearInterval(t);
  }, [inView, target]);
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
}

export default function Statistics() {
  const { t } = useI18n();
  const loc = t("nav.home") === "Home" ? "en" : t("nav.home") === "Басты бет" ? "kz" : "ru";

  const stats = [
    { value: 104076, suffix: "", label: { ru: "жертв домашнего насилия зарегистрировано в 2024", en: "domestic violence victims registered in 2024", kz: "2024 жылы тіркелген құрбандар" }, color: "#4f8cff" },
    { value: 56854, suffix: "", label: { ru: "из них — женщины", en: "of them — women", kz: "оның ішінде — әйелдер" }, color: "#a78bfa" },
    { value: 70, suffix: "", label: { ru: "кризисных центров по стране", en: "crisis centers nationwide", kz: "ел бойынша дағдарыс орталықтары" }, color: "#22d3ee" },
    { value: 23335, suffix: "", label: { ru: "зарегистрированных НПО", en: "registered NGOs", kz: "тіркелген ҮЕҰ" }, color: "#f472b6" },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — data viz illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative w-full aspect-[3/2]">
              <Image src="/illustrations/data-viz.svg" alt="Data visualization" fill className="object-contain" />
            </div>
          </motion.div>

          {/* Right — numbers */}
          <div className="order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--accent)] mb-4">{t("stats.title")}</p>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] leading-snug mb-3">
                {loc === "ru" ? "Данные, которые требуют действий" : loc === "kz" ? "Іс-қимыл талап ететін деректер" : "Data that demands action"}
              </h2>
              <p className="text-xs text-[var(--fg-muted)] mb-8">
                {loc === "ru" ? "Рост в 3.5× после криминализации домашнего насилия Законом 2024 года." : "3.5x growth after criminalization of domestic violence by the 2024 Law."}
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                  <div className="card p-5">
                    <div className="w-1.5 h-1.5 rounded-full mb-3" style={{ background: s.color, opacity: 0.6 }} />
                    <p className="text-xl sm:text-2xl font-bold text-[var(--fg)] tracking-tight mb-1 tabular-nums">
                      <Counter target={s.value} suffix={s.suffix} />
                    </p>
                    <p className="text-[10px] text-[var(--fg-muted)] leading-relaxed">{s.label[loc as "ru"|"kz"|"en"]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
