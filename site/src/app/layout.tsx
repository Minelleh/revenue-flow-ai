import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Revenue Flow AI | Your Acquisition Engine",
  description: "Install an AI client acquisition engine into your business. Predictable booked appointments and scalable revenue.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-ivory text-zinc-900 font-body antialiased selection:bg-accent/20 selection:text-zinc-900 min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
