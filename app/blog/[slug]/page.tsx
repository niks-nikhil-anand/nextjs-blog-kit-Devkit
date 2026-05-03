import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import { Calendar, Clock, ChevronRight, ArrowLeft, ArrowRight } from "lucide-react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Script from "next/script";

import { 
  getPostBySlug, 
  getAllPosts, 
  getAuthorBySlug, 
  getRelatedPosts, 
  getAdjacentPosts 
} from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { PostCard } from "@/components/blog/PostCard";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `https://devkitblog.com/blog/${post.slug}`;
  
  return {
    title: `${post.title} — DevKit Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      images: [{ url: post.coverImage }],
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [post.coverImage],
    },
    alternates: {
      canonical: url,
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post || post.draft) notFound();

  const author = getAuthorBySlug(post.author);
  const relatedPosts = getRelatedPosts(post);
  const { prev, next } = getAdjacentPosts(post.slug);
  
  const siteUrl = "https://devkitblog.com";
  const postUrl = `${siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.description,
    "image": post.coverImage,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": author?.name || "DevKit",
      "url": `${siteUrl}/authors/${post.author}`,
    },
  };

  return (
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        strategy="beforeInteractive"
      />
      <article className="container relative max-w-7xl py-10 lg:py-20">
      
      {/* Breadcrumbs */}
      <nav className="mb-8 flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        <Link href="/" className="hover:text-foreground">Home</Link>
        <ChevronRight className="size-3" />
        <Link href="/blog" className="hover:text-foreground">Blog</Link>
        <ChevronRight className="size-3" />
        <span className="truncate font-medium text-foreground">{post.title}</span>
      </nav>

      {/* Header */}
      <header className="mb-12">
        <div className="mb-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Link key={tag} href={`/tags/${tag}`}>
              <Badge variant="secondary" className="px-3 py-1 text-xs uppercase tracking-wider hover:bg-zinc-200 dark:hover:bg-zinc-800">
                {tag}
              </Badge>
            </Link>
          ))}
        </div>
        <h1 className="mb-8 text-4xl font-extrabold tracking-tight lg:text-6xl">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-zinc-500 dark:text-zinc-400">
          <Link href={`/authors/${post.author}`} className="flex items-center gap-3 text-foreground transition-colors hover:text-primary">
            <Avatar className="size-10 border">
              <AvatarImage src={author?.avatar} alt={author?.name} />
              <AvatarFallback>{author?.name?.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="font-semibold">{author?.name}</span>
          </Link>
          <div className="flex items-center gap-2">
            <Calendar className="size-4" />
            <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="size-4" />
            <span>{post.readingTime}</span>
          </div>
        </div>
      </header>

      {/* Cover Image */}
      <div className="relative mb-16 aspect-video w-full overflow-hidden rounded-3xl border shadow-2xl">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            className="object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-zinc-100 dark:bg-zinc-900">
            <span className="text-8xl">📄</span>
          </div>
        )}
      </div>

      {/* Content Layout */}
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_250px]">
        {/* Main Content */}
        <div className="prose prose-zinc prose-lg dark:prose-invert max-w-none prose-headings:scroll-mt-20 prose-headings:font-bold prose-a:text-primary prose-pre:bg-transparent prose-pre:p-0">
          <MDXRemote 
            source={post.content} 
            components={mdxComponents}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  rehypeSlug,
                  [rehypeAutolinkHeadings, { behavior: "wrap" }],
                  [rehypePrettyCode, {
                    theme: "github-dark",
                    onVisitLine(node: any) {
                      if (node.children.length === 0) {
                        node.children = [{ type: "text", value: " " }];
                      }
                    },
                  }],
                ],
              },
            }}
          />
          
          <hr className="my-12 border-zinc-200 dark:border-zinc-800" />
          
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <ShareButtons url={postUrl} title={post.title} />
          </div>

          {/* Author Bio */}
          <div className="mb-20 rounded-3xl border bg-zinc-50 p-8 dark:bg-zinc-900/50">
            <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
              <Avatar className="size-24 border-2 border-white shadow-xl dark:border-zinc-800">
                <AvatarImage src={author?.avatar} alt={author?.name} />
                <AvatarFallback>{author?.name?.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h3 className="mb-2 text-2xl font-bold">{author?.name}</h3>
                <p className="mb-6 text-zinc-500 dark:text-zinc-400">
                  {author?.bio}
                </p>
                <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                  <Link 
                    href={`/authors/${post.author}`} 
                    className="text-sm font-bold text-primary hover:underline"
                  >
                    View all posts →
                  </Link>
                  {author?.social.twitter && (
                    <a href={author.social.twitter} target="_blank" rel="noreferrer" className="text-sm text-zinc-500 hover:text-foreground">Twitter</a>
                  )}
                  {author?.social.github && (
                    <a href={author.social.github} target="_blank" rel="noreferrer" className="text-sm text-zinc-500 hover:text-foreground">GitHub</a>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Comments Placeholder */}
          <section className="mb-20">
            <h2 className="mb-8 text-3xl font-bold">Comments</h2>
            <div className="rounded-3xl border border-dashed border-zinc-300 p-12 text-center text-zinc-500 dark:border-zinc-800">
              <p>Giscus comments will load here.</p>
            </div>
          </section>

          {/* Post Navigation */}
          <nav className="mb-20 flex flex-col gap-4 border-t pt-8 md:flex-row md:items-center md:justify-between">
            {prev ? (
              <Link href={`/blog/${prev.slug}`} className="group flex flex-col items-start gap-2">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  <ArrowLeft className="size-3" /> Older Post
                </span>
                <span className="max-w-[250px] font-bold group-hover:text-primary group-hover:underline">
                  {prev.title}
                </span>
              </Link>
            ) : <div />}
            
            {next ? (
              <Link href={`/blog/${next.slug}`} className="group flex flex-col items-end gap-2 text-right">
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-zinc-400">
                  Newer Post <ArrowRight className="size-3" />
                </span>
                <span className="max-w-[250px] font-bold group-hover:text-primary group-hover:underline">
                  {next.title}
                </span>
              </Link>
            ) : <div />}
          </nav>
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-24">
            <TableOfContents />
          </div>
        </aside>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="border-t pt-20">
          <h2 className="mb-10 text-3xl font-bold">Related Posts</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
      </article>
    </>
  );
}
