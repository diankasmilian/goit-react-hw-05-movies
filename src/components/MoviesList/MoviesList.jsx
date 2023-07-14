import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const MoviesList = ({ movies }) => {
  const [moviesArray, setMoviesArray] = useState([]);

  useEffect(() => {
    const moviesTrand = async () => {
      const { results } = await movies;
      setMoviesArray(results);
    };
    moviesTrand();
  }, [movies]);

  return (
    <ul>
      {moviesArray.map(movie => (
        <li key={movie.id}>
          <Link to={`movies/${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
        
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.object.isRequired,
};
