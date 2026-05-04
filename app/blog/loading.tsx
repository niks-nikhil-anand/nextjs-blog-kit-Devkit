import { Skeleton } from "@/components/ui/skeleton";
import { SkeletonPostCard } from "@/components/blog/SkeletonPostCard";

export default function BlogLoading() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Skeleton */}
      <header className="pt-20 pb-12 text-center border-b border-rule">
        <div className="container mx-auto max-w-[1320px] px-6">
          <Skeleton className="h-8 w-40 mx-auto mb-4 bg-rule-strong/20" />
          <Skeleton className="h-20 lg:h-32 w-3/4 mx-auto mb-6 bg-rule-strong/20" />
          <Skeleton className="h-12 w-2/3 mx-auto bg-rule-strong/20" />
        </div>
      </header>

      {/* Search Bar Skeleton */}
      <section className="py-8 border-b border-rule">
        <div className="container mx-auto max-w-[1320px] px-6">
          <Skeleton className="h-14 w-full max-w-[680px] mx-auto rounded-full bg-rule-strong/20" />
        </div>
      </section>

      {/* Filter Bar Skeleton */}
      <section className="py-8 border-b border-rule">
        <div className="container mx-auto max-w-[1320px] px-6 flex justify-between items-center">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <Skeleton key={i} className="h-9 w-20 rounded-full bg-rule-strong/20" />
            ))}
          </div>
          <Skeleton className="h-9 w-32 rounded-full bg-rule-strong/20" />
        </div>
      </section>

      {/* Main Grid Skeleton */}
      <section className="py-16 container mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-8">
            {[1, 2, 4, 5, 6].map((i) => (
              <SkeletonPostCard key={i} />
            ))}
          </div>
          
          {/* Sidebar Skeleton */}
          <aside className="flex flex-col gap-12">
            <Skeleton className="h-[320px] w-full rounded-[18px] bg-rule-strong/20" />
            <div className="flex flex-col gap-6">
              <Skeleton className="h-6 w-32 bg-rule-strong/20" />
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex gap-4 items-center">
                  <Skeleton className="size-16 rounded-lg bg-rule-strong/20" />
                  <div className="flex-1 flex flex-col gap-2">
                    <Skeleton className="h-4 w-full bg-rule-strong/20" />
                    <Skeleton className="h-4 w-2/3 bg-rule-strong/20" />
                  </div>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
