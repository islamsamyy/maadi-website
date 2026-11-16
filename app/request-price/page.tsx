"use client";

import { useState } from "react";
import Link from "next/link";
import { useQuote } from "@/components/QuoteContext";

export default function RequestPricePage() {
  const { quoteItems, updateQuoteQty, removeFromQuote, clearQuote } = useQuote();
  const [submittedCode, setSubmittedCode] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [targetPort, setTargetPort] = useState("");
  const [notes, setNotes] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/quotes", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          inquiryMode: "quote_basket",
          fullName,
          company,
          email,
          phone,
          country,
          targetPort,
          notes,
          items: quoteItems,
        }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Failed to submit quote request.");
        setLoading(false);
        return;
      }
      setSubmittedCode(data.quoteCode);
      clearQuote();
    } catch {
      setError("Network error while submitting quote request.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-12">
      <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
        Direct Export Procurement
      </span>
      <h1 className="font-headline-lg text-headline-lg text-primary mt-1 mb-8">
        Quote Basket &amp; Price Request
      </h1>

      {submittedCode ? (
        <div className="p-10 rounded-2xl bg-surface-container-low border border-secondary/40 text-center max-w-2xl mx-auto space-y-4">
          <span className="material-symbols-outlined text-[48px] text-secondary">check_circle</span>
          <div className="font-technical-mono text-xs uppercase tracking-widest text-secondary">
            Reference: {submittedCode}
          </div>
          <h2 className="font-headline-md text-headline-md text-primary">
            Quote Request Received
          </h2>
          <p className="font-body-md text-on-surface-variant">
            Our Cairo export sales team has received your stone specifications and will respond with FOB/CIF pricing within 24 hours.
          </p>
          <Link
            href="/stones"
            className="inline-block px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider"
          >
            Continue Browsing Stones
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-title-md text-title-md text-primary">
              Selected Stones ({quoteItems.length})
            </h2>
            {quoteItems.length === 0 ? (
              <div className="p-8 rounded-xl bg-surface-container-low text-center space-y-3">
                <p className="text-on-surface-variant">Your quote basket is empty.</p>
                <Link href="/stones" className="text-secondary font-semibold hover:underline">
                  Browse Stones Catalog →
                </Link>
              </div>
            ) : (
              quoteItems.map((item) => (
                <div
                  key={item.slug}
                  className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-between gap-4"
                >
                  <div>
                    <h3 className="font-title-md text-primary">{item.name}</h3>
                    <p className="font-body-sm text-on-surface-variant">
                      {item.finish} • {item.thickness}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="number"
                      min={10}
                      value={item.quantitySqm}
                      onChange={(e) => updateQuoteQty(item.slug, Number(e.target.value))}
                      className="w-24 px-3 py-1.5 rounded-lg border border-outline-variant text-right"
                    />
                    <span className="font-technical-mono text-xs text-on-surface-variant">m²</span>
                    <button
                      type="button"
                      onClick={() => removeFromQuote(item.slug)}
                      className="text-error hover:opacity-80"
                    >
                      <span className="material-symbols-outlined text-[20px]">delete</span>
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <form
            onSubmit={handleSubmit}
            className="lg:col-span-6 p-8 rounded-2xl bg-surface-container-low space-y-4"
          >
            <h2 className="font-title-md text-title-md text-primary mb-2">
              Project &amp; Delivery Details
            </h2>
            {error && (
              <div className="p-3 rounded-lg bg-error/10 border border-error/30 text-error font-body-sm">
                {error}
              </div>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name *"
                className="px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant"
              />
              <input
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company / Studio *"
                className="px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant"
              />
              <input
                required
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Work Email *"
                className="px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant"
              />
              <input
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone / WhatsApp *"
                className="px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant"
              />
              <input
                required
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Destination Country *"
                className="px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant"
              />
              <input
                value={targetPort}
                onChange={(e) => setTargetPort(e.target.value)}
                placeholder="Target Port (e.g. Genoa, Jebel Ali)"
                className="px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant"
              />
            </div>
            <textarea
              rows={4}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Project notes, edge profiles, or target delivery schedule..."
              className="w-full px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-secondary transition-colors disabled:opacity-60"
            >
              {loading ? "Submitting..." : "Submit Price Request"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
