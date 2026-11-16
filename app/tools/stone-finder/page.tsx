"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import type { Stone } from "@/lib/types";

export default function StoneFinderPage() {
  const [space, setSpace] = useState("Hotel Lobby");
  const [tone, setTone] = useState("Warm Cream");
  const [prompt, setPrompt] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [stones, setStones] = useState<Stone[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadInitial() {
      const supabase = createClient();
      const { data } = await supabase
        .from("stones")
        .select("*")
        .eq("published", true)
        .limit(12);
      if (data) {
        setStones(
          data.map((row) => ({
            id: row.id,
            slug: row.slug,
            name: row.name,
            type: row.type,
            origin: row.origin,
            color: row.color,
            finishes: row.finishes ?? [],
            thicknesses: row.thicknesses ?? [],
            slabSize: row.slab_size,
            density: row.density,
            waterAbsorption: row.water_absorption,
            stockSqm: row.stock_sqm,
            availability: row.availability,
            category: row.category,
            featured: row.featured,
            published: row.published,
            description: row.description,
            applications: row.applications ?? [],
            image: row.image_url,
          }))
        );
      }
    }
    loadInitial();
  }, []);

  const handleFind = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setShowResults(true);
    setLoading(false);
  };

  const results = stones
    .filter((s) => {
      const q = prompt.trim().toLowerCase();
      const matchesPrompt =
        !q ||
        s.name.toLowerCase().includes(q) ||
        s.description.toLowerCase().includes(q) ||
        s.color.toLowerCase().includes(q) ||
        s.origin.toLowerCase().includes(q);
      const matchesTone =
        tone === "Any" ||
        s.color.toLowerCase().includes(tone.toLowerCase().split(" ")[0]);
      return matchesPrompt && matchesTone;
    })
    .slice(0, 3);

  const displayResults = results.length > 0 ? results : stones.slice(0, 3);

  return (
    <div className="max-w-[1200px] mx-auto px-margin md:px-margin-tablet py-12 space-y-10">
      <div>
        <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
          Smart Selection
        </span>
        <h1 className="font-headline-lg text-headline-lg text-primary mt-1">
          AI Stone Finder
        </h1>
        <p className="font-body-md text-on-surface-variant mt-2 max-w-2xl">
          Specify your architectural space, color palette, or describe your project brief to receive tailored Egyptian stone recommendations from our live inventory.
        </p>
      </div>

      <form onSubmit={handleFind} className="p-8 rounded-2xl bg-surface-container-low space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="font-label-caps uppercase text-on-surface-variant block mb-2">
              Project Space
            </label>
            <select
              value={space}
              onChange={(e) => setSpace(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant"
            >
              <option>Hotel Lobby</option>
              <option>Exterior Facade</option>
              <option>Luxury Villa Flooring</option>
              <option>Spa &amp; Bathroom</option>
            </select>
          </div>
          <div>
            <label className="font-label-caps uppercase text-on-surface-variant block mb-2">
              Color Tone
            </label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant"
            >
              <option value="Warm Cream">Warm Cream</option>
              <option value="Golden Beige">Golden Beige</option>
              <option value="White">White</option>
              <option value="Rose">Imperial Rose</option>
              <option value="Any">Any Tone</option>
            </select>
          </div>
        </div>
        <div>
          <label className="font-label-caps uppercase text-on-surface-variant block mb-2">
            Project Brief (Optional)
          </label>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. High-traffic airport terminal, book-matched feature wall..."
            className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-8 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-secondary transition-colors"
        >
          Find Matching Stones
        </button>
      </form>

      {showResults && (
        <div className="space-y-4">
          <h2 className="font-title-md text-primary">
            Recommended for {space} ({displayResults.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {displayResults.map((stone) => (
              <Link
                key={stone.slug}
                href={`/stones/${stone.slug}`}
                className="rounded-xl bg-surface-container-lowest border border-outline-variant/40 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <img src={stone.image} alt={stone.name} className="h-48 w-full object-cover" />
                <div className="p-5 space-y-1">
                  <span className="font-technical-mono text-xs uppercase text-secondary">
                    {stone.type} • {stone.color}
                  </span>
                  <h3 className="font-title-md text-primary">{stone.name}</h3>
                  <p className="font-body-sm text-on-surface-variant">{stone.origin}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
