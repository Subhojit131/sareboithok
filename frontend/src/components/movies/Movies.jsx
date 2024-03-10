
import React, { useState } from 'react';
import Header from '../header/Header';
import axios from 'axios';
import './Movies.css'

const Movies = () => {
    //states
    const [movies, setMovies] = useState([]);
    const [query, setQuery] = useState('');

    //Consume the API
    const searchMovie = async (e) => {
        e.preventDefault();

        const API_KEY = "52d37796";
        const apiURI = `https://www.omdbapi.com/?i=tt3896198&apikey=${API_KEY}&s=${query}`;

        try {
            const response = await axios.get(apiURI);
            const data = response.data.Search
            console.log(data);

            //setState
            setMovies(data);

        } catch (err) {
            console.error(err);
        }
    }


    return (
        <div className="shoppies">
            <Header
                searchMovie={searchMovie}
                query={query}
                setQuery={setQuery}
                movies={movies}
            />
        </div>
    )
}

export default Movies;