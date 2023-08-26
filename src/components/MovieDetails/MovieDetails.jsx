import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export function MovieDetails() {

  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector(store => store.movies);

  const changeScreen = () => {
    console.log("changing screen")
    // Use history.push to navigate to a new route
    history.push('/');
  };

  return (<>
    <section className="movies">
      {movies.map(movie => {
        return (
          <>
            {/* <div key={movie.id} >
              <h3>{movie.title}</h3>
              <img src={movie.poster} alt={movie.title} onClick={changeScreen} />
            </div> */}
          </>
        );
      })}
    </section>
    <div>
      <button className='backToList' onClick={changeScreen}>BACK TO LIST</button>
    </div>
  </>)
}
