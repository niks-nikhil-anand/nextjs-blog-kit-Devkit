import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const posts = [
  {
    title: "The Future of Web Development in 2024",
    excerpt: "Explore the emerging trends, from AI-driven development to the rise of edge computing and what it means for you.",
    category: "Trends",
    author: "Alex Rivera",
    date: "May 12, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80",
  },
  {
    title: "Mastering Next.js Server Components",
    excerpt: "Everything you need to know about React Server Components to build high-performance, SEO-friendly applications.",
    category: "Tutorial",
    author: "Sarah Chen",
    date: "May 10, 2024",
    readTime: "12 min read",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80",
  },
  {
    title: "Designing for the Modern Web",
    excerpt: "Learn how to create stunning, accessible, and user-centric designs that stand out in today's crowded digital landscape.",
    category: "Design",
    author: "Jordan Smith",
    date: "May 08, 2024",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1581291518151-0107e7442816?w=800&q=80",
  },
];

export function BlogSection() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Latest from the <span className="text-primary">Blog</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Deep dives into technology, design, and the business of software development.
            </p>
          </div>
          <Button variant="ghost" className="text-primary hover:text-primary hover:bg-primary/5 group" asChild>
            <Link href="/blog">
              View All Posts <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={post.title}
              className="group relative flex flex-col bg-background rounded-3xl border border-border overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-2 animate-in fade-in slide-in-from-bottom-8"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-bold text-primary uppercase tracking-wider border border-border">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="flex-1 p-8 flex flex-col">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 leading-tight group-hover:text-primary transition-colors">
                  <Link href="#">{post.title}</Link>
                </h3>
                
                <p className="text-muted-foreground mb-8 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-border/60 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center border border-primary/20">
                      <User className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm font-semibold">{post.author}</span>
                  </div>
                  <Link href="#" className="text-primary">
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
