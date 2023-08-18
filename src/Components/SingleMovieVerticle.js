import React from "react";
import '../Styles/SingleMovieVerticle.css';
import { FaStar } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BsFillPlayFill, BsFillBookmarkFill, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";


export default function SingleMovieVerticle(props) {

    return (
        <Link to={`/details/${props.id}`} className="link">
            <div className="singleMovieContainer">
                <div className="top">
                    <div className="bookMark"><BsFillBookmarkFill className="icon" /><BsPlus className="iconPlus" /></div>
                    <img src={props.img} className="image" />
                </div>
                <div className="bottom">
                    <div className="text">
                        <p className="rate"><FaStar className="icon" /> {props.rate}</p>
                        <p className="title">{props.title}</p>
                    </div>
                    <div className="button">
                        <button className="watchNow">Watch Now <BiLinkExternal className="icon" /></button>
                        <button className="trailor"> <BsFillPlayFill className="icon" /> Trailor</button>
                    </div>

                </div>
            </div>
        </Link>
    )
}