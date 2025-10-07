// app/coffes/page.tsx
"use client";

import React, { useEffect, useMemo } from "react";
import { COFFE_RECIPES } from "@/mocks";
import CoffeCard from "./_components/coffe-card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import CoffeeDetail from "./_components/coffe-details";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffe, COFFE_CATEGORIES } from "@/types/coffe";

const arraify = (cs: Record<string, Coffe>) => {
  return Object.entries(cs).map(([key, c]) => ({ key, ...c }))
};

const arrayfied = arraify(COFFE_RECIPES);

// const recipes = [
//   arrayfied,
//   arrayfied,
//   arrayfied,
//   arrayfied,
//   arrayfied,
//   arrayfied,
//   arrayfied,
//   arrayfied,
// ].flat();

const TAB_TRIGGER_CLASS = "h-24 rotate-180 [writing-mode:vertical-rl] text-sm font-medium";

function Page() {
  const [open, setOpen] = React.useState(false);
  const [selectedCoffe, setSelectedCoffe] = React.useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const coffes = useMemo(() => {
    return selectedCategory ? arrayfied.filter(r => r.category === selectedCategory) : arrayfied;
  }, [selectedCategory]);

  const coffee = selectedCoffe ? COFFE_RECIPES[selectedCoffe] : null;

  return (
    <div className="flex gap-6 h-full">

      {/* Category picker */}
      <Tabs
        orientation="vertical"
        className="flex"
        onValueChange={setSelectedCategory}
      >
        <TabsList className="flex flex-col h-full w-8 border-r border-border">
          <TabsTrigger
            className={TAB_TRIGGER_CLASS}
            // @ts-expect-error
            value={null}
          >
            All
          </TabsTrigger>
          {COFFE_CATEGORIES.map((c) => (
            <TabsTrigger
              key={c}
              value={c}
              className={TAB_TRIGGER_CLASS}
            >
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Grid of coffees */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-h-full mb-auto overflow-y-auto">
        {coffes.map((c, i) => (
          <CoffeCard
            key={`${c.key}-${i}`}
            coffee={c}
            onClick={() => {
              setSelectedCoffe(c.key);
              setOpen(true);
            }}
          />
        ))}
      </div>

      {/* Modal with CoffeeDetail */}
      <Dialog
        open={open}
        onOpenChange={(next) => {
          if (!next) {
            setOpen(false);
            // small delay to avoid flicker before unmount
            setTimeout(() => setSelectedCoffe(null), 150);
          } else {
            setOpen(true);
          }
        }}
      >
        <DialogContent
          className={cn(
            "p-0 gap-0 border-none bg-transparent shadow-none w-full max-w-[80%]"
          )}
        >
          {coffee ? (
            <CoffeeDetail
              coffee={coffee}
              className="w-full"
              // showBackButton={false}  
              backHref="/coffes"
              onBack={() => {
                setSelectedCoffe(null);
                setOpen(false);
              }}
            />
          ) : null}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Page;
