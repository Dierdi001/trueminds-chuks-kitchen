import { useMemo } from "react";

export interface DishItem {
  id: number;
  name: string;
  price: string;
    description: string;
  image: string;
}

export function usePopularDishes(): DishItem[] {
  return useMemo(() => [
    {
    id: 1,
    name: "Jollof Rice & Fried Chicken",
    description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: "N3,500",
    image: "/images/dishes/dish-1.png"
  },
  {
    id: 2,
    name: "Eba & Egusi Soup (Goat Meat)",
    description: "Hearty Egusi soup with tender goat meat, served with soft Eba.",
    price: "N3,500",
    image: "/images/dishes/dish-2.png"
  },
  {
    id: 3,
    name: "Pounded Yam & Edikaikong",
    description: "Traditional pounded yam with rich, leafy Edikaikong soup.",
    price: "N3,800",
    image: "/images/dishes/dish-3.png"
  },
  {
    id: 4,
    name: "Peppered Snail",
    description: "Spicy and savory peppered snail, perfect as a starter.",
    price: "N2,500",
    image: "/images/dishes/dish-4.png"
  },
  {
    id: 5,
    name: "Grilled Tilapia Fish",
    description: "Whole grilled tilapia seasoned with our special spices.",
    price: "N4,500",
    image: "/images/dishes/dish-5.png"
  },
  {
    id: 6,
    name: "Jollof Rice & Fried Chicken",
    description: "Our signature Jollof rice, served with crispy fried chicken and plantain.",
    price: "N3,500",
    image: "/images/dishes/dish-1.png"
  }
  ], []);
}
