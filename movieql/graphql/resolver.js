import { getById, getMovies, addMovie } from "./db";

export const resolvers = {
  Query: {
    movie: (_, { id }) => getById(id),
    movies: () => getMovies(),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
};
