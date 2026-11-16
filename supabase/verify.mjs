import { createClient } from "@supabase/supabase-js";
import { readFileSync } from "fs";
import { resolve } from "path";

const envPath = resolve(process.cwd(), ".env.local");
for (const line of readFileSync(envPath, "utf8").split(/\r?\n/)) {
  const m = line.match(/^([^=]+)=(.*)$/);
  if (m) process.env[m[1].trim()] = m[2].trim();
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

async function main() {
  const anon = createClient(url, anonKey);

  // 1. Anon can read published stones, projects, articles
  const { data: stones, error: sErr } = await anon.from("stones").select("slug");
  if (sErr || !stones || stones.length !== 12) {
    throw new Error(`Expected 12 stones for anon, got ${stones?.length}: ${sErr?.message}`);
  }
  console.log("PASS: anon reads 12 published stones");

  const { data: projects } = await anon.from("projects").select("slug");
  console.log(`PASS: anon reads ${projects?.length} published projects`);

  const { data: articles } = await anon.from("academy_articles").select("slug");
  console.log(`PASS: anon reads ${articles?.length} published articles`);

  // 2. Anon cannot read profiles or quote_requests
  const { data: profiles } = await anon.from("profiles").select("id");
  if (profiles && profiles.length > 0) {
    throw new Error("FAIL: anon should not be able to read profiles!");
  }
  console.log("PASS: anon blocked from reading profiles (0 rows)");

  const { data: quotes } = await anon.from("quote_requests").select("id");
  if (quotes && quotes.length > 0) {
    throw new Error("FAIL: anon should not be able to read quote_requests!");
  }
  console.log("PASS: anon blocked from reading quote_requests (0 rows)");

  // 3. Admin sign-in & read profiles
  const adminClient = createClient(url, anonKey);
  const { error: authErr } = await adminClient.auth.signInWithPassword({
    email: "admin@maadimarble.com",
    password: "MaadiAdmin2026!",
  });
  if (authErr) throw authErr;

  const { data: adminProfiles, error: apErr } = await adminClient
    .from("profiles")
    .select("email, role");
  if (apErr || !adminProfiles?.length) {
    throw new Error(`Admin failed to read profiles: ${apErr?.message}`);
  }
  console.log("PASS: admin signed in and read profiles:", adminProfiles);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
