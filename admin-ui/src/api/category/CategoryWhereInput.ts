import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PostListRelationFilter } from "../post/PostListRelationFilter";

export type CategoryWhereInput = {
  desciption?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  posts?: PostListRelationFilter;
};
