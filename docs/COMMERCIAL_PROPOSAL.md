# Commercial & Financial Proposal — Maadi Marble Export Platform
# العرض التجاري والمالي — منصة معادي للرخام والتصدير العالمي

---

## 1. Executive Summary | الملخص التنفيذي

### English
**Maadi Marble** is a digital B2B/B2C export showcase and **Request-for-Quotation (RFQ)** platform engineered specifically for Egyptian natural stone, marble, and granite exporters. Rather than forcing complex stone slab pricing into a generic e-commerce cart, the platform mirrors real-world quarry and export trade operations: global architects, developers, and contractors explore verified slab inventory, visualize stones in smart interactive tools, build a multi-stone **Quote Basket**, and submit one structured procurement inquiry directly to your export sales team.

### العربية
منصة **معادي للرخام (Maadi Marble)** هي بوابة رقمية متكاملة مصممة خصيصاً لشركات تصدير الرخام والجرانيت والأحجار الطبيعية المصرية. بدلاً من متاجر التجزئة التقليدية التي لا تناسب طبيعة تسعير الألواح والحاويات، تحاكي المنصة دورة التصدير الفعلية: يتصفح المهندسون والمستوردون المخزون الفعلي بالمتر المربع، ويجربون الأحجار عبر أدوات الذكاء الاصطناعي والمعاينة ثلاثية الأبعاد، ثم يجمعون اختياراتهم في **سلة تسعير واحدة (Quote Basket)** لإرسال طلب عرض سعر رسمي (RFQ) يصل مباشرة إلى لوحة تحكم فريق المبيعات.

---

## 2. Strategic Benefits & Business ROI | المزايا التجارية والعائد على الاستثمار

| Business Area | Traditional Process (Before) | With Maadi Marble Platform (After) | Measurable Impact |
| :--- | :--- | :--- | :--- |
| **Lead Qualification** | Scattered WhatsApp/email messages missing thickness, finish, or port details | Structured RFQ with stone slug, finish, thickness, `m²` quantity, target port & country | **60–75% faster** sales quotation turnaround |
| **Global Buyer Trust** | Static PDF brochures | Live stock `m²`, technical datasheets (density, water absorption), ISO/CE/ISPM-15 credentials & project portfolio | Higher conversion of B2B international architects & developers |
| **Pre-Sales Education** | Sales team repeatedly answers basic stone questions | Built-in **AI Stone Finder**, **Room Visualizer**, **VR Warehouse Tour**, and **Stone Academy** | Reduced pre-sales friction & higher-intent inquiries |
| **Sales Pipeline Visibility** | No central tracking of inquiries by country or stone | Real-time **Admin Portal** tracking `New → Contacted → Quoted → Won` + country demand analytics | Data-driven quarry & inventory planning |
| **Security & Data Ownership** | Shared spreadsheets | PostgreSQL with **Row-Level Security (RLS)** and role isolation (`customer`, `sales`, `admin`) | Enterprise-grade data protection |

---

## 3. Delivered Scope of Work | نطاق العمل والوحدات المسلمة

1. **Brand & Export Storefront:** Home page, Manufacturing & Quarries (`/manufacturing`), Heritage & Certifications (`/our-story`), Completed Projects (`/projects`), Legal & Privacy (`/legal`).
2. **Dynamic Stone Catalog & Datasheets:** Filterable catalog (`/stones`) and technical product pages (`/stones/[slug]`) with finish/thickness configurator and real-time `m²` stock visibility.
3. **Quote Basket & Consolidated RFQ Engine:** Persistent `QuoteContext` + `/request-price` & `/contact` workflows generating unique `QT-YYYY-XXX-XXX` tracking codes via `/api/quotes`.
4. **Smart Selection & Visualization Suite:** AI Stone Finder (`/tools/stone-finder`), Interactive Room Visualizer (`/tools/visualizer`), and VR Warehouse Tour (`/tools/vr-tour`).
5. **Knowledge & Technical Hub:** Stone Academy (`/academy`) and CAD/BIM Technical Dossiers (`/resources`).
6. **Client Trade Portal (`/account`) & Admin/Sales Dashboard (`/admin`):** Executive KPIs, Quote Requests Inbox, Inventory Management, Content Management, and User Role Administration.

