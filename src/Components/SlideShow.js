import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/SlideShow.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SingleMovieVerticle from './SingleMovieVerticle';

export default function SlideShow(props) {

    let settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
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
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  infinite: true,
                  dots: false
                }
              },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 800,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                // initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };



    const movies = props.movies.map(item => {
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
            <Slider {...settings} className="slider">
                {movies}
            </Slider>

        </div>
    )
}