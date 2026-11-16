"use client";

import { useState } from "react";
import { STONES } from "@/lib/stones-data";

export default function RoomVisualizerPage() {
  const [selectedStone, setSelectedStone] = useState(STONES[0]);
  const [room, setRoom] = useState("Hotel Lobby");

  return (
    <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-12">
      <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
        Interactive Studio
      </span>
      <h1 className="font-headline-lg text-headline-lg text-primary mt-1 mb-8">
        Room &amp; Surface Visualizer
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 rounded-2xl overflow-hidden bg-surface-container-low border border-outline-variant/40 relative h-[500px]">
          <img
            src={selectedStone.image}
            alt={selectedStone.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-surface/90 backdrop-blur-md flex items-center justify-between">
            <div>
              <span className="font-technical-mono text-xs uppercase text-secondary">{room}</span>
              <h2 className="font-title-md text-primary">{selectedStone.name}</h2>
            </div>
            <span className="px-3 py-1 rounded bg-primary-container text-on-primary font-technical-mono text-xs">
              {selectedStone.finishes[0]}
            </span>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-6">
          <div className="p-5 rounded-xl bg-surface-container-low space-y-3">
            <h3 className="font-title-md text-primary">1. Choose Environment</h3>
            <div className="grid grid-cols-2 gap-2">
              {["Hotel Lobby", "Living Room", "Kitchen", "Bathroom"].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRoom(r)}
                  className={`py-2 px-3 rounded-lg font-label-md text-sm ${
                    room === r
                      ? "bg-primary-container text-on-primary"
                      : "bg-surface-container-lowest text-on-surface"
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="p-5 rounded-xl bg-surface-container-low space-y-3">
            <h3 className="font-title-md text-primary">2. Select Egyptian Stone</h3>
            <div className="space-y-2 max-h-72 overflow-y-auto">
              {STONES.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => setSelectedStone(s)}
                  className={`w-full p-3 rounded-lg text-left flex items-center justify-between ${
                    selectedStone.slug === s.slug
                      ? "bg-secondary text-on-secondary"
                      : "bg-surface-container-lowest text-primary"
                  }`}
                >
                  <span className="font-label-md">{s.name}</span>
                  <span className="font-technical-mono text-xs opacity-80">{s.type}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
