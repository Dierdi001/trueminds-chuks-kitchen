import { useMemo } from "react";
import { DishItem } from "./usePopularDishes";

export function useSwallowAndSoups(): DishItem[] {
  return useMemo(() => [
    {
        id: 1,
        name: "Amala with Gbegiri and Ewedu",
        description: "Classic Amala served with Gbegiri and Ewedu soups.",
        price: "N3,100",
        image: "/images/dishes/jollof-1.png"
    },
    {
        id: 2,
        name: "Fufu & Okra Soup",
        description: "Light fufu served with a fresh okra soup and tilapia fish.",
        price: "N3,300",
        image: "/images/dishes/dish-1.png"
    },
    {
        id: 3,
        name: "Fufu & Okra Soup",
        description: "Light fufu served with a fresh okra soup and tilapia fish.",
        price: "N3,300",
        image: "/images/dishes/dish-1.png"
    },
  ], []);
}