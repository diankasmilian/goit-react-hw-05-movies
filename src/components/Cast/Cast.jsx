import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'API';
import { List, Item, Name, Charaster } from './Cast.styled';

const Cast = () => {
  const [actors, setActors] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    const getCastAPI = async id => {
      const { cast } = await getCast(id);
      setActors(cast);
    };
    getCastAPI(movieId);
  }, [movieId]);

  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <List>
      {actors.map(actor => (
        <Item key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https:image.tmdb.org/t/p/w500/${actor.profile_path}`
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
  );
};

export default Cast;
