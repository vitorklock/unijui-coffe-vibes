"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Heart, Star } from "lucide-react";

// Mock database (já do teu código)
const coffeeData: Record<
  string,
  {
    title: string;
    subtitle: string;
    rating: number;
    image: string;
    description: string;
    recipe: string[];
  }
> = {
  cappuccino: {
    title: "Cappuccino",
    subtitle: "Drizzled with Caramel",
    rating: 4.5,
    image: "/names/capuccino.png",
    description:
      "A single espresso shot poured into hot foamy milk, topped with cocoa powder and caramel drizzle.",
    recipe: [
      "Prepare a fresh espresso shot (30ml).",
      "Steam 150ml of milk until foamy.",
      "Pour the espresso into a large cup.",
      "Add the steamed milk, holding back the foam with a spoon.",
      "Spoon the foam on top of the drink.",
      "Sprinkle cocoa powder over the foam.",
      "Drizzle caramel syrup to finish.",
    ],
  },
  latte: {
    title: "Latte",
    subtitle: "Smooth & Creamy",
    rating: 4.7,
    image: "/names/latte.png",
    description:
      "A delicious blend of espresso and steamed milk with a thin layer of foam.",
    recipe: [
      "Brew a double espresso (60ml).",
      "Steam 200ml of milk until silky.",
      "Pour espresso into a tall glass.",
      "Add steamed milk slowly.",
      "Top with a thin layer of microfoam.",
      "Optional: add vanilla syrup.",
    ],
  },
};

export default function CoffeeDetailPage() {
  const params = useParams();
  const coffeeKey = (params?.name as string)?.toLowerCase();
  const coffee = coffeeData[coffeeKey] || coffeeData["cappuccino"];

  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedMilk, setSelectedMilk] = useState<string | null>(null);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#6e5c5b] to-[#b7a6a3] flex flex-col items-center p-4">
      <div className="bg-[#231b1b] rounded-3xl w-full max-w-md shadow-2xl border border-[#3a2c2c]/40 flex flex-col items-center overflow-hidden transition-all">
        {/* Imagem + botão voltar */}
        <div className="relative w-full">
          <a
            href="/dashboard"
            aria-label="Voltar"
            className="absolute top-3 left-3 z-10 bg-[#231b1b]/70 rounded-full p-2 hover:scale-105 transition"
          >
            <ArrowLeft size={22} className="text-[#f5ede3]" />
          </a>
          <img
            src={coffee.image}
            alt={coffee.title}
            className="w-full h-[260px] object-cover"
          />
        </div>

        {/* Conteúdo */}
        <div className="px-6 py-6 w-full">
          {/* Título + subtítulo + favorito */}
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-serif text-[#f5ede3] capitalize">
                {coffee.title}
              </h1>
              <p className="text-[#e7dacb] text-sm">{coffee.subtitle}</p>
              <div className="flex items-center gap-1 mt-1 text-[#e7dacb] text-sm">
                <Star size={16} className="inline-block fill-[#e7dacb]" />
                {coffee.rating}
              </div>
            </div>

            <button
              aria-label="Favoritar"
              onClick={() => setIsFavorite(!isFavorite)}
              className="hover:scale-110 transition"
            >
              <Heart
                size={28}
                className={`${
                  isFavorite
                    ? "fill-red-500 text-red-500"
                    : "text-[#e7dacb] fill-[#e7dacb]"
                }`}
              />
            </button>
          </div>

          {/* Descrição */}
          <p className="text-[#e7dacb]/80 text-base mt-4 mb-4 leading-relaxed">
            {coffee.description}
          </p>

          {/* Escolha do leite */}
          <div className="mt-6">
            <h2 className="text-[#e7dacb] text-base mb-2 font-medium">
              Choice of Milk
            </h2>
            <div className="flex gap-3 flex-wrap">
              {["Oat Milk", "Soy Milk", "Almond Milk"].map((milk) => (
                <button
                  key={milk}
                  onClick={() =>
                    setSelectedMilk(selectedMilk === milk ? null : milk)
                  }
                  className={`border border-[#e7dacb] rounded-md px-4 py-1 text-sm transition ${
                    selectedMilk === milk
                      ? "bg-[#e7dacb] text-[#231b1b]"
                      : "text-[#e7dacb] hover:bg-[#e7dacb] hover:text-[#231b1b]"
                  }`}
                >
                  {milk}
                </button>
              ))}
            </div>
          </div>

          {/* Expansão da receita */}
          {selectedMilk && (
            <div className="mt-6 bg-[#f5ede3] text-[#231b1b] rounded-xl p-4 shadow-md animate-in fade-in slide-in-from-bottom-2">
              <h2 className="text-lg font-bold mb-3">
                {coffee.title} with {selectedMilk}
              </h2>
              <ol className="list-decimal list-inside space-y-2 text-sm">
                {coffee.recipe.map((step, idx) => (
                  <li key={idx}>{step.replace("milk", selectedMilk)}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}