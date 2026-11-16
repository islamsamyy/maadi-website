import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

const APP_DIR = path.resolve("d:/marbel website/my-app/app");
const COMPONENTS_DIR = path.resolve("d:/marbel website/my-app/components");

const REQUIRED_ROUTES = [
  "page.tsx",
  "stones/page.tsx",
  "stones/[slug]/page.tsx",
  "manufacturing/page.tsx",
  "our-story/page.tsx",
  "contact/page.tsx",
  "request-price/page.tsx",
  "favorites/page.tsx",
  "projects/page.tsx",
  "academy/page.tsx",
  "resources/page.tsx",
  "tools/stone-finder/page.tsx",
  "tools/visualizer/page.tsx",
  "tools/vr-tour/page.tsx",
  "sign-in/page.tsx",
  "account/page.tsx",
  "legal/page.tsx",
  "admin/page.tsx",
];

test("All 18 required Next.js App Router pages exist", () => {
  for (const route of REQUIRED_ROUTES) {
    const fullPath = path.join(APP_DIR, route);
    assert.equal(
      fs.existsSync(fullPath),
      true,
      `Missing route file: ${route}`
    );
  }
});

test("SiteHeader has accessible icon buttons and floating quick-action dock", () => {
  const header = fs.readFileSync(
    path.join(COMPONENTS_DIR, "SiteHeader.tsx"),
    "utf8"
  );
  assert.match(header, /aria-label="Search stones"/);
  assert.match(header, /aria-label="Account"/);
  assert.match(header, /aria-label="Favorites"/);
  assert.match(header, /Ask sales for a price/);
  assert.match(header, /\/tools\/visualizer/);
  assert.match(header, /\/tools\/stone-finder/);
});

test("Home page includes futuristic hero, smart tools, and hot sale stones gallery", () => {
  const home = fs.readFileSync(path.join(COMPONENTS_DIR, "HomeClient.tsx"), "utf8");
  assert.match(home, /Transform Spaces with Premium Stone &amp; Marble Solutions/);
  assert.match(home, /Hot Sale &amp; Special Discounts/);
  assert.match(home, /Ask sales/);
  assert.match(home, /Explore Materials/);
});

test("Stones data has unique slugs and valid image URLs", () => {
  const data = fs.readFileSync(
    path.resolve("d:/marbel website/my-app/lib/stones-data.ts"),
    "utf8"
  );
  const slugs = [...data.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
  assert.ok(slugs.length >= 6, "Expected at least 6 stones/projects/articles");
  assert.equal(new Set(slugs).size, slugs.length, "Duplicate slugs found");
  assert.match(data, /https:\/\/images\.unsplash\.com\//);
});
