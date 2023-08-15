import React, { useContext, useEffect, useState } from "react";
import { MovieContextModule } from "../Store/Context/MovieContext";
import SlideShow from "./SlideShow";
import '../Styles/Explore.css';


export default function Explore() {
    const sharedData = useContext(MovieContextModule);
    const [values, setValues] = useState({ topRated: "", nowPlaying: "", upComming: "" });
    const [movies, setMovies] = useState("topRated");
    const [active, setActive] = useState(1)



    useEffect(() => {
        setValues({ topRated: sharedData.topRated, nowPlaying: sharedData.nowPlaying, upComming: sharedData.upComming });
        listHandler(1);
    }, [sharedData.upComming])

    function listHandler(status) {
        if (status === 1 && values.topRated.length) {
            setMovies(<SlideShow movies={values.topRated} component="SingleMovieVerticle" numberOfSlides={{ total: 5, first: 4, second: 3, third: 2, forth: 1 }} />);
        } else if (status === 2 && values.nowPlaying.length) {
            setMovies(<SlideShow movies={values.nowPlaying} component="SingleMovieVerticle" numberOfSlides={{ total: 5, first: 4, second: 3, third: 2, forth: 1 }} />);
        } else if (status === 3 && values.upComming.length) {
            setMovies(<SlideShow movies={values.upComming} component="SingleMovieVerticle" numberOfSlides={{ total: 5, first: 4, second: 3, third: 2, forth: 1 }} />);
        } else if (status === 4 && values.topRated.length) {
            setMovies(<SlideShow movies={values.topRated} component="SingleMovieVerticle" numberOfSlides={{ total: 5, first: 4, second: 3, third: 2, forth: 1 }} />);
        } else if (status === 5 && values.nowPlaying.length) {
            setMovies(<SlideShow movies={values.nowPlaying} component="SingleMovieVerticle" numberOfSlides={{ total: 5, first: 4, second: 3, third: 2, forth: 1 }} />);
        }
        setActive(status);
    }



    return (
        <div className="explore">
            
                <nav className="navExplore">
                    <button onClick={() => { listHandler(1) }} className={active === 1 && "active"}>Prime Video</button>
                    <button onClick={() => { listHandler(2) }} className={active === 2 && "active"}>Netflix</button>
                    <button onClick={() => { listHandler(3) }} className={active === 3 && "active"}>FreeVee</button>
                    <button onClick={() => { listHandler(4) }} className={active === 4 && "active"}>MGM</button>
                    <button onClick={() => { listHandler(5) }} className={active === 5 && "active"}>MUBI</button>
                </nav>

            <div className="slideExplore">
                {movies}
            </div>
        </div>
    )
}