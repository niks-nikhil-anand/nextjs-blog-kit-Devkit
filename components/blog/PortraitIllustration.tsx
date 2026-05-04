import React from "react";
import { cn } from "@/lib/utils";

interface PortraitIllustrationProps {
  className?: string;
}

export function PortraitIllustration({ className }: PortraitIllustrationProps) {
  return (
    <div className={cn("relative w-full aspect-[4/5] max-w-[440px] mx-auto lg:mx-0", className)}>
      {/* Badge Stamp Overlay */}
      <div className="absolute top-[14px] left-[14px] z-20 bg-background border border-rule-strong px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.18em] font-bold text-ink shadow-sm">
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
      <div className="absolute -top-[5%] -right-[5%] bg-background border border-dashed border-rule-strong p-3 lg:p-4 rounded-full flex items-center gap-2.5 text-[11px] font-bold text-ink shadow-xl whitespace-nowrap z-30 transition-transform hover:scale-105">
        <span className="font-serif italic text-accent text-lg leading-none">e</span> 142 stories
      </div>
      <div className="absolute bottom-[18%] -left-[8%] bg-background border border-dashed border-rule-strong p-3 lg:p-4 rounded-full flex items-center gap-2.5 text-[11px] font-bold text-ink shadow-xl whitespace-nowrap z-30 transition-transform hover:scale-105">
        <span className="font-serif italic text-accent text-lg leading-none">e</span> 38 countries
      </div>
      <div className="absolute -bottom-[2%] right-[6%] bg-ink border border-ink p-3 lg:p-4 rounded-full flex items-center gap-2.5 text-[11px] font-bold text-background shadow-xl whitespace-nowrap z-30 transition-transform hover:scale-105">
        <span className="font-serif text-sand text-lg leading-none">★</span> Editor&apos;s pick
      </div>
    </div>
  );
}
