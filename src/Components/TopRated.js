import React, { useContext, useEffect, useState } from "react";
import { MovieContextModule } from '../Store/Context/MovieContext';
import '../Styles/TopRated.css';
import SlideShow from "./SlideShow";


export default function TopRated() {
    const sharedData = useContext(MovieContextModule);
    const [loadMovies, setLoadMovies] = useState([]);
    // const [results, setResults] = useState([]);


    useEffect(() => {
        if (sharedData.topRated) {
            setLoadMovies(sharedData.topRated);

        };

    }, [sharedData.topRated]);


    

    return (
        <>
            {loadMovies.length && <SlideShow movies={loadMovies} />}
            

        </>
    );
}
