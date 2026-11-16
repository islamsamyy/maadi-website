import { ContactRfqForm } from "@/components/ContactRfqForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Direct Procurement | Maadi Marble",
};

export default function ContactPage() {
  return (
    <>
      <div className="flex flex-col w-full">
{/* Top Ambient Glow and Breadcrumbs Bar */}
<div className="w-full max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop pt-space-xl pb-space-lg">
<div className="flex flex-wrap items-center gap-2 font-technical-mono text-technical-mono uppercase tracking-widest text-on-surface-variant">
<a className="hover:text-primary transition-colors" href="#">Home</a>
<span className="text-secondary select-none">/</span>
<span className="text-on-surface-variant">Direct Procurement &amp; Inquiries</span>
<span className="text-secondary select-none">/</span>
<span className="text-primary font-semibold">Contact Global Desk</span>
</div>
{/* Editorial Header Section */}
<div className="mt-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-end pb-space-2xl">
<div className="lg:col-span-8 flex flex-col gap-space-md">
<div className="inline-flex items-center gap-space-sm px-3.5 py-1.5 rounded-full bg-surface-container-high w-fit">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
            DIRECT PROCUREMENT DESK · CAIRO · SUEZ · GLOBAL FREIGHT
          </span>
</div>
<h1 className="font-display-hero text-headline-lg md:text-display-hero text-primary tracking-tight leading-[1.08]">
          Direct Sovereign Procurement. <br className="hidden md:inline"/>From Nile Valley Strata to Global Ports.
        </h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl leading-relaxed">
          Whether specifying multi-container facade cladding for an international airport, commissioning bookmatched marble slabs for private residences, or scheduling an on-site dry-lay inspection in Cairo, our engineering and export desk is at your direct service.
        </p>
</div>
{/* Quick Metrics/Capabilities Card */}
<div className="lg:col-span-4 flex flex-col gap-3 p-space-lg rounded-lg bg-surface-container-low shadow-sm">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">Export Operational Standards</span>
<div className="grid grid-cols-2 gap-3 pt-2">
<div className="p-3 bg-surface-container-lowest rounded-md shadow-[0_2px_8px_rgba(28,28,28,0.03)]">
<span className="font-technical-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">Turnaround</span>
<span className="font-headline-sm text-headline-sm text-primary">24h</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block leading-tight mt-0.5">Proforma &amp; BOQ</span>
</div>
<div className="p-3 bg-surface-container-lowest rounded-md shadow-[0_2px_8px_rgba(28,28,28,0.03)]">
<span className="font-technical-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">Logistics</span>
<span className="font-headline-sm text-headline-sm text-primary">48+</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block leading-tight mt-0.5">Seaports Worldwide</span>
</div>
<div className="p-3 bg-surface-container-lowest rounded-md shadow-[0_2px_8px_rgba(28,28,28,0.03)]">
<span className="font-technical-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">A&amp;D Samples</span>
<span className="font-headline-sm text-headline-sm text-primary">DHL Express</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block leading-tight mt-0.5">Courier within 48h</span>
</div>
<div className="p-3 bg-surface-container-lowest rounded-md shadow-[0_2px_8px_rgba(28,28,28,0.03)]">
<span className="font-technical-mono text-[10px] text-on-surface-variant uppercase tracking-wider block">Compliance</span>
<span className="font-headline-sm text-headline-sm text-primary">ISO &amp; CE</span>
<span className="font-body-sm text-body-sm text-on-surface-variant block leading-tight mt-0.5">9001:2015 / ASTM</span>
</div>
</div>
</div>
</div>
</div>
{/* Primary RFQ Suite & Direct Concierge Columns */}
<section className="w-full bg-surface-container-low py-space-3xl">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl">
{/* Left Column: Interactive Procurement RFQ Form (7 Cols) */}
<div className="lg:col-span-7 flex flex-col gap-space-xl">
<div className="bg-surface-container-lowest p-space-lg md:p-space-xl rounded-lg shadow-md">
<div className="flex flex-col gap-2 pb-space-lg">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">ARCHITECTURAL SPECIFICATION SUITE</span>
<h2 className="font-headline-md text-headline-md text-primary">Request Proforma Quote or Technical Submittal</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Directly submitted to our senior mineral engineers and maritime logistics dispatchers. Average turnaround under 24 hours.
              </p>
</div>
          <ContactRfqForm />
</div>
</div>
{/* Right Column: Direct Contact Hub & Dedicated Desks (5 Cols) */}
<div className="lg:col-span-5 flex flex-col gap-space-lg">
{/* Division Card 1: Architectural & B2B Export */}
<div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">DIVISION 01 · INTERNATIONAL SPECIFICATION</span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-700"></span>
</div>
<h3 className="font-title-md text-title-md text-primary">Global Architectural &amp; B2B Export Desk</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Dedicated directly to tier-1 general contractors, facade engineers, stone distributors, and government master plans.
            </p>
<div className="pt-2 flex flex-col gap-2 font-body-sm text-body-sm">
<div className="flex items-center gap-2 text-primary font-medium">
<span className="material-symbols-outlined text-[18px] text-secondary">person</span>
<span>Eng. Karim Mansour (Head of Export Engineering)</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px] text-secondary">mail</span>
<a className="font-technical-mono text-technical-mono" href="mailto:export@maadimarble.com">export@maadimarble.com</a>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px] text-secondary">call</span>
<span className="font-technical-mono text-technical-mono">+20 2 2520 8900 (Ext. 104)</span>
</div>
</div>
</div>
{/* Division Card 2: Private Residential Studio */}
<div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">DIVISION 02 · RESIDENTIAL &amp; CURATION</span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-700"></span>
</div>
<h3 className="font-title-md text-title-md text-primary">Private Residential &amp; Interior Stone Studio</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Catering to luxury interior designers, private villas, bookmatched book suites, monolithic islands, and alabaster lighting features.
            </p>
