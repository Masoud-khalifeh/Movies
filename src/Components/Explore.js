import React, { useContext, useEffect, useState } from "react";
import { MovieContextModule } from "../Store/Context/MovieContext";
import SlideShow from "./SlideShow";
import '../Styles/Explore.css';


export default function Explore() {
    const sharedData = useContext(MovieContextModule);
    const [values, setValues] = useState({ topRated: "", nowPlaying: "", upComming: "" });
    const [movies, setMovies] = useState([]);
    const [active, setActive] = useState(1)



    useEffect(() => {
        setValues((item) => (
            { ...item, topRated: sharedData.topRated }
        ));
        if (sharedData.topRated.length) {
            setMovies(<SlideShow movies={sharedData.topRated} component="SingleMovieVerticle" numberOfSlides={{ total: 5, first: 4, second: 3, third: 2, forth: 1 }} />);
        }


    }, [sharedData.topRated])

    useEffect(() => {
        setValues((item) => (
            { ...item, nowPlaying: sharedData.nowPlaying }
        ));
    }, [sharedData.nowPlaying])


    useEffect(() => {
        setValues((item) => (
            { ...item, upComming: sharedData.upComming }
        ));
    }, [sharedData.upComming])



    function listHandler(status) {
        let movieValue = null;
        switch (status) {
            case 1:
                movieValue = values.topRated;
                break;
            case 2:
                movieValue = values.nowPlaying;
                break;
            case 3:
                movieValue = values.upComming;
                break;
            case 4:
                movieValue = values.topRated;
                break;
            case 5:
                movieValue = values.nowPlaying
                break;

            default:
                break;
        }
        movieValue && setMovies(<SlideShow movies={movieValue} component="SingleMovieVerticle" numberOfSlides={{ total: 5, first: 4, second: 3, third: 2, forth: 1 }} />);
        setActive(status);
    }



    return (
        <div className="explore">

            <nav className="navExplore">
                <button onClick={() => { listHandler(1) }} className={active === 1 ? "active" : ""}>Prime Video</button>
                <button onClick={() => { listHandler(2) }} className={active === 2 ? "active" : ""}>Netflix</button>
                <button onClick={() => { listHandler(3) }} className={active === 3 ? "active" : ""}>FreeVee</button>
                <button onClick={() => { listHandler(4) }} className={active === 4 ? "active" : ""}>MGM</button>
                <button onClick={() => { listHandler(5) }} className={active === 5 ? "active" : ""}>MUBI</button>
            </nav>

            <div className="slideExplore">
                {movies}
            </div>
        </div>
    )
}