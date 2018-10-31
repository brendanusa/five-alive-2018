import React from 'react';
import './Standing.css';

const Standing = (props) => {

  return (

    <div className="Standing">
      <span>{props.name} -</span>
      <span>- {props.wins}</span>
    </div>

  )

}

export default Standing;