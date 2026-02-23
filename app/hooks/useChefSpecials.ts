export interface ChefSpecial {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
}

export function useChefSpecials(): ChefSpecial[] {
  return [
    {
      id: 1,
      title: "Spicy Tilapia Pepper Soup",
      description:
        "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
      price: "N3,500",
      image: "/images/categories/categ-image-3.png",
    },
    {
      id: 2,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "N3,500",
      image: "/images/categories/categ-image-3.png",
    },
    {
      id: 3,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "N3,500",
      image: "/images/categories/categ-image-3.png",
    },
    {
      id: 4,
      title: "Jollof Rice & Fried Chicken",
      description:
        "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
      price: "N3,500",
      image: "/images/categories/categ-image-3.png",
    },
    {
      id: 5,
      title: "Egusi Soup & Pounded Yam",
      description:
        "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
      price: "N3,500",
      image: "/images/categories/categ-image-3.png",
    },
  ];
}
