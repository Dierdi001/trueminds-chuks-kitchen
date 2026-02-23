import { useMemo } from "react";

export interface CategoryItem {
  id: string;
  title: string;
  image: string;
}

export function usePopularCategories(): CategoryItem[] {
  return useMemo(() => [
    {
      id: "jollof-1",
      title: "Jollof Delights",
      image: "/images/categories/categ-image-1.png",
    },
    {
      id: "swallow-2",
      title: "Swallow & Soups",
      image: "/images/categories/categ-image-2.png",
    },
    {
      id: "grills-2",
      title: "Grills & BBQ",
      image: "/images/categories/categ-image-3.png",
    },
    {
      id: "sweat-1",
      title: "Sweat & Grills",
      image: "/images/categories/categ-image-4.png",
    },
    {
      id: "jollof-2",
      title: "Jollof Delights",
      image: "/images/categories/categ-image-5.png",
    },
    {
      id: "jollof-3",
      title: "Jollof Delights",
      image: "/images/categories/categ-image-3.png",
    },
  ], []);
}
