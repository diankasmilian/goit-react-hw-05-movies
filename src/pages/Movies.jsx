import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSearchMovies } from 'API';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    const searchMovie = async value => {
      setIsLoader(true);
      try {
        const { results, total_results } = await getSearchMovies(value);

        if (total_results === 0) {
          toast.error('😥OOPS... undefined movie');
          return;
        }

        setMovies(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    };
    if (query) {
      searchMovie(query);
    }
  }, [query, setSearchParams]);

  const handleFormSubmit = value => {
    setSearchParams({ query: value.trim() });
  };
  return (
    <div>
      <SearchMovies onSubmit={handleFormSubmit} />
      {isLoader && <Loader />}
      {error && <p>Opps...Sorry, something went wrong</p>}
      {movies.length !== 0 && <MoviesList movies={movies} />}

      <ToastContainer position="top-center" autoClose={2000} />
    </div>
  );
};

export default Movies;
