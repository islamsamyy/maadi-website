export default function ResourcesPage() {
  const docs = [
    { title: "2026 Architectural Stone Catalog", type: "PDF", size: "18.4 MB", downloads: "1,420" },
    { title: "Galala & Sinai Technical Data Sheets", type: "PDF", size: "4.2 MB", downloads: "980" },
    { title: "ASTM / EN Test Certificates Pack", type: "ZIP", size: "9.1 MB", downloads: "645" },
    { title: "Dry-Lay & Mechanical Anchoring Guide", type: "PDF", size: "6.8 MB", downloads: "512" },
  ];

  return (
    <div className="max-w-[1536px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-12">
      <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
        Specification Library
      </span>
      <h1 className="font-headline-lg text-headline-lg text-primary mt-1 mb-10">
        Technical Dossiers &amp; Downloads
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {docs.map((doc) => (
          <div
            key={doc.title}
            className="p-6 rounded-xl bg-surface-container-lowest border border-outline-variant/40 flex items-center justify-between gap-4"
          >
            <div>
              <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-technical-mono text-[11px]">
                {doc.type} • {doc.size}
              </span>
              <h2 className="font-title-md text-primary mt-2">{doc.title}</h2>
              <p className="font-body-sm text-on-surface-variant mt-1">
                {doc.downloads} downloads
              </p>
            </div>
            <button
              type="button"
              className="px-4 py-2.5 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-secondary transition-colors shrink-0"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
