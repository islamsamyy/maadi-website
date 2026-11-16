"use client";

import { useState } from "react";

export default function LegalPage() {
  const [tab, setTab] = useState<"terms" | "privacy" | "cookies">("terms");

  return (
    <div className="max-w-[960px] mx-auto px-margin md:px-margin-tablet py-12">
      <h1 className="font-headline-lg text-headline-lg text-primary mb-6">
        Legal &amp; Compliance
      </h1>
      <div className="flex gap-4 border-b border-outline-variant/40 mb-8">
        {(["terms", "privacy", "cookies"] as const).map((t) => (
          <button
            key={t}
            type="button"
            onClick={() => setTab(t)}
            className={`pb-3 font-label-md uppercase tracking-wider ${
              tab === t
                ? "text-primary font-semibold border-b-2 border-secondary"
                : "text-on-surface-variant"
            }`}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="p-8 rounded-2xl bg-surface-container-low font-body-md text-on-surface-variant space-y-4">
        {tab === "terms" && (
          <p>
            All export quotations issued by Maadi Marble are subject to Incoterms 2020 (FOB Sokhna/Alexandria or CIF destination port), natural stone vein variation tolerances, and confirmed container booking schedules.
          </p>
        )}
        {tab === "privacy" && (
          <p>
            We collect contact and project specification details solely to prepare export quotations, coordinate sample dispatches, and manage B2B procurement communications.
          </p>
        )}
        {tab === "cookies" && (
          <p>
            Essential cookies and local storage are used to preserve your quote basket and favorite stone selections across browsing sessions.
          </p>
        )}
      </div>
    </div>
  );
}
