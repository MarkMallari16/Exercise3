import React, { useState, useEffect } from 'react'
import CardComponent from './CardComponent'
import axios from 'axios'
const MovieLists = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchMovies();
    }, [])

    const fetchMovies = async () => {
        try {
            const response = await axios.get(
                "https://api.themoviedb.org/3/movie/popular?api_key=da64ec71a3a349f906eb016faac5a891"
            );
            setMovies(response.data.results);
        } catch (error) {
            console.error("Error fetching movies");
        }

    }
    return (
        <section className="movie-lists mt-4">
            <div className="container d-flex justify-content-center flex-wrap gap-4 ">
                {
                    movies

                        .map(movie => <CardComponent key={movie.id} movie={movie} />)
                }
            </div>
        </section>
    )
}

export default MovieLists