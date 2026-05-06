import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

const ACCENT = "#C08457";

export function WelcomeEmail({ firstName }: { firstName: string }) {
  return (
    <Html>
      <Head />
      <Preview>Your acquisition audit details.</Preview>
      <Body style={body}>
        <Container style={container}>
          <Section>
            <Heading style={h1}>Hi {firstName},</Heading>
            <Text style={text}>
              Your acquisition audit is confirmed. I will send you a calendar invite shortly.
            </Text>

            <Text style={text}>
              Before we talk, I recommend watching the 8-minute walkthrough of the Revenue Flow AI system. It shows you exactly what we will be diagnosing in your current pipeline.
            </Text>

            <Section style={cta}>
              <Link
                href={`https://${process.env.NEXT_PUBLIC_SITE_URL || "revenueflowai.com"}/?utm_source=welcome-email`}
                style={ctaButton}
              >
                Watch the walkthrough →
              </Link>
            </Section>

            <Text style={text}>
              You will hear from me again soon with the next step.
            </Text>

            <Text style={text}>
              Best,
              <br />
              Revenue Flow AI
            </Text>
          </Section>

          <Section style={footer}>
            <Text style={footerText}>
              Revenue Flow AI.
            </Text>
            <Text style={footerText}>
              <Link
                href={`https://${process.env.NEXT_PUBLIC_SITE_URL || "revenueflowai.com"}/unsubscribe`}
                style={footerLink}
              >
                Unsubscribe
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#FAF7F2",
  color: "#18181b",
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  margin: 0,
  padding: 0,
};

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "560px",
};

const h1 = {
  color: "#18181b",
  fontSize: "24px",
  fontWeight: 500,
  lineHeight: 1.3,
  margin: "0 0 24px",
};

const text = {
  color: "#3f3f46",
  fontSize: "16px",
  lineHeight: 1.55,
  margin: "0 0 20px",
};

const cta = {
  margin: "28px 0",
};

const ctaButton = {
  backgroundColor: ACCENT,
  borderRadius: "0px",
  color: "#fff",
  display: "inline-block",
  fontSize: "15px",
  fontWeight: 500,
  padding: "14px 28px",
  textDecoration: "none",
};

const footer = {
  borderTop: "1px solid #e4e4e7",
  margin: "40px 0 0",
  paddingTop: "20px",
};

const footerText = {
  color: "#71717a",
  fontSize: "12px",
  lineHeight: 1.5,
  margin: "0 0 4px",
};

const footerLink = {
  color: "#71717a",
  textDecoration: "underline",
};
