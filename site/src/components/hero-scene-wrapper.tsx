"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { HeroPoster } from "@/components/hero-scene-poster";

// Hero is client-only. SSR off prevents hydration mismatch.
const HeroScene = dynamic(() => import("@/components/hero-scene").then(m => m.HeroScene), {
  ssr: false,
  loading: () => <HeroPoster />,
});

export function HeroSceneOrPoster() {
  const [reduced, setReduced] = useState(false);
  
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  if (reduced) return <HeroPoster />;
  return <HeroScene />;
}
