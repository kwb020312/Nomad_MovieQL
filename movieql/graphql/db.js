import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovies = async (limit, rating) => {
  let data = await fetch(API_URL);
  data = await data.json();
  data = await data.data.movies;
  return data;
};
