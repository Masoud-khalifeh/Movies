import React, { useContext } from "react";
import {MovieContextModule} from '../Store/Context/MovieContext';


export default function Home (){
    const sharedData=useContext(MovieContextModule);
    
    return(
        <div>
            <p>
            </p>
        </div>
    )
}