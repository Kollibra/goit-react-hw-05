import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNWEwMzgxOWQzYTI2MTRlMmU3YWNkM2JhNzA1MjVlNiIsInN1YiI6IjY1ZWNkNDYwZTkzZTk1MDE2MWRmYTNkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CSB1CuBbaasEgiECRk8mupQNqy54HI_4F1e0mPdUWRs';
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