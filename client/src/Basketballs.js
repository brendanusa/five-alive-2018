import React from 'react';
import './Basketballs.css';
import basketballs from './52014.jpeg';

const Basketballs = () => {
  return(
    <div className="Basketballs">
      <img src={basketballs} alt="basketballs" />
    </div>
  )
}

export default Basketballs;