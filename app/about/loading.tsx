import { Skeleton } from "@/components/ui/skeleton";

export default function AboutLoading() {
  return (
    <div className="bg-background min-h-screen">
      {/* About Hero Skeleton */}
      <header className="py-20 lg:py-24 container mx-auto max-w-[1320px] px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        <div className="flex flex-col gap-6">
          <Skeleton className="h-8 w-48 bg-rule-strong/20" />
          <Skeleton className="h-24 lg:h-32 w-full bg-rule-strong/20" />
          <Skeleton className="h-20 w-4/5 bg-rule-strong/10" />
          <div className="flex gap-4">
            <Skeleton className="h-12 w-40 rounded-full bg-rule-strong/20" />
            <Skeleton className="h-12 w-32 rounded-full border border-rule-strong/20 bg-transparent" />
          </div>
        </div>
        <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto lg:mx-0">
          <Skeleton className="absolute inset-0 rounded-[50%_50%_50%_50%_/_60%_60%_40%_40%] bg-rule-strong/20" />
        </div>
      </header>

      {/* Manifesto Skeleton */}
      <section className="py-24 border-t border-rule bg-bg-2">
        <div className="container mx-auto max-w-[1320px] px-6 text-center">
          <Skeleton className="h-20 w-12 mx-auto mb-8 bg-rule-strong/20" />
          <Skeleton className="h-16 lg:h-24 w-3/4 mx-auto mb-6 bg-rule-strong/20" />
          <Skeleton className="h-4 w-48 mx-auto bg-rule-strong/10" />
        </div>
      </section>

      {/* Story Section Skeleton */}
      <section className="py-24 border-t border-rule container mx-auto max-w-[1320px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-20">
          <div className="flex flex-col gap-4">
            <Skeleton className="h-4 w-32 bg-rule-strong/20" />
            <Skeleton className="h-16 lg:h-24 w-full bg-rule-strong/20" />
            <Skeleton className="h-12 w-2/3 bg-rule-strong/10" />
          </div>
          <div className="flex flex-col gap-6">
            {[1, 2, 3, 4].map((i) => (
              <Skeleton key={i} className="h-4 w-full bg-rule-strong/10" />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
