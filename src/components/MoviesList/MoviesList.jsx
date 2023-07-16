// import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};


MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
     PropTypes.shape({
       id: PropTypes.number.isRequired,
       title: PropTypes.string,
       name: PropTypes.string,
     })
   ).isRequired,
    }