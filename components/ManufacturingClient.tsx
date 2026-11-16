"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { Reveal } from "@/components/Reveal";

interface Concession {
  id: string;
  name: string;
  code: string;
  region: string;
  gps: string;
  age: string;
  area: number;
  yieldMonthly: number;
  extraction: string;
  description: string;
  stones: string[];
  image: string;
  compressiveMpa: number;
}

const CONCESSIONS: Concession[] = [
  {
    id: "galala",
    name: "Galala Mountain Concession",
    code: "Concession #GL-04",
    region: "Eastern Desert • Suez Gulf",
    gps: "29.5412° N, 32.2981° E",
    age: "Eocene (48 Ma)",
    area: 140,
    yieldMonthly: 12500,
    extraction: "Diamond Wire Saw",
    description:
      "The historic source of Galala Classic, Galala Commercial, and Galala Extra. Dense sedimentary calcitic beds yielding monumental dimension blocks exceeding 3.2 meters without explosive micro-fractures.",
    stones: ["Galala Classic", "Galala Extra", "Galala Fiorito", "Beige Travertine"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCWdCgofviDiZMbM7nFhMDTTCLfiIXkGkhBP5EsXNbF9OB6kV7sgaDAOzh_g8CHR4CqW3EnhbhEKbvTNrGA6LSlhBkhd-SJK7tSkLD_nXAEndOJkYLiPuXkeBEVfHhu1b6nmN4k66ASo5OHOR2vSdFwjaGrgVQITeC9U4DfH__cEQVxlxfusQZ4lXC1hjyX60OuBDRa2e7fpBOH4RK-fH8ubbo_H7uYHTVuJJYzqZTZ",
    compressiveMpa: 138,
  },
  {
    id: "sinai",
    name: "Central Sinai Concession",
    code: "Concession #SN-11",
    region: "Wadi El-Raha • Sinai Peninsula",
    gps: "28.5390° N, 33.9750° E",
    age: "Cretaceous (92 Ma)",
    area: 92,
    yieldMonthly: 8200,
    extraction: "Continuous Chain Saw",
    description:
      "The sovereign cradle of Sinai Pearl (Triesta Grey) and Sinai Gold. Sub-zero freeze-thaw certified dense nummulitic limestone with exceptional flexural resistance, widely specified for exterior ventilated rainscreens.",
    stones: ["Sinai Pearl", "Sinai Gold", "Triesta Beige", "Desert Grey"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuApIvyQgxdxo5kQuQKnTSCi2_PB6UI3xJGc9-4tW1akZ_sR6e70s3_6nsWAuar_MBs_ogML9phd0aL8rA7_yTWopwhBTPgBBeZb2p611AdRya1XaeW9JRQA6au9QjkGq8-uOSmcKvwR5RrqYA3ODxBHl5WIeQCXJus9pHYu9UJmvyot_vYbQCZax6OSyvky_Iu2fmAHpt7dIonii6fDyxFW6toC2Qbyqyt_rd1nt2w2",
    compressiveMpa: 146,
  },
  {
    id: "menia",
    name: "Upper Egypt Menia Basin",
    code: "Concession #MN-02",
    region: "Samalout • Menia Basin",
    gps: "28.3121° N, 30.7104° E",
    age: "Middle Eocene (42 Ma)",
    area: 210,
    yieldMonthly: 18000,
    extraction: "Hydraulic Split & Wire",
    description:
      "The world's preeminent source for Sunny Menia Light, Sunny Gold, and Silvia Marble. Deep, continuous stratified banks with virtually zero tonal variance over 100,000 m² lot runs, bedrock for international airport terminals.",
    stones: ["Sunny Menia Light", "Sunny Gold", "Silvia Marble", "Menia Alabaster"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuB2RdGqkL0yP6NDSapsR_UahC_tAGxrc8-C2cq4MXTfbbf_v60ud_nK7DHGbzcy9uZOwV_-FrtWVSWEMXAKI1JDqVoTGB-jCIryzg5K77PqvNpyZ0DntrS4NzBQrBBq4fVXwGIPS08gYx1rzj6eqOprckI8GvcqW1mrkvTrAllOt80opxQKxPFcL42wsi8k30AQ6s1YuGi2IzedhyVWktebEENlv-y1wt6WtFnj0rGl",
    compressiveMpa: 129,
  },
  {
    id: "aswan",
    name: "Aswan Cataract Concession",
    code: "Concession #AS-09",
    region: "Southern Cataract • Aswan",
    gps: "24.0889° N, 32.8998° E",
    age: "Precambrian (590 Ma)",
    area: 85,
    yieldMonthly: 6400,
    extraction: "Diamond Wire + Hydrojet",
    description:
      "The revered imperial granites of the Pharaohs. Yielding ultra-dense volcanic Aswan Imperial Black, Imperial Red, and Rose Granite with a compressive strength exceeding 165 MPa for severe climate heavy-traffic plazas.",
    stones: ["Rosa Aswan", "Imperial Black Granite", "Aswan Red", "Nubian Granite"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBQTcgVLzxodt7k212qJNzS0t8vQIk50BTfnyZbyirmeFR-0ktXKNampj_uXKt9Tdzm3G2b_qn13uAARckfnc3IJqdhWOWYfZXV8fQjG0WJlMVb9es6b0rDICVI-w7RQ7KfjVWSblBmXm9wj0gcNW2rf57As6HVc_tsvaWHysPTdWPd7PvpAhCgLxlXF2IvthXCpNekCIDGidhlkgB3xHWRj7HQAtMvwkHpJ2zembQP",
    compressiveMpa: 168,
  },
];

const WORKFLOW_STAGES = [
  {
    stage: "01",
    tag: "Gang Saws",
    title: "Diamond Multi-Wire Gang Saws",
    tech: "Gasparini & Breton Precision Multi-Wire",
    speed: "180 cm²/hr",
    tension: "Hydraulic Real-Time (18,000 N)",
    tolerance: "±0.5 mm Planar",
    desc: "Computerized diamond wire gangs slicing monumental 35-ton natural stone blocks into calibrated 20mm, 30mm, 40mm, and custom thickness architectural slabs with micron planar accuracy.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDYmNrZzrV4B822bqfGYGRKz3Tcwgr1SOO9zMLAeQxa15-Ttm-aq9Gb5ogNAeHzC7N8F38oVKX7fEQbwBNolluC1cS0FA-LfEB-YRRyDCkoy9wkHUuKWJWQNibbODUFiOmI2904LaqIZ6nCgNXsHIHfMsW3QXtSnXPTBwRvJyCQjaa-dOQhvcF9qCZa5tKi1Jvyp3x1IKNiGeOar3Q0_qjkAJCtnojFUXcHqYo4r_D",
  },
  {
    stage: "02",
    tag: "Resin Line",
    title: "Vacuum Epoxy Resin & Oven Curing",
    tech: "Automated Vacuum Infusion & Multi-Tier UV Kilns",
    speed: "48-Hour Cycle",
    tension: "Vacuum Pressure -0.98 bar",
    tolerance: "+38% Tensile Modulus",
    desc: "Automated vacuum chambers infuse high-clarity structural epoxy deep into geological micro-pores, followed by structural fiberglass mesh backing and temperature-controlled curing kilns.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-mPTg2KCtJhc8vn-difgh0skfje3s0JRZx2BB_bo1x30TOhO0zcr0W_TuIdFk3aRvErwDp0vZziD7Wu99f09iW7znqYAQwsEf9-yoYtKXJhnw_jr9FhUdljhnPW-RpZ2i4iTydf-7vUZs80vshQPrlKfS0D9jTIEjQIXMBcLAc3bpyVn--dDyv-ryt-imoO6Kw367TFdPXaeUStx9kXf0ngN2EbwakL_Tf38R3YBp",
  },
  {
    stage: "03",
    tag: "Surface Line",
    title: "24-Head Computerized Finishing",
    tech: "Levibreton KG Computerized Finishing Train",
    speed: ">95 GU (Mirror Gloss)",
    tension: "Multi-Oscillating Diamond Heads",
    tolerance: "Ra < 0.2 μm Roughness",
    desc: "Sequential diamond abrasive heads produce mirror-grade gloss finishes, velvety tactile architectural hones, antiqued leathered textures, or thermal anti-slip treatments for exterior plazas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBgl2DYl6F7azYVWQLF5yRko2tA3aL8h2MuEwku8Dajdq5intxw1gznwmVAc2LmiEk5FHobJUfAANXtzIOr9SgkPdn-ehZt9vTRCAuf4ZLert6ncLW2r2Xv2b8CJIxDMymjr5NNgO6KIhpf2He-iVWAWHLR31tLAnyM_UbiUHpOv3H5hpBVbw6sMvOlxqaQHvDLl2pia4x3ntjtg2NpHDylk4awamJbF1aWRKa50EdB",
  },
  {
    stage: "04",
    tag: "Fabrication",
    title: "5-Axis Waterjet & CNC Milling",
    tech: "Interpolated 5-Axis CNC & 60,000 PSI Dynamic Jet",
    speed: "60,000 PSI Pressure",
    tension: "Interpolated 5-Axis Motion",
    tolerance: "±0.1 mm Kerf Precision",
    desc: "Robotic 5-axis CNC machining centers carving fluted solid columns, 3D parametric facade panels, integrated vanity sinks, and zero-gap bookmatched architectural medallions.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBDrhStcQObjA3dLyxf12bWDvq-mHRK9jPp6FGe-bAGvsNjTTnOGCFZAH7iTIXam9Rq8TPQ3U8DBO_Y7TJACD0dKZJfUqXTHgoXvwleqrtnLDDutMQ9cVIx7Abg-fQCqt9ex6pviIYQF0c8bwCwB8EenWNNeA05jkIIkMuw1ZCS9GSfjZMq3iXHJuMB6ULsVsPh2UJ1bn0OnUPkAQMl6TSNPhwphj-NwBNgwAZDpC47",
  },
];

const DRY_LAY_BAYS = [
  {
    id: "bay-01",
    name: "Bay #01: Grand Hotel Lobby Atrium",
    project: "Ritz-Carlton Extension • Dubai",
    material: "Galala Extra Bookmatched",
    slabs: 240,
    areaSqm: 1150,
    qcStatus: "Verified & Approved",
    inspector: "Foster & Partners Quality Audit",
    continuity: "99.8%",
    notes: "Flawless vein tracking from north elevation colonnade through central reception rotunda.",
  },
  {
    id: "bay-02",
    name: "Bay #02: Bespoke Master Penthouse",
    project: "Mayfair Private Residence • London",
    material: "Sinai Pearl & Silvia Vein-Match",
    slabs: 180,
    areaSqm: 860,
    qcStatus: "Signed Off & Crating",
    inspector: "Zaha Hadid Architects Lead Specifier",
    continuity: "99.4%",
    notes: "Bookmatched radial symmetry across 14 master bath suites with seamless waterjet returns.",
  },
  {
    id: "bay-03",
    name: "Bay #03: Sovereign Civic Opera Hall",
    project: "New Administrative Capital • Cairo",
    material: "Sunny Menia & Rosa Aswan Granite",
    slabs: 620,
    areaSqm: 2950,
    qcStatus: "Live Verification Session",
    inspector: "Egyptian Ministry of Housing QC",
    continuity: "100.0%",
    notes: "High-traffic calibrated anti-slip honed paving inspected under 5500K daylight simulation.",
  },
  {
    id: "bay-04",
    name: "Bay #04: International Terminal Concourse",
    project: "Singapore Changi Terminal VIP Lounge",
    material: "Triesta Beige Calibrated 30mm",
    slabs: 410,
    areaSqm: 1980,
    qcStatus: "Pre-Assembly Complete",
    inspector: "Arup Facade Engineering Consultants",
    continuity: "99.6%",
    notes: "Thermal expansion tolerance and flexural stress testing certified prior to transoceanic palletizing.",
  },
];

const TRANSIT_DESTINATIONS = [
  {
    region: "Southern Europe (Italy / Spain / Greece)",
    days: "3 – 6 Days",
    port: "Alexandria / Damietta Terminal",
    feeder: "Direct Mediterranean Feeder (MSC / Maersk)",
    capacity: "450 m² per 20ft container (20mm)",
  },
  {
    region: "Arabian Gulf (Jebel Ali / Dammam / Doha)",
    days: "7 – 10 Days",
    port: "Ain Sokhna (Red Sea Gateway)",
    feeder: "Direct Red Sea Express Routes",
    capacity: "420 m² per 20ft container (20mm)",
  },
  {
    region: "United States (East Coast - NY / Savannah)",
    days: "14 – 18 Days",
    port: "Port Said Transshipment Hub",
    feeder: "Weekly Transatlantic Direct",
    capacity: "Road-limit 21 metric tons compliant",
  },
  {
    region: "East Asia (Singapore / Shanghai / Tokyo)",
    days: "16 – 22 Days",
    port: "Ain Sokhna (Direct Indian Ocean / Malacca)",
    feeder: "Deep-draft Ultra Large Container Vessels",
    capacity: "Heavy-duty steel strapped A-frame pallets",
  },
];

export function ManufacturingClient() {
  const [selectedConcession, setSelectedConcession] = useState<string>("all");
  const [activeStage, setActiveStage] = useState(WORKFLOW_STAGES[0]);
  const [activeBay, setActiveBay] = useState(DRY_LAY_BAYS[0]);
  const [selectedTransit, setSelectedTransit] = useState(TRANSIT_DESTINATIONS[0]);
  const [copiedGps, setCopiedGps] = useState<string | null>(null);

  // Interactive Block-to-Slab Estimator State
  const [blockLength, setBlockLength] = useState<number>(3.0); // meters
  const [blockHeight, setBlockHeight] = useState<number>(1.8); // meters
  const [blockWidth, setBlockWidth] = useState<number>(1.5); // meters
  const [thicknessMm, setThicknessMm] = useState<number>(20); // 20mm or 30mm or 40mm

  // Calculation logic
  // Effective slab count = blockWidth / (thickness + 3.5mm wire kerf)
  const wireKerf = 0.0035; // 3.5mm
  const thicknessM = thicknessMm / 1000;
  const estimatedSlabs = Math.max(1, Math.floor(blockWidth / (thicknessM + wireKerf)));
  const singleSlabArea = blockLength * blockHeight;
  const totalSqm = estimatedSlabs * singleSlabArea;
  // Density roughly 2680 kg/m3
  const volumeM3 = totalSqm * thicknessM;
  const weightTons = volumeM3 * 2.68;
  const containerCount = Math.max(1, Math.ceil(weightTons / 25)); // 25 tons net payload per 20ft box

  const filteredConcessions =
    selectedConcession === "all"
      ? CONCESSIONS
      : CONCESSIONS.filter((c) => c.id === selectedConcession);

  const copyGpsToClipboard = (gps: string) => {
    navigator.clipboard.writeText(gps);
    setCopiedGps(gps);
    setTimeout(() => setCopiedGps(null), 2500);
  };

  return (
    <div className="flex flex-col w-full">
      {/* Top Progress & Key Metric Hero */}
      <section className="w-full bg-surface-container-low">
        <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
          {/* Breadcrumb & Tag */}
          <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
            <nav
              aria-label="Breadcrumbs"
              className="flex items-center gap-2 font-technical-mono text-technical-mono uppercase tracking-wider text-on-surface-variant"
            >
              <Link className="hover:text-primary transition-colors" href="/">
                Home
              </Link>
              <span className="text-outline-variant">/</span>
              <span className="text-on-surface-variant">Industrial Infrastructure</span>
              <span className="text-outline-variant">/</span>
              <span className="text-secondary font-semibold">Manufacturing &amp; Quarries</span>
            </nav>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-secondary font-technical-mono text-technical-mono tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              Sovereign Extraction to Global Fabrication
            </span>
          </div>

          {/* Main Headline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-end pb-space-xl">
            <div className="lg:col-span-8 flex flex-col gap-space-sm">
              <h1 className="font-headline-lg text-headline-lg md:text-[46px] md:leading-[54px] text-primary tracking-tight">
                Sovereign Mountain Concessions &amp; State-of-the-Art Italian Processing.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl pt-2">
                Controlling complete vertical integration from our deep-seated Egyptian mountain
                concessions across Sinai, Galala, and Upper Egypt to our 45,000 m² automated
                industrial complex in Shaq Al Thoban, Cairo. Precision gang-saw slabbing, 5-axis CNC
                machining, and rigorous dry-lay verification for international architectural projects.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-sm hover:bg-secondary transition-all"
                href="#dry-lay"
              >
                <span>Explore 100% Dry-Lay Lab</span>
                <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
              </a>
              <a
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container hover:text-primary transition-all"
                href="#concessions"
              >
                <span>Direct Quarry Concessions</span>
                <span className="material-symbols-outlined text-[18px]">travel_explore</span>
              </a>
            </div>
          </div>

          {/* Quick Spec Key Figures Bar with Animated Counters */}
          <Reveal delay={50} className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-md pt-space-lg">
              <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30 hover:border-secondary transition-colors">
                <span className="font-technical-mono text-technical-mono uppercase tracking-widest text-on-surface-variant">
                  Concessions
                </span>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-headline-md text-headline-md text-primary font-bold text-[32px]">
                    <AnimatedCounter end={14} />
                  </span>
                  <span className="font-label-caps text-label-caps text-secondary font-semibold">
                    Active Mines
                  </span>
                </div>
                <span className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  Galala, Sinai, Menia &amp; Aswan
                </span>
              </div>

              <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30 hover:border-secondary transition-colors">
                <span className="font-technical-mono text-technical-mono uppercase tracking-widest text-on-surface-variant">
                  Monthly Throughput
                </span>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-headline-md text-headline-md text-primary font-bold text-[32px]">
                    <AnimatedCounter end={250000} />
                  </span>
                  <span className="font-label-caps text-label-caps text-secondary font-semibold">
                    m² / Month
                  </span>
                </div>
                <span className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  Calibrated Slabs &amp; Tiles
                </span>
              </div>

              <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30 hover:border-secondary transition-colors">
                <span className="font-technical-mono text-technical-mono uppercase tracking-widest text-on-surface-variant">
                  Cairo Infrastructure
                </span>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-headline-md text-headline-md text-primary font-bold text-[32px]">
                    <AnimatedCounter end={45000} />
                  </span>
                  <span className="font-label-caps text-label-caps text-secondary font-semibold">
                    m² Plant
                  </span>
                </div>
                <span className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  Shaq Al Thoban Industrial Zone
                </span>
              </div>

              <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30 hover:border-secondary transition-colors">
                <span className="font-technical-mono text-technical-mono uppercase tracking-widest text-on-surface-variant">
                  Slicing Calibration
                </span>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-headline-md text-headline-md text-primary font-bold text-[32px]">
                    ±<AnimatedCounter end={0.5} decimals={1} />
                  </span>
                  <span className="font-label-caps text-label-caps text-secondary font-semibold">
                    mm Tolerance
                  </span>
                </div>
                <span className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  Gasparini &amp; Breton Diamond Saws
                </span>
              </div>

              <div className="col-span-2 md:col-span-1 p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col justify-between border border-outline-variant/30 hover:border-secondary transition-colors">
                <span className="font-technical-mono text-technical-mono uppercase tracking-widest text-on-surface-variant">
                  Global Reach
                </span>
                <div className="mt-3 flex items-baseline gap-1.5">
                  <span className="font-headline-md text-headline-md text-primary font-bold text-[32px]">
                    <AnimatedCounter end={48} suffix="+" />
                  </span>
                  <span className="font-label-caps text-label-caps text-secondary font-semibold">
                    Seaports
                  </span>
                </div>
                <span className="mt-1 font-body-sm text-body-sm text-on-surface-variant">
                  Direct Mediterranean &amp; Red Sea routes
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Geological Quarry Concessions Section with Interactive Filter & Live Coordinates */}
      <section
        className="w-full py-space-3xl max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop"
        id="concessions"
      >
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-xl">
            <div className="flex flex-col gap-2 max-w-2xl">
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                Geological Stewardship
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">
                Direct Concession Mining: Where Ancient Geological Heritage Meets Modern Extraction
              </h2>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              We mandate diamond wire-saw and continuous chainsaw benching with strictly zero
              explosives. This preserves crystalline tensile strength, eliminates internal
              micro-fractures, and ensures uniform aesthetic strata across entire architectural
              orders.
            </p>
          </div>

          {/* Interactive Concession Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 pb-space-lg border-b border-outline-variant/30 mb-space-xl">
            <button
              type="button"
              onClick={() => setSelectedConcession("all")}
              className={`px-4 py-2 rounded-full font-label-md text-xs uppercase tracking-wider transition-all ${
                selectedConcession === "all"
                  ? "bg-primary text-on-primary shadow-sm"
                  : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
              }`}
            >
              All Active Concessions ({CONCESSIONS.length})
            </button>
            {CONCESSIONS.map((c) => (
              <button
                key={c.id}
                type="button"
                onClick={() => setSelectedConcession(c.id)}
                className={`px-4 py-2 rounded-full font-label-md text-xs uppercase tracking-wider transition-all ${
                  selectedConcession === c.id
                    ? "bg-primary text-on-primary shadow-sm"
                    : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                }`}
              >
                {c.name.split(" ")[0]} ({c.code})
              </button>
            ))}
          </div>
        </Reveal>

        {/* 4-Quarry Regional Showcase Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
          {filteredConcessions.map((concession, idx) => (
            <Reveal key={concession.id} delay={idx * 100}>
              <article className="flex flex-col rounded-3xl bg-surface-container-lowest shadow-sm overflow-hidden group hover:shadow-xl border border-outline-variant/30 hover:border-secondary transition-all duration-300">
                <div className="relative w-full h-72 overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    src={concession.image}
                    alt={concession.name}
                  />
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-technical-mono text-technical-mono uppercase tracking-wider shadow-sm text-xs">
                      {concession.region}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-technical-mono text-technical-mono uppercase tracking-wider shadow-sm flex items-center gap-1.5 text-xs">
                      <span className="w-2 h-2 rounded-full bg-on-secondary animate-ping"></span>
                      Live Concession
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyGpsToClipboard(concession.gps)}
                    title="Click to copy GPS coordinates"
                    className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-primary-container/90 text-on-primary font-technical-mono text-xs backdrop-blur-sm flex items-center gap-1.5 hover:bg-secondary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      {copiedGps === concession.gps ? "check" : "content_copy"}
                    </span>
                    <span>
                      {copiedGps === concession.gps ? "GPS Copied!" : concession.gps}
                    </span>
                  </button>
                </div>

                <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline-md text-headline-md text-primary font-semibold">
                        {concession.name}
                      </h3>
                      <span className="font-technical-mono text-technical-mono text-secondary font-semibold">
                        {concession.code}
                      </span>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {concession.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {concession.stones.map((st) => (
                        <span
                          key={st}
                          className="px-2.5 py-0.5 rounded-md bg-surface-container font-technical-mono text-[11px] text-primary"
                        >
                          {st}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Technical Spec Pill Grid with Live Animated Yield Counter */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-space-sm bg-surface-container-low p-space-sm rounded-2xl">
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                        Geological Age
                      </span>
                      <span className="font-title-md text-title-md text-primary mt-0.5 text-xs font-semibold">
                        {concession.age}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                        Concession Area
                      </span>
                      <span className="font-title-md text-title-md text-primary mt-0.5 text-xs font-semibold">
                        <AnimatedCounter end={concession.area} suffix=" Ha" />
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                        Extraction
                      </span>
                      <span className="font-title-md text-title-md text-primary mt-0.5 text-xs font-semibold">
                        {concession.extraction}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase text-[10px]">
                        Monthly Yield
                      </span>
                      <span className="font-title-md text-title-md text-secondary mt-0.5 text-xs font-bold">
                        <AnimatedCounter end={concession.yieldMonthly} suffix=" T" />
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Shaq Al Thoban Industrial Complex Section + Interactive 4-Stage Workflow */}
      <section className="w-full bg-surface-container-low py-space-3xl">
        <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop space-y-12">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-2 max-w-2xl">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                  Industrial Precision
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Shaq Al Thoban Industrial Complex: Advanced European Engineering in Cairo
                </h2>
              </div>
              <div className="flex items-center gap-3">
                <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-technical-mono text-technical-mono text-on-surface-variant border border-outline-variant/30 shadow-sm text-xs">
                  ISO 9001:2015 Certified
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-technical-mono text-technical-mono text-on-surface-variant border border-outline-variant/30 shadow-sm text-xs">
                  CE Mark Compliance
                </span>
              </div>
            </div>
          </Reveal>

          {/* Interactive Stage Selector Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {WORKFLOW_STAGES.map((st) => {
              const isSelected = activeStage.stage === st.stage;
              return (
                <button
                  key={st.stage}
                  type="button"
                  onClick={() => setActiveStage(st)}
                  className={`p-5 rounded-2xl text-left transition-all duration-300 border flex flex-col justify-between gap-3 ${
                    isSelected
                      ? "bg-primary-container text-on-primary shadow-xl border-secondary scale-[1.02]"
                      : "bg-surface-container-lowest text-primary hover:bg-surface-container hover:border-outline-variant border-outline-variant/30"
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span
                      className={`font-headline-md text-[26px] font-bold ${
                        isSelected ? "text-[#D4AF37]" : "text-secondary"
                      }`}
                    >
                      {st.stage}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded-full font-technical-mono text-[10px] uppercase font-semibold ${
                        isSelected
                          ? "bg-white/20 text-white"
                          : "bg-surface-container text-on-surface-variant"
                      }`}
                    >
                      {st.tag}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-title-md text-[16px] font-semibold">{st.title}</h3>
                    <p
                      className={`text-xs mt-1 line-clamp-2 ${
                        isSelected ? "text-white/80" : "text-on-surface-variant"
                      }`}
                    >
                      {st.tech}
                    </p>
                  </div>
                  <div className="text-[11px] font-technical-mono opacity-80 pt-1 border-t border-white/10 flex items-center gap-1">
                    <span>Explore Stage Detail</span>
                    <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep-Dive Showcase Card */}
          <Reveal key={activeStage.stage} delay={50}>
            <div className="rounded-3xl bg-surface-container-lowest border border-outline-variant/40 p-6 md:p-10 shadow-lg grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative overflow-hidden rounded-2xl aspect-[16/10] bg-surface-container shadow-md group">
                <img
                  src={activeStage.image}
                  alt={activeStage.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-primary-container/85 text-on-primary px-3 py-1.5 rounded-xl text-xs font-technical-mono backdrop-blur-md">
                  Stage {activeStage.stage} · {activeStage.tag}
                </div>
                <div className="absolute bottom-4 right-4 bg-black/80 text-white px-3.5 py-1.5 rounded-xl text-xs font-technical-mono backdrop-blur-md">
                  Tolerance: {activeStage.tolerance}
                </div>
              </div>

              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="inline-block px-3 py-1 rounded-full bg-[#D4AF37]/15 text-[#9A7B1C] font-label-caps text-xs uppercase tracking-wider font-semibold mb-2">
                    {activeStage.tech}
                  </span>
                  <h3 className="font-headline-lg text-[28px] md:text-[34px] text-primary">
                    {activeStage.title}
                  </h3>
                  <p className="font-body-lg text-on-surface-variant mt-2 leading-relaxed">
                    {activeStage.desc}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-surface-container-low border border-outline-variant/30">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-technical-mono text-on-surface-variant">
                      Operation Metric
                    </span>
                    <span className="font-title-md text-sm font-semibold text-primary mt-1">
                      {activeStage.speed}
                    </span>
                  </div>
                  <div className="flex flex-col border-x border-outline-variant/30 px-3">
                    <span className="text-[10px] uppercase font-technical-mono text-on-surface-variant">
                      Process Control
                    </span>
                    <span className="font-title-md text-sm font-semibold text-primary mt-1">
                      {activeStage.tension}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-technical-mono text-on-surface-variant">
                      Planar Accuracy
                    </span>
                    <span className="font-title-md text-sm font-semibold text-secondary mt-1">
                      {activeStage.tolerance}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#calculator"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-on-primary font-label-md text-xs uppercase tracking-wider hover:bg-secondary transition-colors"
                  >
                    <span>Simulate Block Slicing</span>
                    <span className="material-symbols-outlined text-[16px]">calculate</span>
                  </a>
                  <Link
                    href="/request-price"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-outline-variant text-primary font-label-md text-xs uppercase tracking-wider hover:bg-surface-container transition-colors"
                  >
                    <span>Request Custom Sizing</span>
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Interactive Block Slicing & Container Payload Calculator */}
          <Reveal delay={100}>
            <div
              id="calculator"
              className="rounded-3xl bg-primary-container text-on-primary p-6 md:p-10 shadow-2xl border border-secondary/30"
            >
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-8 border-b border-white/10">
                <div>
                  <span className="font-label-caps text-[#D4AF37] uppercase tracking-widest text-xs font-semibold">
                    Interactive Engineering Tool
                  </span>
                  <h3 className="font-headline-lg text-[26px] md:text-[32px] text-white mt-1">
                    Live Block-to-Slab &amp; Ocean Freight Estimator
                  </h3>
                  <p className="font-body-md text-white/80 max-w-2xl mt-1 text-sm">
                    Enter your raw block quarry dimensions to calculate real-time gang-saw slab
                    yield, total architectural square meters, calculated weight, and required 20ft
                    heavy ocean containers.
                  </p>
                </div>
                <div className="px-4 py-2 rounded-xl bg-white/10 text-white font-technical-mono text-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse"></span>
                  Gang-Saw Diamond Kerf: 3.5 mm
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
                {/* Sliders & Inputs */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Block Length Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-technical-mono">
                      <span className="text-white/80">Block Length (meters)</span>
                      <span className="text-[#D4AF37] font-bold">{blockLength.toFixed(1)} m</span>
                    </div>
                    <input
                      type="range"
                      min={2.0}
                      max={3.6}
                      step={0.1}
                      value={blockLength}
                      onChange={(e) => setBlockLength(parseFloat(e.target.value))}
                      className="w-full accent-[#D4AF37] cursor-pointer"
                    />
                  </div>

                  {/* Block Height Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-technical-mono">
                      <span className="text-white/80">Block Height (meters)</span>
                      <span className="text-[#D4AF37] font-bold">{blockHeight.toFixed(1)} m</span>
                    </div>
                    <input
                      type="range"
                      min={1.2}
                      max={2.2}
                      step={0.1}
                      value={blockHeight}
                      onChange={(e) => setBlockHeight(parseFloat(e.target.value))}
                      className="w-full accent-[#D4AF37] cursor-pointer"
                    />
                  </div>

                  {/* Block Width Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-technical-mono">
                      <span className="text-white/80">Block Width (meters)</span>
                      <span className="text-[#D4AF37] font-bold">{blockWidth.toFixed(1)} m</span>
                    </div>
                    <input
                      type="range"
                      min={1.0}
                      max={2.0}
                      step={0.1}
                      value={blockWidth}
                      onChange={(e) => setBlockWidth(parseFloat(e.target.value))}
                      className="w-full accent-[#D4AF37] cursor-pointer"
                    />
                  </div>

                  {/* Slab Thickness Buttons */}
                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-technical-mono text-white/80 block">
                      Target Slab Thickness
                    </span>
                    <div className="flex gap-3">
                      {[20, 30, 40].map((th) => (
                        <button
                          key={th}
                          type="button"
                          onClick={() => setThicknessMm(th)}
                          className={`flex-1 py-2.5 rounded-xl font-technical-mono text-xs font-semibold transition-all ${
                            thicknessMm === th
                              ? "bg-[#D4AF37] text-primary shadow-lg"
                              : "bg-white/10 text-white hover:bg-white/20"
                          }`}
                        >
                          {th} mm {th === 20 ? "(Standard)" : th === 30 ? "(Paving)" : "(Heavy)"}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Calculation Output Cards */}
                <div className="lg:col-span-5 grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between">
                    <span className="text-xs font-technical-mono text-white/70 uppercase">
                      Yielded Slabs
                    </span>
                    <div className="mt-2 text-[32px] font-bold text-[#D4AF37] font-headline-md">
                      <AnimatedCounter end={estimatedSlabs} />
                    </div>
                    <span className="text-[11px] text-white/60">
                      Slices @ {thicknessMm}mm + 3.5mm kerf
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between">
                    <span className="text-xs font-technical-mono text-white/70 uppercase">
                      Total Surface
                    </span>
                    <div className="mt-2 text-[32px] font-bold text-white font-headline-md">
                      <AnimatedCounter end={Math.round(totalSqm)} suffix=" m²" />
                    </div>
                    <span className="text-[11px] text-white/60">
                      Single slab: {singleSlabArea.toFixed(2)} m²
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between">
                    <span className="text-xs font-technical-mono text-white/70 uppercase">
                      Total Net Weight
                    </span>
                    <div className="mt-2 text-[32px] font-bold text-[#D4AF37] font-headline-md">
                      <AnimatedCounter end={parseFloat(weightTons.toFixed(1))} decimals={1} suffix=" T" />
                    </div>
                    <span className="text-[11px] text-white/60">Calcite ~2,680 kg/m³</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 flex flex-col justify-between">
                    <span className="text-xs font-technical-mono text-white/70 uppercase">
                      Container Load
                    </span>
                    <div className="mt-2 text-[32px] font-bold text-white font-headline-md">
                      <AnimatedCounter end={containerCount} suffix=" × 20ft" />
                    </div>
                    <span className="text-[11px] text-white/60">Max 25 MT payload compliant</span>
                  </div>

                  <div className="col-span-2 pt-2">
                    <Link
                      href={`/request-price?slabs=${estimatedSlabs}&sqm=${Math.round(
                        totalSqm
                      )}&thickness=${thicknessMm}mm`}
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#D4AF37] hover:bg-[#C59B27] text-primary font-label-md text-xs font-bold uppercase tracking-wider shadow-lg transition-all"
                    >
                      <span>Inquire Slabs from This Block Calculation</span>
                      <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Quality Assurance & Dry-Lay Protocol Section + Interactive Dry-Lay Bay Viewer */}
      <section
        className="w-full py-space-3xl max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop"
        id="dry-lay"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
          {/* Left Column: Copy & Architectural Steps */}
          <div className="lg:col-span-6 flex flex-col gap-space-lg">
            <Reveal>
              <div className="flex flex-col gap-2">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                  Pre-Installation Perfection
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  The 100% Dry-Lay Protocol: Digital Vein Matching &amp; Pre-Assembly Verification
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant pt-2">
                  No Maadi Marble order departs for international ports without undergoing our
                  proprietary dry-lay protocol. We eliminate site surprises by assembling entire
                  lobbies, master bathroom wall plates, and grand facades directly on our 2,500 m²
                  level factory floor in Shaq Al Thoban.
                </p>
              </div>
            </Reveal>

            {/* 4 Sub-Protocols */}
            <div className="space-y-4">
              <Reveal delay={50}>
                <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-4 border border-outline-variant/30">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined text-[20px]">photo_camera</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-primary font-semibold">
                      Overhead Photogrammetric Slab Scanning
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Calibrated 80MP overhead camera gantries capture high-fidelity colorimetric and
                      grain coordinates for every single cut-to-size slab under standardized 5500K
                      daylight lighting.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-4 border border-outline-variant/30">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined text-[20px]">view_in_ar</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-primary font-semibold">
                      CAD / BIM Digital Simulation
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Our stone draughtsmen map slabs directly onto the project’s Revit/AutoCAD
                      elevations, verifying seamless vein continuity, color gradients, and balanced
                      bookmatching prior to cutting.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={150}>
                <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-4 border border-outline-variant/30">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined text-[20px]">domain_verification</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-primary font-semibold">
                      2,500 m² Physical Dry-Lay Assembly
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      The full architectural layout is physically laid flat in sequentially numbered
                      order. Architects and procurement inspectors can examine the arrangement in
                      person or via multi-angle 4K streaming.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <div className="p-space-md rounded-2xl bg-surface-container-lowest shadow-sm flex items-start gap-4 border border-outline-variant/30">
                  <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary">
                    <span className="material-symbols-outlined text-[20px]">qr_code_2</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-title-md text-title-md text-primary font-semibold">
                      Sequential Drawing Encoding &amp; QR Tagging
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      Every stone panel is permanently labeled on its reverse with elevation, row,
                      and column references (e.g.,{" "}
                      <code className="font-technical-mono text-secondary">Elev-North-P-C4</code>)
                      matching on-site architectural shop drawings.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          {/* Right Column: Visual Verification Interactive Display & Bay Switcher */}
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="flex flex-wrap gap-2 pb-2">
              {DRY_LAY_BAYS.map((bay) => (
                <button
                  key={bay.id}
                  type="button"
                  onClick={() => setActiveBay(bay)}
                  className={`px-3 py-1.5 rounded-xl font-technical-mono text-xs uppercase tracking-wider transition-all ${
                    activeBay.id === bay.id
                      ? "bg-primary text-on-primary font-bold shadow-md"
                      : "bg-surface-container-low text-on-surface-variant hover:bg-surface-container"
                  }`}
                >
                  {bay.name.split(":")[0]}
                </button>
              ))}
            </div>

            <div className="relative rounded-3xl overflow-hidden bg-primary-container shadow-2xl">
              <img
                className="w-full h-[480px] object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKZ0865FZEYyoWB_qYIrkw2cmkrh7X9oI9IJE3tkZtMqJjHUyLFH7WSYH5dvk0LLNNstccqu3c_NV1KQ4L2NcO24GxCL2jTp9bwRdOejYCo6j1kD4h3frZih2Vt0s23cFSqv-AN0rfybyb_B4cl8DE4Rfslrie-vZIKyGXQnw04SZu8SDCLBNxgBl2h9il6GWpjbtds4BP7oIyJwI8mUaHl1T3sqhCvY9EoxkAV812"
                alt="Dry lay assembly floor"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>

              {/* Overlay dry-lay HUD badge with dynamic state */}
              <div className="absolute top-6 left-6 p-4 rounded-2xl bg-surface/95 backdrop-blur-md shadow-xl max-w-sm border border-outline-variant/30">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-technical-mono text-technical-mono uppercase tracking-widest text-primary font-bold">
                    {activeBay.name}
                  </span>
                </div>
                <p className="font-title-sm text-xs font-semibold text-primary">{activeBay.project}</p>
                <p className="font-body-sm text-xs text-on-surface-variant mt-1">{activeBay.notes}</p>
                <div className="mt-2 pt-2 border-t border-outline-variant/30 flex justify-between text-xs font-technical-mono">
                  <span>Vein Continuity</span>
                  <span className="text-secondary font-bold">{activeBay.continuity}</span>
                </div>
              </div>

              {/* Bottom floating metadata bar */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-surface/95 backdrop-blur-md shadow-xl flex flex-wrap items-center justify-between gap-4 border border-outline-variant/30">
                <div>
                  <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">
                    Approval Status
                  </span>
                  <div className="font-title-md text-title-md text-primary font-semibold flex items-center gap-1.5 text-xs sm:text-sm">
                    <span className="material-symbols-outlined text-[20px] text-green-700">
                      verified
                    </span>
                    {activeBay.inspector}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-lg bg-surface-container font-technical-mono text-xs">
                    {activeBay.slabs} Slabs ({activeBay.areaSqm} m²)
                  </span>
                </div>
              </div>
            </div>

            {/* Metric comparison card with animated counters */}
            <div className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md border border-outline-variant/30">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-headline-sm">
                  0%
                </div>
                <div>
                  <div className="font-title-md text-title-md text-primary font-semibold">
                    Job-Site Discrepancy Record
                  </div>
                  <div className="font-body-sm text-body-sm text-on-surface-variant">
                    Over{" "}
                    <strong className="text-primary font-bold">
                      <AnimatedCounter end={1400} suffix="+" />
                    </strong>{" "}
                    dry-laid export shipments verified since 2012.
                  </div>
                </div>
              </div>
              <span className="font-technical-mono text-technical-mono text-secondary font-semibold uppercase tracking-wider whitespace-nowrap text-xs">
                Zero-Tolerance Metric
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Export Logistics, Packaging & Global Freight Section + Interactive Transit Calculator */}
      <section className="w-full bg-surface-container-low py-space-3xl">
        <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop space-y-12">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-2 max-w-2xl">
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
                  Transoceanic Integrity
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">
                  Engineered for Transoceanic Voyage: Packaging &amp; Seaport Logistics
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                Natural stone demands military-grade crate engineering. Every consignment is
                fortified against maritime humidity, rough sea swells, and container handling shocks.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
            {/* Packaging Spec */}
            <div className="flex flex-col rounded-3xl bg-surface-container-lowest p-space-lg shadow-sm border border-outline-variant/30 hover:border-secondary transition-all">
              <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                <span className="material-symbols-outlined text-[26px]">inventory_2</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">
                ISPM-15 Certified Crating
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                Heat-treated fumigated pinewood A-frames and solid crates lined with polyethylene
                protective sheeting, impact-absorbing foam corner caps, and industrial desiccants to
                eliminate salt-fog corrosion.
              </p>
              <ul className="flex flex-col gap-2 font-technical-mono text-technical-mono text-on-surface-variant mt-auto text-xs">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                  Steel strapping with tension safety buckles
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                  Max slab cushioning thickness &gt; 12mm
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                  Gross crate weights calibrated for standard port cranes
                </li>
              </ul>
            </div>

            {/* Container Engineering */}
            <div className="flex flex-col rounded-3xl bg-surface-container-lowest p-space-lg shadow-sm border border-outline-variant/30 hover:border-secondary transition-all">
              <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                <span className="material-symbols-outlined text-[26px]">rv_hookup</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">
                20ft Heavy Container Optimization
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                Calculated payload stowage maximizing 20ft heavy-tested ocean containers up to 27
                metric tons (or local road-limit weight ceilings for European and US state highway
                compliance).
              </p>
              <ul className="flex flex-col gap-2 font-technical-mono text-technical-mono text-on-surface-variant mt-auto text-xs">
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                  2cm Slabs: ~420 to 450 m² per container
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                  3cm Slabs: ~280 to 300 m² per container
                </li>
                <li className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[16px] text-secondary">check</span>
                  Open-Top containers for monumental blocks (&gt;15T)
                </li>
              </ul>
            </div>

            {/* Strategic Seaport Proximity */}
            <div className="flex flex-col rounded-3xl bg-surface-container-lowest p-space-lg shadow-sm border border-outline-variant/30 hover:border-secondary transition-all">
              <div className="w-12 h-12 rounded-2xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
                <span className="material-symbols-outlined text-[26px]">directions_boat</span>
              </div>
              <h3 className="font-headline-sm text-headline-sm text-primary mb-2 font-semibold">
                Quad-Seaport Strategic Access
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md leading-relaxed">
                Positioned at the nexus of global maritime routes. Containers depart rapidly
                through 4 major international commercial ports without inland demurrage or
                logistical bottlenecks.
              </p>
              <ul className="flex flex-col gap-2 font-technical-mono text-technical-mono text-on-surface-variant mt-auto text-xs">
                <li className="flex items-center justify-between">
                  <span>Ain Sokhna (Red Sea)</span>
                  <span className="text-primary font-semibold">1.5 hrs from plant</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Alexandria &amp; Dekheila</span>
                  <span className="text-primary font-semibold">2.5 hrs transit</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Port Said &amp; Damietta</span>
                  <span className="text-primary font-semibold">Direct EU Feeder access</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Global Shipping Transit Estimator Bar with Interactive Destination Selection */}
          <Reveal delay={100}>
            <div className="p-space-lg rounded-3xl bg-surface-container-lowest border border-outline-variant/40 shadow-md space-y-6">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-4 border-b border-outline-variant/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary-container text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]">public</span>
                  </div>
                  <div>
                    <span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">
                      Interactive Ocean Freight Simulator
                    </span>
                    <h4 className="font-headline-sm text-[20px] text-primary font-semibold">
                      Estimated Port-to-Port Transit Time
                    </h4>
                  </div>
                </div>

                {/* Region Selector Pills */}
                <div className="flex flex-wrap gap-2">
                  {TRANSIT_DESTINATIONS.map((dest) => (
                    <button
                      key={dest.region}
                      type="button"
                      onClick={() => setSelectedTransit(dest)}
                      className={`px-3 py-1.5 rounded-xl font-technical-mono text-xs transition-all ${
                        selectedTransit.region === dest.region
                          ? "bg-primary text-on-primary font-bold shadow-sm"
                          : "bg-surface-container text-on-surface-variant hover:bg-surface-container-high"
                      }`}
                    >
                      {dest.region.split(" (")[0]}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-surface-container-low p-5 rounded-2xl">
                <div className="flex flex-col">
                  <span className="text-xs font-technical-mono text-on-surface-variant uppercase">
                    Destination Region
                  </span>
                  <span className="text-sm font-semibold text-primary mt-1">
                    {selectedTransit.region}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-technical-mono text-on-surface-variant uppercase">
                    Ocean Transit Time
                  </span>
                  <span className="text-[20px] font-bold text-secondary mt-1 font-headline-md">
                    {selectedTransit.days}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-technical-mono text-on-surface-variant uppercase">
                    Departing Seaport
                  </span>
                  <span className="text-sm font-semibold text-primary mt-1">
                    {selectedTransit.port}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-technical-mono text-on-surface-variant uppercase">
                    Carrier Service
                  </span>
                  <span className="text-xs text-on-surface-variant mt-1">
                    {selectedTransit.feeder}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Interactive Factory & Quarry Audit Scheduler / CTA Banner */}
      <section className="w-full py-space-3xl max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <Reveal>
          <div className="rounded-3xl bg-primary-container text-on-primary p-space-xl md:p-space-2xl relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container via-surface-container-high/10 to-primary-container pointer-events-none"></div>
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
              <div className="lg:col-span-8 flex flex-col gap-space-md">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface/10 text-secondary-fixed font-technical-mono text-technical-mono uppercase tracking-widest self-start">
                  <span className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></span>
                  Private Specifier Protocol
                </div>
                <h2 className="font-headline-lg text-headline-lg md:text-[42px] md:leading-[50px] text-on-primary tracking-tight max-w-2xl">
                  Schedule an On-Site Factory Inspection or Digital Live-Stream Dry-Lay Session.
                </h2>
                <p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl leading-relaxed">
                  We welcome architects, developers, and international stone procurement directors
                  to our Cairo industrial complex in Shaq Al Thoban and private mountain quarries. For
                  overseas clients unable to travel, we facilitate high-definition drone audits and
                  multi-camera live video dry-lay sign-offs with our chief stone masters.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-2 font-technical-mono text-technical-mono text-on-primary-container text-xs">
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      flight_takeoff
                    </span>
                    VIP Cairo Airport Chauffeur Service
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[18px] text-secondary-fixed">
                      videocam
                    </span>
                    4K Broadcast Dry-Lay Verification
                  </span>
                </div>
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                <Link
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all shadow-md text-center"
                  href="/contact"
                >
                  <span>Book Factory &amp; Quarry Visit</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                </Link>
                <Link
                  href="/request-price"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface/10 text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface/20 transition-all text-center"
                >
                  <span>Request Industrial Capability Dossier</span>
                  <span className="material-symbols-outlined text-[18px]">download</span>
                </Link>
                <a
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-transparent text-secondary-fixed font-label-md text-label-md uppercase tracking-wider hover:underline transition-all text-center"
                  href="https://wa.me/20225200000"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span>Schedule Live Digital Dry-Lay</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
