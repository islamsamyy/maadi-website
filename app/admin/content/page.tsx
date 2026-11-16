import { createClient } from "@/lib/supabase/server";

export default async function AdminContentPage() {
  const supabase = await createClient();
  const [{ data: projects }, { data: articles }] = await Promise.all([
    supabase.from("projects").select("slug, title, location").order("created_at", { ascending: false }),
    supabase.from("academy_articles").select("slug, title, published_date").order("created_at", { ascending: false }),
  ]);

  const projectList = projects ?? [];
  const articleList = articles ?? [];

  return (
    <div className="space-y-8">
      <div>
        <span className="font-label-caps uppercase tracking-widest text-secondary">
          Editorial &amp; Media
        </span>
        <h1 className="font-headline-md text-headline-md text-primary mt-1">
          Content &amp; Academy Management
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-4">
          <h2 className="font-title-md text-primary">
            Projects ({projectList.length})
          </h2>
          <ul className="space-y-2 font-body-sm">
            {projectList.map((p) => (
              <li key={p.slug} className="flex justify-between py-2 border-b border-outline-variant/20">
                <span className="font-medium text-primary">{p.title}</span>
                <span className="text-on-surface-variant">{p.location}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 space-y-4">
          <h2 className="font-title-md text-primary">
            Academy Articles ({articleList.length})
          </h2>
          <ul className="space-y-2 font-body-sm">
            {articleList.map((a) => (
              <li key={a.slug} className="flex justify-between py-2 border-b border-outline-variant/20">
                <span className="font-medium text-primary">{a.title}</span>
                <span className="text-secondary font-technical-mono text-xs">{a.published_date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
