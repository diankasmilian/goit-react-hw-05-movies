import { NavLink } from "react-router-dom"
import { PropTypes } from "prop-types"

export const SearchMoviesList = ({movies}) => {
   return (
      <ul>
         {movies.map(movie => (
            <li key={movie.id}>
               <NavLink to={`${movie.id}`}>{movie.title || movie.name}</NavLink>
            </li>
         ))}
      </ul>
   )
}

SearchMoviesList.propTypes = {
   movies: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        name: PropTypes.string,
      })
    ).isRequired,
}