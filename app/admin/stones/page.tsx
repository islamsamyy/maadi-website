"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface AdminStoneRow {
  id: string;
  slug: string;
  name: string;
  type: string;
  origin: string;
  stock_sqm: number;
  published: boolean;
}

export default function AdminStonesPage() {
  const [search, setSearch] = useState("");
  const [stones, setStones] = useState<AdminStoneRow[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from("stones")
        .select("id, slug, name, type, origin, stock_sqm, published")
        .order("name", { ascending: true });
      if (data) setStones(data);
      setLoading(false);
    }
    load();
  }, []);

  const filtered = stones.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.origin.toLowerCase().includes(search.toLowerCase())
  );

  const togglePublish = async (slug: string, current: boolean) => {
    const next = !current;
    setStones((prev) =>
      prev.map((s) => (s.slug === slug ? { ...s, published: next } : s))
    );
    const supabase = createClient();
    await supabase.from("stones").update({ published: next }).eq("slug", slug);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-label-caps uppercase tracking-widest text-secondary">
            Catalog Management
          </span>
          <h1 className="font-headline-md text-headline-md text-primary mt-1">
            Stones Inventory ({filtered.length})
          </h1>
        </div>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search stones..."
          className="px-4 py-2 rounded-lg bg-surface-container-lowest border border-outline-variant text-body-sm w-64"
        />
      </div>

      <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant/40 overflow-x-auto shadow-sm">
        {loading ? (
          <div className="p-8 text-center font-body-sm text-on-surface-variant">
            Loading stones from Supabase...
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low font-technical-mono text-xs uppercase text-on-surface-variant">
                <th className="p-4">Stone</th>
                <th className="p-4">Type</th>
                <th className="p-4">Origin</th>
                <th className="p-4">Stock (m²)</th>
                <th className="p-4">Published</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30 font-body-sm">
              {filtered.map((s) => (
                <tr key={s.slug} className="hover:bg-surface-container-low/50">
                  <td className="p-4 font-semibold text-primary">{s.name}</td>
                  <td className="p-4">{s.type}</td>
                  <td className="p-4">{s.origin}</td>
                  <td className="p-4 font-technical-mono">{s.stock_sqm.toLocaleString()}</td>
                  <td className="p-4">
                    <button
                      type="button"
                      onClick={() => togglePublish(s.slug, s.published)}
                      className={`px-3 py-1 rounded-full font-technical-mono text-xs ${
                        s.published
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      {s.published ? "Published" : "Draft"}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
