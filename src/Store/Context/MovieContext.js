import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieContextModule = createContext();

export default function MovieContext({ children }) {
    const [topRated, setTopRated] = useState([]);
    const [upComming, setUpComming] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);
    const authorization='Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzdmMDlmNWIwNWMwYjYxMzY4YjI2YzA1MWY4YjAwOCIsInN1YiI6IjY0ZDExMjA3NGQ2NzkxMDBjNTJkMzYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lK2z6ziZKgS_uU3HGhbgjiOq3HwxfCzewCsfFJlRByA';



    useEffect(() => {
        getTopRated();
        getUpComming();
        getNowPlaying()
    }, [])

    async function getTopRated() {
        const results = await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
            headers: {
                Authorization:authorization ,
                Accept: 'application/json',
            },
        })
            .then(response => response.data.results)
            .catch(error => {
                console.error('Error:', error);
            });
        setTopRated(results);

    }


    async function getUpComming() {
        await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
            headers: {
                Authorization: authorization,
                Accept: 'application/json',
            },
        })
            .then(response => {
                setUpComming(response.data.results)
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }



    async function getNowPlaying() {
        await axios.get('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', {
            headers: {
                Authorization: authorization,
                Accept: 'application/json',
            },
        })
            .then(response => {
                setNowPlaying(response.data.results)
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }


    async function getMovieDetail(movieID) {
        let data = '';
        await axios.get(`https://api.themoviedb.org/3/movie/${movieID}?language=en-US`, {
            headers: {
                Authorization: authorization,
                Accept: 'application/json',
            },
        }

        )
            .then(response => {
                data = response.data.results;

            }

            )
            .catch(error => {
                console.log('Error', error)
            }

            )
        return data;
    }



    async function getMovieImages(movieID) {
        await axios.get(`https://api.themoviedb.org/3/movie/${movieID}/images`, {
            headers: {
                Authorization: authorization,
                Accept: 'application/json',
            },
        }

        )
            .then(response => {
            })
            .catch(error => {
                console.log('Error', error)
            }

            )

    }


    return (
        <MovieContextModule.Provider value={{ topRated: topRated, nowPlaying:nowPlaying }}>
            {children}
        </MovieContextModule.Provider>
    )
}