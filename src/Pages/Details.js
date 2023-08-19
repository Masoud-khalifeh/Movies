import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { MovieContextModule } from "../Store/Context/MovieContext";
import { useEffect } from "react";
import '../Styles/Details.css'
import { useState } from "react";
import SingleDetail from "../Components/SingleDetail";
import SlideShowVerticle from '../Components/SlideShowVerticle';
import ReactLoading from 'react-loading';
import  YouTube  from "react-youtube";


export default function Details() {
    const sharedData = useContext(MovieContextModule);
    const [detail, setDetail] = useState([]);

    const { movieID } = useParams();



    useEffect(() => {
        const data = sharedData.getDetails(parseInt(movieID))
        if (data.length) {
            setDetail(data[0])
        }
    }, [sharedData.allMovies])

    useEffect(() => {
        console.log("detail", detail)
    }, [detail])

    return (
        <>
            {(!sharedData.loaded) ?
                <ReactLoading type={"bars"} color={"white"} height={'5%'} width={'5%'} className="loader" />
                :
                <>
                    {
                        detail.images &&
                        <div className="details">
                            <div className="detailTop">
                                <div className="detailImages">
                                    <img src={`https://image.tmdb.org/t/p/w500/${detail.backdrop_path}`} />
                                </div>
                                <div className="DetailVideo">
                                    <YouTube className="detailIfram" videoId={detail.videoUrl} opts={{
                                        playerVars: {
                                            autoplay: 0,
                                        },
                                    }} />
                                </div>
                            </div>
                            <div className="detailBottom">
                                {detail.details &&
                                    <div className="detailInfo">
                                        <h3 className="detailMovieTitle">{detail.details.title}</h3>
                                        <SingleDetail title="Overview">{detail.details.overview}</SingleDetail>
                                        <SingleDetail title="Release Date">{detail.details.release_date}</SingleDetail>
                                        <SingleDetail title="Popularity">{detail.details.popularity}</SingleDetail>
                                    </div>
                                }
                                <div className="detailRelated">
                                    <SlideShowVerticle
                                        movies={sharedData.getListOfMovies("upComming")}
                                        bigTitle="Same Genres"
                                        numberOfSlides={{ total: 3, first: 2, second: 2, third: 1, forth: 1 }}

                                    />
                                </div>
                            </div>
                        </div>
                    }
                </>
            }
        </>
    )
}