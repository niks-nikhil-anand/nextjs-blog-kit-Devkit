"use client";

import React from "react";
import { motion } from "framer-motion";

const tickerItems = [
  "Currently in Lisbon · 21°C",
  "Issue №24 — Spring 2026",
  "Dispatch from the road",
  "New hotel notes coming soon",
  "Lisbon, Portugal",
  "Stories by Elena Marsh",
];

export function Ticker() {
  return (
    <div className="w-full bg-background border-b border-rule overflow-hidden py-2.5">
      <div className="container mx-auto max-w-[1320px] px-6">
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2 flex-shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-ink-2">Live Status</span>
          </div>
          
          <div className="relative flex-1 overflow-hidden">
            <motion.div
              className="flex whitespace-nowrap gap-12 items-center"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...tickerItems, ...tickerItems, ...tickerItems].map((item, idx) => (
                <span
                  key={idx}
                  className="text-[12px] font-medium text-muted flex items-center gap-12"
                >
                  {item}
                  <span className="w-1 h-1 rounded-full bg-rule-strong" />
                </span>
              ))}
            </motion.div>
          </div>

          <div className="hidden md:flex items-center gap-5 flex-shrink-0 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted">
            <a href="#" className="hover:text-accent transition-colors">EN</a>
            <a href="#" className="hover:text-accent transition-colors">Press</a>
            <a href="#" className="hover:text-accent transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
}
