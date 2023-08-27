import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'
import { MovieItem } from '../MovieItem/MovieItem';

function MovieList() {

    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const history = useHistory();

    const changeScreen = () => {
        console.log("changing screen")
        // Use history.push to navigate to a new route
        history.push('/details');
    };

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => 
                     (
                        <MovieItem movie={movie}/>
                    )
                )}
            </section>
        </main>

    );

    
}

export default MovieList;

