"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const leftLinks = [
  { name: "Home", href: "/" },
  { name: "Travel", href: "/blog?category=travel" },
  { name: "Destination", href: "/blog?category=destination" },
  { name: "Hotels", href: "/blog?category=hotels" },
  { name: "Lifestyle", href: "/blog?category=lifestyle" },
];

const rightLinks = [
  { name: "Galleries", href: "/galleries" },
  { name: "Shop", href: "/shop" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300 border-b",
        isScrolled
          ? "border-rule bg-background/90 backdrop-blur-md py-3"
          : "border-transparent bg-background py-5"
      )}
    >
      <div className="container mx-auto max-w-[1320px] px-6 lg:px-9">
        <div className="grid grid-cols-3 items-center gap-10">
          {/* Left Links */}
          <div className="hidden lg:flex items-center gap-7">
            {leftLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[13px] font-medium text-ink-2 hover:text-accent transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>

          {/* Centered Brand */}
          <Link href="/" className="flex flex-col items-center group">
            <span className="font-serif text-[34px] italic leading-tight tracking-tight group-hover:text-accent transition-colors">
              Stories
            </span>
            <span className="font-sans text-[9px] uppercase tracking-[0.4em] text-muted -mt-1">
              By Elena Marsh
            </span>
          </Link>

          {/* Right Links & CTA */}
          <div className="flex items-center justify-end gap-7">
            <div className="hidden lg:flex items-center gap-7">
              {rightLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[13px] font-medium text-ink-2 hover:text-accent transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
            
            <button className="w-9 h-9 border border-rule-strong rounded-full flex items-center justify-center text-ink-2 hover:bg-ink hover:text-background hover:border-ink transition-all duration-200">
              <Search className="w-3.5 h-3.5" />
            </button>

            <Link
              href="/subscribe"
              className="hidden sm:inline-flex items-center gap-2 bg-ink text-background px-4 py-2.5 rounded-full text-[12px] font-semibold tracking-wider hover:bg-accent transition-colors"
            >
              Subscribe →
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
