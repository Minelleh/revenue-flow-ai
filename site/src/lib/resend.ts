import { Resend } from "resend";
import { WelcomeEmail } from "@/emails/welcome";
import { render } from "@react-email/render";

// Initialize only if the API key exists to avoid crashing on build/start if unconfigured
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

const FROM_NAME = process.env.RESEND_FROM_NAME ?? "Revenue Flow AI";
const FROM_EMAIL = process.env.RESEND_FROM_EMAIL ?? "hello@revenueflowai.com";

export async function sendWelcomeEmail(
  email: string,
  firstName: string | null,
) {
  if (!resend) {
    console.warn("RESEND_API_KEY is not set. Skipping actual email send.");
    return null;
  }

  const html = await render(
    WelcomeEmail({ firstName: firstName ?? "there" }),
  );

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "revenueflowai.com";

  const result = await resend.emails.send({
    from: `${FROM_NAME} <${FROM_EMAIL}>`,
    to: email,
    subject: "Your acquisition audit is confirmed",
    html,
    headers: {
      "List-Unsubscribe": `<https://${siteUrl}/unsubscribe?email=${encodeURIComponent(email)}>`,
    },
  });

  if (result.error) {
    throw new Error(`Resend send failed: ${result.error.message}`);
  }

  return result.data;
}
