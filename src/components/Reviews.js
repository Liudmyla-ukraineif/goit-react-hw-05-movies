import { useEffect, useState } from "react";
import { reviewsMovie } from '../components/API';

import { useParams } from "react-router-dom";
import { Author, AuthorReview} from '../components/Reviews.styled';

const Reviews = () => {
  const [ reviews, setReviews ] = useState([]);
  const { movieId }= useParams();

  useEffect(()=>{
    reviewsMovie(movieId)
    .then(res => {
      // console.log(res)
      if (res) {return setReviews(res)}
        return Promise.reject(new Error(`No reviews`))
      })
    .catch(err => console.log(err))
  }, [movieId]);

  return (
    <div>
      {reviews.length > 0 ? (
        <ul>
        {reviews.map(item => {
        return (
          <li key={item.id}>
            <Author>Author: {item.author}</Author>
            <AuthorReview>{item.content}</AuthorReview>
          </li>
        )
        })}
        </ul>
      ) : (<AuthorReview>No reviews </AuthorReview>)
      }
    </div>
  )
}

export default Reviews;