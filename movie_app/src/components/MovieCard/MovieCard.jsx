//import React from 'react';
import './MovieCard.css';  // Assuming custom styles for the card
import PropTypes from 'prop-types';
// eslint-disable-next-line react/prop-types
const MovieCard = ({ movie }) => {(
  <div className="movie-card">
    <div className="movie-image">
      <img src={movie.image} alt={movie.title} />
    </div> 
    <div className="movie-details">
      <h3>{movie.title}</h3>
      <p>Length: {movie.length} mins</p>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  </div>
);
};

export default MovieCard;
//