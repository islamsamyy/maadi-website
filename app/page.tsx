import {
  getPublishedStones,
  getPublishedProjects,
  getPublishedArticles,
} from "@/lib/queries";
import { HomeClient } from "@/components/HomeClient";

export default async function HomePage() {
  const [stones, projects, articles] = await Promise.all([
    getPublishedStones(),
    getPublishedProjects(),
    getPublishedArticles(),
  ]);

  return <HomeClient stones={stones} projects={projects} articles={articles} />;
}
