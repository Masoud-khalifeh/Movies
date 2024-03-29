import React, { useContext, useEffect, useState, } from "react";
import { MovieContextModule } from '../Store/Context/MovieContext';
import '../Styles/Home.css';
import SlideShow from "../Components/SlideShow";
import Explore from "../Components/Explore";
import SlideShowVerticle from "../Components/SlideShowVerticle";
import ScrollToTop from "../Components/ScrollToTop";
import { useLocation } from "react-router-dom";


export default function Home() {
    const sharedData = useContext(MovieContextModule);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);
    const [upComming, setUpComming] = useState([]);
    const location = useLocation();


    useEffect(() => {
        if (sharedData.screenPosition) {
            sharedData.scrollToTop(sharedData.screenPosition);
        }
    }, [])





    useEffect(() => {
        setTopRated(sharedData.getListOfMovies("topRated"));
        setNowPlaying(sharedData.getListOfMovies("nowPlaying"));
        setUpComming(sharedData.getListOfMovies("upComming"));

    }, [sharedData.allMovies])



    return (
        <div className="homeContainer" onClick={sharedData.getScreenPosition}>
            <div className="topHome">
                <div className="bigSlide">
                    {upComming.length && <SlideShow
                        movies={upComming}
                        component="BigMovie"
                        numberOfSlides={{ total: 1, first: 1, second: 1, third: 1, forth: 1 }}
                         />}
                </div>
                <div className="verticleSlide">
                    {nowPlaying.length && <SlideShowVerticle
                        movies={nowPlaying}
                        bigTitle="Up Next"
                        numberOfSlides={{ total: 2, first: 2, second: 2, third: 1, forth: 1 }} />}
                </div>
            </div>
            <Explore />
            {upComming.length && <SlideShow
                movies={upComming}
                bigTitle="Originals"
                component="Original"
                numberOfSlides={{ total: 3, first: 2, second: 2, third: 1, forth: 1 }}
                secondTitle="Celebrity interviews, trending entertainment stories, and expert analysis" />}

            {nowPlaying.length && <SlideShow
                movies={nowPlaying}
                bigTitle="Now Playing Movies"
                component="SingleMovieVerticle"
                numberOfSlides={{ total: 6, first: 5, second: 4, third: 3, forth: 2 }} />}

            {topRated.length && <SlideShow
                movies={topRated}
                bigTitle="Top 20 of this week"
                component="SingleMovieVerticle"
                numberOfSlides={{ total: 6, first: 5, second: 4, third: 3, forth: 2 }} />}
            <ScrollToTop />
        </div>
    )
}