//import React from 'react';
import './MovieList.css'; 
import MovieCard from '../MovieCard/MovieCard';
import movieData from '../../data/movieDta'; // Importing movie data from the data folder

const MovieList = () => (
  <div className="movie-list">
    {movieData.map((movie) => (
      <MovieCard key={movie.id} movie={movie} /> // Rendering a MovieCard for each movie
    ))}
  </div>
);

export default MovieList;
