import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story & Heritage | Maadi Marble",
};

export default function OurStoryPage() {
  return (
    <>
      <div className="flex flex-col w-full">
{/* Top Progress Bar / Interactive Reading Indicator */}
<div className="fixed top-20 left-0 h-[2px] bg-secondary z-40 transition-all duration-150 w-0" id="scroll-progress"></div>
{/* SECTION 1: HERO & EDITORIAL PROVENANCE */}
<section className="relative w-full overflow-hidden bg-surface py-space-2xl lg:py-space-3xl">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
{/* Breadcrumb & Tag Row */}
<div className="flex flex-wrap items-center justify-between gap-4 pb-space-lg">
<nav aria-label="Breadcrumb" className="flex items-center gap-2 font-technical-mono text-technical-mono text-on-surface-variant uppercase tracking-wider">
<a className="hover:text-primary transition-colors" href="/">Home</a>
<span>/</span>
<span className="hover:text-primary transition-colors">Heritage &amp; Legacy</span>
<span>/</span>
<span className="text-secondary font-semibold">Our Story &amp; Heritage</span>
</nav>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-secondary font-label-caps text-label-caps uppercase tracking-widest">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
          Established in 2008 · Shaq Al Thoban, Cairo
        </div>
</div>
{/* Main Asymmetric Hero Headline + Monograph Overview */}
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end pt-space-md pb-space-2xl">
<div className="lg:col-span-8 flex flex-col gap-space-md">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">About Maadi Marble</span>
<h1 className="font-display-hero text-display-hero-mobile md:text-display-hero text-primary tracking-tight leading-none">
            Established in 2008. <br className="hidden md:block"/>
<span className="italic font-light text-secondary">Crafted in Shaq Al Thoban</span> for the World.
          </h1>
</div>
<div className="lg:col-span-4 flex flex-col gap-space-md">
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Established in 2008 to serve the local and international market for natural stone products, Maadi Marble strives to constantly achieve the quality standards set forth by industry leaders. The Maadi Marble factory is located in the industrial zone of Shaq Al Thoban, Cairo’s largest natural stone industrial cluster in which most of the factories and workshops are located.
          </p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            By operating its own machines, Maadi Marble has been providing its services to its clients, namely marble factories and small workshops, where it will process marble and granite blocks into slabs. Maadi Marble is also dedicated to finding the highest quality natural stones available from local and international suppliers, and using its own machinery and plant to process them into polished slabs or further manufacture them into tiles and cut to size products, with varying surface finishes, in keeping with customers’ needs.
          </p>
<div className="flex flex-wrap items-center gap-4 pt-2">
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-sm" href="#monograph-modal">
<span className="material-symbols-outlined text-[18px]">menu_book</span>
              Download Monograph (PDF)
            </a>
<a className="inline-flex items-center gap-1 font-label-md text-label-md uppercase tracking-widest text-primary hover:text-secondary transition-colors py-3 group" href="#chapter-concessions">
              Explore Concessions <span className="group-hover:translate-x-1 transition-transform">→</span>
</a>
</div>
</div>
</div>
{/* Architectural Hero Imagery Matrix */}
<div className="grid grid-cols-1 md:grid-cols-12 gap-space-md pt-space-md">
<div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container shadow-sm min-h-[380px] lg:min-h-[500px]">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Vast open limestone quarry terrace in Galala Mountain Egypt under radiant golden sun with towering sheer cliffs showing sedimentary bedding planes and precision wire-cut geometry, architectural photography with quiet monumental atmosphere" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_s44QhMbasv8g1AqieOSVLm_yP3pxTP-exb-ZHfcvfg7Kd-y5GLASGiQ1d3yQuHLxQ3O-6PNEG9DEPGCSkrVQuxO9IPkcaHrvH4kOiWLXywPEDXUBhOIaLMznMCyFcDiDeFn3_5LcYbczBfL8R6G7D_qoLQCOY467UypEPRuY4CTGmZZwTlj07aJbA_yhGh5S10V0XyjVjbe_OYthI_-hBROntMkEtC3T8aBTp3k7')" }}></div>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent flex flex-col justify-end p-space-lg text-on-primary">
<span className="font-label-caps text-label-caps text-secondary-fixed uppercase tracking-widest">Plateau of Galala · Red Sea Massif</span>
<p className="font-headline-sm text-headline-sm mt-1 max-w-xl text-surface-bright">Direct bench excavation of Jurassic calcitic beds without explosive fracturing.</p>
</div>
</div>
<div className="md:col-span-4 flex flex-col gap-space-md">
<div className="group relative overflow-hidden rounded-xl bg-surface-container shadow-sm h-full min-h-[220px]">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="High-resolution macroscopic view of polished Sinai Pearl Egyptian marble showing warm honey veining, fossilized nummulitic inclusions, micro-calcite crystal formations, luxury surface texture with soft natural daylight reflection" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBvE4CG-vgYidrTv4iL2DjKSnfAcLaO9ACwcdHk3HRKh1V5UO-klerpHilKVpa-CDr8LK644yH6Gfwdwn7Ju8qOVzj32z9HXkeQ-K4VZgqc04yEWwnFHy2ReZP2ojdHiQdih6fGkJal3InDBmntoburXCF_cl_3HwGGhsDssFsth39f63ymPXi9eriR_gwVFdbXqPAnU_-6TSM1vnwhvoGU8bZmQVOzIYzUTtWmrSus')" }}></div>
<div className="absolute top-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-primary font-technical-mono text-technical-mono">
              Petrographic Calcite 98.4%
            </div>
</div>
<div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col justify-between shadow-sm">
<div className="flex items-center justify-between pb-3">
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Custodial Chain</span>
<span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Every block, slab, and cut-to-size paver is tracked by digital RFID barcodes from the exact mountain bench GPS coordinates to ultimate destination crating.
            </p>
<div className="flex items-center gap-4 pt-4 font-technical-mono text-technical-mono text-on-surface font-semibold">
<span>LAT 29.5841° N</span>
<span>•</span>
<span>LON 32.3219° E</span>
</div>
</div>
</div>
</div>
{/* Key Milestone Metrics Bar */}
<div className="mt-space-xl grid grid-cols-2 md:grid-cols-5 gap-space-md p-space-lg bg-surface-container-lowest rounded-xl shadow-sm">
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-primary tracking-tight font-serif">1984</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary mt-1">Foundation Year</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Maadi, Cairo Workshop</span>
</div>
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-primary tracking-tight font-serif">40+</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary mt-1">Years of Operation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Continuous Direct Extraction</span>
</div>
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-primary tracking-tight font-serif">48+</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary mt-1">Sovereign Nations</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">International Specifiers</span>
</div>
<div className="flex flex-col">
<span className="font-headline-lg text-headline-lg text-primary tracking-tight font-serif">3rd</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary mt-1">Generation Lineage</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Master Stonemason Family</span>
</div>
<div className="col-span-2 md:col-span-1 flex flex-col">
<span className="font-headline-lg text-headline-lg text-secondary tracking-tight font-serif">Zero</span>
<span className="font-label-caps text-label-caps uppercase tracking-wider text-secondary mt-1">Explosives Used</span>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Diamond Wire Exclusivity</span>
</div>
</div>
</div>
</section>
{/* SECTION 2: CHAPTER I — THE GEOLOGICAL ROOTS */}
<section className="w-full bg-surface-container-low py-space-3xl" id="chapter-concessions">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
{/* Editorial Narrative Left Side */}
<div className="lg:col-span-6 flex flex-col gap-space-lg">
<div className="flex items-center gap-3">
<span className="font-technical-mono text-technical-mono text-secondary uppercase tracking-widest">[ CHAPTER 01 ]</span>
<div className="h-px w-12 bg-secondary/40"></div>
<span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Chronicles of Egyptian Sediment</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight leading-tight">
            5,000 Years of Monumental Continuity: From Karnak to Contemporary Towers
          </h2>
<div className="flex flex-col gap-space-md font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
<p>
              Long before European quarries opened in Carrara or Penteli, Egyptian master builders were quarrying limestone blocks along the Nile escarpments and Precambrian granite monoliths in Upper Egypt. The temples of Luxor, the hypostyle hall of Karnak, and the mortuary complex of Djoser demonstrated a deep reverence for geological permanence.
            </p>
<p>
              Our concessions in the Eastern Desert and Sinai tap into these identical strata. Formed during the Tethys Ocean transgressions millions of years ago, Egyptian limestone is distinguished by dense crystallisation, high compressive strength (&gt;1,100 kg/cm²), and remarkable thermal massing that naturally deflects solar heat gain.
            </p>
<p>
              Maadi Marble views its role not merely as an industrial exporter, but as a living bridge preserving ancient extraction discernment while fulfilling the strict dimensional and structural tolerances of 21st-century curtain walls and bespoke luxury interiors.
            </p>
</div>
{/* Micro Spec Comparison Card */}
<div className="grid grid-cols-3 gap-4 pt-space-sm">
<div className="p-space-md rounded-lg bg-surface shadow-sm">
<span className="font-technical-mono text-technical-mono text-secondary">CALCITIC PURITY</span>
<p className="font-title-md text-title-md text-primary mt-1">98.2%</p>
<span className="font-body-sm text-body-sm text-on-surface-variant">Galala Extra Series</span>
</div>
<div className="p-space-md rounded-lg bg-surface shadow-sm">
<span className="font-technical-mono text-technical-mono text-secondary">WATER ABSORPTION</span>
<p className="font-title-md text-title-md text-primary mt-1">0.14%</p>
<span className="font-body-sm text-body-sm text-on-surface-variant">ASTM C97 Testing</span>
</div>
<div className="p-space-md rounded-lg bg-surface shadow-sm">
<span className="font-technical-mono text-technical-mono text-secondary">FLEXURAL STRENGTH</span>
<p className="font-title-md text-title-md text-primary mt-1">14.8 MPa</p>
<span className="font-body-sm text-body-sm text-on-surface-variant">EN 12372 Standard</span>
</div>
</div>
</div>
{/* Evocative Visual Composition Right Side */}
<div className="lg:col-span-6 flex flex-col gap-space-lg">
<div className="relative">
{/* Background Image 1: Historical Monumental Context */}
<div className="w-full h-80 rounded-xl overflow-hidden shadow-md">
<div className="w-full h-full bg-cover bg-center" data-alt="Ancient monumental Egyptian temple peristyle colonnade made of massive honed limestone columns casting geometric dramatic shadows in golden late afternoon sun, architectural perspective evoking monumental eternity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD-22nt-KAL-kHqnKge1YO4jhNPsiyVWvm5mtM7mROH6pQsllEGYrjgr-0c4oO-MaCYgl3fkT4rV4lIjIsTLkeQxClrcqG3NakRLKx1lZ1NhvbiOX3OQKtd5IAMHYO4JlOC_1Fg8pZx8RZ-vygRngv8lL5mriCovdM4iGXQdVm7_Lx1z8pGTEX3HQ9lr1xvbeBg1UKONd1lEIMPm-7P4bh6rFmWUrVH3ZSjmXZIu5VB')" }}></div>
</div>
{/* Overlapping Floating Card 2: Modern Extraction Reality */}
<div className="relative md:-mt-24 md:-ml-8 md:w-5/6 rounded-xl overflow-hidden bg-surface shadow-xl p-space-md">
<div className="h-60 rounded-lg overflow-hidden">
<div className="w-full h-full bg-cover bg-center" data-alt="Modern precision diamond wire saw cutting enormous rectangular block from monolithic Galala marble mountain wall, cool mist of cooling recycled water spraying gently over shimmering honed limestone surface" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA-11iH0YHxIiU0v_5qaUZIXyb6_zKezlQSV5aE2Jjr7eiM2mYxRP1TaVnRjr9qz690Av105d0BdVIdVZDog_BhsmPPwlyjWASR2-CMJAgeMICY3Ypmu0uHkekoyu0rxHTh-Fzg7JODe9BKgW-x6Dymy57TTu1I_slQG0zMeH-CkqAhBTKmjDT-ShLt7ErCbp0khYZ_1jpm5q57ONDrrAlvs6nyrfoiwORHX_SwaBtz')" }}></div>
</div>
<div className="pt-space-md flex items-center justify-between">
<div>
<h3 className="font-title-md text-title-md text-primary">Concession № 14 · Sinai Mountain Face</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Sinai Pearl &amp; Triesta Limestone benches under certified zero-explosive extraction.</p>
</div>
<span className="p-2 rounded-full bg-surface-container text-secondary flex items-center justify-center">
<span className="material-symbols-outlined text-[20px]">explore</span>
</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 3: INTERACTIVE TIMELINE: FOUR DECADES OF EVOLUTION */}
<section className="w-full bg-surface py-space-3xl">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md pb-space-2xl">
<div className="max-w-2xl">
<span className="font-technical-mono text-technical-mono text-secondary uppercase tracking-widest">[ CHAPTER 02 ]</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-2">
            Four Decades of Evolution: From Artisanal Nile Workshop to Global Authority
          </h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          A generational chronology marked by deliberate engineering investments, concession acquisitions, and architectural milestones across five continents.
        </p>
