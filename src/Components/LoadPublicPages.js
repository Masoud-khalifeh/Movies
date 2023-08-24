import React, { useContext } from "react";
import MainNavbar from "./MainNavbar";
import { Outlet } from "react-router-dom";
import ReactLoading from 'react-loading';
import { MovieContextModule } from '../Store/Context/MovieContext';



export default function LoadPublicPages() {
    const sharedData = useContext(MovieContextModule);

    return (
        <>
            {!sharedData.loaded ?
                <div className='loading'>
                    <ReactLoading type={"bars"} color={"white"} height={'5%'} width={'5%'} className="loader" />
                </div>
                :
                <>
                    <MainNavbar />
                    <Outlet />
                </>

            }

        </>
    )
}