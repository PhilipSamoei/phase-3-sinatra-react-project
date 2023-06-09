import React, { useEffect, useState } from 'react';
import styles from '../Css/Movie.css';

const Card = ({ title, category, description, image_url }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rating, setRating] = useState(0);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <div className={`card ${isExpanded ? 'expanded' : ''}`} onClick={handleClick}>
      <img src={image_url} alt={title} />
      <div className="card-details">
        <h3>{title}</h3>
        <p>{category}</p>
        <p>{description}</p>
        <div className="rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= rating ? 'filled' : ''}`}
              onClick={() => handleRatingChange(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const CardList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:9292/movie')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch movie data');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (data.length === 0) {
    return <div>No movies found.</div>;
  }

  return (
    <div className="card-list">
      {data.map((item) => (
        <Card
          key={item.id}
          title={item.title}
          category={item.category}
          description={item.description}
          image_url={item.image_url}
        />
      ))}
    </div>
  );
};

export default CardList;
