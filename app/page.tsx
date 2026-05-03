import { getAllPosts } from "@/lib/mdx";
import { HeroSection } from "@/components/sections/home/HeroSection";
import { FeaturedPost } from "@/components/sections/home/FeaturedPost";
import { LatestPosts } from "@/components/sections/home/LatestPosts";
import { CategoriesSection } from "@/components/sections/home/CategoriesSection";
import { Newsletter } from "@/components/sections/home/Newsletter";

export default function Home() {
  const allPosts = getAllPosts();
  
  // Sort posts to put featured ones first, then by date
  const sortedForFeatured = [...allPosts].sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0; // Already sorted by date in getAllPosts
  });

  const featuredPosts = sortedForFeatured.slice(0, 6);
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