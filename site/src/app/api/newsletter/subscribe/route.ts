import { createAdminClient } from "@/lib/supabase/admin";
import { sendWelcomeEmail } from "@/lib/resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, source } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required." }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const normalizedEmail = email.toLowerCase().trim();
    if (!emailRegex.test(normalizedEmail)) {
      return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
    }

    const supabase = createAdminClient();
    const sourceTag = typeof source === "string" ? source : "landing-page";

    // Upsert (insert or update if email exists)
    const { data: existing } = await supabase
      .from("newsletter_contacts")
      .select("id, subscribed, tags")
      .eq("email", normalizedEmail)
      .single();

    if (existing) {
      const currentTags: string[] = existing.tags || [];
      const nextTags = currentTags.includes(sourceTag)
        ? currentTags
        : [...currentTags, sourceTag];

      const updateData: Record<string, unknown> = {
        subscribed: true,
        tags: nextTags,
      };
      if (name) updateData.first_name = name;

      await supabase
        .from("newsletter_contacts")
        .update(updateData)
        .eq("id", existing.id);
    } else {
      const { error } = await supabase.from("newsletter_contacts").insert({
        email: normalizedEmail,
        first_name: name || null,
        subscribed: true,
        source: sourceTag,
        tags: [sourceTag],
      });

      if (error) {
        console.error("Supabase insert error:", error);
        return NextResponse.json(
          { error: "Something went wrong. Try again." },
          { status: 500 },
        );
      }
    }

    // Fire welcome email
    try {
      await sendWelcomeEmail(normalizedEmail, name || null);
    } catch (err) {
      console.error("Resend send failed:", err);
      // Operator can manually re-send from the admin if needed.
    }

    return NextResponse.json({ success: true, resubscribed: !!existing });
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }
}
