import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetails } from 'API';

const MovieDetails = () => {
  const [data, setData] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    const movieDetailsAPI = async id => {
      try {
        const data = await getMovieDetails(id);
        console.log(data);
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };
    movieDetailsAPI(movieId);
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const userScore = data.vote_average * 10;

  return (
    <div>
      <button>Back</button>

      <div>
        <img
          src={
            data.poster_path
              ? `https:image.tmdb.org/t/p/w500/${data.poster_path}`
              : defaultImg
          }
          alt={data.title}
          width="250"
        />

        <div>
          <h1>{data.title}</h1>

          <p>User score: {userScore}%</p>

          <h2>Overview</h2>
          <p>{data.overview}</p>

          <h2>Genres</h2>
          {data.genres !== undefined ? (
            <p>{data.genres.map(genre => genre.name).join(' ')}</p>
          ) : (
            <p>No genres available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
