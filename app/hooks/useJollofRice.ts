import { useMemo } from "react";
import { DishItem } from "./usePopularDishes";

export function useJollofRiceEntrees(): DishItem[] {
  return useMemo(() => [
    {
        id: 1,
        name: "Jollof Rice & Smoked Fish",
        description: "Flavorful jollof rice served with perfectly smoked fish.",
        price: "N3,500",
        image: "/images/dishes/jollof-1.png"
    },
    {
        id: 2,
        name: "Party Jollof Rice (Veg)",
        description: "Vegetarian Party jollof, full of rich flavors.",
        price: "N3,500",
        image: "/images/dishes/dish-1.png"
    },
    {
        id: 3,
        name: "Party Jollof Rice (Veg)",
        description: "Vegetarian Party jollof, full of rich flavors.",
        price: "N3,500",
        image: "/images/dishes/dish-1.png"
    },
  ], []);
}