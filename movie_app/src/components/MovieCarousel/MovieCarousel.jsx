import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MovieCarousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow prev-arrow" onClick={onClick}>
    <FaChevronLeft />
  </div>
);

// Custom Next Arrow
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow next-arrow" onClick={onClick}>
    <FaChevronRight />
  </div>
);

const MovieCarousel = ({ title, movies }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />, // Custom Back Button
    nextArrow: <NextArrow />, // Custom Next Button
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="movie-carousel">
      <h2 className="carousel-title">{title}</h2>
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <img src={movie.image} alt={movie.title} />
            <h3 className="movie-title">{movie.title}</h3>
            <p className="movie-languages">{movie.languages}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MovieCarousel;
