// app/coffes/page.tsx
"use client";

import React, { useEffect, useMemo } from "react";
import CoffeCard from "./_components/coffe-card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import CoffeeDetail from "./_components/coffe-details";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Coffe, COFFE_CATEGORIES } from "@/types/coffe";
import CoffeCardSkeleton from "./_components/coffe-skeletons";
import { getCoffees } from "@/app/actions/get-coffes";

const arraify = (cs: Record<string, Coffe>) => {
  return Object.entries(cs).map(([key, c]) => ({ key, ...c }));
};

const TAB_TRIGGER_CLASS =
  "h-24 rotate-180 [writing-mode:vertical-rl] text-sm font-medium";

function Page() {
  const [open, setOpen] = React.useState(false);
  const [selectedCoffe, setSelectedCoffe] = React.useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  // data from the Server Action
  const [recipesMap, setRecipesMap] = React.useState<Record<string, Coffe> | null>(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const data = await getCoffees();
        if (mounted) {
          setRecipesMap(data);
        }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  const arrayfied = useMemo(
    () => (recipesMap ? arraify(recipesMap) : []),
    [recipesMap]
  );

  const coffes = useMemo(() => {
    if (!arrayfied.length) return [];
    return selectedCategory
      ? arrayfied.filter((r) => r.category === selectedCategory)
      : arrayfied;
  }, [arrayfied, selectedCategory]);

  const coffee = selectedCoffe && recipesMap ? recipesMap[selectedCoffe] : null;

  return (
    <div className="flex gap-6 h-full">

      {/* Category picker */}
      <Tabs
        orientation="vertical"
        className="flex"
        onValueChange={(v) => setSelectedCategory(v || null)}
        defaultValue=""
      >
        <TabsList className="flex flex-col h-full w-8 border-r border-border">
          <TabsTrigger
            className={TAB_TRIGGER_CLASS}
            value={""}
          >
            All
          </TabsTrigger>
          {COFFE_CATEGORIES.map((c) => (
            <TabsTrigger key={c} value={c} className={TAB_TRIGGER_CLASS}>
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Grid of coffees */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 w-full max-h-full mb-auto overflow-y-auto">
        {loading
          ? Array.from({ length: 8 }).map((_, i) => <CoffeCardSkeleton key={i} />)
          : coffes.map((c, i) => (
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
