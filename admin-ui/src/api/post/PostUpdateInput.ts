import { CategoryUpdateManyWithoutPostsInput } from "./CategoryUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  category?: CategoryUpdateManyWithoutPostsInput;
  description?: string | null;
  image?: string | null;
  status?: "Draft" | "Published" | "Hidden" | null;
  title?: string | null;
};
