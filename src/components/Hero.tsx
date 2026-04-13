"use client";

import { useI18n } from "@/lib/i18n";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Particles } from "@/components/ui/particles";
import { DotPattern } from "@/components/ui/dot-pattern";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BlurFade } from "@/components/ui/blur-fade";
import { WordRotate } from "@/components/ui/word-rotate";
import { NumberTicker } from "@/components/ui/number-ticker";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";

export default function Hero() {
  const { t } = useI18n();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, 60]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Particles background */}
      <Particles className="absolute inset-0 opacity-40" quantity={50} color="#16a34a" size={0.5} staticity={40} ease={40} />

      {/* Dot pattern overlay */}
      <DotPattern className="[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] opacity-10 text-[#16a34a]/10" width={24} height={24} cr={0.6} />

      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-10 items-center relative z-10">
        {/* Left — text */}
        <motion.div style={{ opacity, y }}>
          <BlurFade delay={0.2} inView>
            <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#16a34a] mb-5">
              {t("about.founded")}
            </p>
          </BlurFade>

          <BlurFade delay={0.35} inView>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.15] text-[var(--fg)] mb-3">
              {t("hero.title")}
            </h1>
          </BlurFade>

          <BlurFade delay={0.5} inView>
            <div className="flex items-center gap-2 text-base text-[var(--fg-secondary)] mb-6">
              <WordRotate
                words={[
                  t("about.feature1.title"),
                  t("about.feature2.title"),
                  t("about.feature3.title"),
                ]}
                className="text-[#16a34a] font-semibold"
              />
            </div>
          </BlurFade>

          <BlurFade delay={0.65} inView>
            <p className="text-base text-[var(--fg-muted)] max-w-md leading-relaxed mb-8">
              {t("hero.subtitle")}
            </p>
          </BlurFade>

          <BlurFade delay={0.8} inView>
            <div className="flex items-center gap-3 mb-10">
              <ShimmerButton
                shimmerColor="#16a34a"
                shimmerSize="0.08em"
                background="rgba(22,163,74,0.12)"
                borderRadius="12px"
                className="text-base font-semibold px-6 py-3"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
              >
                {t("hero.cta")}
              </ShimmerButton>
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 rounded-xl border border-[var(--border)] text-[var(--fg-muted)] text-base font-semibold hover:border-[var(--fg-muted)] hover:text-[var(--fg-secondary)] transition-all"
              >
                {t("hero.projects_cta")}
              </button>
            </div>
          </BlurFade>

          {/* Stats row */}
          <BlurFade delay={1} inView>
            <div className="flex items-center gap-8">
              {[
                { val: 297, label: "pages" },
                { val: 5000, label: "respondents" },
                { val: 7, label: "cities" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-xl font-bold text-[var(--fg)] tabular-nums">
                    <NumberTicker value={s.val} className="text-[var(--fg)]" />
                    {s.val === 5000 && "+"}
                  </p>
                  <p className="text-xs uppercase tracking-wider text-[var(--fg-muted)]">{s.label}</p>
                </div>
              ))}
            </div>
          </BlurFade>
        </motion.div>

        {/* Right — illustration with border beam */}
        <BlurFade delay={0.4} inView direction="right">
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-[460px] ml-auto rounded-2xl overflow-hidden">
              <Image src="/illustrations/hero-abstract.svg" alt="" fill className="object-contain" priority />
              <BorderBeam size={80} duration={8} colorFrom="#16a34a" colorTo="#34d399" />
            </div>
          </div>
        </BlurFade>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--bg)] to-transparent" />
    </section>
  );
}
