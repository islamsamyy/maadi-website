export type UserRole = "customer" | "sales" | "admin";

export interface Stone {
  id: string;
  slug: string;
  name: string;
  type: "Marble" | "Granite" | "Travertine" | "Limestone" | "Onyx";
  origin: string;
  color: string;
  finishes: string[];
  thicknesses: string[];
  slabSize: string;
  density: string;
  waterAbsorption: string;
  stockSqm: number;
  availability: "In Stock" | "On Request";
  category: "Residential" | "Commercial" | "Luxury" | "Eco-Friendly";
  featured: boolean;
  published: boolean;
  description: string;
  applications: string[];
  image: string;
}

export interface Project {
  id: string;
  slug: string;
  title: string;
  location: string;
  category: string;
  area: string;
  stones: string[];
  image: string;
  published: boolean;
}

export interface AcademyArticle {
  id: string;
  slug: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  body?: string | null;
  published: boolean;
}

export interface Profile {
  id: string;
  email: string;
  fullName: string | null;
  company: string | null;
  phone: string | null;
  country: string | null;
  role: UserRole;
  createdAt: string;
}

export interface QuoteRequestItem {
  id: string;
  stoneSlug: string;
  stoneName: string;
  finish: string;
  thickness: string;
  quantitySqm: number;
}

export interface QuoteRequest {
  id: string;
  quoteCode: string;
  userId: string | null;
  inquiryMode: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  country: string;
  targetPort: string | null;
  notes: string | null;
  status: "New" | "Contacted" | "Quoted" | "Won" | "Lost";
  createdAt: string;
  items: QuoteRequestItem[];
}