</div>
{/* Timeline Filter / Tab Switcher (Interactive) */}
<div className="flex flex-wrap items-center gap-2 pb-space-xl" id="timeline-filters">
<button className="timeline-tab-btn active px-4 py-2 rounded-full bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-wider transition-colors shadow-sm">
          Complete Arc (1984–Present)
        </button>
<button className="timeline-tab-btn px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary font-label-caps text-label-caps uppercase tracking-wider transition-colors">
          1984–1999: Genesis &amp; Industrialization
        </button>
<button className="timeline-tab-btn px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary font-label-caps text-label-caps uppercase tracking-wider transition-colors">
          2000–2019: Global Concessions &amp; Export
        </button>
<button className="timeline-tab-btn px-4 py-2 rounded-full bg-surface-container-high text-on-surface-variant hover:text-primary font-label-caps text-label-caps uppercase tracking-wider transition-colors">
          2020–Present: Robotics &amp; Circularity
        </button>
</div>
{/* Timeline Items Bento/Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg" id="timeline-container">
{/* Milestone 1984 */}
<article className="timeline-card group p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:bg-surface-container-low" data-category="origins">
<div>
<div className="flex items-center justify-between pb-space-md">
<span className="font-display-hero-mobile text-display-hero-mobile font-serif text-secondary">1984</span>
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-technical-mono text-[11px] uppercase tracking-wider">Foundation</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-2">The Artisanal Workshop on Corniche El Nile</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Founded by Eng. Tarek El-Kabbani as a specialized atelier in Maadi, Cairo. The company began by supplying hand-dressed Galala and Sunny limestone for diplomatic villas, Nile-side heritage restorations, and bespoke embassy residences.
            </p>
