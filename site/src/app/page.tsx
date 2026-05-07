import Link from "next/link";
import { Reveal } from "@/components/reveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col relative w-full">
      {/* Hero Section */}
      <section className="px-6 pt-24 pb-16 w-full flex flex-col items-center">
        <div className="mx-auto max-w-5xl text-center">
          <h1
            className="text-[48px] leading-[1.1] md:text-[88px] font-display mb-6"
            style={{
              animation: "hero-rise 900ms cubic-bezier(0.22, 1, 0.36, 1) 80ms both",
            }}
          >
            Stop waiting for referrals.<br />
            <span className="italic text-accent">Install your acquisition engine.</span>
          </h1>

          <p
            className="text-zinc-600 text-lg md:text-xl max-w-2xl mx-auto mb-10"
            style={{
              animation: "hero-rise 900ms cubic-bezier(0.22, 1, 0.36, 1) 280ms both",
            }}
          >
            AI-powered outreach. Qualified appointments on your calendar. Every week. No cold calling. No guesswork.
          </p>

          <div
            style={{
              animation: "hero-rise 900ms cubic-bezier(0.22, 1, 0.36, 1) 460ms both",
            }}
          >
            <Link
              href="/squeeze"
              className="inline-flex items-center justify-center bg-accent text-white px-8 py-4 text-base font-medium transition-colors hover:bg-accent/90"
            >
              Book Your Free Acquisition Audit
            </Link>
          </div>
        </div>
      </section>

      {/* VSL Placeholder */}
      <section className="px-6 pb-24 md:pb-32 w-full">
        <Reveal className="mx-auto max-w-4xl">
          <div className="aspect-video bg-zinc-950 border border-zinc-900 flex flex-col items-center justify-center p-8 text-center shadow-xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-accent animate-pulse" />
              <p className="text-zinc-400 uppercase tracking-widest text-sm font-medium">Coming Soon</p>
            </div>
            <h2 className="text-ivory text-3xl md:text-5xl italic font-display mb-8">
              The full walkthrough drops next week.
            </h2>
            <p className="text-zinc-500 text-lg">
              We email you the moment it lands.
            </p>
          </div>
        </Reveal>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-24 md:py-32 w-full border-t border-zinc-200">
        <Reveal className="mx-auto max-w-3xl">
          <p className="text-accent uppercase tracking-widest text-sm font-bold mb-6">
            The Real Problem
          </p>
          <h2 className="text-[40px] leading-[1.1] md:text-[64px] font-display mb-12">
            You do not have a lead problem.<br />
            <span className="italic text-accent">You have a system problem.</span>
          </h2>
          
          <div className="space-y-6 text-lg text-zinc-700 leading-relaxed">
            <p>
              You hired the agency. Ran the ads. Bought the CRM. Paid for the leads.
            </p>
            <p>
              Some months were good. Most were not. The pipeline looked full on paper. Your calendar told a different story. Leads went cold because nobody followed up fast enough. The agency blamed your sales team. Your sales team blamed the leads.
            </p>
            <p>
              <strong className="text-zinc-900 font-medium">This is not a marketing failure. This is a systems failure.</strong> Every piece works alone. Nothing works together. Outreach lives in one tool. Follow-up lives in another. Booking lives in a third. Reporting lives nowhere. So the leads rot. And the revenue stays stuck.
            </p>
            <p>
              Most service businesses run five or six disconnected tools and call it a pipeline. It is not a pipeline. It is a patchwork. Patchwork does not scale. Patchwork breaks at two in the morning when a hot lead replies and nobody is there to book it.
            </p>
            <p>
              The fix is not more leads. The fix is one system that handles outreach, qualification, booking, and follow-up on its own. One system. No gaps. No handoff failures. No leads dying in a spreadsheet.
            </p>
            <p className="text-zinc-900 font-medium text-xl mt-8 border-l-2 border-accent pl-6">
              That is what Revenue Flow AI installs. Not leads. Not traffic. Not &quot;brand awareness.&quot; A machine that puts qualified people on your calendar every week.
            </p>
          </div>
        </Reveal>
      </section>

      {/* The Offer */}
      <section className="px-6 py-24 md:py-32 w-full bg-ivory text-zinc-900 border-t border-zinc-200">
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <p className="text-accent uppercase tracking-widest text-sm font-bold mb-6 text-center">
              Your Acquisition Engine &middot; The Commitment
            </p>
            <h2 className="text-[40px] leading-[1.1] md:text-[64px] font-display mb-6 text-center">
              $500 to install.<br />
              <span className="italic text-accent">$1,000/month to run.</span>
            </h2>
            <p className="text-zinc-600 text-lg md:text-xl text-center max-w-2xl mx-auto mb-16">
              One system. Predictable pipeline. Qualified calls on your calendar starting week one. Total to start: $1,500.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            <Reveal delay={120}>
              <div className="border border-accent p-8 md:p-10 h-full flex flex-col bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-accent text-sm uppercase tracking-wider font-semibold">Within 7 days</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display italic mb-4">Full system installation</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Your current pipeline audited. Outreach sequences built. Lead qualification configured. Appointment booking wired. Follow-up automated. You are live in one week.
                </p>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="border border-zinc-200 p-8 md:p-10 h-full flex flex-col bg-white">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-zinc-400" />
                  <span className="text-zinc-500 text-sm uppercase tracking-wider font-semibold">Every month</span>
                </div>
                <h3 className="text-2xl md:text-3xl font-display italic mb-4">Ongoing optimization + support</h3>
                <p className="text-zinc-600 leading-relaxed">
                  Performance monitored. Targeting adjusted. Sequences updated. Your calendar keeps filling. Monthly reporting. Direct access.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={360}>
            <div className="border-t border-zinc-200 pt-16 grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div>
                <h3 className="text-xl md:text-2xl font-display mb-6">Also included:</h3>
                <ul className="space-y-4">
                  {[
                    "Custom AI outreach sequences built for your niche",
                    "Lead scoring and qualification filters",
                    "Automated follow-up sequences (email, SMS)",
                    "Calendar integration (Calendly, Cal.com, or native)",
                    "Monthly performance report with real numbers",
                    "Dedicated Slack channel for support"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4 text-zinc-700">
                      <span className="text-accent mt-1">&rarr;</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-zinc-100 p-8 border-l-4 border-accent">
                <p className="text-accent uppercase tracking-widest text-xs font-bold mb-4">
                  The 90-Day Guarantee
                </p>
                <h3 className="text-2xl font-display italic mb-4">Qualified appointments in 90 days.</h3>
                <p className="text-zinc-600 text-sm leading-relaxed mb-0">
                  Your outreach system live. Your follow-up automated. Qualified calls landing on your calendar. If any of those three is not happening in 90 days, I keep working until all three are. No fine print.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={480} className="flex justify-center">
            <Link
              href="/squeeze"
              className="inline-flex items-center justify-center bg-accent text-white px-10 py-5 text-lg font-medium transition-colors hover:bg-accent/90"
            >
              Book Your Free Acquisition Audit
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 md:py-32 w-full text-center">
        <Reveal className="mx-auto max-w-3xl">
          <h2 className="text-[40px] leading-[1.1] md:text-[72px] font-display mb-6">
            Stop hoping the phone rings.<br />
            <span className="italic text-accent">Book the audit.</span>
          </h2>
          <p className="text-zinc-500 uppercase tracking-[0.2em] text-sm font-bold mb-10">
            Your pipeline starts here.
          </p>
          <Link
            href="/squeeze"
            className="inline-flex items-center justify-center bg-accent text-white px-10 py-5 text-lg font-medium transition-colors hover:bg-accent/90"
          >
            Book Your Free Acquisition Audit
          </Link>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-zinc-200 w-full">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-display font-semibold text-lg text-zinc-900">Revenue Flow AI</span>
          </div>
          <div className="text-zinc-500 text-sm flex gap-4 md:gap-6">
            <a href="mailto:hello@revenueflowai.com" className="hover:text-zinc-900 transition-colors">hello@revenueflowai.com</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
            <span>&middot;</span>
            <a href="#" className="hover:text-zinc-900 transition-colors">Terms</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
