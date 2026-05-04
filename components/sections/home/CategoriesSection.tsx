import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { 
    name: "Travel", 
    slug: "travel", 
    count: 42, 
    className: "lg:col-span-2 lg:row-span-2 bg-[#b8754a]",
    image: "/assets/categories/travel.png",
    bgPattern: "radial-gradient(ellipse_at_30%_40%,#f5d896_0_60px,transparent_90px),linear-gradient(180deg,#b8754a_0%,#6a3f24_100%)"
  },
  { 
    name: "Destination", 
    slug: "destination", 
    count: 28, 
    className: "lg:col-span-1 lg:row-span-1 bg-[#4a6580]",
    image: "/assets/categories/destination.png",
    bgPattern: "linear-gradient(180deg,#4a6580_0%,#2a3548_100%)"
  },
  { 
    name: "Hotels", 
    slug: "hotels", 
    count: 15, 
    className: "lg:col-span-1 lg:row-span-1 bg-[#d2c89e]",
    image: "/assets/categories/hotels.png",
    bgPattern: "linear-gradient(180deg,#d2c89e_0%,#a89868_100%)"
  },
  { 
    name: "Lifestyle", 
    slug: "lifestyle", 
    count: 22, 
    className: "lg:col-span-2 lg:row-span-1 bg-[#f3ede2] text-ink",
    image: "/assets/categories/lifestyle.png",
    bgPattern: "radial-gradient(circle_at_40%_60%,#d99a6c_0_60px,transparent_80px),linear-gradient(180deg,#e8d4b0_0%,#c8a878_100%)"
  },
];

const accentTiles = [
  { name: "Ink", className: "bg-ink", colorName: "Ink", image: "/assets/categories/accent-ink.png" },
  { name: "Orange", className: "bg-accent", colorName: "Terracotta", image: "/assets/categories/accent-terracotta.png" },
  { name: "Olive", className: "bg-sage", colorName: "Olive", image: "/assets/categories/accent-olive.png" },
];

export function CategoriesSection() {
  return (
    <section className="container mx-auto max-w-[1320px] px-6 lg:px-9 py-20 lg:py-32 border-t border-rule bg-bg-2/30">
      <div className="flex flex-col lg:flex-row justify-between items-end gap-6 mb-12 lg:mb-16">
        <div>
          <span className="block text-[11px] font-bold uppercase tracking-[0.3em] text-accent mb-4">
            — Browse Collections
          </span>
          <h2 className="font-serif text-[40px] md:text-[56px] lg:text-[72px] leading-none tracking-tight font-medium text-ink">
            Thematic <em>archives</em>.
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
        {/* Row 1 & 2 Left Large */}
        <CategoryCard category={categories[0]} />

        {/* Row 1 Right small */}
        <CategoryCard category={categories[1]} />
        
        {/* Row 1 Right Accent Ink */}
        <div className="lg:col-span-1 lg:row-span-1 rounded-[24px] bg-ink p-8 flex flex-col justify-between text-background relative overflow-hidden group">
          <Image
            src={accentTiles[0].image!}
            alt={accentTiles[0].name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
          <div className="relative z-10">
            <span className="font-serif italic text-sm text-sand opacity-80">Accent §01</span>
            <h3 className="font-serif text-3xl mt-4 font-medium leading-tight text-white">The Depth of <br /> Midnight Ink.</h3>
          </div>
          <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold opacity-80 text-white">Color: Ink</span>
        </div>

        {/* Row 2 Right small */}
        <CategoryCard category={categories[2]} />

        {/* Row 2 Right Accent Orange */}
        <div className="lg:col-span-1 lg:row-span-1 rounded-[24px] bg-accent p-8 flex flex-col justify-between text-background relative overflow-hidden group">
          <Image
            src={accentTiles[1].image!}
            alt={accentTiles[1].name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 300px"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
          <div className="relative z-10">
            <span className="font-serif italic text-sm text-background opacity-80">Accent §02</span>
            <h3 className="font-serif text-3xl mt-4 font-medium leading-tight text-white">Warmth of <br /> Terracotta.</h3>
          </div>
          <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold opacity-80 text-white">Color: Orange</span>
        </div>

        {/* Row 3 Lifestyle Wide */}
        <CategoryCard category={categories[3]} />

        {/* Row 3 Accent Olive */}
        <div className="lg:col-span-2 lg:row-span-1 rounded-[24px] bg-sage p-10 flex flex-col justify-between text-background relative overflow-hidden group">
          <Image
            src={accentTiles[2].image!}
            alt={accentTiles[2].name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 600px"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-500" />
          <div className="relative z-10 max-w-[20ch]">
            <span className="font-serif italic text-sm text-sand opacity-80">Accent §03</span>
            <h3 className="font-serif text-4xl mt-4 font-medium leading-tight text-white">Muted tones of Mediterranean Olive.</h3>
          </div>
          <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold opacity-80 text-white">Color: Olive</span>
        </div>
      </div>
    </section>
  );
}

function CategoryCard({ category }: { category: typeof categories[0] }) {
  return (
    <Link 
      href={`/blog?category=${category.slug}`}
      className={cn(
        "relative rounded-[24px] p-8 lg:p-10 flex flex-col justify-end overflow-hidden group transition-all duration-500 hover:-translate-y-1.5 shadow-sm min-h-[320px]",
        category.className
      )}
    >
      {category.image ? (
        <>
          <Image
            src={category.image}
            alt={category.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
            className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
        </>
      ) : (
        <div 
          className="absolute inset-0 opacity-100 group-hover:scale-110 transition-transform duration-700 ease-out" 
          style={{ backgroundImage: category.bgPattern }}
        />
      )}
      
      <div className="relative z-10">
        <span className="font-serif italic text-sm text-sand/90 block mb-2">{category.count} Stories</span>
        <h3 className="font-serif text-3xl lg:text-4xl font-medium tracking-tight text-white">{category.name}</h3>
      </div>
      
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
