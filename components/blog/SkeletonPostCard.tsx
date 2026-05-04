import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonPostCard() {
  return (
    <div className="flex flex-col gap-5">
      <Skeleton className="aspect-[5/4] w-full rounded-[20px] bg-rule-strong/20" />
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <Skeleton className="h-5 w-16 rounded-full bg-rule-strong/20" />
          <Skeleton className="h-5 w-24 rounded-full bg-rule-strong/20" />
        </div>
        <Skeleton className="h-8 w-3/4 bg-rule-strong/20" />
        <Skeleton className="h-4 w-full bg-rule-strong/20" />
        <Skeleton className="h-4 w-2/3 bg-rule-strong/20" />
      </div>
    </div>
  );
}
