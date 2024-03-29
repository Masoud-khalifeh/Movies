import React, { useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { MovieContextModule } from "../Store/Context/MovieContext";
import { useEffect } from "react";
import '../Styles/Details.css'
import { useState } from "react";
import SingleDetail from "../Components/SingleDetail";
import SlideShowVerticle from '../Components/SlideShowVerticle';
import YouTube from "react-youtube";
import ScrollToTop from "../Components/ScrollToTop";


export default function Details() {
    const sharedData = useContext(MovieContextModule);
    const navigate = useNavigate();
    const [detail, setDetail] = useState([]);



    let { movieID } = useParams();



    useEffect(() => {
        const data = sharedData.getDetails(parseInt(movieID))
        if (data) {
            setDetail(data[0])
        } else {
            navigate("/not-found")
        }
        sharedData.scrollToTop(0)
    }, [movieID, sharedData.allMovies])



    return (
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
            <ScrollToTop />
        </>
    )
}