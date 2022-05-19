import { PostUpdateManyWithoutCategoriesInput } from "./PostUpdateManyWithoutCategoriesInput";

export type CategoryUpdateInput = {
  desciption?: string | null;
  name?: string | null;
  posts?: PostUpdateManyWithoutCategoriesInput;
};
