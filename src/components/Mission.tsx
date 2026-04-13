"use client";

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Heart, Shield, FlaskConical, Gavel } from "lucide-react";

const icons = [Heart, Shield, FlaskConical, Gavel];
const colors = ["text-rose-400", "text-blue-400", "text-emerald-400", "text-amber-400"];
const bgs = ["bg-rose-400/10", "bg-blue-400/10", "bg-emerald-400/10", "bg-amber-400/10"];

export default function Mission() {
  const { t } = useI18n();

  return (
    <section id="mission" className="section-padding relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute top-24 right-20 w-1.5 h-1.5 rounded-full bg-rose-400 opacity-15 float-up" style={{ animationDuration: "7s" }} />
      <div className="absolute bottom-20 left-16 w-1 h-1 rounded-full bg-emerald-400 opacity-10 float-diagonal" style={{ animationDuration: "11s" }} />
      <svg className="absolute top-1/3 left-6 w-10 h-10 float-down opacity-[0.04]" style={{ animationDuration: "8s" }} viewBox="0 0 40 40">
        <rect x="5" y="5" width="30" height="30" rx="6" fill="none" stroke="currentColor" strokeWidth="0.5" transform="rotate(15 20 20)" />
      </svg>

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--accent)] mb-4">{t("mission.title")}</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] max-w-3xl leading-snug">
            {t("mission.description")}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4">
          {[1,2,3,4].map((n, i) => {
            const Icon = icons[i];
            return (
              <motion.div key={i} initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.1 }}>
                <div className="card p-6 h-full group">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg ${bgs[i]} flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                      <Icon className={`w-5 h-5 ${colors[i]}`} />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--fg)] mb-1.5">{t(`mission.value${n}.title`)}</h3>
                      <p className="text-xs text-[var(--fg-muted)] leading-relaxed">{t(`mission.value${n}.desc`)}</p>
                    </div>
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
