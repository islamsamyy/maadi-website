import { createClient } from "@/lib/supabase/server";

export default async function AdminOverviewPage() {
  const supabase = await createClient();

  const [{ data: quotes }, { data: stones }, { data: items }] = await Promise.all([
    supabase.from("quote_requests").select("id, status, country"),
    supabase.from("stones").select("id, stock_sqm, published"),
    supabase.from("quote_request_items").select("stone_name"),
  ]);

  const allQuotes = quotes ?? [];
  const allStones = stones ?? [];
  const allItems = items ?? [];

  const activeQuotes = allQuotes.filter((q) => q.status !== "Lost").length;
  const totalStock = allStones.reduce((acc, s) => acc + (s.stock_sqm ?? 0), 0);
  const wonCount = allQuotes.filter((q) => q.status === "Won").length;
  const quotedOrWon = allQuotes.filter(
    (q) => q.status === "Quoted" || q.status === "Won"
  ).length;
  const conversionRate =
    quotedOrWon > 0 ? `${((wonCount / quotedOrWon) * 100).toFixed(1)}%` : "0%";

  const stoneCounts: Record<string, number> = {};
  for (const item of allItems) {
    stoneCounts[item.stone_name] = (stoneCounts[item.stone_name] ?? 0) + 1;
  }
  const topStoneEntry = Object.entries(stoneCounts).sort((a, b) => b[1] - a[1])[0];

  const countryCounts: Record<string, number> = {};
  for (const q of allQuotes) {
    countryCounts[q.country] = (countryCounts[q.country] ?? 0) + 1;
  }
  const countries = Object.entries(countryCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6)
    .map(([country, requests]) => ({
      country,
      requests,
      share:
        allQuotes.length > 0
          ? `${Math.round((requests / allQuotes.length) * 100)}%`
          : "0%",
    }));

  const kpis = [
    {
      label: "Active Quote Requests",
      value: String(activeQuotes),
      sub: `${allQuotes.length} total inquiries`,
    },
    {
      label: "Total Catalog Stock",
      value: `${totalStock.toLocaleString()} m²`,
      sub: `Across ${allStones.length} stones`,
    },
    {
      label: "Top Requested Stone",
      value: topStoneEntry ? topStoneEntry[0] : "—",
      sub: topStoneEntry ? `${topStoneEntry[1]} quote items` : "No items yet",
    },
    {
      label: "Conversion Rate",
      value: conversionRate,
      sub: "Quoted → Won",
    },
  ];

  return (
    <div className="space-y-8">
      <div>
        <span className="font-label-caps uppercase tracking-widest text-secondary">
          Executive Summary
        </span>
        <h1 className="font-headline-lg text-headline-lg text-primary mt-1">
          Operations &amp; Export Analytics
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
        {kpis.map((kpi) => (
          <div
            key={kpi.label}
            className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm"
          >
            <div className="font-technical-mono text-xs uppercase text-on-surface-variant">
              {kpi.label}
            </div>
            <div className="font-headline-md text-primary font-bold mt-2">
              {kpi.value}
            </div>
            <div className="font-body-sm text-secondary mt-1">{kpi.sub}</div>
          </div>
        ))}
      </div>

      <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-4">
        <h2 className="font-title-md text-primary">Quote Requests by Country</h2>
        {countries.length === 0 ? (
          <p className="font-body-sm text-on-surface-variant">
            No quote requests submitted yet.
          </p>
        ) : (
          <div className="space-y-3">
            {countries.map((c) => (
              <div key={c.country} className="flex items-center justify-between text-body-sm">
                <span className="font-medium text-primary">{c.country}</span>
                <div className="flex items-center gap-4">
                  <span className="font-technical-mono text-on-surface-variant">
                    {c.requests} requests
                  </span>
                  <span className="px-2.5 py-0.5 rounded bg-surface-container text-secondary font-technical-mono text-xs">
                    {c.share}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
