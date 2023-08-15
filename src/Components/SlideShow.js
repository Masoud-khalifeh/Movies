import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/SlideShow.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SingleMovieVerticle from './SingleMovieVerticle';
import Original from "./Original";

export default function SlideShow(props) {

  let settings = {
    dots: false,
    infinite: true,
    slidesToShow: props.numberOfSlides.total,
    slidesToScroll: props.numberOfSlides.total,
    swipeToSlide: true,
    arrows: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: props.numberOfSlides.first,
          slidesToScroll: props.numberOfSlides.first,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: props.numberOfSlides.second,
          slidesToScroll: props.numberOfSlides.second,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: props.numberOfSlides.third,
          slidesToScroll: props.numberOfSlides.third,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: props.numberOfSlides.forth,
          slidesToScroll: props.numberOfSlides.forth
        }
      }
    ],
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };


  const movies = props.movies.map(item => {
    if (props.component === "SingleMovieVerticle") {
      return (
        <div key={item.id} >
          <SingleMovieVerticle
            key={item.id}
            title={item.title}
            rate={item.vote_average}
            img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          />
        </div>
      )
    } else if (props.component === "Original"){
      return (
        <div key={item.id} >
          <Original
            key={item.id}
            title={item.title}
            rate={item.vote_average}
            img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          />
        </div>
      )
    }

  }


  );



  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrowKey arrowKeyRight"
        onClick={onClick}
      >
        <IoIosArrowForward className="navIcon" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div
        className="arrowKey arrowKeyLeft"
        onClick={onClick}
      >
        <IoIosArrowBack className="navIcon" />
      </div>
    );
  }




  return (
    <div className="slideShow">
      <h2 className="slideTitle">{props.bigTitle}</h2>
      {props.secondTitle && <p className="secondTitle">{props.secondTitle}</p>}
      <Slider {...settings} className="slider">
        {movies}
      </Slider>

    </div>
  )
}