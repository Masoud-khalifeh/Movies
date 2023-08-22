import React from "react";
import { Link } from "react-router-dom";
import '../Styles/BigMovie.css';
import { BsPlayCircle } from "react-icons/bs";
import { useContext } from "react";


export default function BigMovie(props) {
    return (
        <Link to={`/details/${props.id}`}>
            <div className="bigMovie" >
                <img src={props.bigImage} className="bigImage" />
                <div className="smallPart">
                    <div className="blackArea"></div>
                    <img src={props.img} className="smallImage" />
                    <p className="text">
                        <BsPlayCircle className="playCircleIcon" />{props.title}
                    </p>
                </div>
            </div>
        </Link>


    )
}