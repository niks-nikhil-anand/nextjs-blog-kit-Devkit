import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonPostCard } from "@/components/blog/SkeletonPostCard";

export default function RootLoading() {
  return (
    <div className="flex flex-col gap-0 bg-background min-h-screen">
      {/* Hero Section Skeleton */}
      <section className="py-20 lg:py-32 container mx-auto max-w-[1320px] px-6 flex flex-col items-center text-center">
        <Skeleton className="h-4 w-32 mb-6 bg-rule-strong/20" />
        <Skeleton className="h-24 lg:h-40 w-3/4 mb-8 bg-rule-strong/20" />
        <Skeleton className="h-6 w-2/3 mb-10 bg-rule-strong/10" />
        <div className="flex gap-4">
          <Skeleton className="h-14 w-44 rounded-full bg-rule-strong/20" />
          <Skeleton className="h-14 w-44 rounded-full border border-rule-strong/20" />
        </div>
      </section>

      {/* Featured Posts Skeleton */}
      <section className="py-24 border-t border-rule">
        <div className="container mx-auto max-w-[1320px] px-6">
          <Skeleton className="h-10 w-64 mb-12 bg-rule-strong/20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3].map((i) => (
              <SkeletonPostCard key={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Posts Skeleton */}
      <section className="py-24 border-t border-rule bg-bg-2">
        <div className="container mx-auto max-w-[1320px] px-6">
          <Skeleton className="h-10 w-48 mb-12 bg-rule-strong/20" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <SkeletonPostCard key={i} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
