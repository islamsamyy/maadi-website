import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { resolve } from "path";

// Load .env.local
const envPath = resolve(process.cwd(), ".env.local");
const envContent = readFileSync(envPath, "utf8");
for (const line of envContent.split(/\r?\n/)) {
  const match = line.match(/^([^=]+)=(.*)$/);
  if (match) process.env[match[1].trim()] = match[2].trim();
}

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

const STONES = [
  {
    slug: "galala-classic",
    name: "Galala Classic",
    type: "Marble",
    origin: "Galala Mountain, Suez",
    color: "Warm Cream",
    finishes: ["Polished", "Honed", "Brushed", "Bush-Hammered"],
    thicknesses: ["20mm", "30mm", "40mm"],
    slab_size: "280 × 170 cm",
    density: "2,680 kg/m³",
    water_absorption: "0.28%",
    stock_sqm: 42500,
    availability: "In Stock",
    category: "Luxury",
    featured: true,
    published: true,
    description:
      "Egypt's flagship warm-cream limestone-marble extracted from our sovereign Galala Mountain concessions. Renowned for its subtle fossil veining and uniform architectural tone.",
    applications: ["Interior Flooring", "Wall Cladding", "Hotel Lobbies", "Staircases"],
    image_url: "/stones/adonis-beige-turkish-marble.jpg",
  },
  {
    slug: "sunny-menia",
    name: "Sunny Menia",
    type: "Marble",
    origin: "El-Menia, Upper Egypt",
    color: "Golden Beige",
    finishes: ["Polished", "Honed", "Tumbled", "Sandblasted"],
    thicknesses: ["20mm", "30mm"],
    slab_size: "270 × 165 cm",
    density: "2,650 kg/m³",
    water_absorption: "0.35%",
    stock_sqm: 38000,
    availability: "In Stock",
    category: "Commercial",
    featured: true,
    published: true,
    description:
      "Luminous golden-beige Egyptian marble prized for large-scale commercial developments, sunlit courtyards, and high-traffic hospitality interiors.",
    applications: ["Commercial Flooring", "Exterior Facades", "Pool Surrounds", "Paving"],
    image_url: "/stones/afyon-white-turkish-marble.jpg",
  },
  {
    slug: "silvia-marble",
    name: "Silvia Marble",
    type: "Marble",
    origin: "El-Menia, Upper Egypt",
    color: "Ivory & Gold",
    finishes: ["Polished", "Honed", "Split Face"],
    thicknesses: ["20mm", "30mm"],
    slab_size: "275 × 160 cm",
    density: "2,670 kg/m³",
    water_absorption: "0.30%",
    stock_sqm: 29400,
    availability: "In Stock",
    category: "Residential",
    featured: true,
    published: true,
    description:
      "Distinctive linear veining in warm ivory and ochre tones. Ideal for book-matched feature walls and bespoke residential bathrooms.",
    applications: ["Feature Walls", "Bathrooms", "Vanity Tops", "Living Spaces"],
    image_url: "/stones/aegean-white-greek-marble.jpg",
  },
  {
    slug: "rosa-aswan-granite",
    name: "Rosa Aswan Granite",
    type: "Granite",
    origin: "Aswan, Upper Egypt",
    color: "Imperial Rose",
    finishes: ["Polished", "Flamed", "Bush-Hammered"],
    thicknesses: ["20mm", "30mm", "50mm"],
    slab_size: "290 × 180 cm",
    density: "2,720 kg/m³",
    water_absorption: "0.14%",
    stock_sqm: 18500,
    availability: "In Stock",
    category: "Commercial",
    featured: true,
    published: true,
    description:
      "Monumental rose-pink granite from the historic quarries of Aswan. Extreme compressive strength and weather resistance for civic plazas and heavy-duty facades.",
    applications: ["Exterior Facades", "Civic Plazas", "Countertops", "Heavy Traffic"],
    image_url: "/stones/aegean-bordeaux-turkish-marble.jpg",
  },
  {
    slug: "sinai-pearl-travertine",
    name: "Sinai Pearl Travertine",
    type: "Travertine",
    origin: "Central Sinai",
    color: "Warm Sand",
    finishes: ["Honed & Filled", "Unfilled Brushed", "Chiseled"],
    thicknesses: ["20mm", "30mm"],
    slab_size: "260 × 155 cm",
    density: "2,510 kg/m³",
    water_absorption: "0.85%",
    stock_sqm: 14200,
    availability: "In Stock",
    category: "Eco-Friendly",
    featured: false,
    published: true,
    description:
      "Organic porous travertine with warm desert striations. Brings tactile, biophilic warmth to contemporary resorts and minimalist villas.",
    applications: ["Resort Villas", "Spa Interiors", "Wall Cladding", "Terraces"],
    image_url: "/stones/agia-marina-clouded-semi-white.jpg",
  },
  {
    slug: "triesta-beige",
    name: "Triesta Beige",
    type: "Limestone",
    origin: "Suez Plateau",
    color: "Soft Taupe",
    finishes: ["Honed", "Sandblasted", "Bush-Hammered"],
    thicknesses: ["20mm", "30mm", "40mm"],
    slab_size: "265 × 160 cm",
    density: "2,590 kg/m³",
    water_absorption: "0.45%",
    stock_sqm: 9800,
    availability: "On Request",
    category: "Luxury",
    featured: false,
    published: true,
    description:
      "Dense architectural limestone with subtle mineral flecks and a velvety honed finish suited for gallery floors and understated luxury.",
    applications: ["Museums", "Boutique Retail", "Exterior Cladding", "Flooring"],
    image_url: "/stones/adranos-white-turkish-marble.jpg",
  },
  {
    slug: "adonis-beige-turkish-marble",
    name: "Adonis Beige Turkish Marble",
    type: "Marble",
    origin: "Turkey",
    color: "Warm Beige",
    finishes: ["Polished", "Honed", "Brushed"],
    thicknesses: ["20mm", "30mm"],
    slab_size: "270 × 165 cm",
    density: "2,690 kg/m³",
    water_absorption: "0.25%",
    stock_sqm: 15000,
    availability: "In Stock",
    category: "Luxury",
    featured: true,
    published: true,
    description:
      "Classic warm beige Turkish marble with delicate tonal movement, processed into polished slabs, tiles, and cut-to-size architectural elements.",
    applications: ["Interior Flooring", "Wall Cladding", "Hotel Lobbies", "Bathrooms"],
    image_url: "/stones/adonis-beige-turkish-marble.jpg",
  },
  {
    slug: "adranos-white-turkish-marble",
    name: "Adranos White Turkish Marble",
    type: "Marble",
    origin: "Turkey",
    color: "Crisp White & Grey",
    finishes: ["Polished", "Honed"],
    thicknesses: ["20mm", "30mm"],
    slab_size: "275 × 170 cm",
    density: "2,710 kg/m³",
    water_absorption: "0.22%",
    stock_sqm: 12000,
    availability: "In Stock",
    category: "Luxury",
    featured: true,
    published: true,
    description:
      "Bright white Turkish marble accented by expressive charcoal-grey veining, ideal for book-matched feature walls and luxury interiors.",
    applications: ["Feature Walls", "Countertops", "Interior Flooring", "Vanity Tops"],
    image_url: "/stones/adranos-white-turkish-marble.jpg",
  },
  {
    slug: "aegean-bordeaux-turkish-marble",
    name: "Aegean Bordeaux Turkish Marble",
    type: "Marble",
    origin: "Turkey",
    color: "Deep Bordeaux Red",
    finishes: ["Polished", "Honed"],
    thicknesses: ["20mm", "30mm"],
    slab_size: "265 × 160 cm",
    density: "2,730 kg/m³",
    water_absorption: "0.20%",
    stock_sqm: 8500,
    availability: "In Stock",
    category: "Luxury",
    featured: false,
    published: true,
    description:
      "Rich bordeaux-red Turkish marble with subtle crystalline white veining, suited for statement lobbies, fireplaces, and bespoke cladding.",
    applications: ["Statement Walls", "Hotel Lobbies", "Fireplaces", "Cut-to-Size"],
    image_url: "/stones/aegean-bordeaux-turkish-marble.jpg",
  },
  {
    slug: "aegean-white-greek-marble",
    name: "Aegean White Greek Marble",
    type: "Marble",
    origin: "Greece",
    color: "Pure Soft White",
    finishes: ["Polished", "Honed", "Brushed"],
    thicknesses: ["20mm", "30mm"],
    slab_size: "280 × 170 cm",
    density: "2,720 kg/m³",
    water_absorption: "0.18%",
    stock_sqm: 11000,
    availability: "In Stock",
    category: "Residential",
    featured: false,
    published: true,
    description:
      "Luminous Greek white marble with gentle linear shading, prized for minimalist residences, spa interiors, and serene architectural surfaces.",
    applications: ["Interior Flooring", "Bathrooms", "Spa Interiors", "Wall Cladding"],
    image_url: "/stones/aegean-white-greek-marble.jpg",
  },
  {
    slug: "afyon-white-turkish-marble",
    name: "Afyon White Turkish Marble",
    type: "Marble",
    origin: "Afyon, Turkey",
    color: "Creamy White",
    finishes: ["Polished", "Honed"],
    thicknesses: ["20mm", "30mm"],
    slab_size: "275 × 165 cm",
    density: "2,715 kg/m³",
    water_absorption: "0.21%",
    stock_sqm: 14000,
    availability: "In Stock",
    category: "Commercial",
    featured: false,
    published: true,
    description:
      "Renowned Afyon white marble featuring a clean, uniform creamy-white background for timeless commercial and residential projects.",
    applications: ["Commercial Flooring", "Staircases", "Wall Cladding", "Tiles"],
    image_url: "/stones/afyon-white-turkish-marble.jpg",
  },
  {
    slug: "agia-marina-clouded-semi-white",
    name: "Agia Marina Clouded Semi-White",
    type: "Marble",
    origin: "Greece",
    color: "Clouded Semi-White",
    finishes: ["Polished", "Honed", "Sandblasted"],
    thicknesses: ["20mm", "30mm"],
    slab_size: "270 × 160 cm",
    density: "2,700 kg/m³",
    water_absorption: "0.24%",
    stock_sqm: 9500,
    availability: "In Stock",
    category: "Residential",
    featured: false,
    published: true,
    description:
      "Soft clouded semi-white marble with flowing silver-grey movement, offering an understated natural aesthetic for floors and facades.",
    applications: ["Interior Flooring", "Wall Cladding", "Living Spaces", "Cut-to-Size"],
    image_url: "/stones/agia-marina-clouded-semi-white.jpg",
  },
];

