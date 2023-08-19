
import React from "react";
import '../Styles/SingleMovieHorizontal.css';
import { BsPlayCircle } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function SingleMovieHorizontal(props) {

    return (
        <Link to={`/details/${props.id}`} className="link">
            <div className="singleMovieHorizontal">
                <div className="left">
                    <img src={props.img} className="image" />
                </div>
                <div className="right">
                    <div className="button">
                            <BsPlayCircle className="playIcon" /> <span>1:44</span>
                    </div>
                    <div className="text">
                        <p className="firstTitle"> {props.title}</p>
                        <p className="secondTitle">{props.title}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}