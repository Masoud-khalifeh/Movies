import React from "react";
import '../Styles/Original.css';

export default function Orginal(props) {

    return (
        <div className="original">
            <div className="orginalTop">
                <img src={props.bigImage} className="originalImage" />

            </div>
            <div className="originalBottom">
                <h3 className="originalTopText">{props.title}</h3>
                <p className="originalBottomText">{props.title}</p>
            </div>
        </div>
    )

}
