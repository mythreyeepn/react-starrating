import React, { useState } from 'react';
import './style.css';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button onClick={() => setRating(index)}>
            <span className={index <= rating ? 'colored' : 'noColored'}>
              Star
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default StarRating;
