import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonPostCard } from "@/components/blog/SkeletonPostCard";

export default function BlogPostLoading() {
  return (
    <div className="bg-background min-h-screen">
      <header className="py-16 lg:py-24 container mx-auto max-w-5xl px-6">
        {/* Breadcrumbs */}
        <Skeleton className="h-4 w-48 mb-10 bg-rule-strong/20" />
        
        {/* Tags */}
        <div className="flex gap-2 mb-6">
          <Skeleton className="h-6 w-16 rounded-full bg-rule-strong/20" />
          <Skeleton className="h-6 w-20 rounded-full bg-rule-strong/20" />
        </div>

        {/* Title & Description */}
        <Skeleton className="h-16 lg:h-24 w-full mb-8 bg-rule-strong/20" />
        <Skeleton className="h-8 w-2/3 mb-10 bg-rule-strong/20" />

        {/* Meta Info */}
        <div className="flex items-center gap-6">
          <Skeleton className="size-11 rounded-full bg-rule-strong/20" />
          <div className="flex flex-col gap-2">
            <Skeleton className="h-4 w-24 bg-rule-strong/20" />
            <Skeleton className="h-3 w-16 bg-rule-strong/20" />
          </div>
          <Skeleton className="h-5 w-32 bg-rule-strong/20" />
          <Skeleton className="h-5 w-24 bg-rule-strong/20" />
        </div>
      </header>

      {/* Cover Image Frame */}
      <div className="container mx-auto max-w-5xl px-6 mb-16">
        <div className="bg-rule-strong/10 rounded-[32px] lg:rounded-[48px] p-4 lg:p-10">
          <Skeleton className="aspect-[2/1] w-full rounded-2xl lg:rounded-3xl bg-rule-strong/20" />
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_220px] gap-16">
          {/* Content Body */}
          <div className="flex flex-col gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Skeleton key={i} className={`h-4 w-full bg-rule-strong/10 ${i % 3 === 0 ? 'w-2/3' : i % 2 === 0 ? 'w-5/6' : ''}`} />
            ))}
            <Skeleton className="h-64 w-full rounded-xl bg-rule-strong/10 my-8" />
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className={`h-4 w-full bg-rule-strong/10 ${i % 2 === 0 ? 'w-4/5' : ''}`} />
            ))}
          </div>

          {/* Sidebar TOC */}
          <aside className="hidden lg:block">
            <div className="flex flex-col gap-4">
              <Skeleton className="h-6 w-32 mb-2 bg-rule-strong/20" />
              {[1, 2, 3, 4, 5].map((i) => (
                <Skeleton key={i} className="h-4 w-full bg-rule-strong/10" />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
