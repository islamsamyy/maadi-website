import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manufacturing & Quarries | Maadi Marble",
};

export default function ManufacturingPage() {
  return (
    <>
      <div className="flex flex-col w-full">
{/* Top Progress & Metric Bar */}
<section className="w-full bg-surface-container-low">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-space-xl">
{/* Breadcrumb & Tag */}
<div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md">
<nav aria-label="Breadcrumbs" className="flex items-center gap-2 font-technical-mono text-technical-mono uppercase tracking-wider text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="/">Home</a>
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
            Controlling complete vertical integration from our deep-seated Egyptian mountain concessions across Sinai, Galala, and Upper Egypt to our 45,000 m² automated industrial complex in Shaq El-Thoaban, Cairo. Precision gang-saw slabbing, 5-axis CNC machining, and rigorous dry-lay verification for international architectural projects.
          </p>
</div>
<div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-end items-start lg:items-end">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider shadow-sm hover:bg-secondary transition-all" href="#dry-lay">
<span>Explore 100% Dry-Lay Lab</span>
<span className="material-symbols-outlined text-[18px]">arrow_downward</span>
</a>
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container hover:text-primary transition-all" href="#concessions">
<span>Direct Quarry Concessions</span>
<span className="material-symbols-outlined text-[18px]">travel_explore</span>
</a>
</div>
</div>
{/* Quick Spec Key Figures Bar */}
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-space-md pt-space-lg">
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<span className="font-technical-mono text-technical-mono uppercase tracking-widest text-on-surface-variant">Concessions</span>
<div className="mt-3 flex items-baseline gap-1.5">
<span className="font-headline-md text-headline-md text-primary font-bold">14</span>
<span className="font-label-caps text-label-caps text-secondary font-semibold">Active Mines</span>
</div>
<span className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Galala, Sinai, Menia &amp; Aswan</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<span className="font-technical-mono text-technical-mono uppercase tracking-widest text-on-surface-variant">Monthly Throughput</span>
<div className="mt-3 flex items-baseline gap-1.5">
<span className="font-headline-md text-headline-md text-primary font-bold">250,000</span>
<span className="font-label-caps text-label-caps text-secondary font-semibold">m² / Month</span>
</div>
<span className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Calibrated Slabs &amp; Tiles</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<span className="font-technical-mono text-technical-mono uppercase tracking-widest text-on-surface-variant">Cairo Infrastructure</span>
<div className="mt-3 flex items-baseline gap-1.5">
<span className="font-headline-md text-headline-md text-primary font-bold">45,000</span>
<span className="font-label-caps text-label-caps text-secondary font-semibold">m² Plant</span>
</div>
<span className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Shaq El-Thoaban Industrial Zone</span>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<span className="font-technical-mono text-technical-mono uppercase tracking-widest text-on-surface-variant">Slicing Calibration</span>
<div className="mt-3 flex items-baseline gap-1.5">
<span className="font-headline-md text-headline-md text-primary font-bold">±0.5</span>
<span className="font-label-caps text-label-caps text-secondary font-semibold">mm Tolerance</span>
</div>
<span className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Gasparini &amp; Breton Diamond Saws</span>
</div>
<div className="col-span-2 md:col-span-1 p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between">
<span className="font-technical-mono text-technical-mono uppercase tracking-widest text-on-surface-variant">Global Reach</span>
<div className="mt-3 flex items-baseline gap-1.5">
<span className="font-headline-md text-headline-md text-primary font-bold">48+</span>
<span className="font-label-caps text-label-caps text-secondary font-semibold">Seaports</span>
</div>
<span className="mt-1 font-body-sm text-body-sm text-on-surface-variant">Direct Mediterranean &amp; Red Sea routes</span>
</div>
</div>
</div>
</section>
{/* Geological Quarry Concessions Section */}
<section className="w-full py-space-3xl max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop" id="concessions">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
<div className="flex flex-col gap-2 max-w-2xl">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Geological Stewardship</span>
<h2 className="font-headline-lg text-headline-lg text-primary">
          Direct Concession Mining: Where Ancient Geological Heritage Meets Modern Extraction
        </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
        We mandate diamond wire-saw and continuous chainsaw benching with strictly zero explosives. This preserves crystalline tensile strength, eliminates internal micro-fractures, and ensures uniform aesthetic strata across entire architectural orders.
      </p>
</div>
{/* 4-Quarry Regional Showcase Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl">
{/* Concession 1: Galala Mountain */}
<article className="flex flex-col rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="relative w-full h-72 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Massive architectural open-pit marble quarry in Galala Mountain Egypt, sheer vertical cream-colored limestone rock faces cut with diamond wire saws, warm golden hour desert sunlight illuminating monumental stone benches with heavy mining excavators in the background, cinematic architectural photography" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWdCgofviDiZMbM7nFhMDTTCLfiIXkGkhBP5EsXNbF9OB6kV7sgaDAOzh_g8CHR4CqW3EnhbhEKbvTNrGA6LSlhBkhd-SJK7tSkLD_nXAEndOJkYLiPuXkeBEVfHhu1b6nmN4k66ASo5OHOR2vSdFwjaGrgVQITeC9U4DfH__cEQVxlxfusQZ4lXC1hjyX60OuBDRa2e7fpBOH4RK-fH8ubbo_H7uYHTVuJJYzqZTZ"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-technical-mono text-technical-mono uppercase tracking-wider shadow-sm">
              Eastern Desert • Suez Gulf
            </span>
<span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-technical-mono text-technical-mono uppercase tracking-wider shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-on-secondary animate-ping"></span>
              Live Concession
            </span>
</div>
<div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-primary-container/85 text-on-primary font-technical-mono text-technical-mono backdrop-blur-sm">
            GPS: 29.5412° N, 32.2981° E
          </div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-primary">Galala Mountain Concession</h3>
<span className="font-technical-mono text-technical-mono text-secondary">Concession #GL-04</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              The historic source of Galala Classic, Galala Commercial, and Galala Extra. Characterized by high homogeneity, minimal calcite veining, and dense sedimentary limestone beds yielding monumental dimension blocks over 3.2 meters long.
            </p>
</div>
{/* Technical Spec Pill Grid */}
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-space-sm bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Geological Age</span>
<span className="font-title-md text-title-md text-primary mt-0.5">Eocene (48 Ma)</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Concession Area</span>
<span className="font-title-md text-title-md text-primary mt-0.5">140 Hectares</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Extraction</span>
<span className="font-title-md text-title-md text-primary mt-0.5">Diamond Wire</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Monthly Yield</span>
<span className="font-title-md text-title-md text-primary mt-0.5">12,500 Tons</span>
</div>
</div>
</div>
</article>
{/* Concession 2: Sinai Peninsula */}
<article className="flex flex-col rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="relative w-full h-72 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Sinai Peninsula rugged desert mountain stone quarry in Wadi El-Raha Egypt, high terraced grey and pearl limestone benches with heavy diamond wire equipment cutting massive square stone blocks, clear blue desert sky, warm limestone dust, architectural high-end quarry monograph style" src="https://lh3.googleusercontent.com/aida-public/AB6AXuApIvyQgxdxo5kQuQKnTSCi2_PB6UI3xJGc9-4tW1akZ_sR6e70s3_6nsWAuar_MBs_ogML9phd0aL8rA7_yTWopwhBTPgBBeZb2p611AdRya1XaeW9JRQA6au9QjkGq8-uOSmcKvwR5RrqYA3ODxBHl5WIeQCXJus9pHYu9UJmvyot_vYbQCZax6OSyvky_Iu2fmAHpt7dIonii6fDyxFW6toC2Qbyqyt_rd1nt2w2"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-technical-mono text-technical-mono uppercase tracking-wider shadow-sm">
              Wadi El-Raha • Sinai
            </span>
<span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-technical-mono text-technical-mono uppercase tracking-wider shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-on-secondary animate-ping"></span>
              Live Concession
            </span>
</div>
<div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-primary-container/85 text-on-primary font-technical-mono text-technical-mono backdrop-blur-sm">
            GPS: 28.5390° N, 33.9750° E
          </div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-primary">Central Sinai Concession</h3>
<span className="font-technical-mono text-technical-mono text-secondary">Concession #SN-11</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              The sovereign cradle of Sinai Pearl (Triesta Grey) and Sinai Gold. Sub-zero freeze-thaw certified dense nummulitic limestone with exceptional flexural resistance, widely specified for exterior ventilated rainscreen facades in North America and Northern Europe.
            </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-space-sm bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Geological Age</span>
<span className="font-title-md text-title-md text-primary mt-0.5">Cretaceous</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Concession Area</span>
<span className="font-title-md text-title-md text-primary mt-0.5">92 Hectares</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Extraction</span>
<span className="font-title-md text-title-md text-primary mt-0.5">Chain Saw Benching</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Monthly Yield</span>
<span className="font-title-md text-title-md text-primary mt-0.5">8,200 Tons</span>
</div>
</div>
</div>
</article>
{/* Concession 3: Menia Basin */}
<article className="flex flex-col rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="relative w-full h-72 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Broad expansive Upper Egypt limestone quarry in Samalout Menia, sunny warm light casting soft shadows across uniform beige and yellow marble extraction ledges, pristine extracted stone blocks numbered with stencil typography ready for heavy crane lifting" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2RdGqkL0yP6NDSapsR_UahC_tAGxrc8-C2cq4MXTfbbf_v60ud_nK7DHGbzcy9uZOwV_-FrtWVSWEMXAKI1JDqVoTGB-jCIryzg5K77PqvNpyZ0DntrS4NzBQrBBq4fVXwGIPS08gYx1rzj6eqOprckI8GvcqW1mrkvTrAllOt80opxQKxPFcL42wsi8k30AQ6s1YuGi2IzedhyVWktebEENlv-y1wt6WtFnj0rGl"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-technical-mono text-technical-mono uppercase tracking-wider shadow-sm">
              Samalout • Menia Basin
            </span>
<span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-technical-mono text-technical-mono uppercase tracking-wider shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-on-secondary animate-ping"></span>
              Live Concession
            </span>
</div>
<div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-primary-container/85 text-on-primary font-technical-mono text-technical-mono backdrop-blur-sm">
            GPS: 28.3121° N, 30.7104° E
          </div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-primary">Upper Egypt Menia Basin</h3>
<span className="font-technical-mono text-technical-mono text-secondary">Concession #MN-02</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              The world's preeminent source for Sunny Menia Light, Sunny Gold, and Silvia Marble. Deep, continuous stratified banks with virtually zero tonal variance over 100,000 m² lot runs, making it the bedrock selection for airport terminals, commercial plazas, and hospitality developments.
            </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-space-sm bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Geological Age</span>
<span className="font-title-md text-title-md text-primary mt-0.5">Middle Eocene</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Concession Area</span>
<span className="font-title-md text-title-md text-primary mt-0.5">210 Hectares</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Extraction</span>
<span className="font-title-md text-title-md text-primary mt-0.5">Hydraulic Split</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Monthly Yield</span>
<span className="font-title-md text-title-md text-primary mt-0.5">18,000 Tons</span>
</div>
</div>
</div>
</article>
{/* Concession 4: Aswan Southern Cataract */}
<article className="flex flex-col rounded-2xl bg-surface-container-lowest shadow-sm overflow-hidden group hover:shadow-md transition-all duration-300">
<div className="relative w-full h-72 overflow-hidden bg-surface-container">
<img className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" data-alt="Historic imperial granite quarry in Aswan Southern Egypt near the Nile River, massive deep red and black igneous granitic rock formations being precision cut with modern hydro-demolition and diamond wire rigs, glowing sunset tones on polished stone textures" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQTcgVLzxodt7k212qJNzS0t8vQIk50BTfnyZbyirmeFR-0ktXKNampj_uXKt9Tdzm3G2b_qn13uAARckfnc3IJqdhWOWYfZXV8fQjG0WJlMVb9es6b0rDICVI-w7RQ7KfjVWSblBmXm9wj0gcNW2rf57As6HVc_tsvaWHysPTdWPd7PvpAhCgLxlXF2IvthXCpNekCIDGidhlkgB3xHWRj7HQAtMvwkHpJ2zembQP"/>
<div className="absolute top-4 left-4 flex gap-2">
<span className="px-3 py-1 rounded-full bg-surface-container-lowest/90 backdrop-blur-md text-primary font-technical-mono text-technical-mono uppercase tracking-wider shadow-sm">
              Southern Cataract • Aswan
            </span>
<span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-technical-mono text-technical-mono uppercase tracking-wider shadow-sm flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-on-secondary animate-ping"></span>
              Live Concession
            </span>
</div>
<div className="absolute bottom-4 right-4 px-3 py-1 rounded-lg bg-primary-container/85 text-on-primary font-technical-mono text-technical-mono backdrop-blur-sm">
            GPS: 24.0889° N, 32.8998° E
          </div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
<div className="flex flex-col gap-2">
<div className="flex items-center justify-between">
<h3 className="font-headline-md text-headline-md text-primary">Aswan Cataract Concession</h3>
<span className="font-technical-mono text-technical-mono text-secondary">Concession #AS-09</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
              The revered imperial granites of the Pharaohs. Yielding ultra-dense volcanic Aswan Imperial Black, Imperial Red, and Rose Granite with a compressive strength exceeding 165 MPa, optimal for severe climate heavy-traffic paving and monumental civic plinths.
            </p>
</div>
<div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-space-sm bg-surface-container-low p-space-sm rounded-xl">
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Geological Age</span>
<span className="font-title-md text-title-md text-primary mt-0.5">Precambrian</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Concession Area</span>
<span className="font-title-md text-title-md text-primary mt-0.5">85 Hectares</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Extraction</span>
<span className="font-title-md text-title-md text-primary mt-0.5">Diamond Wire + Water</span>
</div>
<div className="flex flex-col">
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Monthly Yield</span>
<span className="font-title-md text-title-md text-primary mt-0.5">6,400 Tons</span>
</div>
</div>
</div>
</article>
</div>
</section>
{/* Shaq El-Thoaban Industrial Complex Section */}
<section className="w-full bg-surface-container-low py-space-3xl">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
<div className="flex flex-col gap-2 max-w-2xl">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Industrial Precision</span>
<h2 className="font-headline-lg text-headline-lg text-primary">
            Shaq El-Thoaban Industrial Complex: Advanced European Engineering in Cairo
          </h2>
</div>
<div className="flex items-center gap-3">
<span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-technical-mono text-technical-mono text-on-surface-variant">
            ISO 9001:2015 Certified
          </span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-technical-mono text-technical-mono text-on-surface-variant">
            CE Mark Compliance
          </span>
</div>
</div>
{/* Technological Workflow 4-Stage Breakdown */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
{/* Stage 01 */}
<div className="flex flex-col rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between pb-space-md">
<span className="font-headline-md text-headline-md text-secondary font-bold">01</span>
<span className="px-2.5 py-1 rounded-md bg-surface-container font-technical-mono text-technical-mono text-on-surface-variant uppercase">Gang Saws</span>
</div>
<div className="w-full h-44 rounded-xl overflow-hidden mb-space-md bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Heavy Italian multi-wire diamond gang saw in an ultra-modern marble manufacturing plant in Cairo, huge limestone block being cut with water jets and diamond tensioned cables, clean industrial setting, high speed precision engineering" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDYmNrZzrV4B822bqfGYGRKz3Tcwgr1SOO9zMLAeQxa15-Ttm-aq9Gb5ogNAeHzC7N8F38oVKX7fEQbwBNolluC1cS0FA-LfEB-YRRyDCkoy9wkHUuKWJWQNibbODUFiOmI2904LaqIZ6nCgNXsHIHfMsW3QXtSnXPTBwRvJyCQjaa-dOQhvcF9qCZa5tKi1Jvyp3x1IKNiGeOar3Q0_qjkAJCtnojFUXcHqYo4r_D"/>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Diamond Multi-Wire Gang Saws</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Gasparini &amp; Breton computerized diamond wire systems slicing monumental blocks into 20mm, 30mm, 40mm, and custom calibrated architectural slabs with exact 0.5mm planar tolerances.
          </p>
<div className="mt-auto pt-space-sm flex flex-col gap-1.5">
<div className="flex justify-between font-technical-mono text-technical-mono text-on-surface-variant">
<span>Slicing Speed</span>
<span className="text-primary font-semibold">180 cm²/hr</span>
</div>
<div className="flex justify-between font-technical-mono text-technical-mono text-on-surface-variant">
<span>Blade Tensioning</span>
<span className="text-primary font-semibold">Hydraulic Real-Time</span>
</div>
</div>
</div>
{/* Stage 02 */}
<div className="flex flex-col rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between pb-space-md">
<span className="font-headline-md text-headline-md text-secondary font-bold">02</span>
<span className="px-2.5 py-1 rounded-md bg-surface-container font-technical-mono text-technical-mono text-on-surface-variant uppercase">Resin Line</span>
</div>
<div className="w-full h-44 rounded-xl overflow-hidden mb-space-md bg-surface-container">
<img className="w-full h-full object-cover" data-alt="High tech automated vacuum epoxy resin impregnation line with UV catalyst drying ovens in a luxury stone processing plant, continuous conveyor line handling translucent beige marble slabs with pristine fiberglass backing" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-mPTg2KCtJhc8vn-difgh0skfje3s0JRZx2BB_bo1x30TOhO0zcr0W_TuIdFk3aRvErwDp0vZziD7Wu99f09iW7znqYAQwsEf9-yoYtKXJhnw_jr9FhUdljhnPW-RpZ2i4iTydf-7vUZs80vshQPrlKfS0D9jTIEjQIXMBcLAc3bpyVn--dDyv-ryt-imoO6Kw367TFdPXaeUStx9kXf0ngN2EbwakL_Tf38R3YBp"/>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Vacuum Epoxy Resin &amp; Oven Curing</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Automated vacuum resin infusion line penetrating deep geological micro-pores with aerospace-grade transparent epoxy resin, reinforced by structurally engineered fiberglass mesh backing.
          </p>
<div className="mt-auto pt-space-sm flex flex-col gap-1.5">
<div className="flex justify-between font-technical-mono text-technical-mono text-on-surface-variant">
<span>Curing Cycle</span>
<span className="text-primary font-semibold">48-Hour Controlled</span>
</div>
<div className="flex justify-between font-technical-mono text-technical-mono text-on-surface-variant">
<span>Tensile Boost</span>
<span className="text-primary font-semibold">+38% Modulus</span>
</div>
</div>
</div>
{/* Stage 03 */}
<div className="flex flex-col rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between pb-space-md">
<span className="font-headline-md text-headline-md text-secondary font-bold">03</span>
<span className="px-2.5 py-1 rounded-md bg-surface-container font-technical-mono text-technical-mono text-on-surface-variant uppercase">Surface Line</span>
</div>
<div className="w-full h-44 rounded-xl overflow-hidden mb-space-md bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Levibreton computerized automated polishing line with rotating diamond abrasive heads finishing a massive Galala marble slab, ultra-glossy mirror reflection under crisp overhead factory lighting, water mist, state of the art industrial facility" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgl2DYl6F7azYVWQLF5yRko2tA3aL8h2MuEwku8Dajdq5intxw1gznwmVAc2LmiEk5FHobJUfAANXtzIOr9SgkPdn-ehZt9vTRCAuf4ZLert6ncLW2r2Xv2b8CJIxDMymjr5NNgO6KIhpf2He-iVWAWHLR31tLAnyM_UbiUHpOv3H5hpBVbw6sMvOlxqaQHvDLl2pia4x3ntjtg2NpHDylk4awamJbF1aWRKa50EdB"/>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">24-Head Computerized Finishing</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Levibreton computerized abrasive bridge machines producing mirror-grade gloss finishes (&gt;95° reflectivity), velvety silk architectural hones, antique leathered textures, or flamed anti-slip tactile treatments.
          </p>
<div className="mt-auto pt-space-sm flex flex-col gap-1.5">
<div className="flex justify-between font-technical-mono text-technical-mono text-on-surface-variant">
<span>Gloss Rating</span>
<span className="text-primary font-semibold">&gt;95 GU (Mirror)</span>
</div>
<div className="flex justify-between font-technical-mono text-technical-mono text-on-surface-variant">
<span>Hone Flatness</span>
<span className="text-primary font-semibold">Ra &lt; 0.2 μm</span>
</div>
</div>
</div>
{/* Stage 04 */}
<div className="flex flex-col rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm hover:shadow-md transition-all">
<div className="flex items-center justify-between pb-space-md">
<span className="font-headline-md text-headline-md text-secondary font-bold">04</span>
<span className="px-2.5 py-1 rounded-md bg-surface-container font-technical-mono text-technical-mono text-on-surface-variant uppercase">Fabrication</span>
</div>
<div className="w-full h-44 rounded-xl overflow-hidden mb-space-md bg-surface-container">
<img className="w-full h-full object-cover" data-alt="Advanced 5-axis CNC waterjet and milling machine carving an intricate curved fluted stone column in a high-precision marble architectural workshop, water spray, robotic tool head moving with micron precision" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDrhStcQObjA3dLyxf12bWDvq-mHRK9jPp6FGe-bAGvsNjTTnOGCFZAH7iTIXam9Rq8TPQ3U8DBO_Y7TJACD0dKZJfUqXTHgoXvwleqrtnLDDutMQ9cVIx7Abg-fQCqt9ex6pviIYQF0c8bwCwB8EenWNNeA05jkIIkMuw1ZCS9GSfjZMq3iXHJuMB6ULsVsPh2UJ1bn0OnUPkAQMl6TSNPhwphj-NwBNgwAZDpC47"/>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">5-Axis Waterjet &amp; CNC Milling</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
            Interpolated 5-axis CNC milling and 60,000 PSI dynamic waterjet cutting stations producing curved 3D facade panels, fluted monolithic columns, bespoke bathtubs, and laser-precise bookmatched medallions.
          </p>
<div className="mt-auto pt-space-sm flex flex-col gap-1.5">
<div className="flex justify-between font-technical-mono text-technical-mono text-on-surface-variant">
<span>Axis Freedom</span>
<span className="text-primary font-semibold">Interpolated 5-Axis</span>
</div>
<div className="flex justify-between font-technical-mono text-technical-mono text-on-surface-variant">
<span>Kerf Precision</span>
<span className="text-primary font-semibold">±0.1 mm</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Quality Assurance & Dry-Lay Protocol Section */}
<section className="w-full py-space-3xl max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop" id="dry-lay">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
{/* Left Column: Copy & Architectural Steps */}
<div className="lg:col-span-6 flex flex-col gap-space-lg">
<div className="flex flex-col gap-2">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Pre-Installation Perfection</span>
<h2 className="font-headline-lg text-headline-lg text-primary">
            The 100% Dry-Lay Protocol: Digital Vein Matching &amp; Pre-Assembly Verification
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant pt-2">
            No Maadi Marble order departs for international ports without undergoing our proprietary dry-lay protocol. We eliminate site surprises by assembling entire lobbies, master bathroom wall plates, and grand facades directly on our 2,500 m² level factory floor.
          </p>
</div>
{/* 4 Sub-Protocols */}
<div className="space-y-4">
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-[20px]">photo_camera</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary">Overhead Photogrammetric Slab Scanning</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Calibrated 80MP overhead camera gantries capture high-fidelity colorimetric and grain coordinates for every single cut-to-size slab under standardized 5500K daylight lighting.
              </p>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-[20px]">view_in_ar</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary">CAD / BIM Digital Simulation</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Our stone draughtsmen map slabs directly onto the project’s Revit/AutoCAD elevations, verifying seamless vein continuity, color gradients, and balanced bookmatching prior to cutting.
              </p>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-[20px]">domain_verification</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary">2,500 m² Physical Dry-Lay Assembly</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                The full architectural layout is physically laid flat in sequentially numbered order. Architects and procurement inspectors can examine the arrangement in person or via multi-angle 4K streaming.
              </p>
</div>
</div>
<div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center shrink-0 text-secondary">
<span className="material-symbols-outlined text-[20px]">qr_code_2</span>
</div>
<div className="flex flex-col">
<span className="font-title-md text-title-md text-primary">Sequential Drawing Encoding &amp; QR Tagging</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                Every stone panel is permanently labeled on its reverse with elevation, row, and column references (e.g., <code className="font-technical-mono text-secondary">Elev-North-P-C4</code>) matching on-site architectural shop drawings.
              </p>
</div>
</div>
</div>
</div>
{/* Right Column: Visual Verification Interactive Display */}
<div className="lg:col-span-6 flex flex-col gap-space-md">
<div className="relative rounded-2xl overflow-hidden bg-primary-container shadow-xl">
<img className="w-full h-[480px] object-cover opacity-90" data-alt="Expansive 2500 square meter factory floor dry lay pre-assembly session for a luxury hotel grand lobby, hundreds of sequentially numbered polished Galala and Sinai Pearl marble slabs meticulously arranged on the ground, technical inspectors checking vein alignments with digital tablets, editorial perspective from high factory catwalk" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKZ0865FZEYyoWB_qYIrkw2cmkrh7X9oI9IJE3tkZtMqJjHUyLFH7WSYH5dvk0LLNNstccqu3c_NV1KQ4L2NcO24GxCL2jTp9bwRdOejYCo6j1kD4h3frZih2Vt0s23cFSqv-AN0rfybyb_B4cl8DE4Rfslrie-vZIKyGXQnw04SZu8SDCLBNxgBl2h9il6GWpjbtds4BP7oIyJwI8mUaHl1T3sqhCvY9EoxkAV812"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary-container via-transparent to-transparent"></div>
{/* Overlay dry-lay HUD badge */}
<div className="absolute top-6 left-6 p-4 rounded-xl bg-surface/90 backdrop-blur-md shadow-lg max-w-xs">
<div className="flex items-center gap-2 mb-1">
<span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse"></span>
<span className="font-technical-mono text-technical-mono uppercase tracking-widest text-primary font-bold">Bay #04 Active Dry-Lay</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              London Luxury Penthouse: 180 Slabs of Sinai Pearl vein-matched bookmatch floorplate.
            </p>
</div>
{/* Bottom floating metadata bar */}
<div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-surface/95 backdrop-blur-md shadow-lg flex flex-wrap items-center justify-between gap-4">
<div>
<span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">Approval Status</span>
<div className="font-title-md text-title-md text-primary font-semibold flex items-center gap-1.5">
<span className="material-symbols-outlined text-[20px] text-green-700">verified</span>
                Signed Off by Foster &amp; Partners QC
              </div>
</div>
<button className="px-4 py-2 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-all">
              View Dry-Lay Dossier
            </button>
</div>
</div>
{/* Metric comparison card */}
<div className="p-space-lg rounded-2xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-xl bg-secondary-container text-on-secondary-container flex items-center justify-center font-bold text-headline-sm">
              0%
            </div>
<div>
<div className="font-title-md text-title-md text-primary">Job-Site Discrepancy Record</div>
<div className="font-body-sm text-body-sm text-on-surface-variant">Over 1,400 dry-laid export shipments verified since 2012.</div>
</div>
</div>
<span className="font-technical-mono text-technical-mono text-secondary font-semibold uppercase tracking-wider whitespace-nowrap">
            Zero-Tolerance Metric
          </span>
</div>
</div>
</div>
</section>
{/* Export Logistics, Packaging & Global Freight Section */}
<section className="w-full bg-surface-container-low py-space-3xl">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md mb-space-2xl">
<div className="flex flex-col gap-2 max-w-2xl">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Transoceanic Integrity</span>
<h2 className="font-headline-lg text-headline-lg text-primary">
            Engineered for Transoceanic Voyage: Packaging &amp; Seaport Logistics
          </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Natural stone demands military-grade crate engineering. Every consignment is fortified against maritime humidity, rough sea swells, and container handling shocks.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-xl">
{/* Packaging Spec */}
<div className="flex flex-col rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
<span className="material-symbols-outlined text-[26px]">inventory_2</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">ISPM-15 Certified Crating</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            Heat-treated fumigated pinewood A-frames and solid crates lined with polyethylene protective sheeting, impact-absorbing foam corner caps, and industrial desiccants to eliminate salt-fog corrosion.
          </p>
<ul className="flex flex-col gap-2 font-technical-mono text-technical-mono text-on-surface-variant mt-auto">
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
<div className="flex flex-col rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
<span className="material-symbols-outlined text-[26px]">rv_hookup</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">20ft Heavy Container Optimization</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            Calculated payload stowage maximizing 20ft heavy-tested ocean containers up to 27 metric tons (or local road-limit weight ceilings for European and US state highway compliance).
          </p>
<ul className="flex flex-col gap-2 font-technical-mono text-technical-mono text-on-surface-variant mt-auto">
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
<div className="flex flex-col rounded-2xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center text-secondary mb-space-md">
<span className="material-symbols-outlined text-[26px]">directions_boat</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary mb-2">Quad-Seaport Strategic Access</h3>
<p className="font-body-md text-body-md text-on-surface-variant mb-space-md">
            Positioned at the nexus of global maritime routes. Containers depart rapidly through 4 major international commercial ports without inland demurrage or logistical bottlenecks.
          </p>
<ul className="flex flex-col gap-2 font-technical-mono text-technical-mono text-on-surface-variant mt-auto">
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
{/* Global Shipping Transit Estimator Bar */}
<div className="mt-space-xl p-space-lg rounded-2xl bg-surface-container flex flex-col lg:flex-row items-center justify-between gap-space-lg">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-[20px]">public</span>
</div>
<div>
<span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary">Estimated Ocean Transit Times</span>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Average port-to-port maritime voyage from Egyptian terminals:</p>
</div>
</div>
<div className="flex flex-wrap items-center gap-3">
<span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-technical-mono text-technical-mono text-on-surface">
            Southern Europe: <strong>3-6 Days</strong>
</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-technical-mono text-technical-mono text-on-surface">
            Arabian Gulf (Jebel Ali): <strong>7-10 Days</strong>
</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-technical-mono text-technical-mono text-on-surface">
            US East Coast: <strong>14-18 Days</strong>
</span>
<span className="px-3 py-1.5 rounded-lg bg-surface-container-lowest font-technical-mono text-technical-mono text-on-surface">
            East Asia: <strong>16-22 Days</strong>
</span>
</div>
</div>
</div>
</section>
{/* Interactive Factory & Quarry Audit Scheduler / CTA Banner */}
<section className="w-full py-space-3xl max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="rounded-3xl bg-primary-container text-on-primary p-space-xl md:p-space-2xl relative overflow-hidden shadow-2xl">
{/* Subtle Decorative Texture Background */}
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
<p className="font-body-lg text-body-lg text-on-primary-container max-w-2xl">
            We welcome architects, developers, and international stone procurement directors to our Cairo industrial complex and private mountain quarries. For overseas clients unable to travel, we facilitate high-definition drone audits and multi-camera live video dry-lay sign-offs with our chief stone masters.
          </p>
<div className="flex flex-wrap items-center gap-6 pt-2 font-technical-mono text-technical-mono text-on-primary-container">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed">flight_takeoff</span>
              VIP Cairo Airport Chauffeur Service
            </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-[18px] text-secondary-fixed">videocam</span>
              4K Broadcast Dry-Lay Verification
            </span>
</div>
</div>
<div className="lg:col-span-4 flex flex-col gap-3">
<a className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-secondary text-on-secondary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary-fixed hover:text-on-secondary-fixed transition-all shadow-md text-center" href="/contact">
<span>Book Factory &amp; Quarry Visit</span>
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
</a>
<button className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface/10 text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface/20 transition-all text-center">
<span>Request Industrial Capability Dossier (PDF)</span>
<span className="material-symbols-outlined text-[18px]">download</span>
</button>
<a className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-transparent text-secondary-fixed font-label-md text-label-md uppercase tracking-wider hover:underline transition-all text-center" href="https://wa.me/20225200000" rel="noopener noreferrer" target="_blank">
<span>Schedule Live Digital Dry-Lay</span>
<span className="material-symbols-outlined text-[18px]">arrow_forward</span>
</a>
</div>
</div>
</div>
</section>
{/* Interactive Client-side Script */}

</div>
    </>
  );
}