import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const categories = [
  { 
    name: "Travel", 
    slug: "travel", 
    count: 42, 
    className: "lg:col-span-2 lg:row-span-2 bg-[#b8754a]",
    bgPattern: "radial-gradient(ellipse_at_30%_40%,#f5d896_0_60px,transparent_90px),linear-gradient(180deg,#b8754a_0%,#6a3f24_100%)"
  },
  { 
    name: "Destination", 
    slug: "destination", 
    count: 28, 
    className: "lg:col-span-1 lg:row-span-1 bg-[#4a6580]",
    bgPattern: "linear-gradient(180deg,#4a6580_0%,#2a3548_100%)"
  },
  { 
    name: "Hotels", 
    slug: "hotels", 
    count: 15, 
    className: "lg:col-span-1 lg:row-span-1 bg-[#d2c89e]",
    bgPattern: "linear-gradient(180deg,#d2c89e_0%,#a89868_100%)"
  },
  { 
    name: "Lifestyle", 
    slug: "lifestyle", 
    count: 22, 
    className: "lg:col-span-2 lg:row-span-1 bg-[#f3ede2] text-ink",
    bgPattern: "radial-gradient(circle_at_40%_60%,#d99a6c_0_60px,transparent_80px),linear-gradient(180deg,#e8d4b0_0%,#c8a878_100%)"
  },
];

const accentTiles = [
  { name: "Ink", className: "bg-ink", colorName: "Ink" },
  { name: "Orange", className: "bg-accent", colorName: "Terracotta" },
  { name: "Olive", className: "bg-sage", colorName: "Olive" },
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
          <div className="relative z-10">
            <span className="font-serif italic text-sm text-sand opacity-60">Accent §01</span>
            <h3 className="font-serif text-3xl mt-4 font-medium leading-tight">The Depth of <br /> Midnight Ink.</h3>
          </div>
          <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-sand/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700" />
          <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold opacity-60">Color: Ink</span>
        </div>

        {/* Row 2 Right small */}
        <CategoryCard category={categories[2]} />

        {/* Row 2 Right Accent Orange */}
        <div className="lg:col-span-1 lg:row-span-1 rounded-[24px] bg-accent p-8 flex flex-col justify-between text-background relative overflow-hidden group">
           <div className="relative z-10">
            <span className="font-serif italic text-sm text-background opacity-60">Accent §02</span>
            <h3 className="font-serif text-3xl mt-4 font-medium leading-tight">Warmth of <br /> Terracotta.</h3>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/20 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
          <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold opacity-60">Color: Orange</span>
        </div>

        {/* Row 3 Lifestyle Wide */}
        <CategoryCard category={categories[3]} />

        {/* Row 3 Accent Olive */}
        <div className="lg:col-span-2 lg:row-span-1 rounded-[24px] bg-sage p-10 flex flex-col justify-between text-background relative overflow-hidden group">
          <div className="relative z-10 max-w-[20ch]">
            <span className="font-serif italic text-sm text-sand opacity-60">Accent §03</span>
            <h3 className="font-serif text-4xl mt-4 font-medium leading-tight">Muted tones of Mediterranean Olive.</h3>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-black/10 rounded-full blur-[80px] -mr-32 -mt-32" />
          <span className="relative z-10 text-[10px] uppercase tracking-widest font-bold opacity-60">Color: Olive</span>
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
        "relative rounded-[24px] p-8 lg:p-10 flex flex-col justify-end overflow-hidden group transition-all duration-500 hover:-translate-y-1.5 shadow-sm",
        category.className
      )}
    >
      <div 
        className="absolute inset-0 opacity-100 group-hover:scale-110 transition-transform duration-700 ease-out" 
        style={{ backgroundImage: category.bgPattern }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
      
      <div className="relative z-10">
        <span className="font-serif italic text-sm text-sand/80 block mb-2">{category.count} Stories</span>
        <h3 className="font-serif text-3xl lg:text-4xl font-medium tracking-tight text-white">{category.name}</h3>
      </div>
      
      <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <ArrowRight className="w-4 h-4" />
      </div>
    </Link>
  );
}
