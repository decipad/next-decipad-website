import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundGrid from "@/components/ui/backgroundGrid";
import { ABC_Diatype } from "@/components/ui/font/index";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Decipad - Generate financial models and reports",
  description: "Turn plain language into financial models and reports — no SQL, no expertise needed.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ABC_Diatype.className} ${geistMono.variable} antialiased bg-slate-50 relative`}
      >
        <BackgroundGrid />
        {children}
      </body>
    </html>
  );
}
