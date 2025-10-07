// app/coffes/_components/coffe-card-skeleton.tsx
"use client";

import React from "react";
import { cn } from "@/lib/utils";

export default function CoffeCardSkeleton() {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-lg border border-border bg-[#171216] shadow-sm animate-pulse"
      )}
    >
      {/* Top image placeholder */}
      <div className="relative">
        <div className="h-30 w-full rounded-t-lg bg-gradient-to-br from-[#1f1a1e] to-[#221d22]" />
        {/* Rating badge placeholder */}
        <div className="absolute top-2 right-2 h-6 w-10 rounded-md bg-[#252024]" />
      </div>

      {/* Bottom content */}
      <div className="p-4 space-y-2">
        <div className="h-4 w-1/2 rounded bg-[#252024]" />
        <div className="h-3 w-3/4 rounded bg-[#252024]" />
      </div>

      {/* Shimmer overlay */}
      <div className="absolute inset-0 overflow-hidden rounded-lg">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_1.6s_infinite]" />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
