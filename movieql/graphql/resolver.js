import { getById, getMovies, addMovie, deleteMovie } from "./db";

export const resolvers = {
  Query: {
    movie: (_, { id }) => getById(id),
    movies: () => getMovies(),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};
