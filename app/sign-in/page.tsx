"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

function SignInForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const nextPath = searchParams.get("next") || "/account";

  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);

    const supabase = createClient();

    if (mode === "signin") {
      try {
        const { error: signInErr } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (signInErr) {
          setError(signInErr.message);
          setLoading(false);
          return;
        }
        window.location.assign(nextPath);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Failed to sign in.");
        setLoading(false);
      }
    } else {
      const { data, error: signUpErr } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
            company,
          },
        },
      });
      if (signUpErr) {
        setError(signUpErr.message);
        setLoading(false);
        return;
      }
      if (data.session) {
        router.push(nextPath);
        router.refresh();
      } else {
        setMessage(
          "Account created! Please check your email to confirm your address before signing in."
        );
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-md mx-auto px-margin py-16">
      <div className="p-8 rounded-2xl bg-surface-container-lowest border border-outline-variant/40 shadow-sm space-y-6">
        <div>
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-secondary">
            Client &amp; Trade Portal
          </span>
          <h1 className="font-headline-md text-headline-md text-primary mt-1">
            {mode === "signin" ? "Sign In" : "Create Trade Account"}
          </h1>
        </div>

        {error && (
          <div className="p-3 rounded-lg bg-error/10 border border-error/30 text-error font-body-sm">
            {error}
          </div>
        )}
        {message && (
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-body-sm">
            {message}
          </div>
        )}

        <form className="space-y-4" onSubmit={handleSubmit}>
          {mode === "signup" && (
            <>
              <input
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant"
              />
              <input
                required
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company / Architecture Studio"
                className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant"
              />
            </>
          )}
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Work Email"
            className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant"
          />
          <input
            required
            type="password"
            minLength={6}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full px-4 py-3 rounded-lg bg-surface-container-low border border-outline-variant"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex justify-center py-3 rounded-lg bg-primary-container text-on-primary font-label-md uppercase tracking-wider hover:bg-secondary transition-colors disabled:opacity-60"
          >
            {loading
              ? "Please wait..."
              : mode === "signin"
              ? "Sign In"
              : "Register"}
          </button>
        </form>

        <button
          type="button"
          onClick={() => {
            setError(null);
            setMessage(null);
            setMode(mode === "signin" ? "signup" : "signin");
          }}
          className="w-full text-center font-body-sm text-secondary hover:underline"
        >
          {mode === "signin"
            ? "New trade partner? Create an account"
            : "Already registered? Sign in"}
        </button>
      </div>
    </div>
  );
}

export default function SignInPage() {
  return (
    <Suspense fallback={<div className="max-w-md mx-auto px-margin py-16 text-center">Loading...</div>}>
      <SignInForm />
    </Suspense>
  );
}
