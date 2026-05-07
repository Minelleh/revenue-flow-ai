"use client";

import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/reveal";

export default function Squeeze() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");

    try {
      const res = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "squeeze" }),
      });

      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="flex min-h-screen flex-col relative w-full bg-ivory">
      {/* Hero Section */}
      <section className="px-6 pt-24 pb-16 w-full flex flex-col items-center flex-grow">
        <div className="mx-auto max-w-2xl text-center w-full">
          <h1
            className="text-[48px] leading-[1.1] md:text-[72px] font-display mb-6"
            style={{
              animation: "hero-rise 900ms cubic-bezier(0.22, 1, 0.36, 1) 80ms both",
            }}
          >
            Stop chasing leads.<br />
            <span className="italic text-accent">Start filling your calendar.</span>
          </h1>

          <p
            className="text-zinc-600 text-lg md:text-xl mx-auto mb-12"
            style={{
              animation: "hero-rise 900ms cubic-bezier(0.22, 1, 0.36, 1) 280ms both",
            }}
          >
            Free. A 30-minute acquisition audit. Your pipeline diagnosed. Your next 90 days mapped.
          </p>

          <div
            className="w-full max-w-md mx-auto mb-16"
            style={{
              animation: "hero-rise 900ms cubic-bezier(0.22, 1, 0.36, 1) 460ms both",
            }}
          >
            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your business email"
                className="w-full px-4 py-4 bg-white border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-accent transition-colors text-base"
                disabled={status === "loading" || status === "success"}
              />
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full bg-accent text-white py-4 text-base font-medium transition-colors hover:bg-accent/90 disabled:opacity-70 flex justify-center items-center"
              >
                {status === "loading" ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : status === "success" ? (
                  "Audit Booked"
                ) : (
                  "Book Your Free Acquisition Audit"
                )}
              </button>
              <p className="text-[11px] text-zinc-500 text-center mt-2">
                Click to book your audit and receive follow-up emails. Unsubscribe anytime.
              </p>
            </form>
          </div>
          
        </div>
      </section>

      {/* Second CTA */}
      <section className="px-6 py-24 w-full text-center bg-white border-t border-zinc-100">
        <Reveal className="mx-auto max-w-xl">
          <h2 className="text-3xl md:text-5xl font-display mb-10 leading-tight">
            Your pipeline will not fix itself.<br />
            <span className="italic text-accent">Let me show you what will.</span>
          </h2>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your business email"
              className="w-full px-4 py-4 bg-zinc-50 border border-zinc-200 text-zinc-900 placeholder:text-zinc-400 outline-none focus:border-accent transition-colors text-base"
              disabled={status === "loading" || status === "success"}
            />
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="w-full bg-accent text-white py-4 text-base font-medium transition-colors hover:bg-accent/90 disabled:opacity-70 flex justify-center items-center"
            >
              {status === "loading" ? (
                 <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : status === "success" ? (
                "Audit Booked"
              ) : (
                "Book Your Free Acquisition Audit"
              )}
            </button>
            <p className="text-[11px] text-zinc-500 text-center mt-2">
              Click to book your audit and receive follow-up emails. Unsubscribe anytime.
            </p>
          </form>
        </Reveal>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-zinc-200 w-full bg-white mt-auto">
        <div className="mx-auto max-w-5xl flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <span className="font-display font-semibold text-zinc-900">Revenue Flow AI</span>
          </div>
          <div className="text-zinc-500 text-sm flex gap-4 md:gap-6">
            <a href="mailto:hello@revenueflowai.com" className="hover:text-zinc-900 transition-colors">hello@revenueflowai.com</a>
            <span>&middot;</span>
            <Link href="/" className="hover:text-zinc-900 transition-colors">Privacy</Link>
            <span>&middot;</span>
            <Link href="/" className="hover:text-zinc-900 transition-colors">Terms</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
