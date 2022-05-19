export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  image?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