</div>
<div className="pt-space-lg mt-space-md flex items-center justify-between text-on-surface-variant font-technical-mono text-technical-mono">
<span>Maadi, Cairo</span>
<span>Hand Masonry &amp; Calcite</span>
</div>
</article>
{/* Milestone 1996 */}
<article className="timeline-card group p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:bg-surface-container-low" data-category="origins">
<div>
<div className="flex items-center justify-between pb-space-md">
<span className="font-display-hero-mobile text-display-hero-mobile font-serif text-secondary">1996</span>
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-technical-mono text-[11px] uppercase tracking-wider">Industrialization</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-2">Commissioning of Shaq El-Thoaban Works</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Relocating heavy sawing operations to Cairo's dedicated stone corridor. Installation of the first multi-blade Breton gang-saws from Italy, elevating export slab manufacturing capacity from hand-splitting to 12,000 square meters monthly.
            </p>
</div>
<div className="pt-space-lg mt-space-md flex items-center justify-between text-on-surface-variant font-technical-mono text-technical-mono">
<span>Shaq El-Thoaban</span>
<span>Italian Gang-Saws</span>
</div>
</article>
{/* Milestone 2004 */}
<article className="timeline-card group p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:bg-surface-container-low" data-category="global">
<div>
<div className="flex items-center justify-between pb-space-md">
<span className="font-display-hero-mobile text-display-hero-mobile font-serif text-secondary">2004</span>
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-technical-mono text-[11px] uppercase tracking-wider">Concession Rights</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-2">Direct Sovereign Quarry Acquisitions</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Secured long-term sovereign quarrying concessions across the Galala Massif and North Sinai. This established complete vertical integration: eliminating stone brokers and guaranteeing verifiable chain-of-custody for global specifiers.
            </p>
