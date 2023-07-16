import { useEffect, useState, useRef, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'API';
import { BsChevronLeft } from 'react-icons/bs';
import { Button, InfoContainer, Container } from './MovieDetails.styled';

const MovieDetails = () => {
  const [data, setData] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    const movieDetailsAPI = async id => {
      try {
        const data = await getMovieDetails(id);
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
    <Container>
      <Button to={backLinkLocation.current}>
        <BsChevronLeft />
      </Button>

      <InfoContainer>
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
          {data.genres ? (
            <p>{data.genres.map(genre => genre.name).join(' ')}</p>
          ) : (
            <p>No genres available</p>
          )}
        </div>
      </InfoContainer>
      <h2>Additional information</h2>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
