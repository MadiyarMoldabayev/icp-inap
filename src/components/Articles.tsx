"use client";

import { useI18n } from "@/lib/i18n";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { getArticles, Article } from "@/lib/supabase";
import { ArrowUpRight } from "lucide-react";

const placeholderArticles: Article[] = [
  {
    id: "1",
    title_ru: "Казахстан усиливает борьбу с домашним насилием: итоги 2025 года",
    title_kz: "Қазақстан отбасылық зорлық-зомбылыққа қарсы күресті күшейтуде",
    title_en: "Kazakhstan strengthens fight against domestic violence: 2025 results",
    excerpt_ru: "70 кризисных центров оказали помощь более 5 000 женщинам. Закон 2024 года криминализировал побои, преследование лиц до 16 лет, сталкинг и принудительные браки. Четырёхкратный рост выявленных случаев.",
    excerpt_kz: "70 дағдарыс орталығы 5 000-нан астам әйелге көмек көрсетті.",
    excerpt_en: "70 crisis centers assisted over 5,000 women. The 2024 Law criminalized battery, harassment of minors, stalking and forced marriages. Fourfold increase in detected cases.",
    category: "research", published_at: "2026-03-15", image_url: "", content_ru: "", content_kz: "", content_en: "", created_at: "",
  },
  {
    id: "2",
    title_ru: "Вебинар в Church Center ООН: социологические подходы к гендерной справедливости",
    title_kz: "БҰҰ Church Center-дегі вебинар: гендерлік әділеттікке әлеуметтанушылық тәсілдер",
    title_en: "Webinar at the UN Church Center: Sociological Approaches to Gender Justice",
    excerpt_ru: "13 марта 2026, 8:30 EDT. Church Center of the United Nations, 8-й этаж, 777 UN Plaza, Нью-Йорк. Директор ИСП С.А. Коновалов представил доклад о реализации международных стандартов прав человека в Казахстане. При поддержке профессоров Rosemary Barbaret и Jan Marie Fritz.",
    excerpt_kz: "2026 жылғы 13 наурыз. БҰҰ Church Center, 8-қабат, 777 UN Plaza, Нью-Йорк.",
    excerpt_en: "March 13, 2026, 8:30 AM EDT. Church Center of the UN, 8th Floor, 777 UN Plaza, New York. Director S.A. Konovalov presented on implementing international human rights standards in Kazakhstan.",
    category: "events", published_at: "2026-03-13", image_url: "", content_ru: "", content_kz: "", content_en: "", created_at: "",
  },
  {
    id: "3",
    title_ru: "Конференция в Астане: имплементация стандартов прав человека",
    title_kz: "Астанадағы конференция: адам құқықтары стандарттарын імплементациялау",
    title_en: "Astana Conference: Implementing Human Rights Standards",
    excerpt_ru: "17 октября 2024, Park Inn by Radisson, Астана. 69 участников. Темы: избирательная система, семейное насилие, торговля людьми. Выступление Гульбары Султановой (Комитет по делам гражданского общества). Презентация проекта «Белая Книга».",
    excerpt_kz: "2024 жылғы 17 қазан, Park Inn by Radisson, Астана. 69 қатысушы.",
    excerpt_en: "October 17, 2024, Park Inn by Radisson, Astana. 69 participants. Topics: electoral system, family violence, trafficking. Speech by Gulbara Sultanova (Committee on Civil Society Affairs). White Book project presentation.",
    category: "events", published_at: "2024-10-17", image_url: "", content_ru: "", content_kz: "", content_en: "", created_at: "",
  },
  {
    id: "4",
    title_ru: "8 марта 2026: учреждение института Уполномоченного по домашнему насилию",
    title_kz: "2026 жылғы 8 наурыз: Отбасылық зорлық-зомбылық жөніндегі уәкіл институтын құру",
    title_en: "March 8, 2026: Establishment of the Domestic Violence Commissioner",
    excerpt_ru: "Казахстан объявил о создании института Уполномоченного по домашнему насилию при Национальной комиссии по делам женщин. Модель основана на британской системе. Уполномоченный будет регулярно докладывать Президенту о ситуации с домашним насилием.",
    excerpt_kz: "Қазақстан Отбасылық зорлық-зомбылық жөніндегі уәкіл институтын құру туралы хабарлады.",
    excerpt_en: "Kazakhstan announced the creation of a Domestic Violence Commissioner under the National Commission on Women's Affairs. Modeled on the British system, with regular reporting to the President.",
    category: "news", published_at: "2026-03-08", image_url: "", content_ru: "", content_kz: "", content_en: "", created_at: "",
  },
];

export default function Articles() {
  const { locale, t } = useI18n();
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const data = await getArticles(6);
      setArticles(data.length > 0 ? data : placeholderArticles);
      setLoading(false);
    }
    load();
  }, []);

  const loc = (a: Article, f: string) => {
    const k = `${f}_${locale}` as keyof Article;
    return (a[k] as string) || (a[`${f}_ru` as keyof Article] as string) || "";
  };

  return (
    <section id="articles" className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity:0,y:30 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.7 }} className="mb-14">
          <p className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--accent)] mb-4">{t("nav.articles")}</p>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--fg)] max-w-3xl leading-snug">{t("articles.title")}</h2>
        </motion.div>

        {loading ? (
          <div className="grid md:grid-cols-2 gap-4">{[1,2,3,4].map(i => <div key={i} className="card animate-pulse h-40" />)}</div>
        ) : (
          <div className="grid md:grid-cols-2 gap-4">
            {articles.map((a, i) => (
              <motion.article key={a.id} initial={{ opacity:0,y:20 }} whileInView={{ opacity:1,y:0 }} viewport={{ once:true }} transition={{ duration:0.5,delay:i*0.08 }}>
                <div className="card p-5 h-full group cursor-pointer">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[var(--accent)]">{a.category}</span>
                    <span className="text-[10px] text-[var(--fg-muted)] font-mono">
                      {new Date(a.published_at).toLocaleDateString(locale === "kz" ? "kk-KZ" : locale === "en" ? "en-US" : "ru-RU", { year:"numeric",month:"short",day:"numeric" })}
                    </span>
                  </div>
                  <h3 className="text-sm font-semibold text-[var(--fg)] mb-2 group-hover:text-[var(--accent)] transition-colors leading-snug">
                    {loc(a, "title")}
                  </h3>
                  <p className="text-[11px] text-[var(--fg-muted)] leading-relaxed line-clamp-3">{loc(a, "excerpt")}</p>
                  <div className="mt-4 pt-3 border-t border-[var(--border)]">
                    <span className="flex items-center gap-1 text-[10px] font-semibold text-[var(--accent)]">
                      {t("articles.read_more")} <ArrowUpRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
