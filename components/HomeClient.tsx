"use client";

import { useState } from "react";
import Link from "next/link";
import type { Stone, Project, AcademyArticle } from "@/lib/types";
import { useQuote } from "@/components/QuoteContext";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const SURFACE_FINISHES = [
  {
    id: "polished",
    name: "Polished",
    tagline: "Mirror-gloss crystalline reflection",
    desc: "Precision diamond-honed to a high-luster architectural sheen that amplifies natural veining and color depth for luxury lobbies and interiors.",
    idealFor: "Hotel Lobbies, Feature Walls, Vanity Tops",
    image: "/stones/adonis-beige-turkish-marble.jpg",
  },
  {
    id: "honed",
    name: "Honed",
    tagline: "Velvety matte architectural warmth",
    desc: "Smooth, non-reflective satin surface with understated elegance and superior slip resistance for high-traffic commercial floors.",
    idealFor: "Commercial Flooring, Museums, Bathrooms",
    image: "/stones/aegean-white-greek-marble.jpg",
  },
  {
    id: "brushed",
    name: "Brushed",
    tagline: "Tactile organic relief",
    desc: "Wire-brushed to gently accentuate the stone's natural mineral grain, delivering a warm, lived-in texture for resorts and villas.",
    idealFor: "Resort Villas, Terraces, Wall Cladding",
    image: "/stones/agia-marina-clouded-semi-white.jpg",
  },
  {
    id: "flamed",
    name: "Flamed & Cut-to-Size",
    tagline: "Heavy-duty exterior grip",
    desc: "Thermal-textured granite and cut-to-size pavers engineered in our Shaq Al Thoban plant for extreme weather and civic plazas.",
    idealFor: "Exterior Facades, Civic Plazas, Pool Surrounds",
    image: "/stones/aegean-bordeaux-turkish-marble.jpg",
  },
];

