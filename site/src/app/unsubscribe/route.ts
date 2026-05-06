import { createAdminClient } from "@/lib/supabase/admin";
import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");
  const token = searchParams.get("token");

  if (!email || !token) {
    return new Response("Invalid link", { status: 400 });
  }

  const secret = process.env.UNSUBSCRIBE_SECRET;
  if (!secret) {
    console.error("UNSUBSCRIBE_SECRET is not set");
    return new Response("Server configuration error", { status: 500 });
  }

  const expected = crypto
    .createHmac("sha256", secret)
    .update(email)
    .digest("hex");

  if (token !== expected) {
    return new Response("Invalid link", { status: 400 });
  }

  const supabase = createAdminClient();
  await supabase
    .from("newsletter_contacts")
    .update({ subscribed: false })
    .eq("email", email.toLowerCase().trim());

  return new Response("Unsubscribed. You will not get more emails from us.", {
    status: 200,
  });
}
