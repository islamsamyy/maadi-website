import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-primary-container text-on-primary pt-16 pb-10 border-t border-outline/20">
      <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-on-primary/10">
          <div className="lg:col-span-4 space-y-4">
            <div>
              <span className="font-headline-sm text-headline-sm uppercase tracking-wider text-on-primary block">
                Maadi Marble
              </span>
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed-dim">
                Cairo • Est. 1994
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary/70 max-w-sm">
              Sovereign Egyptian natural stone, marble, and granite export.
              Direct quarry concessions across Galala, Sinai, Menia, and Aswan
              with 45,000 m² Italian processing in Shaq El-Thoaban.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <span className="px-2.5 py-1 rounded bg-on-primary/10 font-technical-mono text-[11px] uppercase tracking-wider">
                ISO 9001:2015
              </span>
              <span className="px-2.5 py-1 rounded bg-on-primary/10 font-technical-mono text-[11px] uppercase tracking-wider">
                CE Certified
              </span>
              <span className="px-2.5 py-1 rounded bg-on-primary/10 font-technical-mono text-[11px] uppercase tracking-wider">
                ISPM-15
              </span>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed-dim">
              Navigation
            </h4>
            <ul className="space-y-2 font-body-sm text-on-primary/80">
              <li>
                <Link href="/stones" className="hover:text-secondary-fixed-dim transition-colors">
                  Stones &amp; Catalog
                </Link>
              </li>
              <li>
                <Link href="/manufacturing" className="hover:text-secondary-fixed-dim transition-colors">
                  Manufacturing &amp; Quarries
                </Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-secondary-fixed-dim transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-secondary-fixed-dim transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-secondary-fixed-dim transition-colors">
                  Contact &amp; Procurement
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed-dim">
              Smart Tools &amp; Resources
            </h4>
            <ul className="space-y-2 font-body-sm text-on-primary/80">
              <li>
                <Link href="/tools/stone-finder" className="hover:text-secondary-fixed-dim transition-colors">
                  AI Stone Finder
                </Link>
              </li>
              <li>
                <Link href="/tools/visualizer" className="hover:text-secondary-fixed-dim transition-colors">
                  Room Visualizer
                </Link>
              </li>
              <li>
                <Link href="/tools/vr-tour" className="hover:text-secondary-fixed-dim transition-colors">
                  VR Warehouse Tour
                </Link>
              </li>
              <li>
                <Link href="/academy" className="hover:text-secondary-fixed-dim transition-colors">
                  Stone Academy
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-secondary-fixed-dim transition-colors">
                  Technical Dossiers &amp; CAD
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-label-caps text-label-caps uppercase tracking-widest text-secondary-fixed-dim">
              Cairo Headquarters
            </h4>
            <p className="font-body-sm text-on-primary/70">
              Plot 14, Shaq El-Thoaban Industrial Zone, Maadi, Cairo, Egypt
            </p>
            <p className="font-technical-mono text-technical-mono text-on-primary/90">
              +20 2 2519 8400 • export@maadimarble.com
            </p>
            <div className="pt-2 flex items-center gap-4 font-label-md text-xs uppercase tracking-wider">
              <Link href="/admin" className="text-secondary-fixed-dim hover:underline">
                Admin Portal
              </Link>
              <Link href="/legal" className="text-on-primary/60 hover:text-on-primary">
                Legal &amp; Privacy
              </Link>
            </div>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-body-sm text-on-primary/50">
          <span>© 2026 Maadi Marble. All rights reserved.</span>
          <span>Exporting to 42+ Countries Worldwide</span>
        </div>
      </div>
    </footer>
  );
}
