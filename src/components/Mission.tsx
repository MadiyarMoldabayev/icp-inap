"use client";

import { useI18n } from "@/lib/i18n";
import { Heart, Shield, FlaskConical, Gavel } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

const icons = [Heart, Shield, FlaskConical, Gavel];
const colors = ["#e11d48", "#16a34a", "#0891b2", "#d97706"];

export default function Mission() {
  const { t } = useI18n();

  return (
    <section id="mission" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — orbiting circles visual */}
          <BlurFade delay={0.15} inView>
            <div className="relative flex items-center justify-center h-[400px]">
              <span className="text-base font-bold text-[var(--fg-secondary)] z-10">{t("mission.title")}</span>
              <OrbitingCircles radius={80} duration={25} iconSize={36}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${colors[0]}15` }}>
                  <Heart className="w-4 h-4" style={{ color: colors[0] }} />
                </div>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${colors[1]}15` }}>
                  <Shield className="w-4 h-4" style={{ color: colors[1] }} />
                </div>
              </OrbitingCircles>
              <OrbitingCircles radius={150} duration={35} reverse iconSize={36}>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${colors[2]}15` }}>
                  <FlaskConical className="w-4 h-4" style={{ color: colors[2] }} />
                </div>
                <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: `${colors[3]}15` }}>
                  <Gavel className="w-4 h-4" style={{ color: colors[3] }} />
                </div>
              </OrbitingCircles>
            </div>
          </BlurFade>

          {/* Right — text */}
          <div>
            <BlurFade delay={0.1} inView>
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#16a34a] mb-4">{t("mission.title")}</p>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)] leading-snug mb-6">{t("mission.description")}</h2>
            </BlurFade>

            <div className="space-y-4">
              {[1,2,3,4].map((n, i) => {
                const Icon = icons[i];
                return (
                  <BlurFade key={i} delay={0.25 + i * 0.1} inView>
                    <div className="flex items-start gap-4 group">
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform" style={{ background: `${colors[i]}12` }}>
                        <Icon className="w-4 h-4" style={{ color: colors[i] }} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-[var(--fg)] mb-1">{t(`mission.value${n}.title`)}</h3>
                        <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{t(`mission.value${n}.desc`)}</p>
                      </div>
                    </div>
                  </BlurFade>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
