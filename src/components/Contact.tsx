"use client";

import { useI18n } from "@/lib/i18n";
import { Send, ArrowUpRight } from "lucide-react";
import { useState, FormEvent } from "react";
import { BlurFade } from "@/components/ui/blur-fade";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { Ripple } from "@/components/ui/ripple";
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
        {/* UN Globe banner with ripple */}
        <BlurFade delay={0.1} inView>
          <div className="relative rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] p-6 sm:p-8 mb-16 overflow-hidden shadow-sm">
            <Ripple className="opacity-10" />
            <div className="grid lg:grid-cols-2 gap-8 items-center relative z-10">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#16a34a] mb-3">{t("footer.un")}</p>
                <h3 className="text-2xl sm:text-3xl font-bold text-[var(--fg)] mb-4 leading-snug">
                  {loc === "ru" ? "Международное представительство" : "International representation"}
                </h3>
                <div className="space-y-2 text-sm text-[var(--fg-muted)] mb-4">
                  <p>UN Commission on the Status of Women (CSW70) — New York</p>
                  <p>International Sociological Association (ISA)</p>
                  <p>CEDAW — Convention on Elimination of Discrimination Against Women</p>
                  <p>ILO Convention No. 190 on Violence and Harassment</p>
                </div>
                <p className="text-xs text-[var(--fg-muted)]">
                  Church Center of the UN · 777 UN Plaza · New York · March 13, 2026
                </p>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative w-full aspect-square max-w-[320px] ml-auto">
                  <Image src="/illustrations/un-globe.svg" alt="Global connections" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </BlurFade>

        {/* Form section */}
        <BlurFade delay={0.2} inView>
          <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#16a34a] mb-4">{t("nav.contact")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)] leading-snug mb-14">{t("contact.subtitle")}</h2>
        </BlurFade>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <BlurFade delay={0.25} inView>
              <div className="space-y-8 mb-10">
                <div><p className="text-xs uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-1">{t("contact.address")}</p><p className="text-base text-[var(--fg)]">{t("kz.fact")}</p></div>
                <div><p className="text-xs uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-1">Email</p><a href="mailto:info@icp-inap.kz" className="text-base text-[#16a34a] hover:underline inline-flex items-center gap-1">info@icp-inap.kz <ArrowUpRight className="w-3 h-3" /></a></div>
                <div><p className="text-xs uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-1">Web</p><a href="https://www.icp-inap.kz" target="_blank" rel="noopener noreferrer" className="text-base text-[#16a34a] hover:underline inline-flex items-center gap-1">icp-inap.kz <ArrowUpRight className="w-3 h-3" /></a></div>
              </div>
            </BlurFade>
            <BlurFade delay={0.35} inView>
              <div className="pt-8 border-t border-[var(--border)]">
                <p className="text-xs uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-4">
                  {loc === "ru" ? "Законодательные достижения 2024" : "2024 Legislative achievements"}
                </p>
                <ul className="space-y-2 text-sm text-[var(--fg-muted)]">
                  {[
                    loc === "ru" ? "Криминализация побоев и причинения лёгкого вреда здоровью" : "Criminalization of battery and minor bodily harm",
                    loc === "ru" ? "Криминализация преследования несовершеннолетних" : "Criminalization of harassment of minors",
                    loc === "ru" ? "Наказание за сталкинг и принудительные браки" : "Punishment for stalking and forced marriages",
                    loc === "ru" ? "Институт Уполномоченного по домашнему насилию" : "Domestic Violence Commissioner (UK model)",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2"><span className="w-1 h-1 rounded-full bg-[#16a34a] mt-1.5 flex-shrink-0 opacity-50" />{item}</li>
                  ))}
                </ul>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.3} inView direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              {[{ id:"name",label:t("contact.form.name"),type:"text" },{ id:"email",label:t("contact.form.email"),type:"email" }].map((f) => (
                <div key={f.id}>
                  <label className="block text-xs uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-2">{f.label}</label>
                  <input type={f.type} required value={form[f.id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [f.id]: e.target.value })}
                    className="w-full bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--fg)] outline-none focus:border-[#16a34a]/40 transition-colors shadow-sm" />
                </div>
              ))}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-2">{t("contact.form.message")}</label>
                <textarea required rows={4} value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-[var(--bg-elevated)] border border-[var(--border)] rounded-xl px-4 py-3 text-sm text-[var(--fg)] outline-none focus:border-[#16a34a]/40 transition-colors resize-none shadow-sm" />
              </div>
              <ShimmerButton shimmerColor="#16a34a" shimmerSize="0.06em" background="rgba(22,163,74,0.1)" borderRadius="12px" className="text-base font-semibold px-6 py-3">
                <Send className="w-4 h-4 mr-2" /> {t("contact.form.send")}
              </ShimmerButton>
            </form>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
