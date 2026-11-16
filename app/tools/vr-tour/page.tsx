"use client";

import { useState } from "react";

export default function VrTourPage() {
  const [notified, setNotified] = useState(false);

  return (
    <div className="max-w-2xl mx-auto px-margin py-20 text-center space-y-6">
      <span className="px-3 py-1 rounded-full bg-surface-container text-secondary font-technical-mono text-xs uppercase tracking-widest">
        Coming Soon
      </span>
      <h1 className="font-headline-lg text-headline-lg text-primary">
        360° VR Slab Warehouse Tour
      </h1>
      <p className="font-body-lg text-on-surface-variant">
        Soon you will be able to walk through our 45,000 m² Shaq El-Thoaban facility, inspect numbered bundles in 4K, and tag slabs for your quote basket remotely.
      </p>
      {notified ? (
        <div className="p-4 rounded-xl bg-surface-container text-primary font-label-md">
          You are on the early-access list. We will notify you at launch.
        </div>
      ) : (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setNotified(true);
          }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto pt-2"
        >
          <input
            required
            type="email"
            placeholder="Enter your work email"
            className="flex-1 px-4 py-3 rounded-lg bg-surface-container-lowest border border-outline-variant"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-secondary transition-colors"
          >
            Notify Me
          </button>
        </form>
      )}
    </div>
  );
}
