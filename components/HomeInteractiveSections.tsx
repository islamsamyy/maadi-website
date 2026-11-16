"use client";

import { useState } from "react";
import type { Stone } from "@/lib/types";
import { useQuote } from "@/components/QuoteContext";
import { AnimatedCounter } from "@/components/AnimatedCounter";

const HOME_CONCESSIONS = [
  {
    id: "galala",
    name: "Galala Mountain",
    code: "#GL-04",
    region: "Eastern Desert • Suez Gulf",
    gps: "29.5412° N, 32.2981° E",
    yieldMonthly: 12500,
    area: 140,
    stones: ["Galala Classic", "Galala Extra"],
  },
  {
    id: "sinai",
    name: "Central Sinai",
    code: "#SN-11",
    region: "Wadi El-Raha • Sinai",
    gps: "28.5390° N, 33.9750° E",
    yieldMonthly: 8200,
    area: 92,
    stones: ["Sinai Pearl", "Sinai Gold"],
  },
  {
    id: "menia",
    name: "Menia Basin",
    code: "#MN-02",
    region: "Samalout • Upper Egypt",
    gps: "28.3121° N, 30.7104° E",
    yieldMonthly: 18000,
    area: 210,
    stones: ["Sunny Menia", "Silvia Marble"],
  },
  {
    id: "aswan",
    name: "Aswan Cataract",
    code: "#AS-09",
    region: "Southern Cataract • Aswan",
    gps: "24.0889° N, 32.8998° E",
    yieldMonthly: 6400,
    area: 85,
    stones: ["Rosa Aswan", "Imperial Black"],
  },
];

const HOME_DRY_LAY_BAYS = [
  {
    id: "bay-01",
    name: "Bay #01: Grand Hotel Lobby",
    project: "Ritz-Carlton Extension • Dubai",
    slabs: 240,
    areaSqm: 1150,
    continuity: "99.8%",
    inspector: "Foster & Partners QC Approved",
  },
  {
    id: "bay-02",
    name: "Bay #02: Master Penthouse",
    project: "Mayfair Residence • London",
    slabs: 180,
    areaSqm: 860,
    continuity: "99.4%",
    inspector: "Zaha Hadid Specifier Sign-Off",
  },
  {
    id: "bay-03",
    name: "Bay #03: Civic Opera Hall",
    project: "New Administrative Capital • Cairo",
    slabs: 620,
    areaSqm: 2950,
    continuity: "100.0%",
    inspector: "Ministry of Housing QC",
  },
];

const HOME_TRANSIT = [
  { region: "Southern Europe", days: "3 – 6 Days", port: "Alexandria / Damietta", capacity: "450 m² / 20ft FCL" },
  { region: "Arabian Gulf", days: "7 – 10 Days", port: "Ain Sokhna (Red Sea)", capacity: "420 m² / 20ft FCL" },
  { region: "US East Coast", days: "14 – 18 Days", port: "Port Said Hub", capacity: "21 MT Road-Limit" },
  { region: "East Asia", days: "16 – 22 Days", port: "Ain Sokhna Direct", capacity: "Heavy A-Frame Crates" },
];

const PROCESS_STAGES = [
  {
    id: "extraction",
    step: "01",
    title: "Sovereign Quarry Extraction",
    location: "Galala, El-Menia & Aswan",
    metric: "Diamond Wire Sawing",
    desc: "Blocks are extracted from our own quarry concessions using precision diamond-wire saws to preserve natural veining and eliminate micro-fractures.",
  },
  {
    id: "processing",
    step: "02",
    title: "Italian Gang-Saw & CNC",
    location: "Shaq El-Thoaban, Cairo",
    metric: "±0.5 mm Tolerance",
    desc: "80-blade Italian gang-saws and 5-axis CNC waterjets calibrate slabs to 20mm, 30mm, or custom cut-to-size architectural dimensions.",
  },
  {
    id: "drylay",
    step: "03",
    title: "100% Dry-Lay Verification",
    location: "Calibrated Daylight Hall",
    metric: "Zero Vein Mismatch",
    desc: "Every numbered slab is laid out in sequence under calibrated daylight for client sign-off and high-resolution photographic approval.",
  },
  {
    id: "dispatch",
    step: "04",
    title: "ISPM-15 Port Dispatch",
    location: "Sokhna & Alexandria Ports",
    metric: "48+ Global Ports",
    desc: "Moisture-sealed, fumigated A-frame crating engineered for safe ocean freight to Europe, the GCC, North America, and Asia.",
  },
];

