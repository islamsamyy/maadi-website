import { Suspense } from "react";
import {
  getPublishedStones,
  getPublishedProjects,
  getPublishedArticles,
} from "@/lib/queries";
import { HomeClient } from "@/components/HomeClient";

async function HomeContent() {
  const [stones, projects, articles] = await Promise.all([
    getPublishedStones(),
    getPublishedProjects(),
    getPublishedArticles(),
  ]);

  return <HomeClient stones={stones} projects={projects} articles={articles} />;
}

export default function HomePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-surface" />}>
      <HomeContent />
    </Suspense>
  );
}
