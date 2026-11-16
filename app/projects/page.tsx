import Link from "next/link";
import { getPublishedProjects } from "@/lib/queries";

export default async function ProjectsPage() {
  const projects = await getPublishedProjects();

  return (
    <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-12">
      <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
        Global Architectural Portfolio
      </span>
      <h1 className="font-headline-lg text-headline-lg text-primary mt-1 mb-10">
        Landmark Stone Installations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div
            key={project.slug}
            className="rounded-2xl bg-surface-container-lowest border border-outline-variant/30 overflow-hidden shadow-sm flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-64 w-full object-cover"
            />
            <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between font-technical-mono text-[11px] uppercase text-secondary">
                  <span>{project.category}</span>
                  <span>{project.area}</span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-primary mt-2">
                  {project.title}
                </h2>
                <p className="font-body-sm text-on-surface-variant mt-1">
                  {project.location}
                </p>
              </div>
              <div className="pt-3 border-t border-outline-variant/30 flex flex-wrap gap-2">
                {project.stones.map((s) => (
                  <Link
                    key={s}
                    href="/stones"
                    className="px-2.5 py-1 rounded bg-surface-container text-primary font-technical-mono text-[11px] hover:bg-secondary hover:text-on-secondary transition-colors"
                  >
                    {s}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
