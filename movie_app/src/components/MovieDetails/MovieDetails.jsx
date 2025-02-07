import React, { useState } from "react";
import "./MovieDetails.css";

const MovieDetails = ({ movie }) => {
  const [backgroundImage, setBackgroundImage] = useState(movie.backgroundImage);

  return (
    <div className="movie-container">
      <div className="movie-left">
        <div className="movie-background" style={{ backgroundImage: `url(${backgroundImage})` }}></div>
      </div>
      <div className="movie-right">
        <div className="movie-overlay">
          <h1 className="movie-title1">{movie.title}</h1>
          <p className="movie-info">{movie.duration} • {movie.genre} • {movie.year} • {movie.rating}</p>
          <p className="movie-description">{movie.description}</p>
          
          <div className="movie-cast">
            <h3 className="cast-title">Cast</h3>
            <p className="cast-list">
              {movie.cast.map((actor, index) => (
                <span key={index}>{actor}<br /></span>
              ))}
            </p>
            <button className="watch-button">▶ Watch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
