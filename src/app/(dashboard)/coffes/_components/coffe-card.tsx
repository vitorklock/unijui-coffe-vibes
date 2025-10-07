"use client";

import { Star } from "lucide-react";
import type { Coffe } from "@/types/coffe";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { cn } from "@/lib/utils";
import React from "react";

interface CoffeCardProps extends React.HTMLAttributes<HTMLDivElement> {
  coffee: Coffe;
  overlay?: React.ReactNode;
}

export default function CoffeCard({
  coffee,
  className,
  overlay,
  onClick,
  ...rest
}: CoffeCardProps) {

  // <div
  //   {...rest}
  //   onClick={onClick}
  //   className={cn(
  //     "group cursor-pointer block w-full rounded-2xl focus:outline-none"
  //   )}
  //   aria-label={`${coffee.title} details`}
  // >
  //   {content}
  // </div>

  return (
    <Card
      aria-label={`${coffee.title} details`}
      {...rest}
      className={cn(
        "group cursor-pointer relative overflow-hidden rounded-2xl bg-surface-700 border border-surface-600/40 hover:shadow-lg transition-shadow focus:outline-none",
        className
      )}
      onClick={onClick}
    >
      <AspectRatio ratio={16 / 9} className="relative">
        <img
          src={coffee.image}
          alt={coffee.title}
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Optional top-left overlay */}
        {overlay ? <div className="absolute top-2 left-2 z-10">{overlay}</div> : null}

        {/* Frosted rating square — top right */}
        <div className="absolute top-2 right-2 z-10">
          <div
            aria-label={`Rated ${coffee.rating} stars`}
            className={cn(
              "h-11 w-11 rounded-lg",
              "bg-surface-800/40 border border-primary/20 text-primary",
              "backdrop-blur-md shadow-sm",
              "flex flex-col items-center justify-center leading-none",
              "transition-colors",
              "group-hover:bg-surface-800/55 group-hover:border-primary/30"
            )}
          >
            <Star size={14} className="mb-0.5 text-primary fill-current" />
            <span className="text-[10px] font-medium">{coffee.rating}</span>
          </div>
        </div>
      </AspectRatio>

      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="text-primary font-serif text-lg leading-tight truncate">
              {coffee.title}
            </h3>
            <p className="text-primary/80 text-xs truncate">{coffee.subtitle}</p>
          </div>
        </div>
      </CardContent>

      {/* Glow bar (group hover/focus) */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-6 right-6 bottom-1 h-0.5 rounded-full",
          "bg-gradient-to-r from-primary/0 via-primary to-primary/0",
          "opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100 group-focus-within:opacity-100"
        )}
      />
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-10 right-10 bottom-0 h-8 rounded-full",
          "bg-primary/25 blur-xl",
          "opacity-0 transition-opacity duration-300",
          "group-hover:opacity-100 group-focus-within:opacity-100"
        )}
      />
    </Card>
  );

}
