import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/mdx";
import { format } from "date-fns";
import { Bookmark, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const patterns = [
  "bg-gradient-to-b from-[#b8754a] to-[#6a3f24] [background-image:radial-gradient(ellipse_at_30%_40%,#f5d896_0_80px,transparent_100px),linear-gradient(180deg,#b8754a_0%,#6a3f24_100%)]",
  "bg-sand [background-image:repeating-linear-gradient(45deg,#d8c89e_0_6px,#c8b27a_6px_12px)]",
  "bg-[#1a2030] [background-image:radial-gradient(circle_at_70%_70%,#fff_0_14px,transparent_16px),radial-gradient(circle_at_30%_30%,#fff_0_8px,transparent_10px),linear-gradient(180deg,#2a3548_0%,#1a2030_100%)]",
  "bg-[#2a3520] [background-image:linear-gradient(180deg,#a8b88c_0%,#4a5a3e_70%,#2a3520_100%)]",
  "bg-background [background-image:radial-gradient(ellipse_at_50%_100%,#d99a6c_0_100px,transparent_120px),linear-gradient(180deg,#f5e3c4_0%,#d8a87a_60%,#b8754a_100%)]",
  "bg-[#4a6580] [background-image:radial-gradient(circle_at_50%_50%,#ffffff80_0_30px,transparent_80px),linear-gradient(135deg,#4a6580_0%,#6b8aa8_100%)]",
];

export function LatestPosts({ posts }: { posts: Post[] }) {
  const latestPosts = posts.slice(0, 6);

  return (
    <section className="container mx-auto max-w-[1320px] px-6 lg:px-9 py-20 lg:py-32 border-t border-rule">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-14 lg:mb-16">
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4">
            — Latest Dispatches
          </span>
          <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] leading-none tracking-tight font-medium text-ink">
            Recently <em>documented</em>.
          </h2>
        </div>
        <Link 
          href="/blog" 
          className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-ink hover:text-accent transition-colors"
        >
          Explore All Posts
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 lg:gap-x-12 lg:gap-y-20">
        {latestPosts.map((post, idx) => (
          <Link 
            key={post.slug} 
            href={`/blog/${post.slug}`}
            className="group flex flex-col gap-6"
          >
            <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden bg-bg-2 shadow-sm transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-ink/5">
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              ) : (
                <div className={cn("absolute inset-0", patterns[idx % patterns.length])} />
              )}
              
              <div className="absolute top-5 left-5 bg-background/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.16em] text-ink z-10">
                {post.tags[0] || "Travel"}
              </div>
              
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
            </div>

            <div className="flex flex-col gap-4 px-1">
              <div className="flex items-center gap-3">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                  {post.tags[0] || "Travel"}
                </span>
                <span className="w-1 h-1 rounded-full bg-rule-strong" />
                <span className="text-[11px] font-bold uppercase tracking-[0.1em] text-muted">
                  {format(new Date(post.date), "MMM d, yyyy")}
                </span>
              </div>
              
              <h3 className="font-serif text-[28px] lg:text-[32px] leading-[1.15] tracking-tight font-medium text-ink group-hover:text-accent transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-[15px] lg:text-[16px] leading-relaxed text-ink-2 line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
                {post.description}
              </p>
              
              <div className="flex items-center justify-between pt-5 border-t border-rule text-[12px] text-muted mt-2 font-medium">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-accent/20" />
                  <span>{post.readingTime} read</span>
                </div>
                <span className="group-hover:text-accent transition-colors flex items-center gap-1 font-bold uppercase tracking-widest text-[10px]">
                  Read Story <span>→</span>
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}