<div className="pt-2 flex flex-col gap-2 font-body-sm text-body-sm">
<div className="flex items-center gap-2 text-primary font-medium">
<span className="material-symbols-outlined text-[18px] text-secondary">person</span>
<span>Layla Nour (Senior Curatorial Stone Consultant)</span>
</div>
<div className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px] text-secondary">mail</span>
<a className="font-technical-mono text-technical-mono" href="mailto:residential@maadimarble.com">residential@maadimarble.com</a>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px] text-secondary">chat</span>
<span className="font-technical-mono text-technical-mono">+20 100 482 9911 (VIP WhatsApp)</span>
</div>
</div>
</div>
{/* Division Card 3: Sample Dispatch & Monograph */}
<div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">DIVISION 03 · SAMPLE LIBRARY</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-technical-mono text-[10px]">DHL EXPRESS</span>
</div>
<h3 className="font-title-md text-title-md text-primary">Architectural Sample Library &amp; Monographs</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              Accredited architecture practices receive custom curated 100x100mm &amp; 150x300mm honed, polished, and sandblasted specimen boxes.
            </p>
<div className="pt-2 flex flex-col gap-2 font-body-sm text-body-sm">
<div className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px] text-secondary">mail</span>
<a className="font-technical-mono text-technical-mono" href="mailto:samples@maadimarble.com">samples@maadimarble.com</a>
</div>
<div className="flex items-center gap-2 text-on-surface-variant">
<span className="material-symbols-outlined text-[18px] text-secondary">schedule</span>
<span className="font-body-sm text-body-sm">Dispatched within 48 Hours with Certificate of Origin</span>
</div>
</div>
</div>
{/* Division Card 4: Quality & Factory Inspection */}
<div className="bg-surface-container-lowest p-space-lg rounded-lg shadow-sm flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">DIVISION 04 · QUALITY ASSURANCE</span>
<span className="w-2.5 h-2.5 rounded-full bg-emerald-700"></span>
</div>
<h3 className="font-title-md text-title-md text-primary">QA, SGS Witness &amp; 4K Dry-Lay Inspection</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">
              In-person factory visits or interactive live high-resolution dry-lay inspection stream prior to seaworthy crating.
            </p>
<div className="pt-2 flex flex-col gap-2 font-body-sm text-body-sm">
<div className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors">
<span className="material-symbols-outlined text-[18px] text-secondary">videocam</span>
<a className="font-technical-mono text-technical-mono" href="mailto:qa-inspection@maadimarble.com">qa-inspection@maadimarble.com</a>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Global Seaports & Direct Physical Locations */}
<section className="w-full bg-surface py-space-3xl">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex flex-col gap-space-2xl">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-space-md">
<div className="flex flex-col gap-2">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">PHYSICAL ASSETS &amp; LOGISTICAL FOOTPRINT</span>
<h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary">Nile Valley to Mediterranean &amp; Red Sea Corridors</h2>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-md">
          Continuous transit channels linking Cairo's heavy industrial zones to Alexandria, Port Said, and Ain Sokhna for immediate dispatch.
        </p>
