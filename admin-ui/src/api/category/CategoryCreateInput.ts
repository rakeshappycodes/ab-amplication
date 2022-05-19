import { PostCreateNestedManyWithoutCategoriesInput } from "./PostCreateNestedManyWithoutCategoriesInput";

export type CategoryCreateInput = {
  desciption?: string | null;
  name?: string | null;
  posts?: PostCreateNestedManyWithoutCategoriesInput;
};
