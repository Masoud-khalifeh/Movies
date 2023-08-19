import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieContextModule = createContext();

export default function MovieContext({ children }) {
    const [allMovies, setAllMovies] = useState([]);
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzdmMDlmNWIwNWMwYjYxMzY4YjI2YzA1MWY4YjAwOCIsInN1YiI6IjY0ZDExMjA3NGQ2NzkxMDBjNTJkMzYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lK2z6ziZKgS_uU3HGhbgjiOq3HwxfCzewCsfFJlRByA';
    const [loaded, setLoaded] = useState(false);
    const [screenPosition, setScreenPosition] = useState("");



    useEffect(() => {
        fetchData();

    }, [])



    /////////////////////////////////////////////

    async function fetchData() {
        const topRated = await getTopRated();
        const upComming = await getUpComming();
        const nowPlaying = await getNowPlaying();

        const combined = topRated.concat(upComming, nowPlaying);

        setAllMovies(combined);
        setLoaded(true);


    }


    ////////////////////////////////////////////

    function getListOfMovies(status) {
        const list = allMovies.filter(item => item.status === status);
        return list;
    }

    ////////////////////////////////////////////

    function getDetails(movieID) {
        const detail = allMovies.filter(item => item.id === movieID);
        if(detail.length){
            return detail;
        }else {
            return false
        }
        
    }

    ////////////////////////////////////////////



    async function getTopRated() {
        const results = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
            headers: {
                Authorization: authorization,
                Accept: 'application/json',
            },
        })
            .then(response => response.data.results)
            .catch(error => {
                console.error('Error:', error);
            });

        const newResults = await Promise.all(
            results.map(async item => {
                return {
                    ...item, details: await getMovieDetail(item.id),
                    images: await getMovieImages(item.id), videoUrl: await getVideo(item.id), status: "topRated"
                }
            })
        )
        return newResults;

    }

    ///////////////////////////////////////////////////

    async function getUpComming() {
        const results = await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
            headers: {
                Authorization: authorization,
                Accept: 'application/json',
            },
        })
            .then(response => response.data.results)
            .catch(error => {
                console.error('Error:', error);
            });

        const newResults = await Promise.all(
            results.map(async item => {
                return {
                    ...item, details: await getMovieDetail(item.id),
                    images: await getMovieImages(item.id), videoUrl: await getVideo(item.id), status: "upComming"
                }
            })
        )
        return newResults;

    }


    //////////////////////////////////////////////////////

    async function getNowPlaying() {
        const results = await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
            headers: {
                Authorization: authorization,
                Accept: 'application/json',
            },
        })
            .then(response => response.data.results)
            .catch(error => {
                console.error('Error:', error);
            });

        const newResults = await Promise.all(
            results.map(async item => {
                return {
                    ...item, details: await getMovieDetail(item.id),
                    images: await getMovieImages(item.id), videoUrl: await getVideo(item.id), status: "nowPlaying"
                }
            })
        )

        return newResults;

    }

    ///////////////////////////////////////////////////

    async function getMovieDetail(movieID) {

        const results = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, {
            headers: {
                Authorization: authorization,
                Accept: 'application/json',
            },
        }

        )
            .then(response => response.data)
            .catch(error => {
                console.log('Error', error)
            }

            )
        return results;
    }

    ////////////////////////////////////////////////////////

    async function getMovieImages(movieID) {
        const results = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/images`, {
            headers: {
                Authorization: authorization,
                Accept: 'application/json',
            },
        }

        )
            .then(response => response.data)
            .catch(error => {
                console.log('Error', error)
            }

            )
        return results
    }

    /////////////////////////////////////////////////////////

    async function getVideo(movieID) {
        const results = await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`, {
            headers: {
                Authorization: authorization,
                Accept: 'application/json'
            }
        })
            .then(response => response.data.results)
            .catch(error => {
                console.log('Error', error)
            })
        let url = ''
        if (results.length) {
            url = results[0].key
        }
        return url;
    }

    /////////////////////////////////////////////

    const scrollToTop = (top) => {
        window.scrollTo({
            top: top,
            behavior: "smooth",
        });
    };


    ///////////////////////////////////////////////
    const getScreenPosition = () => {
        const scrollY = window.scrollY;
        return scrollY;
    }


    return (
        <MovieContextModule.Provider value={{

            allMovies: allMovies, getVideo: getVideo, getDetails: getDetails,
            getListOfMovies: getListOfMovies, loaded: loaded, scrollToTop: scrollToTop,
            getScreenPosition:getScreenPosition, screenPosition:screenPosition
        }}>
            {children}
        </MovieContextModule.Provider>
    )
}