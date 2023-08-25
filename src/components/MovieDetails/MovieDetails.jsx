import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export function MovieDetails() {

  const history = useHistory();

  const changeScreen = () => {
    console.log("changing screen")
    // Use history.push to navigate to a new route
    history.push('/');
};

  return <div>
    <button className='backToList'onClick={changeScreen}>BACK TO LIST</button>
  </div>;
}