export function HomeInteractiveSections({ stones }: { stones: Stone[] }) {
  const { addToQuote } = useQuote();
  const [selectedSlug, setSelectedSlug] = useState(stones[0]?.slug ?? "galala-classic");
  const [thickness, setThickness] = useState<"20mm" | "30mm">("20mm");
  const [areaSqm, setAreaSqm] = useState(450);
  const [addedFeedback, setAddedFeedback] = useState(false);
  const [activeStage, setActiveStage] = useState(PROCESS_STAGES[0]);
  const [activeConcession, setActiveConcession] = useState<string>("all");
  const [activeBay, setActiveBay] = useState(HOME_DRY_LAY_BAYS[0]);
  const [activeTransit, setActiveTransit] = useState(HOME_TRANSIT[0]);
  const [copiedGps, setCopiedGps] = useState<string | null>(null);

  const filteredConcessions =
    activeConcession === "all"
      ? HOME_CONCESSIONS
      : HOME_CONCESSIONS.filter((c) => c.id === activeConcession);

  const copyGps = (gps: string) => {
    navigator.clipboard.writeText(gps);
    setCopiedGps(gps);
    setTimeout(() => setCopiedGps(null), 2000);
  };

  const selectedStone = stones.find((s) => s.slug === selectedSlug) ?? stones[0];

  // Engineering estimates: ~4.5 m² per slab, ~54 kg/m² at 20mm (~81 kg/m² at 30mm), 24t per 20ft FCL
  const estimatedSlabs = Math.ceil(areaSqm / 4.5);
  const kgPerSqm = thickness === "20mm" ? 54 : 81;
  const weightTons = ((areaSqm * kgPerSqm) / 1000).toFixed(1);
  const containersFcl = Math.max(1, Math.ceil((areaSqm * kgPerSqm) / 24000));

  const handleAddCalculated = () => {
    if (!selectedStone) return;
    addToQuote({
      slug: selectedStone.slug,
      name: selectedStone.name,
      finish: selectedStone.finishes[0] ?? "Polished",
      thickness,
      quantitySqm: areaSqm,
    });
    setAddedFeedback(true);
    setTimeout(() => setAddedFeedback(false), 2000);
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. Interactive Export & Container Calculator */}
      <section className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="rounded-3xl bg-primary-container text-on-primary p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center shadow-lg">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-technical-mono text-xs uppercase tracking-widest text-secondary-fixed-dim">
              Interactive Procurement Tool
            </span>
            <h2 className="font-headline-md text-headline-md text-white">
              Export &amp; Container Calculator
            </h2>
            <p className="font-body-md text-white/80">
              Estimate slab count, gross metric tonnage, and 20ft FCL container requirements for your project before requesting a formal FOB/CIF quote.
            </p>
          </div>

          <div className="lg:col-span-7 bg-surface-container-lowest text-on-surface rounded-2xl p-6 md:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-1.5">
                  Select Stone
                </label>
                <select
                  value={selectedSlug}
                  onChange={(e) => setSelectedSlug(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-surface-container-low border border-outline-variant text-body-sm"
                >
                  {stones.map((s) => (
                    <option key={s.slug} value={s.slug}>
                      {s.name} ({s.type})
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-label-caps text-xs uppercase text-on-surface-variant block mb-1.5">
                  Slab Thickness
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {(["20mm", "30mm"] as const).map((t) => (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setThickness(t)}
                      className={`py-2.5 rounded-lg font-technical-mono text-xs uppercase transition-colors ${
                        thickness === t
                          ? "bg-primary-container text-on-primary"
                          : "bg-surface-container-low text-on-surface-variant"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="font-label-caps text-xs uppercase text-on-surface-variant">
                  Project Area (m²)
                </label>
                <span className="font-technical-mono text-sm font-bold text-primary">
                  {areaSqm.toLocaleString()} m²
                </span>
              </div>
              <input
                type="range"
                min={50}
                max={5000}
                step={50}
                value={areaSqm}
                onChange={(e) => setAreaSqm(Number(e.target.value))}
                className="w-full accent-secondary"
              />
            </div>

            <div className="grid grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-surface-container-low text-center">
                <div className="font-technical-mono text-[11px] uppercase text-on-surface-variant">
                  Est. Slabs
                </div>
                <div className="font-headline-sm text-primary font-bold mt-1">
                  {estimatedSlabs}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-container-low text-center">
                <div className="font-technical-mono text-[11px] uppercase text-on-surface-variant">
                  Gross Weight
                </div>
                <div className="font-headline-sm text-primary font-bold mt-1">
                  {weightTons} t
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-surface-container-low text-center">
                <div className="font-technical-mono text-[11px] uppercase text-on-surface-variant">
                  20ft FCL
                </div>
                <div className="font-headline-sm text-secondary font-bold mt-1">
                  {containersFcl}
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={handleAddCalculated}
              className="w-full py-3 rounded-lg bg-secondary text-on-secondary font-label-md uppercase tracking-wider hover:opacity-90 transition-opacity"
            >
              {addedFeedback
                ? "Added to Quote Basket ✓"
                : `Add ${areaSqm.toLocaleString()} m² to Quote Basket`}
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Quarry-to-Port Process Explorer */}
      <section className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop space-y-6">
        <div>
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
            End-to-End Traceability
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mt-1">
            From Quarry Block to Global Port
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          {PROCESS_STAGES.map((stage) => {
            const isActive = activeStage.id === stage.id;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveStage(stage)}
                className={`p-5 rounded-2xl text-left border transition-all ${
                  isActive
                    ? "bg-primary-container text-on-primary border-primary-container shadow-md"
                    : "bg-surface-container-lowest text-on-surface border-outline-variant/40 hover:border-secondary"
                }`}
              >
                <span
                  className={`font-technical-mono text-xs uppercase ${
                    isActive ? "text-secondary-fixed-dim" : "text-secondary"
                  }`}
                >
                  Step {stage.step}
                </span>
                <h3 className="font-title-md mt-1">{stage.title}</h3>
              </button>
            );
          })}
        </div>

        <div className="p-6 md:p-8 rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="font-technical-mono text-xs uppercase text-secondary">
              {activeStage.location} • {activeStage.metric}
            </span>
            <h3 className="font-headline-sm text-primary">{activeStage.title}</h3>
            <p className="font-body-md text-on-surface-variant">{activeStage.desc}</p>
          </div>
        </div>
      </section>

      {/* 3. Interactive Quarry Concessions Explorer */}
      <section className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop space-y-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
              Sovereign Extraction
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mt-1">
              Direct Egyptian Quarry Concessions
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setActiveConcession("all")}
              className={`px-3.5 py-1.5 rounded-full font-technical-mono text-xs uppercase transition-all ${
                activeConcession === "all"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              All ({HOME_CONCESSIONS.length})
            </button>
            {HOME_CONCESSIONS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setActiveConcession(c.id)}
                className={`px-3.5 py-1.5 rounded-full font-technical-mono text-xs uppercase transition-all ${
                  activeConcession === c.id
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredConcessions.map((c) => (
            <div
              key={c.id}
              className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm hover:border-secondary transition-all flex flex-col justify-between gap-4"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-technical-mono text-xs text-secondary font-bold">{c.code}</span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-technical-mono text-[10px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-ping" />
                    Live
                  </span>
                </div>
                <h3 className="font-title-md text-primary font-semibold">{c.name}</h3>
                <p className="font-body-sm text-on-surface-variant">{c.region}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {c.stones.map((st) => (
                    <span key={st} className="px-2 py-0.5 rounded bg-surface-container text-[11px] font-technical-mono text-primary">
                      {st}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-3 border-t border-outline-variant/30 space-y-2">
                <div className="flex justify-between text-xs font-technical-mono">
                  <span className="text-on-surface-variant">Monthly Yield</span>
                  <span className="text-secondary font-bold">
                    <AnimatedCounter end={c.yieldMonthly} suffix=" T" />
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => copyGps(c.gps)}
                  className="w-full py-1.5 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-primary font-technical-mono text-[11px] flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copiedGps === c.gps ? "check" : "content_copy"}
                  </span>
                  <span>{copiedGps === c.gps ? "GPS Copied!" : c.gps}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive 100% Dry-Lay Lab & Ocean Freight Simulator */}
      <section className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Dry-Lay Bay Inspector */}
        <div className="rounded-3xl bg-surface-container-low border border-outline-variant/40 p-6 md:p-8 space-y-5">
          <div>
            <span className="font-label-caps text-xs uppercase tracking-widest text-secondary">
              Pre-Assembly Verification
            </span>
            <h3 className="font-headline-sm text-primary mt-1">100% Dry-Lay Lab Inspector</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {HOME_DRY_LAY_BAYS.map((bay) => (
              <button
                key={bay.id}
                type="button"
                onClick={() => setActiveBay(bay)}
                className={`px-3 py-1.5 rounded-xl font-technical-mono text-xs transition-all ${
                  activeBay.id === bay.id
                    ? "bg-primary text-on-primary font-bold shadow-sm"
                    : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {bay.name.split(":")[0]}
              </button>
            ))}
          </div>
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 space-y-3">
            <div className="flex items-center justify-between">
              <span className="font-title-md text-primary font-semibold">{activeBay.project}</span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-technical-mono text-xs font-bold">
                {activeBay.continuity} Match
              </span>
            </div>
            <p className="font-body-sm text-on-surface-variant">{activeBay.inspector}</p>
            <div className="flex gap-4 pt-2 font-technical-mono text-xs text-primary">
              <span>{activeBay.slabs} Slabs</span>
              <span>•</span>
              <span>{activeBay.areaSqm} m² Dry-Laid</span>
            </div>
          </div>
        </div>

        {/* Ocean Freight & Transit Simulator */}
        <div className="rounded-3xl bg-surface-container-low border border-outline-variant/40 p-6 md:p-8 space-y-5">
          <div>
            <span className="font-label-caps text-xs uppercase tracking-widest text-secondary">
              Global Port Logistics
            </span>
            <h3 className="font-headline-sm text-primary mt-1">Ocean Transit Time Simulator</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {HOME_TRANSIT.map((t) => (
              <button
                key={t.region}
                type="button"
                onClick={() => setActiveTransit(t)}
                className={`px-3 py-1.5 rounded-xl font-technical-mono text-xs transition-all ${
                  activeTransit.region === t.region
                    ? "bg-primary text-on-primary font-bold shadow-sm"
                    : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {t.region}
              </button>
            ))}
          </div>
          <div className="p-5 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 grid grid-cols-3 gap-3">
            <div>
              <span className="font-technical-mono text-[10px] uppercase text-on-surface-variant block">
                Transit Time
              </span>
              <span className="font-headline-sm text-secondary font-bold">{activeTransit.days}</span>
            </div>
            <div>
              <span className="font-technical-mono text-[10px] uppercase text-on-surface-variant block">
                Departure Port
              </span>
              <span className="font-title-sm text-primary font-semibold">{activeTransit.port}</span>
            </div>
            <div>
              <span className="font-technical-mono text-[10px] uppercase text-on-surface-variant block">
                Container Load
              </span>
              <span className="font-title-sm text-primary font-semibold">{activeTransit.capacity}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
