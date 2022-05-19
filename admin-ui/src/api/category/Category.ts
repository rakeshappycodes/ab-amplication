import { Post } from "../post/Post";

export type Category = {
  createdAt: Date;
  desciption: string | null;
  id: string;
  name: string | null;
  posts?: Array<Post>;
  updatedAt: Date;
};
