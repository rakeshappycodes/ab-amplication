import { Category } from "../category/Category";

export type Post = {
  category?: Array<Category>;
  createdAt: Date;
  description: string | null;
  id: string;
  image: string | null;
  status?: "Draft" | "Published" | "Hidden" | null;
  title: string | null;
  updatedAt: Date;
};
