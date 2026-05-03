import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Post, Author } from "@/lib/mdx";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Calendar, Clock } from "lucide-react";
import { format } from "date-fns";

interface FeaturedPostProps {
  post: Post;
  author: Author | null;
}

export function FeaturedPost({ post, author }: FeaturedPostProps) {
  return (
    <section className="container mx-auto px-4 py-12">
      <Link 
        href={`/blog/${post.slug}`}
        className="group relative flex flex-col overflow-hidden rounded-3xl border bg-card transition-all hover:border-primary/20 hover:shadow-2xl lg:flex-row"
      >
        <div className="relative aspect-video w-full overflow-hidden lg:aspect-auto lg:w-3/5">
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-800">
              <span className="text-9xl opacity-10">📄</span>
            </div>
          )}
          <div className="absolute top-6 left-6">
            <Badge className="bg-primary text-primary-foreground font-bold px-4 py-1.5 uppercase tracking-widest text-[10px]">
              Featured Post
            </Badge>
          </div>
        </div>
        
        <div className="flex w-full flex-col justify-center p-8 lg:w-2/5 lg:p-12">
          <div className="mb-4 flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs font-bold uppercase tracking-wider text-primary">
                {tag}
              </span>
            ))}
          </div>
          
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight lg:text-4xl group-hover:text-primary transition-colors">
            {post.title}
          </h2>
          
          <p className="mb-8 line-clamp-3 text-lg text-zinc-500 dark:text-zinc-400">
            {post.description}
          </p>
          
          <div className="mt-auto flex flex-wrap items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <Avatar className="size-8 border">
                <AvatarImage src={author?.avatar} alt={author?.name} />
                <AvatarFallback>{author?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <span className="font-bold text-foreground">{author?.name}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="size-4" />
              <span>{format(new Date(post.date), "MMM d, yyyy")}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Clock className="size-4" />
              <span>{post.readingTime}</span>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