const PROJECTS = [
  {
    slug: "new-administrative-capital-opera",
    title: "Grand Cultural Pavilion",
    location: "New Administrative Capital, Egypt",
    category: "Civic & Cultural",
    area: "18,500 m²",
    stones: ["Galala Classic", "Rosa Aswan Granite"],
    image_url: "/stones/adonis-beige-turkish-marble.jpg",
    published: true,
  },
  {
    slug: "al-ula-desert-sanctuary",
    title: "Al-Ula Desert Sanctuary",
    location: "Al-Ula, Saudi Arabia",
    category: "Hospitality",
    area: "12,200 m²",
    stones: ["Sinai Pearl Travertine", "Sunny Menia"],
    image_url: "/stones/afyon-white-turkish-marble.jpg",
    published: true,
  },
  {
    slug: "milan-flagship-atelier",
    title: "Via Montenapoleone Atelier",
    location: "Milan, Italy",
    category: "Luxury Retail",
    area: "3,400 m²",
    stones: ["Triesta Beige", "Silvia Marble"],
    image_url: "/stones/aegean-white-greek-marble.jpg",
    published: true,
  },
];

const ACADEMY_ARTICLES = [
  {
    slug: "dry-lay-verification-guide",
    title: "Why 100% Dry-Lay Verification Prevents On-Site Delays",
    category: "Quality Control",
    read_time: "6 min read",
    published_date: "Oct 2026",
    excerpt:
      "How pre-assembling numbered slabs under calibrated daylight in Shaq El-Thoaban eliminates vein mismatches before container loading.",
    published: true,
  },
  {
    slug: "galala-vs-travertine-facades",
    title: "Galala Limestone vs. Sinai Travertine for Exterior Facades",
    category: "Architectural Specs",
    read_time: "5 min read",
    published_date: "Sep 2026",
    excerpt:
      "Comparing water absorption, freeze-thaw durability, and mechanical anchoring systems for high-rise cladding.",
    published: true,
  },
  {
    slug: "export-packaging-standards",
    title: "ISPM-15 Fumigated Crating & Moisture Barrier Protocols",
    category: "Global Logistics",
    read_time: "4 min read",
    published_date: "Aug 2026",
    excerpt:
      "Best practices for ocean freight from Sokhna and Alexandria ports to Europe, North America, and the GCC.",
    published: true,
  },
];

