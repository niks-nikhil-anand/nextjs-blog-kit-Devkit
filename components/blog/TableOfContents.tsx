"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll("h2, h3"))
      .map((elem) => ({
        id: elem.id,
        text: elem.textContent || "",
        level: Number(elem.tagName.substring(1)),
      }))
      .filter((heading) => heading.id);
    
    setHeadings(elements);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0% 0% -80% 0%" }
    );

    elements.forEach((heading) => {
      const elem = document.getElementById(heading.id);
      if (elem) observer.observe(elem);
    });

    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="space-y-4">
      <p className="text-sm font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
        On this page
      </p>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li
            key={heading.id}
            className={cn(
              "text-sm transition-colors hover:text-foreground",
              heading.level === 3 && "pl-4",
              activeId === heading.id
                ? "font-medium text-foreground"
                : "text-zinc-500 dark:text-zinc-400"
            )}
          >
            <a href={`#${heading.id}`} onClick={(e) => {
              e.preventDefault();
              document.getElementById(heading.id)?.scrollIntoView({ behavior: "smooth" });
            }}>
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
