import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post, getAuthorBySlug } from "@/lib/mdx";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface FeaturedPostProps {
  posts: Post[];
}

export function FeaturedPost({ posts }: FeaturedPostProps) {
  if (!posts.length) return null;

  const [hero, ...rest] = posts;
  // Ensure we have up to 5 side posts
  const sidePosts = rest.slice(0, 5);
  const heroAuthor = getAuthorBySlug(hero.author);

  return (
    <section className="container mx-auto max-w-[1320px] px-6 lg:px-9 py-20 lg:py-32 border-t border-rule">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-12 lg:mb-16">
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4">
            — Editor&apos;s selection
          </span>
          <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] leading-none tracking-tight font-medium text-ink">
            Stories worth <span className="italic text-accent underline decoration-sand/60 decoration-[12px] underline-offset-[-2px]">lingering on</span>.
          </h2>
        </div>
        <p className="text-sm lg:text-[14px] text-muted max-w-[42ch] lg:text-right leading-relaxed">
          A handpicked rotation of travel essays, hotel diaries and dispatches I keep coming back to.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16">
        {/* Main Featured Article */}
        <Link href={`/blog/${hero.slug}`} className="group flex flex-col">
          <div className="relative aspect-[5/4] rounded-[24px] overflow-hidden bg-gradient-to-br from-sage to-[#5e6f54]">
            {hero.coverImage ? (
              <Image
                src={hero.coverImage}
                alt={hero.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            ) : (
              <div className="absolute inset-0 opacity-40">
                <div className="absolute top-[18%] right-[18%] w-[90px] h-[90px] rounded-full bg-gradient-to-br from-[#f5d896] to-[#e0a85c] blur-xl" />
                <div className="absolute bottom-[25%] inset-x-0 h-px bg-white/40" />
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute top-6 left-6 bg-background px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
              {hero.tags[0] || "Travel"}
            </div>
            <div className="absolute top-6 right-6 bg-accent text-background px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-[0.14em]">
              Featured
            </div>
          </div>
          
          <div className="pt-8 lg:pt-10">
            <h3 className="font-serif text-[32px] md:text-[44px] lg:text-[52px] leading-[1.05] tracking-tight font-medium text-ink mb-4 group-hover:text-accent transition-colors">
              {hero.title}
            </h3>
            <p className="text-[15px] lg:text-[16px] text-ink-2 leading-relaxed mb-6 lg:mb-8 max-w-[60ch]">
              {hero.description}
            </p>
            <div className="flex items-center gap-4 text-[12px] text-muted">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent to-accent-deep flex items-center justify-center text-background font-serif italic text-sm">
                {heroAuthor?.name?.charAt(0)}
              </div>
              <span className="font-bold text-ink">{heroAuthor?.name}</span>
              <span className="w-0.5 h-0.5 rounded-full bg-rule-strong" />
              <span>{hero.readingTime}</span>
              <span className="w-0.5 h-0.5 rounded-full bg-rule-strong" />
              <span>{format(new Date(hero.date), "MMMM d, yyyy")}</span>
            </div>
          </div>
        </Link>

        {/* Side Index */}
        <div className="flex flex-col gap-8 lg:gap-10">
          {sidePosts.map((post, index) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid grid-cols-[100px_1fr] lg:grid-cols-[140px_1fr] gap-6 lg:gap-8 items-center">
              <div className="relative aspect-square rounded-[18px] overflow-hidden bg-bg-2">
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className={cn(
                    "absolute inset-0 opacity-60",
                    index % 4 === 0 && "bg-gradient-to-br from-[#d99a6c] to-[#a86d3f]",
                    index % 4 === 1 && "bg-gradient-to-b from-[#4a6580] to-[#2a3548]",
                    index % 4 === 2 && "bg-[#d8c89e] bg-[repeating-linear-gradient(0deg,#c8b27a_0_12px,#b09659_12px_24px)]",
                    index % 4 === 3 && "bg-gradient-to-b from-[#d2c89e] to-[#a89868]"
                  )} />
                )}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif italic text-3xl text-background/40">{index + 1}</span>
                </div>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-accent mb-2">
                  {post.tags[0] || "Hotels"}
                </span>
                <h4 className="font-serif text-[20px] lg:text-[24px] leading-tight tracking-tight font-medium text-ink group-hover:text-accent transition-colors mb-2">
                  {post.title}
                </h4>
                <span className="text-[11px] text-muted">
                  {post.readingTime} · {format(new Date(post.date), "MMM d")}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}