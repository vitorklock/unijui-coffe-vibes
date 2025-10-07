
export const COFFE_CATEGORIES = [
    'Cappuccino',
    'Latte',
    'Americano',
    'Espresso',
    'Flat White',
    'Black'
]

export namespace Coffe {

    export type Category = (typeof COFFE_CATEGORIES)[number]

}

export interface Coffe {
    title: string;
    subtitle: string;
    rating: number;
    image: string;
    description: string;
    recipe: string[];
    category: Coffe.Category;
}