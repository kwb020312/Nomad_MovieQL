import fetch from "node-fetch";

const API_URL = "https://yts.am/api/v2/";

export const getMovies = async (limit, rating) => {
  let LIST_MOVIES_URL = `${API_URL}list_movies.json`;
  if (limit > 0) LIST_MOVIES_URL += `?limit=${limit}`;
  if (rating > 0) LIST_MOVIES_URL += `&minimum_rating=${rating}`;
  let data = await fetch(LIST_MOVIES_URL);
  data = await data.json();
  data = await data.data.movies;
  return data;
};

export const getMovie = async (id) => {
  const MOVIE_DETAILS_URL = `${API_URL}movie_details.json?movie_id=${id}`;
  let data = await fetch(MOVIE_DETAILS_URL);
  data = await data.json();
  data = await data.data.movie;
  return data;
};

export const getSuggestions = async (id) => {
  const MOVIE_SUGGESTIONS_URL = `${API_URL}movie_suggestions.json?movie_id=${id}`;
  let data = await fetch(MOVIE_SUGGESTIONS_URL);
  data = await data.json();
  data = await data.data.movies;
  return data;
};
