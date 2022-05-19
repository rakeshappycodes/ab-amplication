import { CategoryCreateNestedManyWithoutPostsInput } from "./CategoryCreateNestedManyWithoutPostsInput";

export type PostCreateInput = {
  category?: CategoryCreateNestedManyWithoutPostsInput;
  description?: string | null;
  image?: string | null;
  status?: "Draft" | "Published" | "Hidden" | null;
  title?: string | null;
};
