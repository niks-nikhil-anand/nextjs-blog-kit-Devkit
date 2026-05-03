import { getAllPosts, getAuthorBySlug } from "@/lib/mdx";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { FeaturedPost } from "@/components/sections/home/FeaturedPost";
import { LatestPosts } from "@/components/sections/home/LatestPosts";
import { TagsSection } from "@/components/sections/home/TagsSection";
import { Newsletter } from "@/components/sections/home/Newsletter";

export default function Home() {
  const allPosts = getAllPosts();
  
  // Use "Why I Switched from WordPress to MDX" as the featured post if it exists
  const featuredPost = allPosts.find(p => p.slug === "why-i-switched-from-wordpress-to-mdx") || allPosts[0];
  const latestPosts = allPosts.filter(p => p.slug !== featuredPost?.slug).slice(0, 6);
  
  const author = featuredPost ? getAuthorBySlug(featuredPost.author) : null;

  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      {featuredPost && <FeaturedPost post={featuredPost} author={author} />}
      <LatestPosts posts={latestPosts} />
      <TagsSection />
      <Newsletter />
    </div>
  );
}