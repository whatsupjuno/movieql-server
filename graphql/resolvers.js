import { getMovies, getById, addMovie, delMovie } from "./db";

const resolvers = {

  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id)
  },

  Mutation: {
    addMovie: (_, { id, title, mcover }) => addMovie(id, title, mcover),
    delMovie: (_, { id }) => delMovie(id)
  }

};

export default resolvers;


