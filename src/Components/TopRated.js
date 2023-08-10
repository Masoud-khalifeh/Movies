import React, { useContext, useEffect, useState } from "react";
import { MovieContextModule } from '../Store/Context/MovieContext';
import SingleMovieVerticle from "../Components/SingleMovieVerticle";
import '../Styles/TopRated.css';
import SlideShow from "./SlideShow";


export default function TopRated() {
    const sharedData = useContext(MovieContextModule);
    const [loadMovies, setLoadMovies] = useState([]);


    useEffect(() => {
        if (sharedData.topRated) {
            const movies = sharedData.topRated.map(item => (

                <SingleMovieVerticle
                    key={item.id}
                    title={item.title}
                    rate={item.vote_average}
                    img={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                />

            ));
            setLoadMovies(movies);
        }
    }, [sharedData.topRated]);

    return (
        <>
            <SlideShow >
                {loadMovies}
                {console.log("ffff", loadMovies)}
            </SlideShow>
        </>
    );
}
