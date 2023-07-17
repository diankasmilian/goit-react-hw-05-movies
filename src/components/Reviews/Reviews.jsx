import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'API';
import { List, TitleName, Text } from './Reviews.styled';
import { Loader } from 'components/Loader/Loader';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    const getReviewsAPI = async id => {
      setIsLoader(true);
      try {
        const { results } = await getReviews(id);
        setReviews(results);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoader(false);
      }
    };
    getReviewsAPI(movieId);
  }, [movieId]);

  return (
    <> 
    {isLoader && <Loader/>}
    {error && <p>Opps...Sorry, something went wrong</p>}
    {reviews.length !== 0 ? (
    <List>
      {reviews.map(review => (
        <li key={review.id}>
          <TitleName>Author: {review.author}</TitleName>
          <Text>{review.content}</Text>
        </li>
      ))}
    </List>
  ) : (
    <p>Sory, we don`t have reviews</p>
  )}
  </>
  )
};

export default Reviews;
