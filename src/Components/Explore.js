import React, { useContext, useEffect, useState } from "react";
import { MovieContextModule } from "../Store/Context/MovieContext";
import SlideShow from "./SlideShow";
import '../Styles/Explore.css';


export default function Explore() {
    const sharedData = useContext(MovieContextModule);
    const [values, setValues] = useState({ topRated: "", nowPlaying: "", upComming: "" });
    const [movies, setMovies] = useState([]);
    const [active, setActive] = useState(1)



    // useEffect(() => {
    //     const topRated=sharedData.getListOfMovies("topRated");
        
    //     if (topRated.length) {
    //         setMovies(<SlideShow movies={topRated} component="SingleMovieVerticle" numberOfSlides={{ total: 5, first: 4, second: 3, third: 2, forth: 1 }} />);
    //     }


    // }, [sharedData.allMovies])

    useEffect(() => {
        setValues( sharedData.allMovies);
        if (sharedData.allMovies) {
            setMovies(<SlideShow movies={sharedData.getListOfMovies("topRated")} component="SingleMovieVerticle" numberOfSlides={{ total: 5, first: 4, second: 3, third: 2, forth: 1 }} />);
        }
    }, [sharedData.allMovies])


    


    function listHandler(status) {
        let movieValue = null;
        switch (status) {
            case 1:
                movieValue = "topRated";
                break;
            case 2:
                movieValue = "nowPlaying";
                break;
            case 3:
                movieValue = "upComming";
                break;
            case 4:
                movieValue = "topRated";
                break;
            case 5:
                movieValue = "nowPlaying";
                break;

            default:
                break;
        }
        movieValue && setMovies(<SlideShow movies={sharedData.getListOfMovies(movieValue)} component="SingleMovieVerticle" numberOfSlides={{ total: 5, first: 4, second: 3, third: 2, forth: 1 }} />);
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