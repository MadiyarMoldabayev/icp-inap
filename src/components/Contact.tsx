"use client";

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { Send, ArrowUpRight } from "lucide-react";
import { useState, FormEvent } from "react";
import Image from "next/image";

export default function Contact() {
  const { t } = useI18n();
  const loc = t("nav.home") === "Home" ? "en" : t("nav.home") === "Басты бет" ? "kz" : "ru";
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:info@icp-inap.kz?subject=Message from ${form.name}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${form.email}`;
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* UN Globe + affiliations banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="card p-6 sm:p-8 mb-16 overflow-hidden relative"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--accent)] mb-3">{t("footer.un")}</p>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--fg)] mb-4 leading-snug">
                {loc === "ru" ? "Представительство на международном уровне" : loc === "kz" ? "Халықаралық деңгейде өкілдік" : "International representation"}
              </h3>
              <div className="space-y-2 text-xs text-[var(--fg-secondary)] mb-6">
                <p>UN Commission on the Status of Women (CSW70) — New York</p>
                <p>International Sociological Association (ISA)</p>
                <p>CEDAW — Convention on Elimination of Discrimination Against Women</p>
                <p>ILO Convention No. 190 on Violence and Harassment</p>
                <p>Palermo Protocol — Anti-trafficking legislation alignment</p>
              </div>
              <p className="text-[10px] text-[var(--fg-muted)]">
                {loc === "ru"
                  ? "Вебинар «Социологические подходы к гендерной справедливости» — Church Center ООН, 777 UN Plaza, Нью-Йорк, 13 марта 2026"
                  : "Webinar 'Sociological Approaches to Gender Justice' — Church Center of the UN, 777 UN Plaza, New York, March 13, 2026"}
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square max-w-[360px] ml-auto">
                <Image src="/illustrations/un-globe.svg" alt="International connections" fill className="object-contain" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact form section */}
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--accent)] mb-4">{t("nav.contact")}</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] max-w-3xl leading-snug">{t("contact.subtitle")}</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }}>
            <div className="space-y-8 mb-10">
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-1">{t("contact.address")}</p>
                <p className="text-sm text-[var(--fg)]">{t("kz.fact")}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-1">Email</p>
                <a href="mailto:info@icp-inap.kz" className="text-sm text-[var(--accent)] hover:underline inline-flex items-center gap-1">
                  info@icp-inap.kz <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-1">Web</p>
                <a href="https://www.icp-inap.kz" target="_blank" rel="noopener noreferrer" className="text-sm text-[var(--accent)] hover:underline inline-flex items-center gap-1">
                  icp-inap.kz <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Legislative achievements */}
            <div className="pt-8 border-t border-[var(--border)]">
              <p className="text-[10px] uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-4">
                {loc === "ru" ? "Законодательные достижения 2024" : "2024 Legislative achievements"}
              </p>
              <ul className="space-y-2 text-xs text-[var(--fg-muted)]">
                <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />{loc === "ru" ? "Криминализация побоев и причинения лёгкого вреда здоровью" : "Criminalization of battery and minor bodily harm"}</li>
                <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />{loc === "ru" ? "Криминализация преследования несовершеннолетних (онлайн и оффлайн)" : "Criminalization of harassment of minors (online & offline)"}</li>
                <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />{loc === "ru" ? "Пожизненное заключение за тяжкие преступления против несовершеннолетних" : "Life imprisonment for severe crimes against minors"}</li>
                <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />{loc === "ru" ? "Наказание за сталкинг и принудительные браки" : "Punishment for stalking and forced marriages"}</li>
                <li className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-[var(--accent)] mt-1.5 flex-shrink-0" />{loc === "ru" ? "Институт Уполномоченного по домашнему насилию (модель Великобритании)" : "Domestic Violence Commissioner (UK model)"}</li>
              </ul>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity:0,y:24 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} onSubmit={handleSubmit} className="space-y-5">
            {[
              { id: "name", label: t("contact.form.name"), type: "text" },
              { id: "email", label: t("contact.form.email"), type: "email" },
            ].map((f) => (
              <div key={f.id}>
                <label className="block text-[10px] uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-2">{f.label}</label>
                <input type={f.type} required value={form[f.id as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                  className="w-full bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--fg)] outline-none focus:border-[var(--accent)]/40 transition-colors" />
              </div>
            ))}
            <div>
              <label className="block text-[10px] uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-2">{t("contact.form.message")}</label>
              <textarea required rows={4} value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--fg)] outline-none focus:border-[var(--accent)]/40 transition-colors resize-none" />
            </div>
            <button type="submit" className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--accent)] text-white text-sm font-semibold hover:brightness-110 transition-all shadow-lg shadow-blue-500/20">
              <Send className="w-4 h-4" /> {t("contact.form.send")}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
