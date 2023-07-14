import { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { PropTypes } from "prop-types"

export const MoviesList = ({movies}) => {
const [moviesArray, setMoviesArray] = useState([])

useEffect(() => {
const moviesTrand = async () => {
   const {results} = await movies;
   setMoviesArray(results)
}
moviesTrand()
}, [movies])

return (
   <ul>
      {moviesArray.map(movie => (
         <li key={movie.id}>
            <NavLink to={`${movie.id}`}>{movie.title || movie.name}</NavLink>
         </li>
      ))}
   </ul>
)
}

MoviesList.propTypes = {
   movies: PropTypes.object.isRequired,
}