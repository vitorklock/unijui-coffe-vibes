// components/CoffeeDetail.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Heart, Star } from "lucide-react";
import type { Coffe } from "@/types/coffe";

// shadcn/ui
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

// utils
import { cn } from "@/lib/utils";

type CoffeeDetailProps = {
  onBack?: () => void;
  coffee: Coffe;
  backHref?: string;
  defaultFavorite?: boolean;
  milkOptions?: string[];
  className?: string;
  onFavoriteChange?: (isFavorite: boolean) => void;
  onMilkChange?: (milk: string | null) => void;
};

export default function CoffeeDetail({
  coffee,
  backHref = "/coffes",
  defaultFavorite,
  milkOptions = ["Oat Milk", "Soy Milk", "Almond Milk"],
  className,
  onFavoriteChange,
  onMilkChange,
  onBack,
}: CoffeeDetailProps) {
  const [isFavorite, setIsFavorite] = useState(!!defaultFavorite);
  const [selectedMilk, setSelectedMilk] = useState<string | null>(null);

  const recipeOpen = !!selectedMilk;

  return (
    <div
      className={cn(
        "w-full p-4 flex gap-6",
        className
      )}
    >
      <Card className="w-full max-w-md mx-auto overflow-hidden rounded-3xl bg-surface-700 border border-surface-600/40 shadow-2xl">
        {/* Hero image (shrinks when recipe opens) */}
        <div
          className="relative w-full overflow-hidden transition-[height] duration-300 ease-in-out h-[260px]"
        >
          <Button
            asChild
            size="icon"
            variant="secondary"
            className="absolute top-3 left-3 z-10 bg-surface-700/70"
          >
            <Link href={backHref} onClick={onBack} aria-label="Voltar">
              <ArrowLeft className="text-primary" />
            </Link>
          </Button>

          <img src={coffee.image} alt={coffee.title} className="w-full h-full object-cover" />
        </div>

        <CardContent className="p-6">
          {/* Title row */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-2xl font-serif text-primary capitalize">{coffee.title}</h2>
              <div className="flex gap-4">
                <p className="text-primary text-sm">{coffee.subtitle}</p>
                <div className="flex items-center gap-1 text-primary text-xs">
                  <Star size={10} className="inline-block text-warning fill-current" />
                  {coffee.rating}
                </div>
              </div>
            </div>

            <Toggle
              pressed={isFavorite}
              onPressedChange={(pressed) => {
                setIsFavorite(pressed);
                onFavoriteChange?.(pressed);
              }}
              aria-label="Favoritar"
              className="data-[state=on]:bg-wrong/20 cursor-pointer"
            >
              <Heart size={24} className={cn("fill-current", isFavorite ? "text-wrong" : "text-primary")} />
            </Toggle>
          </div>

          {/* Description */}
          <p className="text-primary/80 text-base mt-4 leading-relaxed">{coffee.description}</p>

          <Separator className="my-4 bg-surface-600/40" />

          {/* Milk choices */}
          <div>
            <h2 className="text-primary text-base mb-2 font-medium">Choice of Milk</h2>
            <div className="flex gap-3 flex-wrap">
              {milkOptions.map((milk) => {
                const active = selectedMilk === milk;
                return (
                  <Button
                    key={milk}
                    variant={active ? "default" : "outline"}
                    onClick={() => {
                      const next = active ? null : milk;
                      setSelectedMilk(next);
                      onMilkChange?.(next);
                    }}
                    className={cn(
                      "px-4 py-1 text-sm border-primary",
                      active
                        ? "bg-primary text-surface-700"
                        : "text-primary hover:bg-primary hover:text-surface-700"
                    )}
                  >
                    {milk}
                  </Button>
                );
              })}
            </div>
          </div>
        </CardContent>
      </Card>
      {/* Recipe (scrollable) */}
      {recipeOpen && (
        <div className="mt-6 bg-primary text-surface-700 rounded-xl shadow-md flex-grow">
          <div className="p-4">
            <h3 className="text-lg font-bold mb-2">
              {coffee.title} with {selectedMilk}
            </h3>
          </div>

          <ScrollArea className="max-h-72">
            <ol className="list-decimal list-inside space-y-2 text-sm px-4 pb-4 pr-6">
              {coffee.recipe.map((step, idx) => (
                <li key={idx}>{step.replace(/milk/gi, selectedMilk!)}</li>
              ))}
            </ol>
          </ScrollArea>
        </div>
      )}
    </div>
  );
}
