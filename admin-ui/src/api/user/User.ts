export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  image: string | null;
  lastName: string | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
