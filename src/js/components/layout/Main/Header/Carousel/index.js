import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
const Carousel = () => {
  return (
    <CarouselProvider
      className="header__carousel"
      naturalSlideWidth={100}
      naturalSlideHeight={150}
      totalSlides={3}
    >
      <Slider>
        <Slide className="header__carousel__slider__slide" index={0}>
          <>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              culpa quibusdam odit molestias, molestiae nobis.
            </p>
          </>
        </Slide>
        <Slide className="header__carousel__slider__slide" index={1}>
          <>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              culpa quibusdam odit molestias, molestiae nobis.
            </p>
          </>
        </Slide>
        <Slide className="header__carousel__slider__slide" index={2}>
          <>
            <h2>Lorem ipsum dolor sit amet.</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              culpa quibusdam odit molestias, molestiae nobis.
            </p>
          </>
        </Slide>
      </Slider>
      <ButtonBack>&#8249;</ButtonBack>
      <ButtonNext>&#8250;</ButtonNext>
    </CarouselProvider>
  );
};
export default Carousel;
