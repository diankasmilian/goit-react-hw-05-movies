import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'API';
import { List, Item, Name, Charaster } from './Cast.styled';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const [actors, setActors] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    const getCastAPI = async id => {
      setIsLoader(true);
      try {
        const { cast } = await getCast(id);
        setActors(cast);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    };
    getCastAPI(movieId);
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <>
      {isLoader && <Loader />}

      {error && <p>Opps...Sorry, something went wrong</p>}
      {actors.length !== 0 && (
        <List>
          {actors.map(actor => (
            <Item key={actor.id}>
              <img
                src={
                  actor.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                    : defaultImg
                }
                alt={actor.original_name}
                width="250"
              />
              <Name>{actor.original_name}</Name>
              {actor.character.length !== 0 ? (
                <Charaster>Character: {actor.character}</Charaster>
              ) : (
                <Charaster>Unknown</Charaster>
              )}
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default Cast;
