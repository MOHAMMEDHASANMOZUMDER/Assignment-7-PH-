import { Skeleton } from "@heroui/react";

export default function Loading() {
  return (
    <div className="space-y-5 p-4">
      <Skeleton className="h-32 w-full rounded-lg" />
      <Skeleton className="h-3 w-3/5 rounded-lg" />
      <Skeleton className="h-3 w-4/5 rounded-lg" />
      <Skeleton className="h-3 w-2/5 rounded-lg" />
    </div>
  );
}