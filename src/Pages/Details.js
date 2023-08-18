import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContextModule } from "../Store/Context/MovieContext";
import { useEffect } from "react";
import '../Styles/Details.css'
import { useState } from "react";

export default function Details() {
    const sharedData = useContext(MovieContextModule);
    const [detail,setDetail]=useState();

    const { movieID } = useParams();

    let youtube = ""

    useEffect(() => {
        setDetail(sharedData.getDetails(movieID))
    }, [sharedData.upComming])

    console.log("detail",detail)

    return (
        <div className="details">
            <div className="detailTop">
                <div className="DetailImages"></div>
                <div className="DetailVideo"></div>
            </div>
            <div className="detailBottom">
                <div className="detailInfo"></div>
                <div className="detailRelated"></div>
            </div>
            <iframe
                width="560"
                height="315"
                // src={youtube}
                title="YouTube Video"
                frameBorder="0"
                allowFullScreen
            ></iframe>
        </div>
    )
}