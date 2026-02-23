export interface DishItem {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
  category: Category;
}
export type Category =
| "all"
  | "popular"
  | "jollof"
  | "swallow";