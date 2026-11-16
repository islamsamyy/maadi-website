"use client";

import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export function SignOutButton() {
  const router = useRouter();

  const handleSignOut = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/sign-in");
    router.refresh();
  };

  return (
    <button
      type="button"
      onClick={handleSignOut}
      className="px-4 py-2.5 rounded-lg bg-surface-container text-on-surface-variant hover:text-primary font-label-md uppercase tracking-wider text-xs transition-colors"
    >
      Sign Out
    </button>
  );
}
