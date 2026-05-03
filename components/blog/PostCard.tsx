import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:border-foreground/20 hover:shadow-lg"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-800">
            <span className="text-4xl">📝</span>
          </div>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap gap-2">
          {post.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-[10px] uppercase tracking-wider">
              {tag}
            </Badge>
          ))}
        </div>
        <h3 className="mb-2 text-xl font-bold leading-tight group-hover:text-primary">
          {post.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm text-zinc-500 dark:text-zinc-400">
          {post.description}
        </p>
        <div className="mt-auto flex items-center gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <div className="flex items-center gap-1">
            <Calendar className="size-3" />
            <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="size-3" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
