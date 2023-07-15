import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from 'API';

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
    <ul>
      {actors.map(actor => (
        <li key={actor.id}>
          <img
            src={
              actor.profile_path
                ? `https:image.tmdb.org/t/p/w500/${actor.profile_path}`
                : defaultImg
            }
            alt={actor.original_name}
            width='250'
          />
          <h3>{actor.original_name}</h3>
          <p>Character: {actor.character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
