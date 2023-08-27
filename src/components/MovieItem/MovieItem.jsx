import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export function MovieItem(movie) {
    return <>
        <div key={movie.id}>
            <h3>{movie.title}</h3>
            <img src={movie.poster} alt={movie.title} onClick={changeScreen} />
        </div>
    </>;
}
