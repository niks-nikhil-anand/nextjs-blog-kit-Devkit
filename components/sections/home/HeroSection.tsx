import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { PortraitIllustration } from "@/components/blog/PortraitIllustration";

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
              
              <div className="flex flex-col">
                <span className="text-[15px] font-bold text-ink leading-tight">Elena Marsh</span>
                <span className="text-[13px] text-muted tracking-tight">Editor & permanent tourist</span>
              </div>
            </div>
          </div>

          <PortraitIllustration />
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
