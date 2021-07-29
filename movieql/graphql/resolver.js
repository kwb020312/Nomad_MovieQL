import { getMovies } from "./db";

export const resolvers = {
  Query: {
    movies: () => getMovies(),
  },
};
