import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Search, Mail } from "lucide-react";
import { getAllPosts, Post } from "@/lib/mdx";
import { PostCard } from "@/components/blog/PostCard";
import { BlogPagination } from "@/components/blog/BlogPagination";

export const metadata: Metadata = {
  title: "All Stories",
  description: "Every story, sorted, filtered, and waiting for a quiet afternoon.",
};

export default async function BlogListingPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { page } = await searchParams;
  const currentPage = Number(page) || 1;
  const postsPerPage = 6;
  
  const allPosts = getAllPosts();
  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  const posts = allPosts.slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);
  
  const latestPosts = allPosts.slice(0, 5); // Use latest as "most read" for now
  
  // Extract all unique tags
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags)));
  const categories = ["All", "Travel", "Destination", "Hotels", "Lifestyle", "Galleries"];

  return (
    <div className="bg-background min-h-screen">
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  PAGE HERO                                              */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <header className="pt-20 pb-12 text-center border-b border-rule">
        <div className="container mx-auto max-w-[1320px] px-6">
          <p className="font-serif italic text-2xl text-accent mb-3.5">
            — The full archive
          </p>
          <h1 className="font-serif text-[clamp(56px,8vw,120px)] leading-[0.95] tracking-tight font-medium mb-5.5 text-ink">
            Every story, <em className="italic text-accent">in one place</em>.
          </h1>
          <p className="text-[17px] text-ink-2 max-w-[60ch] mx-auto leading-relaxed">
            One hundred and forty-two long-form essays from four years of slow travel, 
            hotel diaries and small lifestyle notes — sorted, filtered, and waiting for a quiet afternoon.
          </p>
          <p className="mt-7 text-[11px] tracking-[0.2em] uppercase text-muted">
            <Link href="/" className="text-accent hover:underline">Home</Link>
            <span className="mx-2.5 text-rule-strong">/</span>
            <span className="text-ink">All Blogs</span>
          </p>
        </div>
      </header>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  SEARCH ROW                                             */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-7.5 border-b border-rule">
        <div className="container mx-auto max-w-[1320px] px-6">
          <form className="max-w-[680px] mx-auto flex items-center gap-3.5 bg-bg-2 border border-rule-strong rounded-full py-1.5 pl-5.5 pr-1.5 group focus-within:border-accent transition-colors">
            <Search className="w-4.5 h-4.5 text-muted group-focus-within:text-accent transition-colors" />
            <input 
              type="text" 
              placeholder={`Search ${posts.length} stories — try 'Lisbon', 'ryokan'…`}
              className="flex-1 border-none bg-transparent outline-none py-3.5 font-sans text-[15px] text-ink placeholder:text-muted"
            />
            <button type="submit" className="bg-ink text-background px-5.5 py-3 rounded-full text-[12px] font-semibold tracking-wider hover:bg-accent transition-colors">
              Search
            </button>
          </form>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  FILTER BAR                                             */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-8.5 border-b border-rule">
        <div className="container mx-auto max-w-[1320px] px-6 flex flex-wrap justify-between items-center gap-5">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat, i) => (
              <button 
                key={cat} 
                className={`px-4.5 py-2.25 rounded-full border text-[12px] font-semibold tracking-wider transition-all duration-200 ${
                  i === 0 
                  ? "bg-ink border-ink text-background" 
                  : "bg-transparent border-rule-strong text-ink-2 hover:border-ink hover:text-ink"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      {/*  LISTING SECTION                                         */}
      {/* ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-15 container mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
          {/* Main Grid */}
          <main>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
              {posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>

            {/* Pagination */}
            <BlogPagination 
              currentPage={currentPage} 
              totalPages={totalPages} 
              baseUrl="/blog" 
            />
          </main>

          {/* Sidebar */}
          <aside className="flex flex-col gap-12 sticky top-24 self-start">
            {/* Author Card */}
            <div className="bg-bg-3 border border-rule rounded-[18px] p-7 text-center">
              <div className="w-20 h-20 rounded-full mx-auto mb-3.5 bg-gradient-to-br from-sand via-accent to-accent-deep grid place-items-center font-serif text-[36px] italic text-background">
                E
              </div>
              <h4 className="font-serif text-[24px] font-medium text-ink mb-1">Elena Marsh</h4>
              <span className="text-[11px] tracking-[0.18em] uppercase text-muted font-bold block mb-3.5">
                Editor & permanent tourist
              </span>
              <p className="text-[13.5px] text-ink-2 leading-relaxed mb-4.5">
                Writer with bad maps and good shoes. Currently in Lisbon, next stop Marrakech.
              </p>
              <Link href="/about" className="inline-block bg-ink text-background px-4.5 py-2.25 rounded-full text-[12px] font-bold tracking-wider hover:bg-accent transition-colors">
                More about me →
              </Link>
            </div>

            {/* Most Read List */}
            <div>
              <h5 className="text-[11px] tracking-[0.2em] uppercase text-accent font-bold mb-4.5 flex items-center gap-2.5 after:content-[''] after:flex-1 after:h-px after:bg-rule-strong">
                Most read
              </h5>
              <div className="flex flex-col gap-4.5">
                {latestPosts.map((post) => (
                  <Link key={post.slug} href={`/blog/${post.slug}`} className="group grid grid-cols-[64px_1fr] gap-3.5 items-center">
                    <div className="aspect-square rounded-[10px] overflow-hidden bg-gradient-to-br from-accent to-accent-deep relative">
                      {post.coverImage && (
                        <Image src={post.coverImage} alt={post.title} fill className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                      )}
                    </div>
                    <div>
                      <h6 className="font-serif text-[16px] leading-tight font-medium text-ink group-hover:text-accent transition-colors mb-1">
                        {post.title}
                      </h6>
                      <span className="text-[11px] text-muted capitalize">
                        {post.tags[0]} · {post.readingTime}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags Section */}
            <div>
              <h5 className="text-[11px] tracking-[0.2em] uppercase text-accent font-bold mb-4.5 flex items-center gap-2.5 after:content-[''] after:flex-1 after:h-px after:bg-rule-strong">
                Wander by tag
              </h5>
              <div className="flex flex-wrap gap-2">
                {allTags.slice(0, 12).map((tag) => (
                  <Link 
                    key={tag} 
                    href={`/tags/${tag}`}
                    className="px-3.5 py-2 rounded-full bg-background border border-rule text-[12px] font-medium text-ink-2 hover:bg-ink hover:text-background hover:border-ink transition-all"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-ink text-background rounded-[18px] p-7 relative overflow-hidden group">
              <div className="absolute w-[200px] h-[200px] rounded-full bg-radial from-accent to-transparent top-[-80px] right-[-80px] opacity-50 z-0 pointer-events-none" />
              <div className="relative z-10">
                <h4 className="font-serif text-[26px] leading-tight font-medium mb-2.5">
                  The <em className="italic text-sand not-italic">Sunday letter</em>
                </h4>
                <p className="text-[13px] text-[#cfc8b8] leading-relaxed mb-4">
                  One story, two photographs, sent on Sunday morning to 14,328 kitchen tables.
                </p>
                <form className="flex flex-col gap-2">
                  <input 
                    type="email" 
                    placeholder="your@email.address" 
                    className="w-full bg-white/10 border border-white/20 rounded-full px-4 py-3 text-background text-[13px] outline-none placeholder:text-[#9a9080] focus:border-sand/50 transition-colors"
                  />
                  <button type="submit" className="w-full bg-background text-ink py-3 rounded-full text-[13px] font-bold tracking-wider hover:bg-accent hover:text-background transition-colors">
                    Send me Sunday
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
