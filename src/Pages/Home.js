import React, { useContext, } from "react";
import { MovieContextModule } from '../Store/Context/MovieContext';
import TopRated from "../Components/TopRated";
import '../Styles/Home.css';


export default function Home() {
    const sharedData = useContext(MovieContextModule);

    return (
        <div className="homeContainer">
            <TopRated />
        </div>
    )
}