import { getTrendMovies } from "API";
import { useEffect, useState } from 'react';
import { MoviesList } from "components/MoviesList/MoviesList";
import { Loader } from "components/Loader/Loader";

const Home = () => {
  const [moviesArray, setMoviesArray] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

useEffect(() => {
  const moviesTrand = async () => {
    setIsLoader(true)
    try {
      const { results } = await getTrendMovies();
    setMoviesArray(results);
    } catch (error) {
      setError(error)
    } finally {
      setIsLoader(false)
    }
    
  };
  moviesTrand();
}, []);


return (
   <>
   {isLoader && <Loader/>}
   {error && <p>Opps...Sorry, something went wrong</p>}
   {moviesArray && <MoviesList movies={moviesArray}/>}
     
   </>
)
}

export default Home;