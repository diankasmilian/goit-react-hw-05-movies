import axios from 'axios';

const KEY = '11b22fda1e12613c77a804fa2bfa034a';
const moviesApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const getTrendMovies = async () => {
  const {data} = await moviesApi.get('trending/all/day', {
    params: { api_key: KEY },
  });
  return data;
};


export const getSearchMovies = async (value) => {
   const {data} = await moviesApi.get(`search/movie?query=${value}&include_adult=false&language=en-US&page=1`, {
      params: {api_key: KEY },
   })
   return data
}