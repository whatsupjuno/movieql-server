import { getMovies } from "./db";

const resolvers = {
  
  Query: {
    movies: (_, { rating, limit }) => getMovies(rating, limit)
  }
};

export default resolvers;

  // Query: {
  //   movies: () => getMovies(),
  //   movie: (_, { id }) => getById(id)
  // },
  // Mutation: {
  //   addMovie: (_, { name, score }) => addMovie(name, score),
  //   deleteMovie: (_, { id }) => deleteMovie(id)
  // }