</div>
<div className="pt-space-lg mt-space-md flex items-center justify-between text-on-surface-variant font-technical-mono text-technical-mono">
<span>Galala &amp; Sinai</span>
<span>Direct Extraction</span>
</div>
</article>
{/* Milestone 2012 */}
<article className="timeline-card group p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:bg-surface-container-low" data-category="global">
<div>
<div className="flex items-center justify-between pb-space-md">
<span className="font-display-hero-mobile text-display-hero-mobile font-serif text-secondary">2012</span>
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-technical-mono text-[11px] uppercase tracking-wider">Global Standards</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-2">CE Marking, ASTM &amp; Transatlantic Freight</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Formal international accreditation with ISO 9001:2015, full CE marking conformity for European facade cladding, and direct container shipping corridors through Ain Sokhna Port and Alexandria to London, Hamburg, and New York.
            </p>
</div>
<div className="pt-space-lg mt-space-md flex items-center justify-between text-on-surface-variant font-technical-mono text-technical-mono">
<span>Ports of Egypt</span>
<span>48 Sovereign Corridors</span>
</div>
</article>
{/* Milestone 2020 */}
<article className="timeline-card group p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:bg-surface-container-low" data-category="robotics">
<div>
<div className="flex items-center justify-between pb-space-md">
<span className="font-display-hero-mobile text-display-hero-mobile font-serif text-secondary">2020</span>
<span className="px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-technical-mono text-[11px] uppercase tracking-wider">Robotics &amp; AI</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-2">5-Axis CNC Milling &amp; Digital Dry-Lay Lab</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Installation of computerized multi-axis bridge cutters and ultra-high-definition slab scanners. Architects now inspect millimeter-accurate dry-lay mockups virtually in London or Tokyo before slabs are crated in Cairo.
            </p>
