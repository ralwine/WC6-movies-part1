import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export function MovieDetails() {

  const history = useHistory();
  const dispatch = useDispatch();
  const details = useSelector(store => store.details);
  const genres = useSelector(store => store.genres);

  const changeScreen = () => {
    console.log("changing screen")
    // Use history.push to navigate to a new route
    history.push('/');
  };

  console.log("in Movie Details", details) // where are my details?
  console.log("in Movie Details/ genres", details.genres) // where are my genres?

  return (<>
    <section className="movies">


      <>
        <div key={details.id}>

          <img src={details.poster} alt={details.title} onClick={changeScreen} />

          <p><b>{details.title}</b></p>
          <p>{details.description}</p>
          <p><b>Genres: </b>{details.genres}</p>
        </div>
      </>
    </section>
    <div>
      <button className='backToList' onClick={changeScreen}>BACK TO LIST</button>
    </div>
  </>)
}
