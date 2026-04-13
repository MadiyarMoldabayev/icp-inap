"use client";

import { useState, useCallback, useEffect } from "react";
import { useParams } from "next/navigation";
import { I18nContext, Locale } from "@/lib/i18n";
import { getTranslation } from "@/lib/translations";
import { getArticleById, Article } from "@/lib/supabase";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";

export default function ArticlePage() {
  const params = useParams();
  const [locale, setLocale] = useState<Locale>("ru");
  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);

  const t = useCallback(
    (key: string) => getTranslation(key, locale),
    [locale]
  );

  useEffect(() => {
    async function fetch() {
      if (params.id) {
        const data = await getArticleById(params.id as string);
        setArticle(data);
      }
      setLoading(false);
    }
    fetch();
  }, [params.id]);

  const getLocalizedField = (a: Article, field: string): string => {
    const key = `${field}_${locale}` as keyof Article;
    const fallback = `${field}_ru` as keyof Article;
    return (a[key] as string) || (a[fallback] as string) || "";
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      <Header />
      <main className="pt-28 pb-16 min-h-screen bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/articles"
            className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            {t("articles.all")}
          </Link>

          {loading ? (
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded animate-pulse w-3/4" />
              <div className="h-6 bg-gray-200 rounded animate-pulse w-1/2" />
              <div className="h-96 bg-gray-200 rounded-2xl animate-pulse mt-8" />
            </div>
          ) : article ? (
            <article>
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center gap-1 px-3 py-1 rounded-full bg-sky-100 text-sky-700 text-sm font-medium">
                  <Tag className="w-3 h-3" />
                  {article.category}
                </span>
                <span className="flex items-center gap-1 text-sm text-gray-400">
                  <Calendar className="w-4 h-4" />
                  {new Date(article.published_at).toLocaleDateString(
                    locale === "kz"
                      ? "kk-KZ"
                      : locale === "en"
                      ? "en-US"
                      : "ru-RU",
                    { year: "numeric", month: "long", day: "numeric" }
                  )}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-black text-gray-900 mb-8">
                {getLocalizedField(article, "title")}
              </h1>

              <div className="prose prose-lg max-w-none">
                <div
                  className="text-gray-700 leading-relaxed whitespace-pre-wrap"
                  dangerouslySetInnerHTML={{
                    __html: getLocalizedField(article, "content"),
                  }}
                />
              </div>
            </article>
          ) : (
            <div className="text-center py-20">
              <p className="text-gray-500 text-lg">Article not found</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </I18nContext.Provider>
  );
}