---

## 4. Financial Proposal | العرض المالي وهيكل الاستثمار

> *Note: Figures below represent standard commercial valuation benchmarks for a custom Next.js + Supabase B2B Export Platform. Currency is USD (`$`) with indicative EGP equivalents adjustable per contract terms.*

### 4.1 Platform Development & Implementation Breakdown

| Phase / Module | Scope Included | Estimated Value (USD) |
| :--- | :--- | :---: |
| **Phase 1: UI/UX & Brand Architecture** | Custom luxury editorial design system, responsive layouts, Stitch screen alignment, brand assets | \$1,200 |
| **Phase 2: Core Catalog & Smart Tools** | Dynamic catalog, stone datasheets, AI Stone Finder, Room Visualizer, VR Tour, Academy & Resources | \$1,800 |
| **Phase 3: Quote Basket & RFQ Pipeline** | Persistent QuoteContext, favorites DB sync, `/api/quotes` backend, unique quote code generation | \$1,000 |
| **Phase 4: Database, Auth & Admin Portal** | Supabase PostgreSQL schema, RLS security policies, Trade Account, Admin KPIs, Quotes Inbox, Inventory & Role RBAC | \$1,500 |
| **Phase 5: QA, Deployment & Documentation** | Production build optimization, Vercel CI/CD setup, Supabase seeding/verification scripts, technical & commercial docs | \$500 |
| **Total Turnkey Package** | **Full Source Code Ownership + Production Deployment** | **\$6,000** |

### 4.2 Monthly Cloud Infrastructure Costs (Direct to Providers)

| Service | Recommended Tier | Monthly Cost | What It Covers |
| :--- | :--- | :---: | :--- |
| **Vercel Hosting** | Hobby (Starter) / Pro (Commercial) | \$0 – \$20 / month | Global Edge CDN, automatic GitHub CI/CD deployments, SSL |
| **Supabase (DB + Auth)** | Free (Launch) / Pro (Production) | \$0 – \$25 / month | Managed PostgreSQL, Authentication, daily backups, 8GB+ DB |
| **Custom Domain** | `.com` / `.eg` registrar | ~\$12 – \$20 / year | Branded domain (`maadimarble.com`) |
| **Total Operating Cost** | | **\$0 – \$45 / month** | Zero server administration overhead |

### 4.3 Optional Post-Launch Support & Retainer Plans (اختياري)

| Plan | Monthly Fee | Included Services |
| :--- | :---: | :--- |
| **Standard Care** | \$250 / month | Uptime monitoring, security updates, minor copy/stone updates, email support |
| **Growth & Export SEO** | \$600 / month | Everything in Standard + new feature enhancements, multi-language (AR/EN/FR) expansion, conversion analytics & SEO tuning |

### 4.4 Payment Milestones | جدول الدفعات المقترح
- **40%** Upon contract signing & project kickoff (عند التعاقد وبدء التنفيذ)
- **30%** Upon completion of Catalog, Smart Tools & Staging preview (عند تسليم الكتالوج والأدوات الذكية على بيئة الاختبار)
- **30%** Upon Admin Portal delivery, production deployment on Vercel & final handover (عند تسليم لوحة التحكم والإطلاق النهائي على الإنتاج)

---

## 5. Recommended Next Steps | الخطوات القادمة المقترحة

1. **Custom Domain & Brand Assets:** Connect `maadimarble.com` in Vercel and replace sample stone photography with high-resolution slabs from your Shaq El-Thoaban yard.
2. **Email Notifications (Resend / SendGrid):** Hook `POST /api/quotes` to send instant automated PDF/email confirmations to buyers and alerts to your export sales desk.
3. **Multi-Language Expansion (EN / AR / IT / FR):** Enable `next-intl` routing to target European, GCC, and North American buyers in their native languages.
4. **Go-Live & Marketing Launch:** Share the platform link across LinkedIn, trade exhibitions (Marmomac, Big 5), and export directories.
