import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { format } from "date-fns";
import {
  Calendar,
  Clock,
  ChevronRight,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

import {
  getPostBySlug,
  getAllPosts,
  getAuthorBySlug,
  getRelatedPosts,
  getAdjacentPosts,
} from "@/lib/mdx";
import { mdxComponents } from "@/components/mdx";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { TableOfContents } from "@/components/blog/TableOfContents";
import { ShareButtons } from "@/components/blog/ShareButtons";
import { PostCard } from "@/components/blog/PostCard";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface PageProps {
  params: Promise<{ slug: string }>;
}

/* ------------------------------------------------------------------ */
/*  Static generation                                                  */
/* ------------------------------------------------------------------ */

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

/* ------------------------------------------------------------------ */
/*  Dynamic metadata + JSON-LD                                         */
/* ------------------------------------------------------------------ */

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://devkitblog.com";

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `${SITE_URL}/blog/${post.slug}`;
  const ogImage = post.coverImage?.startsWith("http")
    ? post.coverImage
    : `${SITE_URL}${post.coverImage}`;

  return {
    title: `${post.title} — DevKit Blog`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      publishedTime: post.date,
      authors: [post.author],
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [ogImage],
    },
    alternates: { canonical: url },
  };
}

/* ------------------------------------------------------------------ */
/*  Rehype options (extracted for readability)                          */
/* ------------------------------------------------------------------ */

const rehypeOptions = {
  rehypePlugins: [
    rehypeSlug,
    [rehypeAutolinkHeadings, { behavior: "wrap" }],
    [
      rehypePrettyCode,
      {
        theme: { dark: "github-dark", light: "github-light" },
        keepBackground: false,
        onVisitLine(node: any) {
          if (node.children.length === 0) {
            node.children = [{ type: "text", value: " " }];
          }
        },
        onVisitHighlightedLine(node: any) {
          node.properties.className = ["highlighted"];
        },
      },
    ],
  ],
};

