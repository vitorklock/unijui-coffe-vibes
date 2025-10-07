import { Coffe } from "@/types/coffe";

export const COFFE_RECIPES: Record<string, Coffe> = {
    cappuccino: {
        title: "Cappuccino",
        category: "Cappuccino",
        subtitle: "Drizzled with Caramel",
        rating: 4.8,
        image: "/logo/names/capuccino.png",
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
        category: 'Latte',
        subtitle: "Smooth & Creamy",
        rating: 4.3,
        image: "/logo/names/latte.png",
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

    "bursting-blueberry": {
        title: "Bursting Blueberry",
        category: 'Latte',
        subtitle: "Iced Latte with Blueberry Syrup",
        rating: 4.6,
        image: "/logo/names/bursting-blueberry.png",
        description:
            "A refreshing iced latte swirled with blueberry syrup and creamy milk, finished with a fruity lift.",
        recipe: [
            "Add 2 tbsp blueberry syrup to a tall glass.",
            "Fill the glass with ice.",
            "Pour in 150ml cold milk.",
            "Pull a fresh espresso shot (30-60ml) and pour over the milk.",
            "Stir gently to marble the syrup.",
            "Optional: top with a few mashed blueberries and a lemon zest twist.",
        ],
    },

    "dalgona-wipped-macha": {
        title: "Dalgona Wipped Macha",
        category: 'Latte',
        subtitle: "Fluffy Coffee Cloud over Matcha Milk",
        rating: 4.4,
        image: "/logo/names/dalgona-macha.png",
        description:
            "A playful mash-up: chilled matcha milk crowned with airy dalgona coffee foam.",
        recipe: [
            "In a bowl, whisk 2 tsp instant coffee, 2 tsp sugar, and 2 tsp hot water until thick and foamy (2–3 min).",
            "In a separate cup, whisk 1 tsp matcha with a splash of hot water until smooth.",
            "Add ice to a glass and pour in 180ml cold milk.",
            "Stir the matcha into the milk.",
            "Spoon the dalgona foam on top to create a thick cap.",
            "Optional: drizzle honey or dust with matcha on the foam.",
        ],
    },

    "mocha-latte": {
        title: "Mocha Latte",
        category: "Latte",
        subtitle: "Rich Chocolate Harmony",
        rating: 4.7,
        image: "/logo/names/mocha-latte.jpg",
        description:
            "A luxurious fusion of espresso, steamed milk, and velvety chocolate, topped with elegant latte art.",
        recipe: [
            "Brew a fresh espresso shot (30-60ml).",
            "Add 1 tbsp of cocoa powder or chocolate syrup to your cup.",
            "Pour in the espresso and stir until the chocolate is fully blended.",
            "Steam 180ml of milk until smooth and creamy.",
            "Pour the milk into the cup while creating gentle latte art on top.",
            "Optional: dust lightly with cocoa or add a small piece of dark chocolate for garnish.",
        ],
    },
};
