import { useEffect, useState, useRef, Suspense } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from 'API';
import { BsChevronLeft } from 'react-icons/bs';
import {
  Button,
  InfoContainer,
  Container,
  Title,
  Text,
  SecondTitle,
  List,
  Info,
} from './MovieDetails.styled';

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
          <Title>{data.title}</Title>

          <Text>User score: {userScore}%</Text>

          <SecondTitle>Overview</SecondTitle>
          <Text>{data.overview}</Text>

          <SecondTitle>Genres</SecondTitle>
          {data.genres.length !== 0 ? (
            <Text>{data.genres.map(genre => genre.name).join(' ')}</Text>
          ) : (
            <Text>No genres available</Text>
          )}
        </div>
      </InfoContainer>
      <h2>Additional information</h2>
      <List>
        <li>
          <Info to="cast">Cast</Info>
        </li>
        <li>
          <Info to="reviews">Reviews</Info>
        </li>
      </List>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default MovieDetails;
