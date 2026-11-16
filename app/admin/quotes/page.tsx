"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

interface AdminQuoteRow {
  id: string;
  quote_code: string;
  company: string;
  full_name: string;
  country: string;
  inquiry_mode: string;
  status: string;
  quote_request_items: { stone_name: string; quantity_sqm: number }[];
}

export default function AdminQuotesPage() {
  const [quotes, setQuotes] = useState<AdminQuoteRow[]>([]);
  const [filter, setFilter] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const supabase = createClient();
      const { data } = await supabase
        .from("quote_requests")
        .select("id, quote_code, company, full_name, country, inquiry_mode, status, quote_request_items(stone_name, quantity_sqm)")
        .order("created_at", { ascending: false });
      if (data) setQuotes(data as AdminQuoteRow[]);
      setLoading(false);
    }
    load();
  }, []);

  const filtered =
    filter === "All" ? quotes : quotes.filter((q) => q.status === filter);

  const updateStatus = async (id: string, status: string) => {
    setQuotes((prev) => prev.map((q) => (q.id === id ? { ...q, status } : q)));
    const supabase = createClient();
    await supabase.from("quote_requests").update({ status }).eq("id", id);
  };

  return (
    <div className="space-y-6">
      <div>
        <span className="font-label-caps uppercase tracking-widest text-secondary">
          Sales Pipeline
        </span>
        <h1 className="font-headline-md text-headline-md text-primary mt-1">
          Quote Requests Inbox
        </h1>
      </div>

      <div className="flex flex-wrap gap-2">
        {["All", "New", "Contacted", "Quoted", "Won", "Lost"].map((st) => (
          <button
            key={st}
            type="button"
            onClick={() => setFilter(st)}
            className={`px-3.5 py-1.5 rounded-lg font-label-md text-xs uppercase ${
              filter === st
                ? "bg-primary-container text-on-primary"
                : "bg-surface-container text-on-surface-variant"
            }`}
          >
            {st}
          </button>
        ))}
      </div>

      <div className="rounded-2xl bg-surface-container-lowest border border-outline-variant/40 overflow-x-auto shadow-sm">
        {loading ? (
          <div className="p-8 text-center font-body-sm text-on-surface-variant">
            Loading quote requests...
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-8 text-center font-body-sm text-on-surface-variant">
            No quote requests match this filter.
          </div>
        ) : (
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low font-technical-mono text-xs uppercase text-on-surface-variant">
                <th className="p-4">ID</th>
                <th className="p-4">Client</th>
                <th className="p-4">Country</th>
                <th className="p-4">Requested Stones</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/30 font-body-sm">
              {filtered.map((q) => {
                const stoneSummary =
                  q.quote_request_items?.length > 0
                    ? q.quote_request_items
                        .map((i) => `${i.stone_name} (${i.quantity_sqm.toLocaleString()} m²)`)
                        .join(", ")
                    : `${q.inquiry_mode.toUpperCase()} Inquiry`;

                return (
                  <tr key={q.id}>
                    <td className="p-4 font-technical-mono text-secondary">{q.quote_code}</td>
                    <td className="p-4 font-semibold text-primary">
                      {q.company}
                      <div className="font-normal text-xs text-on-surface-variant">{q.full_name}</div>
                    </td>
                    <td className="p-4">{q.country}</td>
                    <td className="p-4">{stoneSummary}</td>
                    <td className="p-4">
                      <select
                        value={q.status}
                        onChange={(e) => updateStatus(q.id, e.target.value)}
                        className="px-2.5 py-1 rounded-lg bg-surface-container border border-outline-variant text-xs font-technical-mono"
                      >
                        <option>New</option>
                        <option>Contacted</option>
                        <option>Quoted</option>
                        <option>Won</option>
                        <option>Lost</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
