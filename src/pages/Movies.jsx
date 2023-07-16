import { SearchMovies } from "components/SearchMovies/SearchMovies";
import { MoviesList } from "components/MoviesList/MoviesList";
// import { SearchMoviesList } from "components/SearchMovies/SearchMoviesList";
import { useState, useEffect } from "react";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovies } from "API";
import { toast } from 'react-toastify';

const Movies = () => {
   const [value, setValue] = useState('')
   const [movies, setMovies] = useState([])

   useEffect(() => {
   const searchMovie = async (value) => {
      try {
         const {results, total_results} = await getSearchMovies(value)
         
         if (total_results === 0) {
            toast.error('😥OOPS... undefined movie')
            return;
          }

         setMovies(results)
      } catch (error) {
         console.log(error)
      }
   }
   if (value) {
      searchMovie(value)
   }
   }, [value])

   const handleFormSubmit = value => {
      setValue(value);
      setMovies([])
    };
return (
   <div>
      <SearchMovies onSubmit={handleFormSubmit}/>
      <MoviesList movies={movies}/>
      <ToastContainer position="top-center" autoClose={2000} />
   </div>
   
)
}

export default Movies;