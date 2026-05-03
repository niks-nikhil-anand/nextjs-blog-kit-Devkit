import React from "react";
import Link from "next/link";
import { Hash } from "lucide-react";

const tags = [
  { name: "Next.js", count: 12, color: "from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-300" },
  { name: "React", count: 8, color: "from-sky-500 to-cyan-500" },
  { name: "TypeScript", count: 15, color: "from-blue-600 to-blue-400" },
  { name: "CSS", count: 6, color: "from-pink-500 to-rose-400" },
  { name: "DevOps", count: 4, color: "from-amber-500 to-orange-400" },
  { name: "Productivity", count: 9, color: "from-emerald-500 to-teal-400" },
  { name: "Open Source", count: 7, color: "from-violet-500 to-purple-400" },
  { name: "Tutorials", count: 11, color: "from-red-500 to-rose-400" },
];

export function TagsSection() {
  return (
    <section className="relative overflow-hidden border-t border-zinc-100 bg-zinc-50/50 dark:border-zinc-800/60 dark:bg-zinc-900/20">
      <div className="container mx-auto max-w-7xl px-4 py-20 lg:py-28">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="inline-block h-px w-8 bg-emerald-500" />
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
              Explore
            </span>
            <span className="inline-block h-px w-8 bg-emerald-500" />
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 lg:text-4xl">
            Browse by Topic
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-base text-zinc-500 dark:text-zinc-400">
            Find exactly what you&apos;re looking for by exploring our categories.
          </p>
        </div>

        {/* Tags grid */}
        <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {tags.map((tag, index) => (
            <Link
              key={tag.name}
              href={`/tags/${tag.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="group relative flex flex-col items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700 dark:hover:shadow-zinc-900/50"
              style={{
                animationDelay: `${index * 60}ms`,
              }}
            >
              {/* Icon */}
              <div className="flex size-12 items-center justify-center rounded-xl bg-zinc-100 transition-colors group-hover:bg-emerald-50 dark:bg-zinc-800 dark:group-hover:bg-emerald-950/50">
                <Hash className="size-5 text-zinc-400 transition-colors group-hover:text-emerald-500 dark:text-zinc-500" />
              </div>

              {/* Tag name */}
              <span className="text-sm font-bold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
                {tag.name}
              </span>

              {/* Count */}
              <span className="text-xs text-zinc-400 dark:text-zinc-500">
                {tag.count} {tag.count === 1 ? "post" : "posts"}
              </span>

              {/* Hover gradient accent line */}
              <div
                className={`absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 rounded-full bg-gradient-to-r ${tag.color} transition-all duration-300 group-hover:w-12`}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}