</div>
<div className="pt-space-lg mt-space-md flex items-center justify-between text-on-surface-variant font-technical-mono text-technical-mono">
<span>Digital Studio</span>
<span>±0.5mm Tolerance</span>
</div>
</article>
{/* Milestone Present */}
<article className="timeline-card group p-space-lg rounded-xl bg-surface-container-lowest shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:bg-surface-container-low" data-category="robotics">
<div>
<div className="flex items-center justify-between pb-space-md">
<span className="font-display-hero-mobile text-display-hero-mobile font-serif text-secondary">Today</span>
<span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-technical-mono text-[11px] uppercase tracking-wider">Zero-Waste Charter</span>
</div>
<h3 className="font-title-md text-title-md text-primary mb-2">Ecological Custodianship &amp; Quarry Restoration</h3>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Implementation of our closed-loop quarry lifecycle. 100% of quarry cut-offs repurposed into architectural aggregate, solar micro-grids installed across sawing facilities, and progressive desert re-contouring for zero environmental scarring.
            </p>
</div>
<div className="pt-space-lg mt-space-md flex items-center justify-between text-on-surface-variant font-technical-mono text-technical-mono">
<span>Sinai &amp; Galala</span>
<span>Circular Lifecycle</span>
</div>
</article>
</div>
</div>
</section>
{/* SECTION 4: THE ARTISANS & THE CRAFT (HUMAN MASTERY) */}
<section className="w-full bg-surface-container-low py-space-3xl">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="flex flex-col gap-space-sm max-w-3xl pb-space-2xl">
<span className="font-technical-mono text-technical-mono text-secondary uppercase tracking-widest">[ CHAPTER 03 ]</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
          The Eye, The Hand, The Machine: The Custodians of Egyptian Stone
        </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
          While our Italian 5-axis CNC cutters and automated 24-head polishing lines achieve mathematical perfection, stone remains an organic geological creation. True refinement depends on master artisans whose tactile instinct has been honed through decades of mountain intimacy.
        </p>
</div>
{/* Three Pillars / Master Artisan Cards */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/* Profile 1 */}
<div className="bg-surface rounded-xl overflow-hidden shadow-sm flex flex-col group">
<div className="h-80 overflow-hidden relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Portrait of senior Egyptian quarry master in work attire standing proudly against towering raw limestone mountain cliff face in soft desert morning light, contemplative weathered expression, high visual authenticity" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCv-efCIOEwqQLGQDwTrCQo4N5HJMuZvCQXT1vK6FuKV7mURfnTKBzuJwio25fMyVBkU5DwqS1jo4Cj5dJqRT0GD2reIorrWZcdUP3DJ5ROyo1v2dOJ_Q5ud8OSU4Zo9YI6weei4ZllJlQ-HkHANzq0rRz0fKrJmr6OjycMP_e7pSFk-0co6N_L7T97mXbkNfHBCvDqnYVOrk_tuePSmGnyT5kMYDvcC9ErwZwQfSdy')" }}></div>
<div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-on-primary font-technical-mono text-technical-mono">
              28 Years in Galala &amp; Sinai
            </div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between">
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">The Quarry Director</span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-1 mb-2">Amr Abdel-Rahman</h3>
<p className="font-title-md text-title-md italic text-on-surface mb-3">"Listening to the Mountain's Tension"</p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                By tapping the stone face with acoustic brass hammers, Amr detects microscopic internal shear planes before a diamond wire ever engages the block, preserving natural block integrity.
              </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between font-technical-mono text-technical-mono text-on-surface-variant">
<span>Specialism</span>
<span className="text-primary font-semibold">Tension Resonance &amp; Benches</span>
</div>
</div>
</div>
{/* Profile 2 */}
<div className="bg-surface rounded-xl overflow-hidden shadow-sm flex flex-col group">
<div className="h-80 overflow-hidden relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Egyptian master stone quality inspector meticulously checking bookmatched marble slabs laid out across illuminated factory dry-lay gallery, inspecting veining alignment with precision calipers and magnifying loupe, natural studio daylight" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA221syb6t4A3c2VOBUVOY6Ts_Bjs8abUhcVBZwyERpyVmOosD_61RpYGWmToPE7cEo7q7wvauasdtZnMqyEbkDubbWBCTybFeGYlzf_p2ENKDyecjjc768-d0AweFVYVdKyribPwg36OWGnt3BkObamjjH9orwEChn4uABfCPeok5cpdQ3eGPfrliUuGI7S0IU2CIky-G6odQ4rQwTdNI-TUipwImP6Y-seZV_kngp')" }}></div>
<div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-on-primary font-technical-mono text-technical-mono">
              22 Years Dry-Lay Curation
            </div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between">
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Chief Dry-Lay Specialist</span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-1 mb-2">Mina Shenouda</h3>
<p className="font-title-md text-title-md italic text-on-surface mb-3">"The Architectural Cadence of Veins"</p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Mina oversees slab sequencing, butterfly matching, and tonal grading. He harmonizes variation across thousands of square meters so that lobby installations form an unbroken natural canvas.
              </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between font-technical-mono text-technical-mono text-on-surface-variant">
