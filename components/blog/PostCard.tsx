import React from "react";
import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import { Bookmark } from "lucide-react";
import { Post } from "@/lib/mdx";

export function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col gap-4.5 cursor-pointer">
      <div className="relative aspect-[5/4] rounded-[20px] overflow-hidden transition-transform duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)] group-hover:-translate-y-1 shadow-sm">
        <Link href={`/blog/${post.slug}`} className="block w-full h-full">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-sand/20 flex items-center justify-center">
              <span className="text-4xl opacity-20 italic font-serif text-accent">Stories</span>
            </div>
          )}
        </Link>
        
        {/* Category Pin */}
        <div className="absolute top-3.5 left-3.5 bg-background px-3 py-1.5 rounded-full text-[10px] font-bold tracking-[0.16em] uppercase text-ink shadow-sm z-10">
          {post.tags[0] || "Travel"}
        </div>

        {/* Save Button */}
        <button className="absolute top-3.5 right-3.5 w-9 h-9 bg-background rounded-full grid place-items-center text-ink hover:bg-accent hover:text-background transition-all duration-200 z-10">
          <Bookmark className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="flex flex-col gap-1.5">
        <span className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase">
          {post.tags[0] || "Travel"} · {post.author}
        </span>
        
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-serif text-[30px] leading-[1.15] tracking-tight font-medium text-ink group-hover:text-accent transition-colors duration-200">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-[14px] text-ink-2 leading-[1.55] line-clamp-2">
          {post.description}
        </p>
      </div>

      <div className="flex justify-between items-center text-[12px] text-muted pt-2 border-t border-rule mt-auto">
        <span className="font-medium">
          <strong className="text-ink font-bold">{post.author}</strong> · {post.readingTime}
        </span>
        <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
      </div>
    </article>
  );
}
