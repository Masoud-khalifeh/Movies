import React, { useContext, } from "react";
import { MovieContextModule } from '../Store/Context/MovieContext';
import TopRated from "../Components/TopRated"


export default function Home() {
    const sharedData = useContext(MovieContextModule);
    
    return (
        <TopRated/>
    )
}