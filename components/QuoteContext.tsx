"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { createClient } from "@/lib/supabase/client";

export interface QuoteItem {
  slug: string;
  name: string;
  finish: string;
  thickness: string;
  quantitySqm: number;
}

interface QuoteContextValue {
  favorites: string[];
  toggleFavorite: (slug: string) => void;
  quoteItems: QuoteItem[];
  addToQuote: (item: QuoteItem) => void;
  removeFromQuote: (slug: string) => void;
  updateQuoteQty: (slug: string, qty: number) => void;
  clearQuote: () => void;
}

const QuoteContext = createContext<QuoteContextValue | null>(null);

const FAVORITES_KEY = "maadi_favorites_v1";
const QUOTE_KEY = "maadi_quote_basket_v1";

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([]);
  const [userId, setUserId] = useState<string | null>(null);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const supabase = createClient();

    async function init() {
      try {
        const rawQuote = localStorage.getItem(QUOTE_KEY);
        if (rawQuote) setQuoteItems(JSON.parse(rawQuote));
      } catch {
        // ignore storage errors
      }

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        setUserId(user.id);
        const { data } = await supabase
          .from("favorites")
          .select("stone_slug")
          .eq("user_id", user.id);
        if (data) {
          setFavorites(data.map((r) => r.stone_slug));
        }
      } else {
        try {
          const rawFavs = localStorage.getItem(FAVORITES_KEY);
          if (rawFavs) setFavorites(JSON.parse(rawFavs));
        } catch {
          // ignore
        }
      }
      setHydrated(true);
    }

    init();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (_event, session) => {
      const uid = session?.user?.id ?? null;
      setUserId(uid);
      if (uid) {
        const { data } = await supabase
          .from("favorites")
          .select("stone_slug")
          .eq("user_id", uid);
        if (data) setFavorites(data.map((r) => r.stone_slug));
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(QUOTE_KEY, JSON.stringify(quoteItems));
    } catch {
      // ignore
    }
  }, [quoteItems, hydrated]);

  useEffect(() => {
    if (!hydrated || userId) return;
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {
      // ignore
    }
  }, [favorites, userId, hydrated]);

  const toggleFavorite = async (slug: string) => {
    const exists = favorites.includes(slug);
    setFavorites((prev) =>
      exists ? prev.filter((s) => s !== slug) : [...prev, slug]
    );

    if (userId) {
      const supabase = createClient();
      if (exists) {
        await supabase
          .from("favorites")
          .delete()
          .eq("user_id", userId)
          .eq("stone_slug", slug);
      } else {
        await supabase
          .from("favorites")
          .insert({ user_id: userId, stone_slug: slug });
      }
    }
  };

  const addToQuote = (item: QuoteItem) => {
    setQuoteItems((prev) => {
      const existing = prev.find((i) => i.slug === item.slug);
      if (existing) {
        return prev.map((i) =>
          i.slug === item.slug
            ? { ...i, quantitySqm: i.quantitySqm + item.quantitySqm }
            : i
        );
      }
      return [...prev, item];
    });
  };

  const removeFromQuote = (slug: string) => {
    setQuoteItems((prev) => prev.filter((i) => i.slug !== slug));
  };

  const updateQuoteQty = (slug: string, qty: number) => {
    setQuoteItems((prev) =>
      prev.map((i) =>
        i.slug === slug ? { ...i, quantitySqm: Math.max(10, qty) } : i
      )
    );
  };

  const clearQuote = () => setQuoteItems([]);

  return (
    <QuoteContext.Provider
      value={{
        favorites,
        toggleFavorite,
        quoteItems,
        addToQuote,
        removeFromQuote,
        updateQuoteQty,
        clearQuote,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const ctx = useContext(QuoteContext);
  if (!ctx) {
    throw new Error("useQuote must be used within QuoteProvider");
  }
  return ctx;
}
