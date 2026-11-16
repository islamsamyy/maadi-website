import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

interface QuoteItemPayload {
  slug: string;
  name: string;
  finish: string;
  thickness: string;
  quantitySqm: number;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      inquiryMode = "quote_basket",
      fullName,
      company,
      email,
      phone,
      country,
      targetPort = null,
      notes = null,
      items = [],
    } = body as {
      inquiryMode?: string;
      fullName: string;
      company: string;
      email: string;
      phone: string;
      country: string;
      targetPort?: string | null;
      notes?: string | null;
      items?: QuoteItemPayload[];
    };

    if (!fullName || !company || !email || !phone || !country) {
      return NextResponse.json(
        { error: "Missing required contact fields." },
        { status: 400 }
      );
    }

    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    const randomNum = Math.floor(100 + Math.random() * 900);
    const quoteCode = `QT-${new Date().getFullYear()}-${randomNum}-${Date.now().toString().slice(-3)}`;

    const admin = createAdminClient();
    const { data: quoteRow, error: quoteErr } = await admin
      .from("quote_requests")
      .insert({
        quote_code: quoteCode,
        user_id: user?.id ?? null,
        inquiry_mode: inquiryMode,
        full_name: fullName,
        company,
        email,
        phone,
        country,
        target_port: targetPort || null,
        notes: notes || null,
        status: "New",
      })
      .select("id, quote_code")
      .single();

    if (quoteErr || !quoteRow) {
      return NextResponse.json(
        { error: quoteErr?.message ?? "Failed to submit quote request." },
        { status: 500 }
      );
    }

    if (Array.isArray(items) && items.length > 0) {
      const itemRows = items.map((item) => ({
        quote_request_id: quoteRow.id,
        stone_slug: item.slug,
        stone_name: item.name,
        finish: item.finish || "Polished",
        thickness: item.thickness || "20mm",
        quantity_sqm: Math.max(1, Number(item.quantitySqm) || 10),
      }));

      const { error: itemsErr } = await admin
        .from("quote_request_items")
        .insert(itemRows);

      if (itemsErr) {
        return NextResponse.json(
          { error: itemsErr.message },
          { status: 500 }
        );
      }
    }

    return NextResponse.json({
      id: quoteRow.id,
      quoteCode: quoteRow.quote_code,
    });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : "Invalid request" },
      { status: 400 }
    );
  }
}
