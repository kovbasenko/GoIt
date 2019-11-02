import axios from "axios";

const apiKey = "90ff68dd042e16fe4200aa4321da4c5e";

export const trendsRequest = async () => {
  const trends = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${apiKey}`
  );
  return trends;
};

export const movieDetailsRequest = async (id) => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
  );
  return movie;
};

export const movieCastRequest = async (id) => {
  const movie = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`
  );
  return movie;
};

export const movieReviewsRequest = async (id) => {
  const reviews = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${apiKey}&language=en-US&page=1`
  );
  return reviews;
};

export const movieSearchRequest = async (name) => {
  const movieSearch = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${name}&page=1&include_adult=false`
  );
  return movieSearch;
};
