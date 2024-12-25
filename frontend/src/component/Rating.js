import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import "./Rating.css";

const RatingAndReview = ({defaultValue}) => {
  const [currRating, setCurrRating] = useState([]);
  useEffect(() => {
    axios.get(`/medicine/${defaultValue}/reviews`).then(res => setCurrRating(res.data)).catch(err => console.log("Error: ", err));
  }, [defaultValue])
  return (
    <div className="rating-review-component">
      <h1>Ratings & Review</h1>
      {currRating.map((each, index) => (
        <div key={index}>
          <div className="rating-component">
            <Stack spacing={1}>
              <Rating name="half-rating-read" defaultValue={each.rating} precision={0.5} readOnly />
            </Stack>
            <button>{each.rating}</button>
          </div>
          <p>{each.review_text}</p>
        </div>
      ))}
    </div>
  )
}

export default RatingAndReview