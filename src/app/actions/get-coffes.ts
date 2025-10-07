"use server";

import { COFFE_RECIPES } from "@/mocks";
import type { Coffe } from "@/entities/coffe";

export async function getCoffees(): Promise<Record<string, Coffe>> {
    await new Promise((res) => setTimeout(res, 3500))
    return COFFE_RECIPES;
}
