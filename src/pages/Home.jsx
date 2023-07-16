import { getTrendMovies } from "API";
import { useEffect, useState } from 'react';
import { MoviesList } from "components/MoviesList/MoviesList";

const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);
// const movies = getTrendMovies();

useEffect(() => {
  const moviesTrand = async () => {
    const { results } = await getTrendMovies();
    console.log(results)
    setMoviesArray(results);
  };
  moviesTrand();
}, []);


return (
   <div>
     <MoviesList movies={moviesArray}/>
   </div>
)
}

export default Home;