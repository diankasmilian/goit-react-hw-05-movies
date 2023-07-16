import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'API';
import { List, TitleName, Text } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();
  useEffect(() => {
    const getReviewsAPI = async id => {
      const { results } = await getReviews(id);
      setReviews(results);
    };
    getReviewsAPI(movieId);
  }, [movieId]);

  return (
    reviews.length !== 0 ? (
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
  )
  )
};

export default Reviews;
