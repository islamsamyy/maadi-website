import { createClient } from "@/lib/supabase/server";
import type {
  Stone,
  Project,
  AcademyArticle,
  Profile,
  QuoteRequest,
} from "@/lib/types";

function mapStone(row: Record<string, unknown>): Stone {
  return {
    id: row.id as string,
    slug: row.slug as string,
    name: row.name as string,
    type: row.type as Stone["type"],
    origin: row.origin as string,
    color: row.color as string,
    finishes: (row.finishes as string[]) ?? [],
    thicknesses: (row.thicknesses as string[]) ?? [],
    slabSize: row.slab_size as string,
    density: row.density as string,
    waterAbsorption: row.water_absorption as string,
    stockSqm: row.stock_sqm as number,
    availability: row.availability as Stone["availability"],
    category: row.category as Stone["category"],
    featured: Boolean(row.featured),
    published: Boolean(row.published),
    description: row.description as string,
    applications: (row.applications as string[]) ?? [],
    image: row.image_url as string,
  };
}

function mapProject(row: Record<string, unknown>): Project {
  return {
    id: row.id as string,
    slug: row.slug as string,
    title: row.title as string,
    location: row.location as string,
    category: row.category as string,
    area: row.area as string,
    stones: (row.stones as string[]) ?? [],
    image: row.image_url as string,
    published: Boolean(row.published),
  };
}

function mapArticle(row: Record<string, unknown>): AcademyArticle {
  return {
    id: row.id as string,
    slug: row.slug as string,
    title: row.title as string,
    category: row.category as string,
    readTime: row.read_time as string,
    date: row.published_date as string,
    excerpt: row.excerpt as string,
    body: (row.body as string | null) ?? null,
    published: Boolean(row.published),
  };
}

export async function getPublishedStones(): Promise<Stone[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("stones")
    .select("*")
    .eq("published", true)
    .order("featured", { ascending: false })
    .order("name", { ascending: true });

  if (error || !data) return [];
  return data.map(mapStone);
}

export async function getStoneBySlug(slug: string): Promise<Stone | null> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("stones")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error || !data) return null;
  return mapStone(data);
}

export async function getPublishedProjects(): Promise<Project[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data.map(mapProject);
}

export async function getPublishedArticles(): Promise<AcademyArticle[]> {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("academy_articles")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data.map(mapArticle);
}

export async function getCurrentProfile(): Promise<Profile | null> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error || !data) return null;
  return {
    id: data.id,
    email: data.email,
    fullName: data.full_name,
    company: data.company,
    phone: data.phone,
    country: data.country,
    role: data.role,
    createdAt: data.created_at,
  };
}

export async function getMyQuoteRequests(): Promise<QuoteRequest[]> {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return [];

  const { data, error } = await supabase
    .from("quote_requests")
    .select("*, quote_request_items(*)")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  if (error || !data) return [];
  return data.map((row) => ({
    id: row.id,
    quoteCode: row.quote_code,
    userId: row.user_id,
    inquiryMode: row.inquiry_mode,
    fullName: row.full_name,
    company: row.company,
    email: row.email,
    phone: row.phone,
    country: row.country,
    targetPort: row.target_port,
    notes: row.notes,
    status: row.status,
    createdAt: row.created_at,
    items: (row.quote_request_items ?? []).map((item: Record<string, unknown>) => ({
      id: item.id as string,
      stoneSlug: item.stone_slug as string,
      stoneName: item.stone_name as string,
      finish: item.finish as string,
      thickness: item.thickness as string,
      quantitySqm: item.quantity_sqm as number,
    })),
  }));
}
