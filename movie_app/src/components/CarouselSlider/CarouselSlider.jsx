import React, { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import "./CarouselSlider.css";

// Import images from the assets folder
import animal from '/src/assets/s1.png';
import bahubali from '/src/assets/s2.png';
import jawan from '/src/assets/s3.png';
import joker from '/src/assets/s4.png';
import kalki from '/src/assets/s5.png';
import kgf from '/src/assets/s6.png';
import RRR from '/src/assets/s7.png';
import spiderman from '/src/assets/s8.png';

const CarouselSlider = () => {
  const totalSlides = 8; // Total number of slides
  const [currentSlide, setCurrentSlide] = useState(0); // State for current slide

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="carousel-container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={totalSlides}
        visibleSlides={1}
        currentSlide={currentSlide} // Use state for current slide
      >
        <div className="carousel-wrapper">
          <Slider>
            <Slide index={0}><img src={animal} alt="First Slide" /></Slide>
            <Slide index={1}><img src={bahubali} alt="Second Slide" /></Slide>
            <Slide index={2}><img src={jawan} alt="Third Slide" /></Slide>
            <Slide index={3}><img src={joker} alt="Fourth Slide" /></Slide>
            <Slide index={4}><img src={kalki} alt="Fifth Slide" /></Slide>
            <Slide index={5}><img src={kgf} alt="Sixth Slide" /></Slide>
            <Slide index={6}><img src={RRR} alt="Seventh Slide" /></Slide>
            <Slide index={7}><img src={spiderman} alt="Eighth Slide" /></Slide>
          </Slider>
          <div className="carousel__buttons">
            <ButtonBack className="carousel__button" onClick={handleBack} disabled={currentSlide === 0}>
              ‹
            </ButtonBack>
            <ButtonNext className="carousel__button" onClick={handleNext} disabled={currentSlide === totalSlides - 1}>
              ›
            </ButtonNext>
          </div>
        </div>
      </CarouselProvider>
    </div>
  );
};

export default CarouselSlider;
