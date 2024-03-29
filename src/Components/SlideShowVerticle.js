
import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/SlideShowVerticle.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import SingleMovieHorizontal from "./SingleMovieHorizontal";

export default function SlideShowVerticle(props) {
    const [counter, setCounter] = useState(0);
    const [show, setShow] = useState(true);

    let settings = {
        dots: false,
        infinite: false,
        slidesToShow: props.numberOfSlides.total,
        slidesToScroll: props.numberOfSlides.total,
        swipeToSlide: true,
        arrows: true,
        autoplay: false,
        vertical: true,
        verticalSwiping: true,
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
        
        return (
            <div key={item.id} >
                <SingleMovieHorizontal
                    key={item.id}
                    id={item.id}
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
        if (!onClick) {
            setShow(false);
        }
        return (
            <div
                className={show ? "arrowKey arrowKeyRight" : "inActive"}
                onClick={() => { onClick && onClick(); onClick && setCounter(counter + 1) }}
            >
                <IoIosArrowForward className="navIcon" />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                className={counter == 0 ? "inActive" : "arrowKey arrowKeyLeft"}
                onClick={() => { onClick(); setCounter(counter - 1); setShow(true); }}
            >
                <IoIosArrowBack className="navIcon" />
            </div>
        );
    }




    return (
        <div className="slideShowVerticle">
            {props.bigTitle && <h2 className="slideTitle">{props.bigTitle}</h2>}
            {props.secondTitle && <p className="secondTitle">{props.secondTitle}</p>}
            <Slider {...settings} className="slider">
                {movies}
            </Slider>

        </div>
    )
}