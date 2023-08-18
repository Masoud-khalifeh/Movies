import React from "react";
import '../Styles/SingleDetail.css';

export default function SingleDetail ({children,title}) {

    return (
        <p className="singleDetail">
           <span className="singleDetailTitle"> {title}</span> {children}
        </p>
    )
}