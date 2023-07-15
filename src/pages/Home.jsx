import { getTrendMovies } from "API";
import { MoviesList } from "components/MoviesList/MoviesList";

const Home = () => {
const movies = getTrendMovies();

return (
   <div>
     <MoviesList movies={movies}/>
   </div>
)
}

export default Home;