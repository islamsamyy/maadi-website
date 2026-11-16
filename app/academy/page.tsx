import { getPublishedArticles } from "@/lib/queries";

export default async function AcademyPage() {
  const articles = await getPublishedArticles();

  return (
    <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-12">
      <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
        Educational Journal
      </span>
      <h1 className="font-headline-lg text-headline-lg text-primary mt-1 mb-10">
        Maadi Stone Academy
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article
            key={article.slug}
            className="p-6 rounded-2xl bg-surface-container-lowest border border-outline-variant/30 shadow-sm flex flex-col justify-between gap-4"
          >
            <div className="space-y-3">
              <div className="flex items-center justify-between font-technical-mono text-[11px] uppercase text-secondary">
                <span>{article.category}</span>
                <span>{article.readTime}</span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-primary">
                {article.title}
              </h2>
              <p className="font-body-md text-on-surface-variant">
                {article.excerpt}
              </p>
            </div>
            <div className="pt-4 border-t border-outline-variant/30 font-technical-mono text-xs text-on-surface-variant">
              Published {article.date}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
