import mariadb from "mariadb"

export const pool = mariadb.createPool({
    host: "localhost",
    user: "root",
    password: "root",
    database: "apgqlsrv1mariadb"
})

export const getMovies = async () => {
  const conn = await pool.getConnection()
  return (await conn.query(`SELECT * FROM movieql`))[0]
}


// import fetch from "node-fetch";

// const API_URL = "https://yts.am/api/v2/list_movies.json?";

// export const getMovies = (rating, limit) => {

//     let REQUEST_URL = API_URL

//     if(limit > 0) {
//         REQUEST_URL += `limit=${limit}`
//     }

//     if(rating > 0) {
//         REQUEST_URL += `&minimum_rating=${rating}`
//     }

//     return fetch(REQUEST_URL)
//       .then(res => res.json())
//       .then(json => json.data.movies);
//   };

// let movies = [
//     {
//       id: 0,
//       name: "Star Wars - The new one",
//       score: 1
//     },
//     {
//       id: 1,
//       name: "Avengers - The new one",
//       score: 8
//     },
//     {
//       id: 2,
//       name: "The Godfather I",
//       score: 99
//     },
//     {
//       id: 3,
//       name: "Logan",
//       score: 2
//     }
//   ];

//   export const getMovies = () => movies;
  
//   export const getById = id => {
//     const filteredMovies = movies.filter(movie => movie.id === id);
//     return filteredMovies[0];
//   };
  
//   export const deleteMovie = id => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id);
//     if (movies.length > cleanedMovies.length) {
//       movies = cleanedMovies;
//       return true; // schema의 type에서 return할 대상과 동일해야 한다.
//     } else {
//       return false;
//     }
//   };
  
//   export const addMovie = (name, score) => {
//     const newMovie = {
//       id: `${movies.length + 1}`,
//       name,
//       score
//     };
//     movies.push(newMovie);
//     return newMovie; // schema의 type에서 return할 대상과 동일해야 한다.
//   };