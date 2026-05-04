import { getAllPosts } from "@/lib/mdx";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { FeaturedPost } from "@/components/sections/home/FeaturedPost";
import { LatestPosts } from "@/components/sections/home/LatestPosts";
import { CategoriesSection } from "@/components/sections/home/CategoriesSection";
import { Newsletter } from "@/components/sections/home/Newsletter";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "A slow travel journal kept by a writer with bad maps and good shoes. Discover stories about travel, hotels, and lifestyle.",
};

export default function Home() {
  const allPosts = getAllPosts();
  
  const featuredPosts = allPosts.filter(p => p.featured).slice(0, 6);
  const latestPosts = allPosts.filter(p => !featuredPosts.some(fp => fp.slug === p.slug)).slice(0, 6);
  
  return (
    <div className="flex flex-col gap-0 bg-background">
      
      <HeroSection />
      {featuredPosts.length > 0 && <FeaturedPost posts={featuredPosts} />}
      <LatestPosts posts={latestPosts} />
      <CategoriesSection />
      <Newsletter />
    </div>
  );
}