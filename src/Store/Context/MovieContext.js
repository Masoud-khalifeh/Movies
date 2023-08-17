import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieContextModule = createContext();

export default function MovieContext({ children }) {
    const [topRated, setTopRated] = useState([]);
    const [upComming, setUpComming] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const authorization = 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzdmMDlmNWIwNWMwYjYxMzY4YjI2YzA1MWY4YjAwOCIsInN1YiI6IjY0ZDExMjA3NGQ2NzkxMDBjNTJkMzYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lK2z6ziZKgS_uU3HGhbgjiOq3HwxfCzewCsfFJlRByA';



    useEffect(() => {
        getTopRated();
        getUpComming();
        getNowPlaying();

    }, [])

   


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
                return { ...item, details: await getMovieDetail(item.id), images: await getMovieImages(item.id) }
            })
        )
        setTopRated(newResults);

    }


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
                return { ...item, details: await getMovieDetail(item.id), images: await getMovieImages(item.id) }
            })
        )
        setUpComming(newResults);

    }



    
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
                return { ...item, details: await getMovieDetail(item.id), images: await getMovieImages(item.id) }
            })
        )
        setNowPlaying(newResults);

    }


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




    return (
        <MovieContextModule.Provider value={{ topRated: topRated, nowPlaying: nowPlaying, upComming: upComming }}>
            {children}
        </MovieContextModule.Provider>
    )
}