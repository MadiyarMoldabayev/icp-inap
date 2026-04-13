"use client";

import { useI18n } from "@/lib/i18n";
import { useState, useEffect } from "react";
import { getArticles, Article } from "@/lib/supabase";
import { ArrowUpRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Meteors } from "@/components/ui/meteors";

const placeholderArticles: Article[] = [
  { id:"1", title_ru:"Казахстан усиливает борьбу с домашним насилием: итоги 2025 года", title_kz:"Қазақстан отбасылық зорлық-зомбылыққа қарсы күресті күшейтуде", title_en:"Kazakhstan strengthens fight against domestic violence: 2025 results", excerpt_ru:"70 кризисных центров оказали помощь более 5 000 женщинам. Закон 2024 года криминализировал побои, сталкинг и принудительные браки. Четырёхкратный рост выявленных случаев.", excerpt_kz:"70 дағдарыс орталығы 5 000-нан астам әйелге көмек көрсетті.", excerpt_en:"70 crisis centers assisted over 5,000 women. The 2024 Law criminalized battery, stalking and forced marriages.", category:"research", published_at:"2026-03-15", image_url:"", content_ru:"", content_kz:"", content_en:"", created_at:"" },
  { id:"2", title_ru:"Вебинар в Church Center ООН: социологические подходы к гендерной справедливости", title_kz:"БҰҰ Church Center-дегі вебинар", title_en:"Webinar at the UN Church Center: Sociological Approaches to Gender Justice", excerpt_ru:"13 марта 2026, Church Center of the UN, 8-й этаж, 777 UN Plaza, Нью-Йорк. С.А. Коновалов представил доклад при поддержке проф. Rosemary Barbaret и Jan Marie Fritz.", excerpt_kz:"2026 жылғы 13 наурыз, БҰҰ Church Center, Нью-Йорк.", excerpt_en:"March 13, 2026. Church Center of the UN, 8th Floor, 777 UN Plaza, New York. S.A. Konovalov presented with Professors Barbaret and Fritz.", category:"events", published_at:"2026-03-13", image_url:"", content_ru:"", content_kz:"", content_en:"", created_at:"" },
  { id:"3", title_ru:"Конференция в Астане: имплементация стандартов прав человека", title_kz:"Астанадағы конференция", title_en:"Astana Conference: Human Rights Standards", excerpt_ru:"17 октября 2024, Park Inn by Radisson, Астана. 69 участников. Выступление Гульбары Султановой. Презентация «Белой Книги».", excerpt_kz:"2024 жылғы 17 қазан, Park Inn by Radisson, Астана. 69 қатысушы.", excerpt_en:"October 17, 2024. Park Inn by Radisson, Astana. 69 participants. White Book presentation.", category:"events", published_at:"2024-10-17", image_url:"", content_ru:"", content_kz:"", content_en:"", created_at:"" },
  { id:"4", title_ru:"Учреждение института Уполномоченного по домашнему насилию", title_kz:"Отбасылық зорлық-зомбылық жөніндегі уәкіл институтын құру", title_en:"Establishment of the Domestic Violence Commissioner", excerpt_ru:"8 марта 2026, Казахстан объявил о создании института Уполномоченного по модели Великобритании при Национальной комиссии по делам женщин.", excerpt_kz:"2026 жылғы 8 наурыз. Ұлыбритания үлгісі бойынша уәкіл институтын құру.", excerpt_en:"March 8, 2026. Kazakhstan announced a Domestic Violence Commissioner modeled on the UK system.", category:"news", published_at:"2026-03-08", image_url:"", content_ru:"", content_kz:"", content_en:"", created_at:"" },
];

export default function Articles() {
  const { locale, t } = useI18n();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { async function load() { const data = await getArticles(6); setArticles(data.length > 0 ? data : placeholderArticles); setLoading(false); } load(); }, []);

  const loc = (a: Article, f: string) => (a[`${f}_${locale}` as keyof Article] as string) || (a[`${f}_ru` as keyof Article] as string) || "";

  return (
    <section id="articles" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <BlurFade delay={0.1} inView>
          <p className="text-sm uppercase tracking-[0.2em] font-semibold text-[#16a34a] mb-4">{t("nav.articles")}</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[var(--fg)] leading-snug mb-14">{t("articles.title")}</h2>
        </BlurFade>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-4">{[1,2,3,4].map(i => <div key={i} className="rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] animate-pulse h-40" />)}</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {articles.map((a, i) => (
              <BlurFade key={a.id} delay={0.15 + i * 0.08} inView>
                <div className="relative rounded-2xl bg-[var(--bg-elevated)] border border-[var(--border)] p-5 h-full group cursor-pointer overflow-hidden hover:border-[var(--fg-muted)] transition-all hover:-translate-y-1 shadow-sm">
                  {i === 0 && <Meteors number={8} />}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs uppercase tracking-wider font-bold text-[#16a34a]">{a.category}</span>
                      <span className="text-xs text-[var(--fg-muted)] font-mono">
                        {new Date(a.published_at).toLocaleDateString(locale === "kz" ? "kk-KZ" : locale === "en" ? "en-US" : "ru-RU", { year:"numeric", month:"short", day:"numeric" })}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold text-[var(--fg)] mb-2 group-hover:text-[#16a34a] transition-colors leading-snug">{loc(a, "title")}</h3>
                    <p className="text-sm text-[var(--fg-muted)] leading-relaxed line-clamp-3">{loc(a, "excerpt")}</p>
                    <div className="mt-4 pt-3 border-t border-[var(--border)]">
                      <span className="flex items-center gap-1 text-xs font-semibold text-[#16a34a]">{t("articles.read_more")} <ArrowUpRight className="w-3 h-3" /></span>
                    </div>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
