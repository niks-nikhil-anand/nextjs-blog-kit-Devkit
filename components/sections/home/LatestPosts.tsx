import React from "react";
import Link from "next/link";
import { Post } from "@/lib/mdx";
import { PostCard } from "@/components/blog/PostCard";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function LatestPosts({ posts }: { posts: Post[] }) {
  return (
    <section className="container mx-auto px-4 py-24">
      <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight lg:text-4xl">
            Latest Posts
          </h2>
          <p className="mt-2 text-zinc-500 dark:text-zinc-400">
            Our most recent thoughts on development, design, and product.
          </p>
        </div>
        <Button variant="ghost" className="font-bold group" asChild>
          <Link href="/blog">
            View all posts <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
