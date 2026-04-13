"use client";

import { useI18n } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const projects = [
  { key: "projects.dv" },
  { key: "projects.values" },
  { key: "projects.ladder" },
  { key: "projects.trafficking" },
  { key: "projects.electoral" },
];

export default function Projects() {
  const { t } = useI18n();
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div className="absolute bottom-20 right-12 w-2 h-2 rounded-full bg-[var(--accent)] opacity-10 float-up" style={{ animationDuration: "8s" }} />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="mb-10">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--accent)] mb-4">{t("nav.projects")}</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] max-w-3xl leading-snug mb-2">{t("projects.title")}</h2>
          <p className="text-sm text-[var(--fg-secondary)] max-w-xl">{t("projects.subtitle")}</p>
        </motion.div>

        <div className="space-y-1">
          {projects.map((p, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={p.key} initial={{ opacity:0 }} whileInView={{ opacity:1 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}>
                <button onClick={() => setOpen(isOpen ? null : i)}
                  className={`w-full text-left px-5 py-5 rounded-xl border transition-all group ${isOpen ? "bg-[var(--bg-elevated)] border-[var(--border)]" : "border-transparent hover:bg-[var(--bg-elevated)]/50"}`}>
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-mono text-[var(--fg-muted)] w-5">{String(i+1).padStart(2,"0")}</span>
                      <h3 className="text-sm font-semibold text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors">{t(`${p.key}.title`)}</h3>
                    </div>
                    <ChevronDown className={`w-4 h-4 text-[var(--fg-muted)] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height:0,opacity:0 }} animate={{ height:"auto",opacity:1 }} exit={{ height:0,opacity:0 }} transition={{ duration:0.25 }} className="overflow-hidden">
                        <p className="text-xs text-[var(--fg-muted)] leading-relaxed mt-3 pl-9 max-w-3xl">{t(`${p.key}.desc`)}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
