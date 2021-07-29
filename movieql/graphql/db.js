import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/list_movies.json";

export const getMovies = async (limit, rating) => {
  let REQUEST_URL = API_URL;
  if (limit > 0) REQUEST_URL += `?limit=${limit}`;
  if (rating > 0) REQUEST_URL += `&minimum_rating=${rating}`;
  let data = await fetch(REQUEST_URL);
  data = await data.json();
  data = await data.data.movies;
  return data;
};
