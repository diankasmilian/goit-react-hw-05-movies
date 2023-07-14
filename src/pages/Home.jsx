import { getTrendMovies } from "API";
import { MoviesList } from "components/MoviesList/MoviesList";

const Home = () => {
const movies = getTrendMovies();

return (
   <main>
     <MoviesList movies={movies}/>
   </main>
)
}

export default Home;