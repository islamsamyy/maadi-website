"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import type { Stone } from "@/lib/types";
import { useQuote } from "@/components/QuoteContext";

export function StonesCatalogClient({ stones }: { stones: Stone[] }) {
  const { favorites, toggleFavorite, addToQuote } = useQuote();
  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    return stones.filter((s) => {
      const matchesSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.origin.toLowerCase().includes(search.toLowerCase()) ||
        s.color.toLowerCase().includes(search.toLowerCase());
      const matchesType = typeFilter === "All" || s.type === typeFilter;
      const matchesAvail =
        availabilityFilter === "All" || s.availability === availabilityFilter;
      return matchesSearch && matchesType && matchesAvail;
    });
  }, [stones, search, typeFilter, availabilityFilter]);

  return (
    <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-outline-variant/40">
        <div>
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
            Direct Quarry Inventory
          </span>
          <h1 className="font-headline-lg text-headline-lg text-primary mt-1">
            Egyptian Stones &amp; Marble Catalog
          </h1>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search stone, origin, color..."
            className="px-4 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant text-body-sm w-64 focus:outline-none focus:border-secondary"
          />
          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant text-body-sm"
          >
            <option value="All">All Types</option>
            <option value="Marble">Marble</option>
            <option value="Granite">Granite</option>
            <option value="Travertine">Travertine</option>
            <option value="Limestone">Limestone</option>
          </select>
          <select
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            className="px-3 py-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant text-body-sm"
          >
            <option value="All">All Availability</option>
            <option value="In Stock">In Stock</option>
            <option value="On Request">On Request</option>
          </select>
          <div className="flex rounded-lg border border-outline-variant overflow-hidden">
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`px-3 py-2 text-xs font-technical-mono ${
                viewMode === "grid"
                  ? "bg-primary-container text-on-primary"
                  : "bg-surface-container-lowest text-on-surface-variant"
              }`}
            >
              Grid
            </button>
            <button
              type="button"
              onClick={() => setViewMode("list")}
              className={`px-3 py-2 text-xs font-technical-mono ${
                viewMode === "list"
                  ? "bg-primary-container text-on-primary"
                  : "bg-surface-container-lowest text-on-surface-variant"
              }`}
            >
              List
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8"
            : "flex flex-col gap-4 pt-8"
        }
      >
        {filtered.map((stone) => {
          const isFav = favorites.includes(stone.slug);
          return (
            <div
              key={stone.slug}
              className={`rounded-2xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex ${
                viewMode === "grid" ? "flex-col" : "flex-col md:flex-row"
              }`}
            >
              <Link
                href={`/stones/${stone.slug}`}
                className={viewMode === "grid" ? "block h-56" : "block md:w-72 h-56 shrink-0"}
              >
                <img
                  src={stone.image}
                  alt={stone.name}
                  className="w-full h-full object-cover"
                />
              </Link>
              <div className="p-6 flex-1 flex flex-col justify-between gap-4">
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-technical-mono text-[11px] uppercase text-secondary">
                      {stone.type} • {stone.availability}
                    </span>
                    <button
                      type="button"
                      onClick={() => toggleFavorite(stone.slug)}
                      aria-label={`Favorite ${stone.name}`}
                      className={isFav ? "text-secondary" : "text-on-surface-variant"}
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {isFav ? "favorite" : "favorite_border"}
                      </span>
                    </button>
                  </div>
                  <Link href={`/stones/${stone.slug}`}>
                    <h2 className="font-headline-sm text-headline-sm text-primary mt-1 hover:text-secondary transition-colors">
                      {stone.name}
                    </h2>
                  </Link>
                  <p className="font-body-sm text-on-surface-variant mt-1">
                    {stone.origin} • {stone.color} • {stone.stockSqm.toLocaleString()} m²
                  </p>
                </div>
                <div className="flex gap-2">
                  <Link
                    href={`/stones/${stone.slug}`}
                    className="flex-1 text-center py-2.5 rounded-lg border border-outline-variant font-label-md text-xs uppercase tracking-wider text-primary hover:bg-surface-container"
                  >
                    Specs
                  </Link>
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
                    className="flex-1 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-xs uppercase tracking-wider hover:bg-secondary transition-colors"
                  >
                    Add to Quote
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
