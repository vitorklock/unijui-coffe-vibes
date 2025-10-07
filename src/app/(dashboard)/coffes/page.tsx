// app/coffes/page.tsx
"use client";

import React from "react";
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

const recipes = [
  arrayfied,
  arrayfied,
  arrayfied,
  arrayfied,
  arrayfied,
  arrayfied,
  arrayfied,
  arrayfied,
].flat();

function Page() {
  const [open, setOpen] = React.useState(false);
  const [selectedKey, setSelectedKey] = React.useState<string | null>(null);

  const coffee = selectedKey ? COFFE_RECIPES[selectedKey] : null;

  return (
    <div className="flex gap-6 h-full">

      {/* Category picker */}
      <Tabs defaultValue="Cappuccino" orientation="vertical" className="flex">
        {/* Sidebar Tabs */}
        <TabsList className="flex flex-col h-full w-8 border-r border-border">
          {COFFE_CATEGORIES.map((c) => (
            <TabsTrigger
              key={c}
              value={c}
              className="h-24 rotate-180 [writing-mode:vertical-rl] text-sm font-medium"
            >
              {c}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      {/* Grid of coffees */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 flex-grow overflow-y-auto">
        {recipes.map((c) => (
          <CoffeCard
            key={c.key}
            coffee={c}
            onClick={() => {
              setSelectedKey(c.key);
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
            setTimeout(() => setSelectedKey(null), 150);
          } else {
            setOpen(true);
          }
        }}
      >
        <DialogContent
          className={cn(
            "p-0 gap-0 border-none bg-transparent shadow-none",
            "sm:max-w-[520px] w-full"
          )}
        >
          {coffee ? (
            <CoffeeDetail
              coffee={coffee}
              className="w-full"
              // showBackButton={false}  
              backHref="/coffes"
              onBack={() => {
                setSelectedKey(null);
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