export function HomeClient({ stones, projects, articles }: { stones: Stone[]; projects: Project[]; articles: AcademyArticle[] }) {
  const { favorites, toggleFavorite, addToQuote } = useQuote();
  const [activeFinish, setActiveFinish] = useState(SURFACE_FINISHES[0]);
  const [stoneFilter, setStoneFilter] = useState<"All" | "Marble" | "Granite">("All");
  const featuredStones = stones.filter((s) =>
    stoneFilter === "All" ? true : s.type === stoneFilter
  ).slice(0, 6);

  return (
    <div className="flex flex-col w-full -mt-20">
      {/* Futuristic Full-Bleed Hero */}
      <section className="relative w-full min-h-[92vh] flex items-center justify-center bg-primary-container text-on-primary overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=85"
          alt="Luxury marble architectural living space"
          className="absolute inset-0 w-full h-full object-cover opacity-55 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/75" />

        <div className="relative z-10 max-w-4xl mx-auto px-margin text-center space-y-6 pt-16 animate-fade-up">
          <h1 className="font-headline-lg text-[38px] leading-[46px] md:text-[58px] md:leading-[66px] font-medium text-white tracking-tight">
            Transform Spaces with Premium Stone &amp; Marble Solutions
          </h1>
          <p className="font-body-lg text-body-lg text-white/85 max-w-2xl mx-auto">
            Where tradition meets innovation â€” discover our curated collection of
            Egyptian natural stone, marble, and granite sourced from our
            sovereign quarries.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              href="/stones"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#C59B27] text-primary font-label-md text-[14px] font-semibold shadow-lg transition-all"
            >
              <span>Explore Materials</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link
              href="/request-price"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-surface-container text-primary font-label-md text-[14px] font-semibold shadow-lg transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span>Ask sales for a price</span>
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-8 pt-6 text-white/90 font-body-sm">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#D4AF37] text-[18px]">workspace_premium</span>
              <span>32+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#D4AF37] text-[18px]">verified</span>
              <span>5,000+ Projects Completed</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#D4AF37] text-[18px]">shield</span>
              <span>ISO 9001:2015 Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Smart Tools Strip */}
      <Reveal className="max-w-[1400px] mx-auto w-full px-margin md:px-margin-tablet -mt-10 relative z-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              title: "VR Warehouse Tour",
              desc: "Walk through our 45,000 mÂ² slab yard remotely.",
              href: "/tools/vr-tour",
              icon: "visibility",
              badge: "COMING SOON",
              badgeColor: "bg-secondary-container text-on-secondary-container",
            },
            {
              title: "Room Visualizer",
              desc: "Preview Egyptian marble across floors & walls.",
              href: "/tools/visualizer",
              icon: "layers",
              badge: "NEW",
              badgeColor: "bg-[#D4AF37]/20 text-secondary",
            },
            {
              title: "AI Stone Finder",
              desc: "Match stones to your project brief in seconds.",
              href: "/tools/stone-finder",
              icon: "psychology",
              badge: "AI POWERED",
              badgeColor: "bg-surface-container text-primary",
            },
            {
              title: "Instant Quote Basket",
              desc: "Request FOB/CIF pricing for multiple slabs.",
              href: "/request-price",
              icon: "calculate",
              badge: "DIRECT",
              badgeColor: "bg-primary-container text-on-primary",
            },
          ].map((tool) => (
            <Link
              key={tool.title}
              href={tool.href}
              className="group p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-md hover:shadow-xl hover:-translate-y-1.5 hover:border-secondary transition-all duration-300 flex flex-col gap-3"
            >
              <div className="flex items-center justify-between">
                <span className="w-11 h-11 rounded-xl bg-surface-container-low flex items-center justify-center text-[#C59B27] group-hover:bg-[#C59B27] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-[22px]">{tool.icon}</span>
                </span>
                <span className={`px-2.5 py-0.5 rounded-full font-technical-mono text-[10px] font-bold uppercase ${tool.badgeColor}`}>
                  {tool.badge}
                </span>
              </div>
              <div>
                <h3 className="font-title-md text-primary">{tool.title}</h3>
                <p className="font-body-sm text-on-surface-variant mt-1">{tool.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </Reveal>

      {/* Interactive Animated Counters â€” Industrial Scale */}
      <Reveal className="max-w-[1400px] mx-auto w-full px-margin md:px-margin-tablet pt-14">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 rounded-3xl bg-primary-container text-on-primary p-6 md:p-10 shadow-xl border border-secondary/20">
          <div className="space-y-1 border-r border-white/10 pr-4">
            <div className="font-headline-lg text-[32px] md:text-[42px] font-bold text-[#D4AF37]">
              <AnimatedCounter end={2008} />
            </div>
            <p className="font-label-md text-white/90 uppercase tracking-wider text-xs">Established in Cairo</p>
            <p className="font-body-sm text-white/60 text-xs">Shaq Al Thoban Industrial Zone</p>
          </div>
          <div className="space-y-1 lg:border-r border-white/10 pr-4">
            <div className="font-headline-lg text-[32px] md:text-[42px] font-bold text-[#D4AF37]">
              <AnimatedCounter end={45000} suffix="+" />
            </div>
            <p className="font-label-md text-white/90 uppercase tracking-wider text-xs">mÂ² Slab Yard &amp; Plant</p>
            <p className="font-body-sm text-white/60 text-xs">In-house gang saws &amp; polishing lines</p>
          </div>
          <div className="space-y-1 border-r border-white/10 pr-4">
            <div className="font-headline-lg text-[32px] md:text-[42px] font-bold text-[#D4AF37]">
              <AnimatedCounter end={5000} suffix="+" />
            </div>
            <p className="font-label-md text-white/90 uppercase tracking-wider text-xs">Projects &amp; Workshops</p>
            <p className="font-body-sm text-white/60 text-xs">Local &amp; international deliveries</p>
          </div>
          <div className="space-y-1">
            <div className="font-headline-lg text-[32px] md:text-[42px] font-bold text-[#D4AF37]">
              <AnimatedCounter end={18} suffix="+" />
            </div>
            <p className="font-label-md text-white/90 uppercase tracking-wider text-xs">Export Markets</p>
            <p className="font-body-sm text-white/60 text-xs">Blocks, slabs, tiles &amp; cut-to-size</p>
          </div>
        </div>
      </Reveal>

      {/* Interactive Surface Finish Explorer */}
      <Reveal delay={80} className="max-w-[1400px] mx-auto w-full px-margin md:px-margin-tablet pt-16">
        <div className="rounded-3xl bg-surface-container-low border border-outline-variant/40 p-6 md:p-10 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8 border-b border-outline-variant/30">
            <div>
              <span className="font-label-caps text-secondary uppercase tracking-widest text-xs font-semibold">
                Precision Surface Engineering
              </span>
              <h2 className="font-headline-md text-[28px] md:text-[34px] text-primary mt-1">
                Interactive Finish Explorer
              </h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {SURFACE_FINISHES.map((finish) => {
                const isActive = activeFinish.id === finish.id;
                return (
                  <button
                    key={finish.id}
                    type="button"
                    onClick={() => setActiveFinish(finish)}
                    className={`px-4 py-2 rounded-full font-label-md text-xs uppercase tracking-wider transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-on-primary shadow-md scale-[1.03]"
                        : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container border border-outline-variant/40"
                    }`}
                  >
                    {finish.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8 items-center">
            <div className="lg:col-span-6 relative overflow-hidden rounded-2xl aspect-[16/10] bg-surface-container shadow-md group">
              <img
                key={activeFinish.id}
                src={activeFinish.image}
                alt={activeFinish.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 animate-fade-up"
              />
              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md text-white px-4 py-2 rounded-xl text-xs font-technical-mono">
                {activeFinish.name} Â· {activeFinish.tagline}
              </div>
            </div>
            <div className="lg:col-span-6 space-y-5">
              <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#9A7B1C] font-label-caps text-xs uppercase tracking-wider font-semibold">
                {activeFinish.tagline}
              </span>
              <h3 className="font-headline-md text-[26px] text-primary">{activeFinish.name} Finish</h3>
              <p className="font-body-lg text-on-surface-variant leading-relaxed">{activeFinish.desc}</p>
              <div className="p-4 rounded-xl bg-surface-container-lowest border border-outline-variant/40">
                <span className="font-label-caps text-xs uppercase tracking-wider text-on-surface-variant block mb-1">
                  Recommended Applications
                </span>
                <span className="font-title-sm text-primary font-medium">{activeFinish.idealFor}</span>
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <Link
                  href="/stones"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-on-primary font-label-md text-sm hover:bg-secondary transition-colors"
                >
                  <span>Browse {activeFinish.name} Stones</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link
                  href="/request-price"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-outline-variant text-primary font-label-md text-sm hover:bg-surface-container transition-colors"
                >
                  <span>Request Custom Cut-to-Size</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Hot Sale & Stones Gallery Section */}
      <Reveal delay={100} className="max-w-[1400px] mx-auto w-full px-margin md:px-margin-tablet py-16 space-y-8">
        <div className="rounded-2xl bg-gradient-to-r from-[#0d0d0d] via-[#1a1a1a] to-[#0d0d0d] p-6 md:p-8 flex items-center justify-between gap-4 shadow-xl border border-[#D4AF37]/30">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-white font-headline-sm text-[22px]">
              <span className="material-symbols-outlined text-[#D4AF37]">sell</span>
              <span>Hot Sale &amp; Special Discounts</span>
            </div>
            <p className="font-body-sm text-white/75">
              Limited time offers on premium Egyptian quarry blocks &amp; calibrated slabs. Save up to 30% on container orders.
            </p>
          </div>
          <div className="w-12 h-12 rounded-full bg-[#D4AF37] text-primary flex items-center justify-center shrink-0 animate-float-slow">
            <span className="material-symbols-outlined text-[24px]">local_fire_department</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {featuredStones.map((stone, idx) => {
            const isFav = favorites.includes(stone.slug);
            return (
              <div
                key={stone.slug}
                className="relative rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* -15% Floating Pill */}
                <span className="absolute top-3 right-3 z-10 px-3 py-1 rounded-full bg-[#C59B27] text-white font-technical-mono text-xs font-bold shadow">
                  -15%
                </span>

                <Link href={`/stones/${stone.slug}`} className="relative h-60 overflow-hidden block">
                  <img
                    src={stone.image}
                    alt={stone.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-technical-mono text-[11px] font-semibold">
                      {idx === 0 ? "In Stock" : "Low Stock"}
                    </span>
                    {idx === 0 && (
                      <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37] text-primary font-technical-mono text-[11px] font-semibold">
                        Featured
                      </span>
                    )}
                  </div>
                  <span className="absolute bottom-3 right-3 px-2.5 py-0.5 rounded bg-rose-600 text-white font-technical-mono text-[11px] font-bold">
                    -15%
                  </span>
                </Link>

                <div className="p-5 flex-1 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <Link href={`/stones/${stone.slug}`}>
                          <h3 className="font-title-md text-primary hover:text-secondary">
                            {stone.name}
                          </h3>
                        </Link>
                        <p className="font-body-sm text-on-surface-variant">{stone.type}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => toggleFavorite(stone.slug)}
                        className="w-9 h-9 rounded-lg border border-outline-variant/40 flex items-center justify-center text-on-surface-variant hover:text-secondary"
                        aria-label="Toggle favorite"
                      >
                        <span className="material-symbols-outlined text-[18px]">
                          {isFav ? "favorite" : "favorite_border"}
                        </span>
                      </button>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      <span className="px-2.5 py-0.5 rounded bg-secondary-container/40 text-secondary font-technical-mono text-[11px]">
                        {stone.category}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-technical-mono text-[11px]">
                        {stone.type}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-technical-mono text-[11px]">
                        Book Match
                      </span>
                    </div>

                    <div className="mt-3 px-3 py-1.5 rounded-lg bg-surface-container-low font-technical-mono text-sm tracking-widest text-primary">
                      $ $ $ <span className="text-outline-variant">$</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      addToQuote({
                        slug: stone.slug,
                        name: stone.name,
                        finish: stone.finishes[0],
                        thickness: stone.thicknesses[0],
                        quantitySqm: 200,
                      })
                    }
                    className="w-full py-2.5 rounded-xl bg-[#C59B27] hover:bg-secondary text-white font-label-md text-[13px] font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span className="material-symbols-outlined text-[16px]">bolt</span>
                    <span>Ask sales</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>

      {/* Why Choose Us & Shop By Category */}
      <section className="w-full bg-surface-container-low py-16">
        <div className="max-w-[1400px] mx-auto px-margin md:px-margin-tablet space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <span className="font-label-caps uppercase tracking-widest text-secondary">
              The Maadi Standard
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mt-1">
              Engineered for Global Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "precision_manufacturing", title: "Italian CNC & Gang Saws", desc: "Â±0.5mm calibration across 45,000 mÂ² in Shaq El-Thoaban." },
              { icon: "wb_sunny", title: "100% Dry-Lay Lab", desc: "Every container is pre-assembled under calibrated daylight." },
              { icon: "public", title: "42+ Export Markets", desc: "FOB Sokhna & Alexandria with ISPM-15 fumigated crating." },
              { icon: "verified_user", title: "Direct Quarry Pricing", desc: "Zero middlemen â€” direct from our 14 Egyptian concessions." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm space-y-3">
                <span className="material-symbols-outlined text-[#C59B27] text-[28px]">{item.icon}</span>
                <h3 className="font-title-md text-primary">{item.title}</h3>
                <p className="font-body-sm text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects & Academy */}
      <section className="max-w-[1400px] mx-auto w-full px-margin md:px-margin-tablet py-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-end justify-between">
            <h2 className="font-headline-md text-primary">Landmark Projects</h2>
            <Link href="/projects" className="font-label-md text-secondary uppercase tracking-wider">
              View All â†’
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((p) => (
              <Link
                key={p.slug}
                href="/projects"
                className="group rounded-2xl overflow-hidden bg-surface-container-lowest border border-outline-variant/30 shadow-sm"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <span className="font-technical-mono text-[11px] uppercase text-secondary">{p.location}</span>
                  <h3 className="font-title-md text-primary mt-1">{p.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-end justify-between">
            <h2 className="font-headline-md text-primary">Stone Academy</h2>
            <Link href="/academy" className="font-label-md text-secondary uppercase tracking-wider">
              All Articles â†’
            </Link>
          </div>
          <div className="space-y-4">
            {articles.map((a) => (
              <Link
                key={a.slug}
                href="/academy"
                className="block p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 hover:border-secondary transition-colors"
              >
                <div className="flex items-center justify-between font-technical-mono text-[11px] uppercase text-secondary">
                  <span>{a.category}</span>
                  <span>{a.readTime}</span>
                </div>
                <h3 className="font-title-md text-primary mt-1">{a.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

