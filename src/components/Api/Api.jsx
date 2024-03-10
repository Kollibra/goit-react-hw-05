import axios from 'axios';

const API_KEY =
  'a5a03819d3a2614e2e7acd3ba70525e6';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`;

export const getTrendMovies = async () => {
  const response = await axios.get('trending/movie/day');
  return response.data.results;
};

export const getFilmsByQuery = async query => {
  const response = await axios.get('search/movie', {
    params: {
      query: query,
    },
  });
  return response.data.results;
};

export const getMoviesId = async movieId => {
  const response = await axios.get(`movie/${movieId}`);
  return response.data;
};

export const getMoviesCast = async movieId => {
  const response = await axios.get(`/movie/${movieId}/credits`);
  return response.data;
};

export const getMoviesReviews = async movieId => {
  const response = await axios.get(`/movie/${movieId}/reviews`);
  return response.data.results;
};