async function main() {
  const { error: stonesErr } = await supabase
    .from("stones")
    .upsert(STONES, { onConflict: "slug" });
  if (stonesErr) throw stonesErr;
  console.log("Seeded 12 stones.");

  const { error: projErr } = await supabase
    .from("projects")
    .upsert(PROJECTS, { onConflict: "slug" });
  if (projErr) throw projErr;
  console.log("Seeded 3 projects.");

  const { error: artErr } = await supabase
    .from("academy_articles")
    .upsert(ACADEMY_ARTICLES, { onConflict: "slug" });
  if (artErr) throw artErr;
  console.log("Seeded 3 academy articles.");

  // Seed admin user if not exists
  const adminEmail = "admin@maadimarble.com";
  const { data: usersData } = await supabase.auth.admin.listUsers();
  let adminUser = usersData?.users?.find((u) => u.email === adminEmail);

  if (!adminUser) {
    const { data: created, error: createErr } =
      await supabase.auth.admin.createUser({
        email: adminEmail,
        password: "MaadiAdmin2026!",
        email_confirm: true,
        user_metadata: {
          full_name: "Ahmed Salah",
          company: "Maadi Marble",
        },
      });
    if (createErr) throw createErr;
    adminUser = created.user;
    console.log("Created admin auth user:", adminEmail);
  }

  if (adminUser) {
    const { error: profErr } = await supabase
      .from("profiles")
      .update({ role: "admin", full_name: "Ahmed Salah", company: "Maadi Marble" })
      .eq("id", adminUser.id);
    if (profErr) throw profErr;
    console.log("Promoted admin profile:", adminEmail);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
