"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/client";
import { useQuote } from "@/components/QuoteContext";
import type { Stone } from "@/lib/types";

export default function FavoritesPage() {
  const { favorites, toggleFavorite, addToQuote } = useQuote();
  const [stones, setStones] = useState<Stone[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      if (favorites.length === 0) {
        setStones([]);
        setLoading(false);
        return;
      }
      const supabase = createClient();
      const { data } = await supabase
        .from("stones")
        .select("*")
        .in("slug", favorites)
        .eq("published", true);

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
      setLoading(false);
    }
    load();
  }, [favorites]);

  return (
    <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-12">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-8 border-b border-outline-variant/40">
        <div>
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
            Architectural Mood Board
          </span>
          <h1 className="font-headline-lg text-headline-lg text-primary mt-1">
            Saved Favorites ({stones.length})
          </h1>
        </div>
        <Link
          href="/request-price"
          className="px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-secondary transition-colors"
        >
          Go to Quote Basket
        </Link>
      </div>

      {loading ? (
        <div className="py-20 text-center font-body-md text-on-surface-variant">
          Loading saved stones...
        </div>
      ) : stones.length === 0 ? (
        <div className="py-20 text-center space-y-4">
          <p className="font-body-lg text-on-surface-variant">No stones saved to your mood board yet.</p>
          <Link href="/stones" className="text-secondary font-semibold hover:underline">
            Explore Stones Catalog →
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
          {stones.map((stone) => (
            <div
              key={stone.slug}
              className="rounded-xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col"
            >
              <img src={stone.image} alt={stone.name} className="h-52 w-full object-cover" />
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-title-md text-primary">{stone.name}</h3>
                  <p className="font-body-sm text-on-surface-variant">
                    {stone.type} • {stone.density} • {stone.slabSize}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      addToQuote({
                        slug: stone.slug,
                        name: stone.name,
                        finish: stone.finishes[0] ?? "Polished",
                        thickness: stone.thicknesses[0] ?? "20mm",
                        quantitySqm: 200,
                      })
                    }
                    className="flex-1 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-secondary"
                  >
                    Add to Quote
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleFavorite(stone.slug)}
                    className="px-3 py-2.5 rounded-lg bg-surface-container text-error"
                  >
                    <span className="material-symbols-outlined text-[20px]">delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
