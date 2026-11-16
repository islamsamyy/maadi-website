import { notFound } from "next/navigation";
import { getStoneBySlug } from "@/lib/queries";
import { StoneDetailClient } from "@/components/StoneDetailClient";

export default async function StoneDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const stone = await getStoneBySlug(slug);
  if (!stone) {
    notFound();
  }
  return <StoneDetailClient stone={stone} />;
}
