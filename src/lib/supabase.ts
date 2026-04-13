import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

let supabase: SupabaseClient | null = null;

function getSupabase(): SupabaseClient | null {
  if (supabase) return supabase;
  if (!supabaseUrl || !supabaseAnonKey || !supabaseUrl.startsWith("http")) {
    return null;
  }
  supabase = createClient(supabaseUrl, supabaseAnonKey);
  return supabase;
}

export interface Article {
  id: string;
  title_ru: string;
  title_kz: string;
  title_en: string;
  excerpt_ru: string;
  excerpt_kz: string;
  excerpt_en: string;
  content_ru: string;
  content_kz: string;
  content_en: string;
  image_url: string;
  category: string;
  published_at: string;
  created_at: string;
}

export async function getArticles(limit = 10) {
  const client = getSupabase();
  if (!client) return [];

  const { data, error } = await client
    .from("articles")
    .select("*")
    .order("published_at", { ascending: false })
    .limit(limit);

  if (error) return [];
  return data as Article[];
}

export async function getArticleById(id: string) {
  const client = getSupabase();
  if (!client) return null;

  const { data, error } = await client
    .from("articles")
    .select("*")
    .eq("id", id)
    .single();

  if (error) return null;
  return data as Article;
}

/*
Supabase SQL to create the articles table:

CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title_ru TEXT NOT NULL,
  title_kz TEXT NOT NULL DEFAULT '',
  title_en TEXT NOT NULL DEFAULT '',
  excerpt_ru TEXT NOT NULL DEFAULT '',
  excerpt_kz TEXT NOT NULL DEFAULT '',
  excerpt_en TEXT NOT NULL DEFAULT '',
  content_ru TEXT NOT NULL,
  content_kz TEXT NOT NULL DEFAULT '',
  content_en TEXT NOT NULL DEFAULT '',
  image_url TEXT DEFAULT '',
  category TEXT DEFAULT 'news',
  published_at TIMESTAMPTZ DEFAULT now(),
  created_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public articles are viewable by everyone"
  ON articles FOR SELECT
  USING (true);
*/
