"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useQuote } from "./QuoteContext";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Stones", href: "/stones" },
  { label: "Manufacturing", href: "/manufacturing" },
  { label: "Our Story", href: "/our-story" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const { favorites, quoteItems } = useQuote();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="fixed top-4 left-0 right-0 z-50 px-4 pointer-events-none">
        <div className="max-w-[1160px] mx-auto pointer-events-auto rounded-full bg-surface/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(28,28,28,0.12)] border border-white/60 px-3 py-2 flex items-center justify-between gap-2">
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 pl-2 pr-3 shrink-0">
            <img
              alt="Maadi Marble logo"
              className="h-9 w-auto object-contain"
              src="/logo.png"
            />
            <span className="font-headline-sm text-[15px] font-semibold uppercase tracking-wider text-primary hidden sm:inline">
              Maadi Marble
            </span>
          </Link>

          {/* Center Pill Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    isActive
                      ? "px-4 py-1.5 rounded-full bg-surface-container-lowest text-primary font-label-md text-[13px] font-semibold shadow-sm transition-all"
                      : "px-3.5 py-1.5 rounded-full text-on-surface-variant hover:text-primary font-label-md text-[13px] transition-all"
                  }
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Pills */}
          <div className="flex items-center gap-1.5 shrink-0">
            <Link
              href="/stones"
              aria-label="Search stones"
              className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">search</span>
            </Link>
            <Link
              href="/account"
              aria-label="Account"
              className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">person</span>
            </Link>
            <Link
              href="/favorites"
              aria-label="Favorites"
              className="relative w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-[18px]">favorite</span>
              {favorites.length > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 rounded-full bg-secondary text-on-secondary font-technical-mono text-[10px] flex items-center justify-center font-bold">
                  {favorites.length}
                </span>
              )}
            </Link>
            <Link
              href="/request-price"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C59B27] hover:bg-secondary text-white font-label-md text-[12px] font-semibold tracking-wide shadow-sm transition-all"
            >
              <span>Ask sales for a price</span>
              {quoteItems.length > 0 && (
                <span className="px-1.5 py-0.2 rounded-full bg-black/20 text-[10px] font-technical-mono">
                  {quoteItems.length}
                </span>
              )}
            </Link>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              className="lg:hidden w-9 h-9 rounded-full bg-primary text-on-primary hover:bg-secondary flex items-center justify-center transition-colors"
            >
              <span className="material-symbols-outlined text-[20px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Responsive Side Menu Drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-surface shadow-2xl border-l border-outline-variant/30 flex flex-col justify-between p-6 transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-outline-variant/30">
              <Link href="/" className="flex items-center gap-2.5" onClick={() => setMenuOpen(false)}>
                <img alt="Maadi Marble logo" className="h-8 w-auto object-contain" src="/logo.png" />
                <span className="font-headline-sm text-[15px] font-semibold uppercase tracking-wider text-primary">
                  Maadi Marble
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setMenuOpen(false)}
                aria-label="Close navigation menu"
                className="w-9 h-9 rounded-full bg-surface-container-low hover:bg-surface-container flex items-center justify-center text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <nav className="flex flex-col gap-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 rounded-xl font-label-md text-[15px] flex items-center justify-between transition-all ${
                      isActive
                        ? "bg-primary text-on-primary font-semibold shadow-sm"
                        : "text-on-surface-variant hover:bg-surface-container-low hover:text-primary"
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="material-symbols-outlined text-[18px] opacity-60">chevron_right</span>
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-outline-variant/30">
            <Link
              href="/request-price"
              onClick={() => setMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#C59B27] hover:bg-secondary text-white font-label-md text-[13px] font-semibold shadow-sm transition-all"
            >
              <span className="material-symbols-outlined text-[18px]">calculate</span>
              <span>Ask sales for a price</span>
              {quoteItems.length > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-black/20 text-[11px] font-technical-mono">
                  {quoteItems.length}
                </span>
              )}
            </Link>
          </div>
        </aside>
      </div>

      {/* Floating Right Quick-Action Dock */}
      <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-2.5">
        <Link
          href="/tools/visualizer"
          title="Room Visualizer"
          className="w-11 h-11 rounded-xl bg-primary-container/90 backdrop-blur-md text-secondary-fixed-dim border border-white/15 shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined text-[20px]">layers</span>
        </Link>
        <Link
          href="/tools/stone-finder"
          title="AI Stone Finder"
          className="w-11 h-11 rounded-xl bg-primary-container/90 backdrop-blur-md text-secondary-fixed-dim border border-white/15 shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined text-[20px]">auto_awesome</span>
        </Link>
      </div>

      {/* Floating Bottom-Right Call & WhatsApp */}
      <div className="fixed right-4 bottom-5 z-40 flex flex-col gap-2.5">
        <Link
          href="/contact"
          title="Call Sales"
          className="w-12 h-12 rounded-full bg-[#C59B27] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined text-[22px]">call</span>
        </Link>
        <a
          href="https://wa.me/20225198400"
          target="_blank"
          rel="noreferrer"
          title="WhatsApp Export Desk"
          className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-105 transition-transform"
        >
          <span className="material-symbols-outlined text-[22px]">chat</span>
        </a>
      </div>
    </>
  );
}
