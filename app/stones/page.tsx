import { getPublishedStones } from "@/lib/queries";
import { StonesCatalogClient } from "@/components/StonesCatalogClient";

export default async function StonesCatalogPage() {
  const stones = await getPublishedStones();
  return <StonesCatalogClient stones={stones} />;
}
