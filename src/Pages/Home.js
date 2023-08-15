import React, { useContext, useEffect, useState, } from "react";
import { MovieContextModule } from '../Store/Context/MovieContext';
import '../Styles/Home.css';
import SlideShow from "../Components/SlideShow";


export default function Home() {
    const sharedData = useContext(MovieContextModule);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [topRated, setTopRated] = useState([]);

    useEffect(() => {
        setNowPlaying(sharedData.nowPlaying);
        setTopRated(sharedData.topRated);
    }, [sharedData.nowPlaying])

    return (
        <div className="homeContainer">
            {nowPlaying.length && <SlideShow movies={nowPlaying} bigTitle="Originals" component="Original" numberOfSlides={{total:3,first:2,second:1,third:1,forth:1}} secondTitle="Celebrity interviews, trending entertainment stories, and expert analysis"/>}
            {nowPlaying.length && <SlideShow movies={nowPlaying} bigTitle="Now Playing Movies" component="SingleMovieVerticle" numberOfSlides={{total:5,first:4,second:3,third:2,forth:1}}/>}
            {topRated.length && <SlideShow movies={topRated} bigTitle="Top 20 of this week" component="SingleMovieVerticle" numberOfSlides={{total:5,first:4,second:3,third:2,forth:1}}/>}
        </div>
    )
}