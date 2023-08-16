
import React from "react";
import '../Styles/SingleMovieHorizontal.css';
import { BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function SingleMovieHorizontal(propos) {

    return (
        <div className="singleMovieHorizontal">
            <div className="left">
                <img src={propos.img} className="image" />
            </div>
            <div className="right">
                <div className="button">
                    <Link to='' className="link">
                        <BsPlayCircle className="playIcon"/> <span>1:44</span>
                    </Link>
                </div>
                <div className="text">
                    <p className="firstTitle"> {propos.title}</p>
                    <p className="secondTitle">{propos.title}</p>
                </div>
            </div>
        </div>
    )
}