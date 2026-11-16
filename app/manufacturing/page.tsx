import type { Metadata } from "next";
import { ManufacturingClient } from "@/components/ManufacturingClient";

export const metadata: Metadata = {
  title: "Manufacturing & Quarries | Maadi Marble",
  description:
    "Vertical integration from sovereign Egyptian quarries to our 45,000 m² automated manufacturing plant in Shaq Al Thoban, Cairo. Multi-wire gang saws, vacuum resin lines, 5-axis CNC, and 100% dry-lay inspection.",
};

export default function ManufacturingPage() {
  return <ManufacturingClient />;
}