/* ------------------------------------------------------------------ */
/*  Page component                                                     */
/* ------------------------------------------------------------------ */

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.draft) notFound();

  const author = getAuthorBySlug(post.author);
  const relatedPosts = getRelatedPosts(post);
  const { prev, next } = getAdjacentPosts(post.slug);
  const postUrl = `${SITE_URL}/blog/${post.slug}`;

  /* JSON-LD structured data */
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: { "@type": "WebPage", "@id": postUrl },
    author: {
      "@type": "Person",
      name: author?.name || "DevKit",
      url: author?.social?.website || `${SITE_URL}/authors/${post.author}`,
    },
    publisher: {
      "@type": "Organization",
      name: "DevKit Blog",
      url: SITE_URL,
    },
  };

  return (
    <>
      {/* JSON-LD — rendered inline, no next/script needed for static */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Reading-progress bar ── */}
      <div className="reading-progress fixed inset-x-0 top-0 z-50 h-[3px]">
        <div
          id="progress"
          className="h-full w-0 bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 transition-none"
        />
      </div>

      <article className="relative">
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/*  HERO SECTION                                              */}
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <header className="relative overflow-hidden  bg-white pb-16 pt-10 dark:border-zinc-800 dark:bg-zinc-950 lg:pb-24 lg:pt-16">
          {/* Subtle grain overlay */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            }}
          />

          <div className="container relative mx-auto max-w-5xl px-6">
            {/* Breadcrumbs */}
            <nav
              aria-label="Breadcrumb"
              className="mb-10 flex items-center gap-1.5 text-[13px] font-medium text-zinc-400 dark:text-zinc-500"
            >
              <Link
                href="/"
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Home
              </Link>
              <ChevronRight className="size-3" />
              <Link
                href="/blog"
                className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
              >
                Blog
              </Link>
              <ChevronRight className="size-3" />
              <span className="max-w-[200px] truncate text-zinc-600 dark:text-zinc-300">
                {post.title}
              </span>
            </nav>

            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link key={tag} href={`/tags/${tag}`}>
                  <Badge
                    variant="outline"
                    className="rounded-full border-zinc-300 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-zinc-500 transition-all hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-700 dark:text-zinc-400 dark:hover:border-emerald-500 dark:hover:bg-emerald-950 dark:hover:text-emerald-400"
                  >
                    {tag}
                  </Badge>
                </Link>
              ))}
            </div>

            {/* Title */}
            <h1 className="mb-8 max-w-4xl text-[clamp(2rem,5vw,3.75rem)] font-extrabold leading-[1.1] tracking-tight text-zinc-900 dark:text-zinc-50">
              {post.title}
            </h1>

            {/* Description */}
            {post.description && (
              <p className="mb-10 max-w-2xl text-lg leading-relaxed text-zinc-500 dark:text-zinc-400">
                {post.description}
              </p>
            )}

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-5 text-sm">
              <Link
                href={`/authors/${post.author}`}
                className="group flex items-center gap-3 transition-colors"
              >
                <Avatar className="size-11 ring-2 ring-white shadow-md dark:ring-zinc-800">
                  <AvatarImage src={author?.avatar} alt={author?.name} />
                  <AvatarFallback className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                    {author?.name?.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <span className="font-bold text-zinc-900 group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
                    {author?.name}
                  </span>
                  <span className="text-xs text-zinc-400 dark:text-zinc-500">
                    Author
                  </span>
                </div>
              </Link>

              <span className="hidden h-5 w-px bg-zinc-200 dark:bg-zinc-700 sm:block" />

              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                <Calendar className="size-4" />
                <time dateTime={post.date}>
                  {format(new Date(post.date), "MMM d, yyyy")}
                </time>
              </div>

              <span className="hidden h-5 w-px bg-zinc-200 dark:bg-zinc-700 sm:block" />

              <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400">
                <Clock className="size-4" />
                <span>{post.readingTime}</span>
              </div>
            </div>
          </div>
        </header>

        {/* ── Cover Image (breaks out of container for drama) ── */}
        <div className="container mx-auto max-w-5xl px-6">
          <div className="relative -mt-1 mb-16 aspect-[2/1] w-full overflow-hidden rounded-2xl border border-zinc-200 shadow-xl dark:border-zinc-800 lg:rounded-3xl">
            {post.coverImage ? (
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1100px"
                className="object-cover transition-transform duration-700 hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-zinc-100 to-zinc-200 dark:from-zinc-900 dark:to-zinc-800">
                <span className="text-8xl opacity-40">📄</span>
              </div>
            )}
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/*  CONTENT + SIDEBAR                                         */}
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        <div className="container mx-auto max-w-5xl px-6">
          <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-[1fr_220px]">
            {/* ── Main content ── */}
            <div className="min-w-0">
              <div
                className={[
                  "prose prose-zinc dark:prose-invert",
                  "prose-lg max-w-none",
                  /* Headings */
                  "prose-headings:scroll-mt-24 prose-headings:font-extrabold prose-headings:tracking-tight",
                  "prose-h2:mt-16 prose-h2:border-b prose-h2:border-zinc-200 prose-h2:pb-4 prose-h2:text-3xl dark:prose-h2:border-zinc-800",
                  "prose-h3:mt-10 prose-h3:text-xl",
                  /* Links */
                  "prose-a:font-semibold prose-a:text-emerald-600 prose-a:underline prose-a:decoration-emerald-300 prose-a:underline-offset-2 prose-a:transition-colors hover:prose-a:text-emerald-700 hover:prose-a:decoration-emerald-500 dark:prose-a:text-emerald-400 dark:prose-a:decoration-emerald-700 dark:hover:prose-a:text-emerald-300",
                  /* Code */
                  "prose-pre:rounded-xl prose-pre:border prose-pre:border-zinc-200 prose-pre:bg-zinc-50 prose-pre:shadow-sm dark:prose-pre:border-zinc-800 dark:prose-pre:bg-zinc-900",
                  "prose-code:rounded prose-code:bg-zinc-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-[0.875em] prose-code:font-medium prose-code:before:content-none prose-code:after:content-none dark:prose-code:bg-zinc-800",
                  /* Images */
                  "prose-img:rounded-xl prose-img:border prose-img:shadow-md",
                  /* Blockquote */
                  "prose-blockquote:border-l-4 prose-blockquote:border-emerald-500 prose-blockquote:bg-emerald-50/50 prose-blockquote:py-1 prose-blockquote:pl-6 prose-blockquote:not-italic dark:prose-blockquote:bg-emerald-950/20",
                  /* Lists */
                  "prose-li:marker:text-emerald-500",
                  /* HR */
                  "prose-hr:border-zinc-200 dark:prose-hr:border-zinc-800",
                ].join(" ")}
              >
                <MDXRemote
                  source={post.content}
                  components={mdxComponents}
                  options={{ mdxOptions: rehypeOptions as any }}
                />
              </div>

              {/* ── Share bar ── */}
              <div className="mt-16 flex items-center justify-between border-y border-zinc-200 py-6 dark:border-zinc-800">
                <span className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                  Share this post
                </span>
                <ShareButtons url={postUrl} title={post.title} />
              </div>

              {/* ── Author bio ── */}
              <div className="mt-16 overflow-hidden rounded-2xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-white p-8 shadow-sm dark:border-zinc-800 dark:from-zinc-900 dark:to-zinc-900/50 md:p-10">
                <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start">
                  <Avatar className="size-20 shrink-0 ring-4 ring-white shadow-lg dark:ring-zinc-800">
                    <AvatarImage src={author?.avatar} alt={author?.name} />
                    <AvatarFallback className="bg-emerald-100 text-xl font-bold text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                      {author?.name?.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 text-center sm:text-left">
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                      Written by
                    </p>
                    <h3 className="mb-3 text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                      {author?.name}
                    </h3>
                    <p className="mb-6 text-[15px] leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {author?.bio}
                    </p>
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:justify-start">
                      <Link
                        href={`/authors/${post.author}`}
                        className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md"
                      >
                        View all posts
                        <ArrowRight className="size-3.5" />
                      </Link>
                      {author?.social?.twitter && (
                        <a
                          href={author.social.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                        >
                          Twitter/X
                        </a>
                      )}
                      {author?.social?.github && (
                        <a
                          href={author.social.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                        >
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Comments ── */}
              <section className="mt-16">
                <div className="mb-8 flex items-center gap-3">
                  <MessageCircle className="size-6 text-zinc-400" />
                  <h2 className="text-2xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Comments
                  </h2>
                </div>
                <div className="rounded-2xl border-2 border-dashed border-zinc-200 px-8 py-16 text-center dark:border-zinc-800">
                  <p className="text-sm text-zinc-400">
                    Giscus comments will load here.
                    <br />
                    <span className="text-xs">
                      Configure in{" "}
                      <code className="rounded bg-zinc-100 px-1.5 py-0.5 dark:bg-zinc-800">
                        .env.local
                      </code>
                    </span>
                  </p>
                </div>
              </section>

              {/* ── Prev / Next navigation ── */}
              <nav className="mt-16 grid grid-cols-1 gap-4 border-t border-zinc-200 pt-10 dark:border-zinc-800 sm:grid-cols-2">
                {prev ? (
                  <Link
                    href={`/blog/${prev.slug}`}
                    className="group flex flex-col gap-2 rounded-xl border border-zinc-200 p-5 transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                  >
                    <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                      <ArrowLeft className="size-3" /> Older Post
                    </span>
                    <span className="line-clamp-2 font-bold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
                      {prev.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
                {next ? (
                  <Link
                    href={`/blog/${next.slug}`}
                    className="group flex flex-col items-end gap-2 rounded-xl border border-zinc-200 p-5 text-right transition-all hover:border-zinc-300 hover:bg-zinc-50 hover:shadow-sm dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-900"
                  >
                    <span className="flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                      Newer Post <ArrowRight className="size-3" />
                    </span>
                    <span className="line-clamp-2 font-bold text-zinc-900 transition-colors group-hover:text-emerald-600 dark:text-zinc-100 dark:group-hover:text-emerald-400">
                      {next.title}
                    </span>
                  </Link>
                ) : (
                  <div />
                )}
              </nav>
            </div>

            {/* ── Sidebar: Table of Contents ── */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl border border-zinc-200 bg-zinc-50/50 p-5 dark:border-zinc-800 dark:bg-zinc-900/50">
                  <h4 className="mb-4 text-[11px] font-bold uppercase tracking-widest text-zinc-400">
                    On this page
                  </h4>
                  <TableOfContents />
                </div>
              </div>
            </aside>
          </div>
        </div>

        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {/*  RELATED POSTS                                             */}
        {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
        {relatedPosts.length > 0 && (
          <section className="mt-24 border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/30">
            <div className="container mx-auto max-w-5xl px-6">
              <div className="mb-12 flex items-end justify-between">
                <div>
                  <p className="mb-2 text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                    Keep reading
                  </p>
                  <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                    Related Posts
                  </h2>
                </div>
                <Link
                  href="/blog"
                  className="hidden text-sm font-semibold text-emerald-600 transition-colors hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300 sm:block"
                >
                  View all posts →
                </Link>
              </div>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <PostCard key={relatedPost.slug} post={relatedPost} />
                ))}
              </div>
              <Link
                href="/blog"
                className="mt-8 block text-center text-sm font-semibold text-emerald-600 sm:hidden"
              >
                View all posts →
              </Link>
            </div>
          </section>
        )}
      </article>

      {/* ── Reading progress bar script ── */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function() {
              var bar = document.getElementById('progress');
              if (!bar) return;
              window.addEventListener('scroll', function() {
                var h = document.documentElement;
                var pct = (h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100;
                bar.style.width = Math.min(pct, 100) + '%';
              }, { passive: true });
            })();
          `,
        }}
      />
    </>
  );
}