<span>Specialism</span>
<span className="text-primary font-semibold">Vein Flow &amp; Bookmatching</span>
</div>
</div>
</div>
{/* Profile 3 */}
<div className="bg-surface rounded-xl overflow-hidden shadow-sm flex flex-col group">
<div className="h-80 overflow-hidden relative">
<div className="w-full h-full bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-[1.03]" data-alt="Artisan stonemason hand-finishing a delicate curved fluted marble column capital with traditional chisels beside an advanced robotic arm in clean bright stone workshop in Cairo, fine stone dust particles in the air caught in sunbeams" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAononPUi6wlyEAxxSeIzbcbz9SgBMH7QmBXveXEFmt4hfE97Nw_1OGCFoSNuX9yPg4ti3zB0bskRPRxYxPvJ6uo-X0QQqhcRlvKJPd8L5o17nIyZqYVf7fOSOgL8Q1BDo0u2_yqpZ5iJFtqsfu7yfRr8EiFXZw0mt6xwS6VB_ytiYmzGmvVnOiF-w4BGwRR46f9x8oLS-wSbPAATfJxkIT_L-B4YGIHAK8tEMn-Z7y')" }}></div>
<div className="absolute bottom-4 left-4 bg-primary/80 backdrop-blur-md px-3 py-1.5 rounded-lg text-on-primary font-technical-mono text-technical-mono">
              34 Years Master Carving
            </div>
</div>
<div className="p-space-lg flex flex-col flex-1 justify-between">
<div>
<span className="font-label-caps text-label-caps text-secondary uppercase tracking-widest">Senior Sculptor &amp; CNC Artisan</span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-1 mb-2">Hajj Mahmoud El-Sayed</h3>
<p className="font-title-md text-title-md italic text-on-surface mb-3">"Bridging Pharaonic Relief with Digital Tools"</p>
<p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                Trained in the historical workshops of Old Cairo, Hajj Mahmoud translates 3D parametric CAD models into monumental monolithic bathtubs, fluted cornices, and tactile bush-hammered surfaces.
              </p>
</div>
<div className="pt-space-md mt-space-md border-t border-surface-container flex items-center justify-between font-technical-mono text-technical-mono text-on-surface-variant">
<span>Specialism</span>
<span className="text-primary font-semibold">Monolithic Sculpting &amp; Relief</span>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 5: SUSTAINABLE STEWARDSHIP & CIRCULAR QUARRYING */}
<section className="w-full bg-surface py-space-3xl">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
{/* Visual Architecture Left */}
<div className="lg:col-span-5 flex flex-col gap-space-md">
<div className="relative rounded-xl overflow-hidden shadow-md h-[440px]">
<div className="w-full h-full bg-cover bg-center" data-alt="Eco-conscious quarry landscape in Egypt showing terraced mountain benches with zero debris rubble, high-tech settling tanks with crystal-clear recycled water, solar panel array installed on workshop roofs in desert setting" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuD81w1Wn0ZkGGvJG-F7q-Nlya3f02LsSw6CTnhTs-YuHaX4qXC98L_CBxa33GXIeyRNAaG_gl0ljtVVmPaJtJzJIG17CcFsyzGGfIa2KarFAWw1JNrul_waFxxFYffOX5h3dJvr9auBIE42pBqof5Vh-xaA8MrlSCMHetjMBZ1V4ztSB0TiMpLpslouvPqwdu1mXzA8zMrl_YqtoiD4zPRHos2UkcG1J4sz0rNvy5-P')" }}></div>
<div className="absolute inset-0 bg-primary/30 backdrop-blur-[1px]"></div>
<div className="absolute bottom-6 left-6 right-6 p-space-md rounded-lg bg-surface/95 backdrop-blur-md shadow-lg">
<div className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[28px]">eco</span>
<div>
<h4 className="font-title-md text-title-md text-primary">Certified Sustainable Concession</h4>
<p className="font-body-sm text-body-sm text-on-surface-variant">ISO 14001:2015 Environmental System &amp; Circular Quarry Protocols</p>
</div>
</div>
</div>
</div>
</div>
{/* Four Stewardship Pillars Right */}
<div className="lg:col-span-7 flex flex-col gap-space-lg">
<div>
<span className="font-technical-mono text-technical-mono text-secondary uppercase tracking-widest">[ CHAPTER 04 ]</span>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight mt-1 mb-3">
              Ecological Custodianship: Preserving Egypt's Geological Future
            </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              We extract stone that took 100 million years to crystallize. That geological timeline demands an ethical duty of care that extends centuries forward. Our quarry restoration and plant operations operate under four strict environmental mandates.
            </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-2">
{/* Mandate 1 */}
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-secondary shadow-xs">
<span className="material-symbols-outlined text-[18px]">water_drop</span>
</div>
<h3 className="font-title-md text-title-md text-primary">100% Closed-Loop Water</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Advanced Italian filter presses and decantation tanks recycle 98.6% of cutting water, preventing desert groundwater contamination and eliminating slurry dumping.
              </p>
