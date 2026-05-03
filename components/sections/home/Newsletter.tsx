"use client";

import React, { useState } from "react";
import { Mail, Check, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus("idle"), 5000);
  };

  return (
    <section className="relative bg-ink text-background py-24 lg:py-40 overflow-hidden">
      {/* Radial Glows */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/40 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-200px] right-[-150px] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-sage/30 to-transparent blur-[100px] pointer-events-none" />

      <div className="container relative z-10 mx-auto max-w-[780px] px-6 text-center">
        <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-sand mb-8">
          — The Dispatch
        </span>
        
        <h2 className="font-serif text-[48px] md:text-[72px] lg:text-[96px] leading-none tracking-tight font-medium mb-6">
          Subscribe to <br /> <em>the slow life</em>.
        </h2>
        
        <p className="text-[17px] md:text-[19px] leading-relaxed text-[#cfc8b8] mb-12 max-w-[50ch] mx-auto">
          Get weekly hotel notes, travel essays, and the occasional postcard delivered straight to your digital doorstep.
        </p>

        {/* Rotated Form Card */}
        <div className="relative max-w-[520px] mx-auto transform -rotate-1 lg:-rotate-2 hover:rotate-0 transition-transform duration-500">
          <div className="bg-background rounded-[32px] p-2 shadow-2xl shadow-black/40">
            {status === "success" ? (
              <div className="flex items-center justify-center gap-3 py-4 text-ink">
                <div className="w-10 h-10 rounded-full bg-sage flex items-center justify-center text-background">
                  <Check className="w-5 h-5" />
                </div>
                <span className="font-serif italic text-lg">You&apos;re on the list, see you soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-0">
                <input
                  type="email"
                  placeholder="Your preferred email..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={status === "loading"}
                  className="flex-1 bg-transparent border-none px-6 py-4 text-ink font-sans text-[15px] focus:ring-0 placeholder:text-muted/60"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="bg-ink text-background px-8 py-4 rounded-[24px] text-[13px] font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center gap-3 disabled:opacity-70"
                >
                  {status === "loading" ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    "Join Now →"
                  )}
                </button>
              </form>
            )}
          </div>
        </div>

        <p className="mt-8 text-[11px] uppercase tracking-[0.14em] text-[#8a8174] font-bold">
          No spam · Monthly dispatches · Unsubscribe anytime
        </p>

        {/* Social Proof */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                className={cn(
                  "w-10 h-10 rounded-full border-2 border-ink flex items-center justify-center text-background font-serif italic text-sm",
                  i === 1 && "bg-accent",
                  i === 2 && "bg-sage",
                  i === 3 && "bg-[#6b5a8a]",
                  i === 4 && "bg-[#a8784b]"
                )}
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <span className="text-[13px] text-[#cfc8b8] font-medium italic">Join 2,400+ fellow travelers</span>
        </div>
      </div>
    </section>
  );
}