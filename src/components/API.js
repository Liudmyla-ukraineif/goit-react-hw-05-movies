import axios from "axios";

axios.defaults.baseURL ="https://api.themoviedb.org/3";
const API_KEY ="?api_key=e633b089e078da3047049086e70158e9";

export const fetchTrendingMovies = ()=>{
  return axios(`/trending/movie/week${API_KEY}`)
  .then(response => response.data.results)
};

export const searchMovies = movieNameValue =>{
  return axios(`/search/movie${API_KEY}&language=en-US&query=${movieNameValue}&include_adult=false`)
  .then(response => response.data.results)
};

export const detailsMovies = (movieId) =>{
  return axios(`/movie/${movieId}${API_KEY}&language=en-US`)
  .then(response => response.data)
};

export const creditsMovie = movieId =>{
  return axios(`/movie/${movieId}/credits${API_KEY}`)
  .then(response => response.data)
};

export const reviewsMovie = movieId =>{
  return axios(`/movie/${movieId}/reviews${API_KEY}`)
  .then(response => response.data.results)
};