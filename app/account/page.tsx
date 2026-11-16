import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentProfile, getMyQuoteRequests } from "@/lib/queries";
import { SignOutButton } from "@/components/SignOutButton";

export default async function AccountPage() {
  const profile = await getCurrentProfile();
  if (!profile) {
    redirect("/sign-in?next=/account");
  }

  const quotes = await getMyQuoteRequests();

  return (
    <div className="max-w-[1200px] mx-auto px-margin md:px-margin-tablet py-12 space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
            Trade Account • {profile.role}
          </span>
          <h1 className="font-headline-lg text-headline-lg text-primary mt-1">
            {profile.fullName || profile.email}
          </h1>
          {profile.company && (
            <p className="font-body-sm text-on-surface-variant">{profile.company}</p>
          )}
        </div>
        <div className="flex items-center gap-3">
          {(profile.role === "admin" || profile.role === "sales") && (
            <Link
              href="/admin"
              className="px-4 py-2.5 rounded-lg bg-secondary text-on-secondary font-label-md uppercase tracking-wider text-xs"
            >
              Admin Portal
            </Link>
          )}
          <Link
            href="/request-price"
            className="px-5 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider text-xs"
          >
            New Quote Request
          </Link>
          <SignOutButton />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="font-title-md text-primary">
          My Quote Requests ({quotes.length})
        </h2>
        {quotes.length === 0 ? (
          <div className="p-8 rounded-xl bg-surface-container-low text-center space-y-3">
            <p className="font-body-md text-on-surface-variant">
              You have not submitted any quote requests yet.
            </p>
            <Link href="/stones" className="text-secondary font-semibold hover:underline">
              Browse Stones Catalog →
            </Link>
          </div>
        ) : (
          quotes.map((q) => {
            const summary =
              q.items.length > 0
                ? q.items
                    .map((i) => `${i.stoneName} (${i.quantitySqm.toLocaleString()} m²)`)
                    .join(", ")
                : `${q.inquiryMode.toUpperCase()} Inquiry`;
            const dateStr = new Date(q.createdAt).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            });

            return (
              <div
                key={q.id}
                className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div>
                  <span className="font-technical-mono text-xs text-secondary">
                    {q.quoteCode} • {dateStr}
                  </span>
                  <h3 className="font-title-md text-primary mt-1">{summary}</h3>
                  <p className="font-body-sm text-on-surface-variant mt-0.5">
                    {q.country}
                    {q.targetPort ? ` • Port: ${q.targetPort}` : ""}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-surface-container text-primary font-technical-mono text-xs uppercase w-fit">
                  {q.status}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
