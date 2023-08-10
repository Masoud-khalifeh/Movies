import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MovieContextModule = createContext();

export default function MovieContext({ children }) {
    const [topRated, setTopRated] = useState([]);
    const [upComming, setUpComming] = useState([]);
    const [nowPlaying, setNowPlaying] = useState([]);



    useEffect(() => {
        getTopRated();
        getUpComming();
        getNowPlaying()
    }, [])

    async function getTopRated() {
        await axios.get('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzdmMDlmNWIwNWMwYjYxMzY4YjI2YzA1MWY4YjAwOCIsInN1YiI6IjY0ZDExMjA3NGQ2NzkxMDBjNTJkMzYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lK2z6ziZKgS_uU3HGhbgjiOq3HwxfCzewCsfFJlRByA',
                Accept: 'application/json',
            },
        })
            .then(response => {
                setTopRated(response.data.results)
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }




    async function getUpComming() {
        await axios.get('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', {
            headers: {
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzdmMDlmNWIwNWMwYjYxMzY4YjI2YzA1MWY4YjAwOCIsInN1YiI6IjY0ZDExMjA3NGQ2NzkxMDBjNTJkMzYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lK2z6ziZKgS_uU3HGhbgjiOq3HwxfCzewCsfFJlRByA',
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
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzdmMDlmNWIwNWMwYjYxMzY4YjI2YzA1MWY4YjAwOCIsInN1YiI6IjY0ZDExMjA3NGQ2NzkxMDBjNTJkMzYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lK2z6ziZKgS_uU3HGhbgjiOq3HwxfCzewCsfFJlRByA',
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
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzdmMDlmNWIwNWMwYjYxMzY4YjI2YzA1MWY4YjAwOCIsInN1YiI6IjY0ZDExMjA3NGQ2NzkxMDBjNTJkMzYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lK2z6ziZKgS_uU3HGhbgjiOq3HwxfCzewCsfFJlRByA',
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
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YzdmMDlmNWIwNWMwYjYxMzY4YjI2YzA1MWY4YjAwOCIsInN1YiI6IjY0ZDExMjA3NGQ2NzkxMDBjNTJkMzYwMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lK2z6ziZKgS_uU3HGhbgjiOq3HwxfCzewCsfFJlRByA',
                Accept: 'application/json',
            },
        }

        )
            .then(response =>
                {
                    // console.log("getMovieImages",response.data)
                })
            .catch(error => {
                console.log('Error', error)
            }

            )
      
    }

    // getMovieImages(615656);
    // console.log("upComming", upComming);
    // console.log("topRated", topRated);
    // console.log("nowPlaying", nowPlaying);

    return (
        <MovieContextModule.Provider value={{ topRated: topRated }}>
            {children}
        </MovieContextModule.Provider>
    )
}