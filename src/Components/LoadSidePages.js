import React from "react";
import { Outlet } from "react-router-dom";

export default function LoadSidePages() {

    return (
        <div className="sideWhole">
            <Outlet />
        </div>
    )
}