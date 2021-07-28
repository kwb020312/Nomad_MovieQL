import { getById, people } from "./db";

export const resolvers = {
  Query: {
    person: () => getById(),
    people: () => people,
  },
};
