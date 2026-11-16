"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const ADMIN_NAV = [
  { label: "Overview & Analytics", href: "/admin", icon: "analytics" },
  { label: "Stones Catalog CRUD", href: "/admin/stones", icon: "diamond" },
  { label: "Quote Requests Inbox", href: "/admin/quotes", icon: "request_quote" },
  { label: "Content & Academy", href: "/admin/content", icon: "article" },
  { label: "Users & Subscribers", href: "/admin/users", icon: "group" },
];

export function AdminShell({
  role,
  children,
}: {
  role: string;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <aside className="lg:col-span-3 space-y-4">
          <div className="p-5 rounded-2xl bg-primary-container text-on-primary space-y-1">
            <span className="font-technical-mono text-[11px] uppercase tracking-widest text-secondary-fixed-dim">
              Internal Portal • {role}
            </span>
            <h2 className="font-headline-sm text-headline-sm">Maadi Admin</h2>
          </div>

          <nav className="p-3 rounded-2xl bg-surface-container-low border border-outline-variant/40 space-y-1">
            {ADMIN_NAV.map((item) => {
              const isActive =
                item.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl font-label-md text-[13px] transition-colors ${
                    isActive
                      ? "bg-primary-container text-on-primary font-semibold shadow-sm"
                      : "text-on-surface-variant hover:bg-surface-container hover:text-primary"
                  }`}
                >
                  <span className="material-symbols-outlined text-[19px]">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </aside>

        <div className="lg:col-span-9 min-w-0">{children}</div>
      </div>
    </div>
  );
}
