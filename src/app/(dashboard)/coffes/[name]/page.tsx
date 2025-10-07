// app/coffes/[name]/page.tsx
"use client";

import { useParams } from "next/navigation";
import { COFFE_RECIPES } from "@/mocks";
import CoffeeDetail from "../_components/coffe-details";

export default function CoffeeDetailPage() {
  const params = useParams<{ name?: string }>();
  const coffeeKey = (params?.name ?? "").toLowerCase();
  const coffee = COFFE_RECIPES[coffeeKey] || COFFE_RECIPES["cappuccino"];

  return (
    <CoffeeDetail
      coffee={coffee}
      backHref="/coffes"
      defaultFavorite={false}
      // milkOptions={["Oat Milk", "Soy Milk", "Almond Milk"]} // optional override
      onFavoriteChange={(fav) => console.log("favorite?", fav)}
      onMilkChange={(milk) => console.log("milk:", milk)}
    />
  );
}