</div>
{/* Hubs Grid */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
{/* Hub 1: Nile Headquarters */}
<div className="bg-surface-container-low rounded-lg p-space-lg flex flex-col justify-between gap-space-md shadow-sm">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">EXECUTIVE HEADQUARTERS</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-technical-mono text-[10px]">MAADI · CAIRO</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Corniche El Nile Suite</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Executive offices, board suites, international contracts legal division, and luxury material curatorial gallery overlooking the Nile.
            </p>
<div className="pt-2 flex flex-col gap-1.5 font-technical-mono text-technical-mono text-on-surface-variant">
<span>GPS: 29°57'35.2"N 31°15'04.8"E</span>
<span>Hours: Sun – Thu · 08:30 – 18:00 CLT</span>
<span>Phone: +20 2 2520 8900</span>
</div>
</div>
<div className="pt-space-md">
<a className="inline-flex items-center gap-1.5 font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-primary transition-colors" href="https://maps.google.com" rel="noopener" target="_blank">
<span>View Location on Map</span>
<span className="material-symbols-outlined text-[16px]">arrow_outward</span>
</a>
</div>
</div>
{/* Hub 2: Industrial Complex */}
<div className="bg-surface-container-low rounded-lg p-space-lg flex flex-col justify-between gap-space-md shadow-sm">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">MANUFACTURING COMPLEX</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-technical-mono text-[10px]">SHAQ EL-THOABAN</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Automated Mega-Plant</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              45,000 m² industrial facility housing 14 Breton gang saws, computerized resin lines, waterjet calibration, and 2,500 m² enclosed dry-lay hall.
            </p>
<div className="pt-2 flex flex-col gap-1.5 font-technical-mono text-technical-mono text-on-surface-variant">
<span>GPS: 29°54'12.0"N 31°18'45.0"E</span>
<span>Operations: 24/7 Continuous Gangsaw Milling</span>
<span>Container Yard: 80 FCL Ready-to-Ship Capacity</span>
</div>
</div>
<div className="pt-space-md">
<a className="inline-flex items-center gap-1.5 font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-primary transition-colors" href="https://maps.google.com" rel="noopener" target="_blank">
<span>Access Industrial Manifest</span>
<span className="material-symbols-outlined text-[16px]">arrow_outward</span>
</a>
</div>
</div>
{/* Hub 3: Maritime Terminal */}
<div className="bg-surface-container-low rounded-lg p-space-lg flex flex-col justify-between gap-space-md shadow-sm">
<div className="flex flex-col gap-3">
<div className="flex items-center justify-between">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">MARITIME LOGISTICS HUB</span>
<span className="px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-technical-mono text-[10px]">SUEZ · AIN SOKHNA</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-primary">Gulf of Suez Export Terminal</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              Dedicated deep-water maritime logistics center. 90-minute bonded highway transit from Cairo plants with direct sea routes to Gulf and Asia.
            </p>
<div className="pt-2 flex flex-col gap-1.5 font-technical-mono text-technical-mono text-on-surface-variant">
<span>Ain Sokhna Seaport: 1.5 Hours Transit</span>
<span>Alexandria Mediterranean Port: 2.5 Hours Transit</span>
<span>Port Said East (Suez Canal): 2.0 Hours Transit</span>
</div>
</div>
<div className="pt-space-md">
<a className="inline-flex items-center gap-1.5 font-label-md text-label-md uppercase tracking-wider text-secondary hover:text-primary transition-colors" href="https://maps.google.com" rel="noopener" target="_blank">
<span>View Port Corridors</span>
<span className="material-symbols-outlined text-[16px]">arrow_outward</span>
</a>
</div>
</div>
</div>
{/* Logistical Route Visual Bar */}
<div className="p-space-lg rounded-lg bg-surface-container-highest grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">landscape</span>
</div>
<div>
<span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest block">Primary Source</span>
<span className="font-title-md text-body-md text-primary font-semibold">Galala &amp; Sinai Quarries</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">precision_manufacturing</span>
</div>
<div>
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest block">Milling &amp; Calibration</span>
<span className="font-title-md text-body-md text-primary font-semibold">Shaq El-Thoaban Factory</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-surface-container-lowest flex items-center justify-center text-primary shrink-0 shadow-sm">
<span className="material-symbols-outlined text-[20px]">verified_user</span>
</div>
<div>
<span className="font-label-caps text-[10px] text-on-surface-variant uppercase tracking-widest block">Quality Control</span>
<span className="font-title-md text-body-md text-primary font-semibold">Dry-Lay &amp; Seaworthy Crating</span>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0">
<span className="material-symbols-outlined text-[20px]">directions_boat</span>
</div>
<div>
<span className="font-label-caps text-[10px] text-secondary uppercase tracking-widest block">Global Discharge</span>
<span className="font-title-md text-body-md text-primary font-semibold">48+ International Ports</span>
</div>
</div>
</div>
</div>
</section>
{/* Factory & Quarry Private Delegation Protocol */}
<section className="w-full bg-surface-container-lowest py-space-3xl">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
<div className="lg:col-span-6 flex flex-col gap-space-md">
<div className="inline-flex items-center gap-space-sm px-3.5 py-1.5 rounded-full bg-surface-container w-fit">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
              CURATED ARCHITECTURAL EXPEDITIONS
            </span>
</div>
<h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary tracking-tight">
            Factory &amp; Mountain Concession Delegation Protocol
          </h2>
<p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            We host international architects, lead procurement directors, and master developers in Cairo. Inspect your designated marble blocks directly at our Galala Mountain concessions and approve full scale dry-lays prior to container stuffing.
          </p>
<div className="flex flex-col gap-space-sm pt-2">
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">airport_shuttle</span>
<div>
<strong className="font-title-md text-body-md text-primary block">Complimentary Cairo VIP Reception</strong>
<span className="font-body-sm text-body-sm text-on-surface-variant">Private airport greeting and chauffeured transport throughout your stay in Cairo.</span>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">terrain</span>
<div>
<strong className="font-title-md text-body-md text-primary block">Galala &amp; Sinai Quarry Concession Access</strong>
<span className="font-body-sm text-body-sm text-on-surface-variant">Direct 4x4 or chartered helicopter expedition to inspect natural strata and select raw monolithic blocks.</span>
</div>
</div>
<div className="flex items-start gap-3">
<span className="material-symbols-outlined text-secondary text-[22px] shrink-0 mt-0.5">fact_check</span>
<div>
<strong className="font-title-md text-body-md text-primary block">2,500 m² Physical Dry-Lay Hall Walkthrough</strong>
<span className="font-body-sm text-body-sm text-on-surface-variant">Review numbered tiles and slabs assembled in real architectural sequence with our chief stone conservators.</span>
</div>
</div>
</div>
<div className="pt-space-md">
<a className="inline-flex items-center gap-2 px-space-xl py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary transition-all shadow-md" href="#procurement-form">
<span>Schedule Curated Delegation Visit</span>
<span className="material-symbols-outlined text-[18px]">calendar_month</span>
</a>
</div>
</div>
<div className="lg:col-span-6 grid grid-cols-2 gap-space-md">
<div className="relative overflow-hidden rounded-lg shadow-md aspect-[4/5] bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-alt="Expansive limestone and marble mountain quarry in Galala Egypt under pristine desert sunlight showing monumental stepped stone tiers and heavy excavation equipment with warm earthy cream tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPhZNFN4yawIYkmh0nEk-lk2SsR9jQZh9BFrr9mkfwIxIIqYGlc3l0V1_0D99-T4k1wYDQhpaSS0ILnkagrvQjojW8AnW8tuzHamVUpA8oPaqo9LZiE1gcpsi3a3pQWh9seUcBUUL4MZ37Epci3sm4i4g_D7rLmkRNvdcO-r52SWT80YO_EH5RpQxHhOppSf6l-PZ2g_a0wFHBC6QZnpp7QPHUKL8UXNOtiQG5yW2v"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-space-md text-on-primary">
<span className="font-label-caps text-[10px] text-secondary-fixed uppercase tracking-wider">Concession 04</span>
<span className="font-title-md text-body-md font-semibold">Galala Mountain Quarry</span>
</div>
</div>
<div className="flex flex-col gap-space-md">
<div className="relative overflow-hidden rounded-lg shadow-md aspect-square bg-surface-container">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" data-alt="Large architectural dry lay floor in a modern high ceiling stone factory showing numbered cream and grey marble slabs laid out seamlessly with engineers inspecting tone uniformity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-hP73VBzakGCOhljIgrVx8GDYAFhrjC2GyxmmHwdsMKlMCtoKlpIG6EMx_VmwNA76YczF-8Ukg5zZUcAnRIm7cC-QV_NupyBSWjWsvyignGLMix1ciCs5HOzSPUCZI-N2xOjTUjwdEiPcPnWn4_I_7fwopycDR7cbEBYXiO9UoHgEDI77kEaqg4uz-1jM0tftmYF23JdwqF88QuKUDmatI5NOJjgPe_aNfLo4ejzA"/>
<div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent flex flex-col justify-end p-space-md text-on-primary">
<span className="font-label-caps text-[10px] text-secondary-fixed uppercase tracking-wider">Factory Inspection</span>
<span className="font-title-md text-body-md font-semibold">2,500 m² Dry-Lay Floor</span>
</div>
</div>
<div className="p-space-lg rounded-lg bg-surface-container-high flex flex-col justify-center gap-2">
<span className="font-headline-sm text-headline-sm text-primary">100% Guaranteed</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">
                Every consignment undergoes photographic documentation and digital vein registration prior to sealing.
              </p>
</div>
</div>
</div>
</div>
</div>
</section>
{/* International Specifier FAQ Section */}
<section className="w-full bg-surface-container-low py-space-3xl">
<div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex flex-col gap-space-2xl">
<div className="flex flex-col gap-2 text-center items-center max-w-2xl mx-auto">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">PROCUREMENT &amp; EXPORT INTELLIGENCE</span>
<h2 className="font-headline-lg text-headline-md md:text-headline-lg text-primary">Frequently Addressed Inquiries</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Essential technical guidelines regarding container metrics, shipping lead times, and global testing standards.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
{/* FAQ 1 */}
<div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">help_outline</span>
<h3 className="font-title-md text-title-md text-primary">What are standard 20ft container capacities for 20mm vs 30mm slabs?</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pl-7">
            A standard 20ft heavy-duty maritime container accommodates approximately 400–450 m² of 20mm calibrated marble slabs (approx. 24 to 27 metric tons payload depending on destination port road-weight limits). For 30mm slabs, capacity is approximately 280–300 m². Slabs are packed in fumigated, ISPM-15 certified closed A-frame wooden bundles.
          </p>
</div>
{/* FAQ 2 */}
<div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">verified</span>
<h3 className="font-title-md text-title-md text-primary">Do you provide ASTM C97, C170, and CE test certificates?</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pl-7">
            Yes. Every production run is certified through independent Egyptian national labs and SGS. We provide certified laboratory datasheets for Compressive Strength (ASTM C170), Water Absorption &amp; Density (ASTM C97), Flexural Strength (ASTM C880), and European CE Declaration of Performance (DoP) with every proforma.
          </p>
</div>
{/* FAQ 3 */}
<div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">local_shipping</span>
<h3 className="font-title-md text-title-md text-primary">What is the typical turnaround for physical architect sample boxes?</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pl-7">
            Standard sample boxes containing 4–6 selected Egyptian stones (e.g., Galala, Sinai Pearl, Sunny Menia) in honed and polished finishes are dispatched via DHL Express within 48 hours of confirmation. Delivery takes 2–4 business days worldwide. Custom finishes or 20mm custom cut specimens take 5 business days.
          </p>
</div>
{/* FAQ 4 */}
<div className="p-space-lg rounded-lg bg-surface-container-lowest shadow-sm flex flex-col gap-2">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-[20px]">videocam</span>
<h3 className="font-title-md text-title-md text-primary">How does the 100% Dry-Lay inspection protocol work remotely?</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed pl-7">
            For international architects unable to travel to Cairo, we arrange an interactive ultra-high-definition 4K video inspection walkthrough. We lay out up to 500 m² of cut-to-size cladding tiles in our illuminated hall, marked with tile reference codes corresponding directly to your shop drawings, allowing immediate approval before packing.
          </p>
</div>
</div>
{/* Quick Assistance Callout */}
<div className="p-space-xl rounded-lg bg-primary-container text-on-primary flex flex-col md:flex-row items-center justify-between gap-space-lg shadow-md">
<div className="flex flex-col gap-2">
<span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed">INSTANT SPECIFICATION SUPPORT</span>
<h3 className="font-headline-md text-headline-md">Need immediate tender documentation or physical mock-up guidance?</h3>
<p className="font-body-sm text-body-sm text-on-primary-container max-w-xl">
            Our stone engineers speak English, Italian, Arabic, and French. Connect directly with our Cairo export desk right now.
          </p>
</div>
<div className="flex flex-wrap items-center gap-3 shrink-0">
<a className="px-space-lg py-3 rounded-lg bg-surface-container-lowest text-primary font-label-md text-label-md uppercase tracking-wider hover:bg-secondary hover:text-on-secondary transition-all shadow-sm" href="mailto:export@maadimarble.com">
            Email Engineering Desk
          </a>
<a className="px-space-lg py-3 rounded-lg bg-[#25D366] text-white font-label-md text-label-md uppercase tracking-wider hover:opacity-90 transition-all shadow-sm flex items-center gap-2" href="https://wa.me/20225200000" rel="noopener" target="_blank">
<span className="material-symbols-outlined text-[18px]">chat</span>
<span>WhatsApp Direct</span>
</a>
</div>
</div>
</div>
</section>
</div>

    </>
  );
}
