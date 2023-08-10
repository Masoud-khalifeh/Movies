import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../Styles/SlideShow.css';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function SlideShow({ children }) {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        arrows: true,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 4000,
        cssEase: "linear",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };


    function SampleNextArrow(props) {
        const {  onClick } = props;
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
        <Slider {...settings} className="slider">
            {children}
        </Slider>
    )
}