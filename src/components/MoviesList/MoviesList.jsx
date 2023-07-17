import { useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { List, Card, Item, Title } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <List>
      {movies.map(movie => (
        <Item key={movie.id}>
          <Card to={`/movies/${movie.id}`} state={{ from: location }}>
            <img
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title || movie.name}
              width="250"
            />
            <Title>{movie.title || movie.name}</Title>
          </Card>
        </Item>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      name: PropTypes.string,
      poster_path: PropTypes.string
    })
  ).isRequired,
};
