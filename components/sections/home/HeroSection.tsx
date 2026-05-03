import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const stats = [
  { value: "142", label: "Stories written" },
  { value: "38", label: "Countries visited" },
  { value: "4", label: "Years on the road" },
  { value: "1", label: "Battered notebook" },
];

export function HeroSection() {
  return (
    <header className="relative w-full bg-background pt-16 pb-24 lg:pt-20 lg:pb-32 overflow-hidden">
      <div className="container mx-auto max-w-[1320px] px-6 lg:px-9">
        <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-16 lg:gap-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col">
            <p className="font-serif italic text-2xl lg:text-[32px] text-accent mb-4 lg:mb-6">
              Hello there, I&apos;m Elena —
            </p>
            
            <h1 className="font-serif text-[56px] md:text-[80px] lg:text-[80px] leading-[0.98] tracking-tight font-medium mb-8 lg:mb-10 text-ink">
              I write about the <br className="hidden lg:block" />
              <span className="relative inline-block">
                <span className="relative z-10 italic">quiet places</span>
                <span className="absolute bottom-1 md:bottom-2 lg:bottom-4 left-0 w-full h-[0.3em] bg-sand/40 -z-0" />
              </span>{" "}
              <span className="font-serif italic text-accent">&amp;</span> the long way home.
            </h1>

            <p className="text-lg lg:text-[19px] leading-relaxed text-ink-2 max-w-[54ch] mb-10 lg:mb-12">
              Stories is a slow travel journal kept by a writer with bad maps and good shoes. 
              Hotel notes, postcards from small towns, recipes I tried to bring back, 
              and the occasional thing worth getting lost for.
            </p>

            <div className="flex flex-wrap items-center gap-4 lg:gap-6 mb-12 lg:mb-16">
              <Link
                href="/blog"
                className="bg-ink text-background px-8 py-4 rounded-full text-sm font-bold tracking-wider hover:bg-accent transition-colors flex items-center gap-3"
              >
                Read the latest <span>→</span>
              </Link>
              <Link
                href="/about"
                className="border border-ink text-ink px-8 py-4 rounded-full text-sm font-bold tracking-wider hover:bg-ink hover:text-background transition-all"
              >
                About Elena
              </Link>
            </div>

            <div className="flex items-center gap-5">
              <svg 
                className="h-14 lg:h-16 w-auto" 
                viewBox="0 0 220 60" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1.6" 
                strokeLinecap="round"
              >
                <path 
                  className="text-ink"
                  d="M8 38 C 18 14, 30 12, 32 30 C 33 42, 22 46, 30 36 C 40 24, 56 22, 50 40 C 48 48, 60 44, 64 32 C 68 22, 78 30, 78 40 C 78 50, 88 38, 90 28 C 92 20, 102 22, 100 38 C 98 50, 110 44, 116 30 C 122 16, 130 22, 132 36 M 142 22 C 150 18, 158 26, 160 36 C 162 46, 170 38, 174 28 M 184 18 L 184 50 M 178 32 L 192 32" 
                />
              </svg>
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-ink leading-tight">Elena Marsh</span>
                <span className="text-[13px] text-muted tracking-tight">Editor & permanent tourist</span>
              </div>
            </div>
          </div>

          {/* Portrait Illustration Area */}
          <div className="relative w-full aspect-[4/5] max-w-[440px] mx-auto lg:mx-0">
             {/* Badge Stamp Overlay */}
             <div className="absolute top-[14px] left-[14px] z-20 bg-background border border-rule-strong px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-bold text-ink-2 shadow-sm">
                Portrait · Lisbon, 2025
             </div>

             <div className="absolute inset-0 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] overflow-hidden bg-gradient-to-br from-sand via-accent to-accent-deep shadow-2xl">
                {/* CSS Face Glow */}
                <div className="absolute top-[34%] left-1/2 -translate-x-1/2 w-[90px] h-[90px] rounded-full bg-gradient-to-b from-[#f5e3c4] via-[#e3c498] to-transparent z-10 shadow-lg opacity-90" />
                
                {/* CSS Hair Shape */}
                <div className="absolute top-[8%] left-1/2 -translate-x-1/2 w-[170px] h-[160px] bg-[#3b2818] rounded-[50%_50%_30%_30%_/_60%_60%_30%_30%]" />
                
                {/* CSS Shoulders */}
                <div className="absolute bottom-0 inset-x-0 h-[38%] bg-gradient-to-b from-transparent via-[#5a3a25] to-[#3b2818] z-10" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[65%] h-full bg-[#a86d3f] rounded-[50%_50%_0_0_/_80%_80%_0_0] z-[5]" />
             </div>

             {/* Floating Badges */}
             <div className="absolute -top-[5%] -right-[5%] bg-background border border-dashed border-rule-strong p-3 lg:p-4 rounded-full flex items-center gap-2.5 text-[11px] font-bold text-ink-2 shadow-xl whitespace-nowrap">
                <span className="font-serif italic text-accent text-lg">e</span> 142 stories
             </div>
             <div className="absolute bottom-[18%] -left-[8%] bg-background border border-dashed border-rule-strong p-3 lg:p-4 rounded-full flex items-center gap-2.5 text-[11px] font-bold text-ink-2 shadow-xl whitespace-nowrap">
                <span className="font-serif italic text-accent text-lg">e</span> 38 countries
             </div>
             <div className="absolute -bottom-[2%] right-[6%] bg-ink border border-ink p-3 lg:p-4 rounded-full flex items-center gap-2.5 text-[11px] font-bold text-background shadow-xl whitespace-nowrap">
                <span className="font-serif text-sand text-lg">★</span> Editor&apos;s pick
             </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="grid grid-cols-2 lg:grid-cols-4 mt-20 lg:mt-32 border-y border-rule-strong overflow-hidden divide-x divide-rule">
          {stats.map((stat, idx) => (
            <div key={idx} className="p-8 lg:p-10 flex flex-col gap-2">
              <span className="font-serif text-[40px] leading-none text-ink">{stat.value}</span>
              <span className="text-[11px] uppercase tracking-[0.2em] font-bold text-muted">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
