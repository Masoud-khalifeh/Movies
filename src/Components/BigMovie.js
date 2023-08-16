import React from "react";
import '../Styles/BigMovie.css';
import { BsPlayCircle } from "react-icons/bs";

export default function BigMovie(props) {

    return (
        <div className="bigMovie">
            <img src={props.img} className="bigImage" />
            <div className="smallPart">
                <div className="blackArea"></div>
                <img src={props.img} className="smallImage" />
                <p className="text">
                    <BsPlayCircle className="playCircleIcon" />{props.title}
                </p>
            </div>
        </div>


    )
}