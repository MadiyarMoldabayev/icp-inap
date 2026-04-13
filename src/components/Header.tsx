"use client";

import { useState, useEffect } from "react";
import { useI18n, Locale } from "@/lib/i18n";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["nav.about","nav.mission","nav.projects","nav.research","nav.team","nav.articles","nav.contact"];
const sectionIds: Record<string,string> = { "nav.about":"about","nav.mission":"mission","nav.projects":"projects","nav.research":"research","nav.team":"team","nav.articles":"articles","nav.contact":"contact" };

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  const scrollTo = (key: string) => { document.getElementById(sectionIds[key])?.scrollIntoView({ behavior: "smooth" }); setIsOpen(false); };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[var(--bg)] border-b border-[var(--border)] shadow-sm" : ""}`}
    >
      <nav className="max-w-6xl mx-auto px-6 flex items-center justify-between h-14">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="font-bold text-base tracking-wide text-[var(--fg)] hover:opacity-80 transition-opacity">
          ICP-INAP
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navItems.map((key) => (
            <button key={key} onClick={() => scrollTo(key)}
              className="text-sm text-[var(--fg-muted)] hover:text-[var(--fg-secondary)] transition-colors font-medium">
              {t(key)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5 rounded-full border border-[var(--border)] px-1 py-0.5">
            {(["ru","kz","en"] as Locale[]).map((l) => (
              <button key={l} onClick={() => setLocale(l)}
                className={`text-xs uppercase font-semibold px-2 py-1 rounded-full transition-all ${locale===l ? "bg-[var(--accent)] text-[var(--fg)]" : "text-[var(--fg-muted)] hover:text-[var(--fg-secondary)]"}`}>
                {l}
              </button>
            ))}
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-[var(--fg-muted)]">
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ opacity:0,height:0 }} animate={{ opacity:1,height:"auto" }} exit={{ opacity:0,height:0 }}
            className="lg:hidden bg-[var(--bg)] border-t border-[var(--border)] overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 py-3 space-y-0.5">
              {navItems.map((key,i) => (
                <motion.button key={key} initial={{ opacity:0,x:-8 }} animate={{ opacity:1,x:0 }} transition={{ delay:i*0.03 }}
                  onClick={() => scrollTo(key)}
                  className="block w-full text-left py-2.5 text-sm text-[var(--fg-muted)] hover:text-[var(--fg)] transition-colors">
                  {t(key)}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
