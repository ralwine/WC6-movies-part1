import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export function MovieItem({ movie }) {

    const dispatch = useDispatch();
    const history = useHistory();

    const getDeets = () => {
        // make new path/type for details
        dispatch({
            type: 'FETCH_DEETS',
            payload: movie.id
        })
        console.log("to details screen")
        // Use history.push to navigate to a new route
        history.push('/details/${movie.id}');
    };

    return <>
        <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={getDeets} />
        </div>
    </>;
}