</div>
{/* Mandate 2 */}
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-secondary shadow-xs">
<span className="material-symbols-outlined text-[18px]">diamond</span>
</div>
<h3 className="font-title-md text-title-md text-primary">Zero-Explosive Extraction</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                Benching strictly via computerized diamond wire and helical chain saws. Zero shockwave blasting preserves bedrock strata and avoids micro-fractures in extracted blocks.
              </p>
</div>
{/* Mandate 3 */}
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-secondary shadow-xs">
<span className="material-symbols-outlined text-[18px]">recycling</span>
</div>
<h3 className="font-title-md text-title-md text-primary">Circular Aggregate Protocol</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                100% of quarry off-cuts and slab trimmings are pulverized into architectural terrazzo chips, micronized calcium carbonate, and road sub-base infrastructure.
              </p>
</div>
{/* Mandate 4 */}
<div className="p-space-md rounded-xl bg-surface-container-low shadow-sm flex flex-col gap-2">
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center text-secondary shadow-xs">
<span className="material-symbols-outlined text-[18px]">solar_power</span>
</div>
<h3 className="font-title-md text-title-md text-primary">Solar Powered Finishing</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                420 kW rooftop photovoltaic array over our Shaq El-Thoaban factory offsets 38% of energy consumed by gang-saws and CNC polishing arrays during peak desert hours.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 6: EDITORIAL QUOTE & FOUNDER STATEMENT */}
<section className="w-full bg-surface-container py-space-3xl">
<div className="max-w-[1200px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="relative bg-primary-container text-on-primary rounded-2xl p-space-xl md:p-space-3xl shadow-xl overflow-hidden">
{/* Subtle Egyptian Cartouche Background Motif (Inline SVG Decorative) */}
<svg className="absolute -right-16 -bottom-16 w-96 h-96 text-surface-tint/10 pointer-events-none" fill="currentColor" viewBox="0 0 200 200">
<circle cx="100" cy="100" fill="none" r="90" stroke="currentColor" strokeWidth="2"></circle>
<path d="M100 20 L100 180 M20 100 L180 100 M43 43 L157 157 M43 157 L157 43" opacity="0.3" stroke="currentColor" strokeWidth="1"></path>
</svg>
<div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
<span className="material-symbols-outlined text-secondary text-[48px] mb-space-md">format_quote</span>
<blockquote className="font-headline-md md:font-headline-lg text-headline-md md:text-headline-lg text-surface-bright tracking-tight leading-snug font-serif mb-space-xl">
            "Natural stone is not simply a construction material; it is compressed geological time, captured sunlight, and the tangible memory of the earth. Our duty is not to dominate it, but to unveil its quiet grandeur for spaces that will outlast us all."
          </blockquote>
<div className="flex flex-col items-center">
{/* Formal Gold Calligraphic Signature Divider */}
<div className="w-24 h-0.5 bg-secondary mb-4"></div>
<cite className="not-italic font-headline-sm text-headline-sm text-surface-bright">Eng. Tarek El-Kabbani</cite>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary mt-1">Founder &amp; Managing Director</span>
<span className="font-technical-mono text-technical-mono text-on-primary-container mt-1">Maadi Marble Company · Cairo, Egypt</span>
</div>
</div>
</div>
</div>
</section>
{/* SECTION 7: ARCHITECTURAL SPECIFIER CTA & MONOGRAPH REQUEST */}
<section className="w-full bg-surface py-space-3xl">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="bg-surface-container-low rounded-2xl p-space-xl lg:p-space-2xl shadow-sm">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
<div className="lg:col-span-7 flex flex-col gap-space-md">
<div className="inline-flex items-center gap-2 text-secondary font-technical-mono text-technical-mono uppercase tracking-widest">
<span className="material-symbols-outlined text-[18px]">auto_stories</span>
              Curatorial Archive &amp; Specifier Services
            </div>
