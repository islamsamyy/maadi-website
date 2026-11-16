"use client";

import { useState } from "react";

const TABS = [
  { id: "fcl", label: "Full Container Loads (FCL)" },
  { id: "cut-to-size", label: "Cut-to-Size & Dry-Lay" },
  { id: "sample-kit", label: "Curated Sample Box" },
  { id: "visit", label: "Factory & Quarry Visit" },
];

export function ContactRfqForm() {
  const [inquiryMode, setInquiryMode] = useState("fcl");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [targetPort, setTargetPort] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quoteCode, setQuoteCode] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryMode,
          fullName,
          company,
          email,
          phone,
          country,
          targetPort,
          notes,
          items: [],
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to submit inquiry.");
        setLoading(false);
        return;
      }
      setQuoteCode(data.quoteCode);
    } catch {
      setError("Network error while submitting inquiry.");
    } finally {
      setLoading(false);
    }
  };

  if (quoteCode) {
    return (
      <div className="p-8 rounded-xl bg-surface-container-low border border-secondary/40 text-center space-y-3">
        <span className="material-symbols-outlined text-[40px] text-secondary">
          check_circle
        </span>
        <div className="font-technical-mono text-xs uppercase tracking-widest text-secondary">
          Reference: {quoteCode}
        </div>
        <h3 className="font-headline-sm text-primary">
          Procurement Inquiry Received
        </h3>
        <p className="font-body-sm text-on-surface-variant">
          Our Cairo export engineering desk has logged your {inquiryMode.toUpperCase()} request and will respond within 24 hours.
        </p>
        <button
          type="button"
          onClick={() => {
            setQuoteCode(null);
            setNotes("");
          }}
          className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md text-xs uppercase tracking-wider"
        >
          Submit Another Inquiry
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-wrap gap-2 pb-space-lg" id="rfq-tabs">
        {TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setInquiryMode(tab.id)}
            className={`px-4 py-2 rounded-full font-label-md text-label-md uppercase tracking-wider transition-all ${
              inquiryMode === tab.id
                ? "bg-primary-container text-on-primary shadow-sm"
                : "bg-surface-container text-on-surface-variant hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <form className="flex flex-col gap-space-lg" id="procurement-form" onSubmit={handleSubmit}>
        {error && (
          <div className="p-3 rounded-lg bg-error/10 border border-error/30 text-error font-body-sm">
            {error}
          </div>
        )}
        <div className="flex flex-col gap-space-md">
          <span className="font-label-caps text-label-caps uppercase tracking-wider text-on-surface-variant">
            01. Specifier &amp; Entity Information
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface">Full Name &amp; Title</label>
              <input
                required
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all"
                placeholder="e.g. Elena Rossi, Lead Facade Architect"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface">Company / Practice / Developer</label>
              <input
                required
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all"
                placeholder="e.g. Zaha Hadid Architects / Emaar Dev"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface">Corporate Email</label>
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all"
                placeholder="name@architecturefirm.com"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface">Direct Phone / WhatsApp</label>
              <input
                required
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all"
                placeholder="+44 20 7946 0912"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface">Destination Country</label>
              <input
                required
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all"
                placeholder="e.g. United Kingdom, UAE, Italy"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface">Target Seaport (Optional)</label>
              <input
                type="text"
                value={targetPort}
                onChange={(e) => setTargetPort(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all"
                placeholder="e.g. Genoa, Jebel Ali, Felixstowe"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-on-surface">Project Specifications &amp; Notes</label>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-sm placeholder:text-outline focus:outline-none focus:bg-surface-container-lowest focus:ring-1 focus:ring-secondary transition-all"
              placeholder="Stone types, finishes, estimated m², or preferred visit dates..."
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-4 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-secondary transition-colors disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit Direct Procurement Request"}
        </button>
      </form>
    </>
  );
}
