"use client";

import { useI18n } from "@/lib/i18n";

const links = [
  { key:"nav.about",id:"about" },{ key:"nav.mission",id:"mission" },{ key:"nav.projects",id:"projects" },
  { key:"nav.research",id:"research" },{ key:"nav.team",id:"team" },{ key:"nav.contact",id:"contact" },
];

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid md:grid-cols-3 gap-8 mb-10">
          <div>
            <p className="font-bold text-sm text-[var(--fg)] mb-2">ICP-INAP</p>
            <p className="text-xs text-[var(--fg-muted)] leading-relaxed">{t("footer.description")}</p>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-3">{t("footer.quicklinks")}</p>
            <div className="grid grid-cols-2 gap-1">
              {links.map((l) => (
                <button key={l.key} onClick={() => document.getElementById(l.id)?.scrollIntoView({ behavior:"smooth" })}
                  className="text-left text-xs text-[var(--fg-muted)] hover:text-[var(--fg-secondary)] transition-colors py-0.5">{t(l.key)}</button>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[10px] uppercase tracking-wider text-[var(--fg-muted)] font-semibold mb-3">{t("footer.un")}</p>
            <div className="space-y-1 text-xs text-[var(--fg-muted)]">
              <p>UN CSW70 · ISA · CEDAW</p>
              <p>ILO Convention No. 190</p>
              <p>info@icp-inap.kz</p>
            </div>
          </div>
        </div>
        <div className="pt-6 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-[var(--fg-muted)]">&copy; {new Date().getFullYear()} ICP-INAP.KZ — {t("footer.rights")}</p>
          <p className="text-[10px] text-[var(--fg-muted)] opacity-40">Astana, Kazakhstan</p>
        </div>
      </div>
    </footer>
  );
}