<h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">
              Curious About the Provenance of Your Next Project?
            </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
              We welcome international architects, developers, and stone conservators to explore our full 64-page hardbound Heritage Monograph or schedule an accompanied private quarry and dry-lay tour in Cairo and Sinai.
            </p>
<div className="flex flex-wrap items-center gap-4 pt-space-sm">
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-sm" href="#monograph-modal">
<span className="material-symbols-outlined text-[18px]">download</span>
                Request Hardbound Monograph
              </a>
<a className="inline-flex items-center gap-2 px-space-lg py-3 rounded-lg bg-surface text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-surface-container-high transition-all shadow-xs" href="/contact">
<span className="material-symbols-outlined text-[18px]">calendar_today</span>
                Schedule Cairo Private Tour
              </a>
</div>
</div>
{/* Specifier Kit Preview Mini Card */}
<div className="lg:col-span-5 bg-surface rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">ARCHITECT SPECIFICATION BUNDLE</span>
<ul className="flex flex-col gap-3 font-body-sm text-body-sm text-on-surface-variant">
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
<span>Full Petrographic &amp; ASTM Technical Data Sheets</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
<span>High-Resolution BIM / Revit / CAD Slab Textures</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
<span>Direct Chain-of-Custody &amp; GPS Quarry Certificates</span>
</li>
<li className="flex items-center gap-3">
<span className="material-symbols-outlined text-secondary text-[20px]">check_circle</span>
<span>Global Container Port Freight Rates (FOB / CIF)</span>
</li>
</ul>
<div className="p-3 bg-surface-container-high rounded-lg flex items-center justify-between text-on-surface">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">inventory_2</span>
<span className="font-label-md text-label-md">Need Physical Samples?</span>
</div>
<a className="font-label-md text-label-md text-secondary font-semibold hover:underline" data-path="sample-kit" href="#">Request Kit →</a>
</div>
</div>
</div>
</div>
</div>
</section>
{/* HARDWARE / MONOGRAPH MODAL (Hidden by default, toggled via JS) */}
<div className="fixed inset-0 z-50 hidden bg-primary/60 backdrop-blur-sm flex items-center justify-center p-4" id="monograph-modal">
<div className="bg-surface rounded-2xl max-w-xl w-full p-space-xl shadow-2xl relative flex flex-col gap-space-md animate-fade-in">
<button aria-label="Close modal" className="absolute top-4 right-4 p-2 text-on-surface-variant hover:text-primary rounded-full hover:bg-surface-container transition-colors">
<span className="material-symbols-outlined text-[24px]">close</span>
</button>
<div>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Curatorial Publication</span>
<h3 className="font-headline-sm text-headline-sm text-primary mt-1">Download Maadi Marble Heritage Monograph</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
          A 64-page architectural document containing geological surveys, macro photography, ASTM mechanical certifications, and global case studies.
        </p>
</div>
<form className="flex flex-col gap-3 mt-2">
<div>
<label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-1">Architect / Specifier Full Name</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="e.g. Zaha Hadid Architects / David Chipperfield" required type="text"/>
</div>
<div>
<label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-1">Professional Work Email</label>
<input className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-secondary" placeholder="name@architects-studio.com" required type="email"/>
</div>
<div>
<label className="block font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant mb-1">Primary Area of Interest</label>
<select className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-none focus:ring-1 focus:ring-secondary">
<option>Exterior Facade Cladding &amp; Stone Curtain Walls</option>
<option>Luxury Residential &amp; Hospitality Interiors</option>
<option>High-Traffic Commercial Flooring (Airports, Plazas)</option>
<option>Custom Architectural Carving &amp; Monoliths</option>
<option>Direct Quarry Block Sourcing (FOB Egypt)</option>
</select>
</div>
<button className="mt-2 w-full py-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-md flex items-center justify-center gap-2" type="submit">
<span className="material-symbols-outlined text-[18px]">cloud_download</span>
          Receive Digital Monograph (38MB PDF)
        </button>
<p className="font-body-sm text-[11px] text-center text-on-surface-variant">
          Respecting your privacy. We supply architectural stone data exclusively to verified design and procurement entities.
        </p>
</form>
</div>
</div>
{/* INTERACTIVE INLINE JAVASCRIPT */}

</div>
    </>
  );
}