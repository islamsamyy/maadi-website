"use client";

import Link from "next/link";
import { useState } from "react";
import type { Stone } from "@/lib/types";
import { useQuote } from "@/components/QuoteContext";

export function StoneDetailClient({ stone }: { stone: Stone }) {
  const { favorites, toggleFavorite, addToQuote } = useQuote();
  const [selectedFinish, setSelectedFinish] = useState(stone.finishes[0] ?? "Polished");
  const [selectedThickness, setSelectedThickness] = useState(stone.thicknesses[0] ?? "20mm");
  const [qty, setQty] = useState(250);
  const [activeTab, setActiveTab] = useState<"description" | "specs" | "applications">("description");

  const isFav = favorites.includes(stone.slug);

  return (
    <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-12">
      <nav className="flex items-center gap-2 font-technical-mono text-technical-mono uppercase tracking-wider text-on-surface-variant mb-8">
        <Link href="/" className="hover:text-primary">Home</Link>
        <span>/</span>
        <Link href="/stones" className="hover:text-primary">Stones</Link>
        <span>/</span>
        <span className="text-secondary font-semibold">{stone.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-4">
          <div className="rounded-2xl overflow-hidden bg-surface-container-low h-[460px]">
            <img
              src={stone.image}
              alt={stone.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div>
            <span className="px-3 py-1 rounded-full bg-surface-container text-secondary font-technical-mono text-[11px] uppercase">
              {stone.type} • {stone.availability}
            </span>
            <h1 className="font-headline-lg text-headline-lg text-primary mt-3">
              {stone.name}
            </h1>
            <p className="font-body-md text-on-surface-variant mt-1">
              Origin: {stone.origin} • Stock: {stone.stockSqm.toLocaleString()} m²
            </p>
          </div>

          <div className="space-y-4 p-5 rounded-xl bg-surface-container-low">
            <div>
              <label className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-2">
                Select Finish
              </label>
              <div className="flex flex-wrap gap-2">
                {stone.finishes.map((f) => (
                  <button
                    key={f}
                    type="button"
                    onClick={() => setSelectedFinish(f)}
                    className={`px-3 py-1.5 rounded-lg font-label-md text-label-md ${
                      selectedFinish === f
                        ? "bg-primary-container text-on-primary"
                        : "bg-surface-container-lowest text-on-surface"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-2">
                  Thickness
                </label>
                <select
                  value={selectedThickness}
                  onChange={(e) => setSelectedThickness(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant"
                >
                  {stone.thicknesses.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-label-caps text-label-caps uppercase text-on-surface-variant block mb-2">
                  Quantity (m²)
                </label>
                <input
                  type="number"
                  min={10}
                  value={qty}
                  onChange={(e) => setQty(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant"
                />
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <button
                type="button"
                onClick={() =>
                  addToQuote({
                    slug: stone.slug,
                    name: stone.name,
                    finish: selectedFinish,
                    thickness: selectedThickness,
                    quantitySqm: qty,
                  })
                }
                className="flex-1 py-3 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-secondary transition-colors"
              >
                Add to Quote Basket
              </button>
              <button
                type="button"
                onClick={() => toggleFavorite(stone.slug)}
                className="px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant text-secondary"
              >
                <span className="material-symbols-outlined text-[20px]">
                  {isFav ? "favorite" : "favorite_border"}
                </span>
              </button>
            </div>
          </div>

          <div className="border-t border-outline-variant/40 pt-4">
            <div className="flex gap-4 mb-4">
              {(["description", "specs", "applications"] as const).map((tab) => (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTab(tab)}
                  className={`font-label-md uppercase text-xs pb-1 border-b-2 transition-colors ${
                    activeTab === tab
                      ? "border-secondary text-primary font-semibold"
                      : "border-transparent text-on-surface-variant"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            {activeTab === "description" && (
              <p className="font-body-md text-on-surface-variant leading-relaxed">
                {stone.description}
              </p>
            )}
            {activeTab === "specs" && (
              <dl className="grid grid-cols-2 gap-3 font-body-sm">
                <div><dt className="text-on-surface-variant">Slab Size</dt><dd className="font-semibold text-primary">{stone.slabSize}</dd></div>
                <div><dt className="text-on-surface-variant">Density</dt><dd className="font-semibold text-primary">{stone.density}</dd></div>
                <div><dt className="text-on-surface-variant">Water Absorption</dt><dd className="font-semibold text-primary">{stone.waterAbsorption}</dd></div>
                <div><dt className="text-on-surface-variant">Color Tone</dt><dd className="font-semibold text-primary">{stone.color}</dd></div>
              </dl>
            )}
            {activeTab === "applications" && (
              <div className="flex flex-wrap gap-2">
                {stone.applications.map((app) => (
                  <span key={app} className="px-3 py-1 rounded-full bg-surface-container text-primary font-body-sm">
                    {app}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
