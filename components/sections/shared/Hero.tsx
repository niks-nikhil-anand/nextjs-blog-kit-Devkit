import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center py-20 md:py-32 lg:py-40 overflow-hidden border-b border-border/40">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-sm font-medium text-primary animate-in fade-in slide-in-from-bottom-2 duration-500">
            <Sparkles className="h-4 w-4" />
            <span>New: The DevKit v2.0 is here</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight text-foreground animate-in fade-in slide-in-from-bottom-4 duration-700">
            The Hub for <span className="text-transparent bg-clip-text bg-gradient-to-br from-primary via-blue-500 to-indigo-600">Modern Devs</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-6 duration-1000">
            Ship your next project in hours, not weeks. Explore our premium starters, expert-led guides, and the latest in web development.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <Button size="lg" className="rounded-full h-14 px-10 text-lg font-semibold shadow-xl shadow-primary/25 group transition-all hover:scale-105 active:scale-95">
              Explore Starters <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full h-14 px-10 text-lg font-semibold border-2 hover:bg-muted/50 transition-all active:scale-95">
              Read the Blog
            </Button>
          </div>
          
          {/* Social Proof / Tech Stack */}
          <div className="pt-16 flex flex-col items-center gap-8 animate-in fade-in duration-1000 delay-500">
            <p className="text-sm font-medium uppercase tracking-widest text-muted-foreground/60">
              Trusted by 10,000+ developers worldwide
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="text-2xl font-bold tracking-tighter">VERCEL</span>
              <span className="text-2xl font-bold tracking-tighter">STRIPE</span>
              <span className="text-2xl font-bold tracking-tighter">SUPABASE</span>
              <span className="text-2xl font-bold tracking-tighter">NEXT.JS</span>
              <span className="text-2xl font-bold tracking-tighter">TAILWIND</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
