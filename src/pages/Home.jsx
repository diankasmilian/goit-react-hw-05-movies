import { getTrendMovies } from "API";
import { useEffect, useState } from 'react';
import { MoviesList } from "components/MoviesList/MoviesList";

const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);

useEffect(() => {
  const moviesTrand = async () => {
    const { results } = await getTrendMovies();
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