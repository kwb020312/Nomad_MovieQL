import { getById, people } from "./db";

export const resolvers = {
  Query: {
    person: (_, { id }) => getById(id),
    people: () => people,
  },
};
