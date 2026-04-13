"use client";

import { useState, useCallback, useEffect } from "react";
import { I18nContext, Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";
import { getArticles, Article } from "@/lib/supabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft, Newspaper } from "lucide-react";
import Link from "next/link";

export default function ArticlesPage() {
  const [locale, setLocale] = useState<Locale>("ru");
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  const t = useCallback(
    (key: string) => getTranslation(key, locale),
    [locale]
  );

  useEffect(() => {
    async function fetch() {
      const data = await getArticles(50);
      setArticles(data);
      setLoading(false);
    }
    fetch();
  }, []);

  const getLocalizedField = (article: Article, field: string): string => {
    const key = `${field}_${locale}` as keyof Article;
    const fallback = `${field}_ru` as keyof Article;
    return (article[key] as string) || (article[fallback] as string) || "";
  };

  const categoryColors: Record<string, string> = {
    research: "bg-sky-100 text-sky-700",
    events: "bg-emerald-100 text-emerald-700",
    analytics: "bg-amber-100 text-amber-700",
    news: "bg-indigo-100 text-indigo-700",
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      <Header />
      <main className="pt-28 pb-16 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <Link
              href="/"
              className="flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              {t("nav.home")}
            </Link>
          </div>

          <h1 className="text-4xl font-black text-gray-900 mb-4">
            {t("articles.title")}
          </h1>
          <p className="text-lg text-gray-600 mb-12">{t("articles.subtitle")}</p>

          {loading ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="rounded-2xl bg-gray-200 animate-pulse h-72"
                />
              ))}
            </div>
          ) : articles.length === 0 ? (
            <div className="text-center py-20">
              <Newspaper className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-500 text-lg">{t("articles.no_articles")}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={`/articles/${article.id}`}
                  className="group rounded-2xl bg-white border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <div className="h-48 bg-gradient-to-br from-sky-100 to-blue-100 flex items-center justify-center">
                    <Newspaper className="w-12 h-12 text-sky-300" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span
                        className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                          categoryColors[article.category] || categoryColors.news
                        }`}
                      >
                        {article.category}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Calendar className="w-3 h-3" />
                        {new Date(article.published_at).toLocaleDateString(
                          locale === "kz"
                            ? "kk-KZ"
                            : locale === "en"
                            ? "en-US"
                            : "ru-RU"
                        )}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-sky-700 transition-colors">
                      {getLocalizedField(article, "title")}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {getLocalizedField(article, "excerpt")}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </I18nContext.Provider>
  );
}
