import React from "react";
import '../Styles/Original.css';
import { Link } from "react-router-dom";

export default function Orginal(props) {
    return (
        <Link to={`details/${props.id}`} className="link">
            <div className="original">
                <div className="orginalTop">
                    <img src={props.bigImage} className="originalImage" />

                </div>
                <div className="originalBottom">
                    <h3 className="originalTopText">{props.title}</h3>
                    <p className="originalBottomText">{props.title}</p>
                </div>
            </div>
        </Link>
    )

}
