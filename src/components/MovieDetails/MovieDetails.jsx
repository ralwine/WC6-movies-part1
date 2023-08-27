import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export function MovieDetails() {

  const history = useHistory();
  const dispatch = useDispatch();
  const details = useSelector(store => store.details);

  const changeScreen = () => {
    console.log("changing screen")
    // Use history.push to navigate to a new route
    history.push('/');
  };

  console.log("in Movie Details", details) // where are my details?

  return (<>
    <section className="movies">
      {details.map(details => {

        <>
          <div key={details.id}>
            
            <img src={details.poster} alt={details.title} onClick={changeScreen} />
            <p>{details.title}</p>
            <p>{details.description}</p>
          </div>
        </>
          ;
      })}
    </section>
    <div>
      <button className='backToList' onClick={changeScreen}>BACK TO LIST</button>
    </div>
  </>)
}
