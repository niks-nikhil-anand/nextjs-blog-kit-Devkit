import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

const tags = [
  { name: "Next.js", count: 12 },
  { name: "React", count: 8 },
  { name: "TypeScript", count: 15 },
  { name: "CSS", count: 6 },
  { name: "DevOps", count: 4 },
  { name: "Productivity", count: 9 },
  { name: "Open Source", count: 7 },
  { name: "Tutorials", count: 11 },
];

export function TagsSection() {
  return (
    <section className="container mx-auto px-4 py-24 border-t border-zinc-100 dark:border-zinc-800">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
          Browse by Topic
        </h2>
        <p className="mt-2 text-zinc-500 dark:text-zinc-400">
          Find exactly what you're looking for by exploring our categories.
        </p>
      </div>
      
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {tags.map((tag) => (
          <Link key={tag.name} href={`/tags/${tag.name.toLowerCase().replace(" ", "-")}`}>
            <Badge 
              variant="outline" 
              className="px-6 py-2 text-sm font-bold rounded-full border-zinc-200 hover:border-primary hover:bg-primary/5 transition-all dark:border-zinc-800"
            >
              {tag.name} <span className="ml-1.5 text-zinc-400 font-normal">({tag.count})</span>
            </Badge>
          </Link>
        ))}
      </div>
    </section>
  );
}
