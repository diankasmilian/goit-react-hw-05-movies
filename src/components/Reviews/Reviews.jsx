import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'API';

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

  return reviews === [] ? (
    'Sory, we don`t have reviews'
  ) : (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default Reviews;
