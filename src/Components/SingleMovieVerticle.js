import React from "react";
import '../Styles/SingleMovieVerticle.css';
import { FaStar } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { BsFillPlayFill } from "react-icons/bs";


export default function SingleMovieVerticle(propos) {

    return (
        <div className="singleMovieContainer">
            <div className="top">
                <img src={propos.img} className="image" />
            </div>
            <div className="bottom">
                <div className="text">
                    <p className="rate"><FaStar className="icon"/> {propos.rate}</p>
                    <p className="title">{propos.title}</p>
                </div>
                <div className="button">
                    <button className="watchNow">Watch Now <BiLinkExternal className="icon"/></button>
                    <button className="trailor"> <BsFillPlayFill/> Trailor</button>
                </div>

            </div>
        </div>
    )
}