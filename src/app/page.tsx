"use client";

import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { Prompt } from "@/components/ui/prompt";
import { Templates } from "@/components/ui/templates";
import { Waitlist } from "@/components/ui/waitlist";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] px-3 md:px-8 max-w-[1100px] mx-auto box-border">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center gap-8 max-w-[1100px] w-full mx-auto mb-20">
        <div className="flex flex-col items-center justify-center gap-8 max-w-[800px] mx-auto">
          <Image src="/logo.svg" alt="Decipad" width={60} height={60} />
          <h1 className="text-5xl font-medium text-center">Skip the spreadsheets.<br/> Ask Decipad.</h1>
          <p className="text-muted-foreground text-lg text-center max-w-[450px] mx-auto">Turn plain language into financial models and reports — no SQL, no expertise needed.</p>
        </div>
        <div className="relative w-full flex flex-col">
          <div className="w-full max-w-[800px] mx-auto">
            <div className="flex items-center justify-center border-x border-t border-slate-200 rounded-t-xl rounded-x-xl px-8 py-4 w-fit mx-auto bg-white">
              <Waitlist>
                <Button 
                  className="w-[200px] transition-all duration-300 hover:scale-105 hover:shadow-md relative overflow-hidden"
                  style={{
                    animation: 'shadow-pulse 2s infinite'
                  }}
                >
                  <span className="relative z-10">Join the waitlist</span>
                  <span className="absolute inset-0 bg-white opacity-20 transform scale-0 rounded-full origin-center animate-ripple"></span>
                  <style jsx global>{`
                    @keyframes shadow-pulse {
                      0% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.1); }
                      70% { box-shadow: 0 0 0 10px rgba(0, 0, 0, 0); }
                      100% { box-shadow: 0 0 0 0 rgba(0, 0, 0, 0); }
                    }
                    @keyframes ripple {
                      0% { transform: scale(0); opacity: 1; }
                      80% { transform: scale(2); opacity: 0; }
                      100% { transform: scale(2); opacity: 0; }
                    }
                    .animate-ripple {
                      animation: ripple 1.5s cubic-bezier(0, 0.2, 0.8, 1) infinite;
                    }
                  `}</style>
                </Button>
              </Waitlist>
            </div>
            <Prompt />
            <Templates />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
