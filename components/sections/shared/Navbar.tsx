"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Search, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

const allLinks = [...leftLinks, ...rightLinks];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300 border-b",
          isScrolled
            ? "border-rule bg-background/90 backdrop-blur-md py-3"
            : "border-transparent bg-background py-5"
        )}
      >
        <div className="container mx-auto max-w-[1320px] px-6 lg:px-9">
          <div className="grid grid-cols-3 items-center">
            {/* Left Section: Mobile Menu Toggle & Desktop Links */}
            <div className="flex items-center">
              {/* Mobile Toggle */}
              <button
                onClick={() => setIsMenuOpen(true)}
                className="lg:hidden p-2 -ml-2 text-ink-2 hover:text-accent transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>

              {/* Desktop Left Links */}
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
            </div>

            {/* Centered Brand */}
            <Link href="/" className="flex flex-col items-center group">
              <span className="font-serif text-[28px] md:text-[34px] italic leading-tight tracking-tight group-hover:text-accent transition-colors">
                Stories
              </span>
              <span className="font-sans text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-muted -mt-1">
                By Elena Marsh
              </span>
            </Link>

            {/* Right Links & CTA */}
            <div className="flex items-center justify-end gap-3 md:gap-7">
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

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 z-[60] bg-ink/20 backdrop-blur-sm"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 z-[70] w-[300px] bg-background border-r border-rule-strong shadow-2xl flex flex-col"
            >
              <div className="p-6 border-b border-rule flex items-center justify-between">
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex flex-col items-start group">
                  <span className="font-serif text-[24px] italic leading-tight tracking-tight">
                    Stories
                  </span>
                  <span className="font-sans text-[8px] uppercase tracking-[0.3em] text-muted">
                    By Elena Marsh
                  </span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 -mr-2 text-ink-2 hover:text-accent transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto py-8 px-6">
                <div className="flex flex-col gap-6">
                  {allLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-[18px] font-medium text-ink-2 hover:text-accent transition-colors flex items-center justify-between group"
                    >
                      {link.name}
                      <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="p-6 border-t border-rule mt-auto">
                <Link
                  href="/subscribe"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center justify-center gap-2 bg-ink text-background w-full py-4 rounded-full text-[14px] font-semibold tracking-wider hover:bg-accent transition-colors"
                >
                  Subscribe →
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
