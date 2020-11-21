import React from 'react';
import './ScoreboardGame.css';

const ScoreboardGame = (props) => {

  return (
    <div className="ScoreboardGame">
      <div>
        <span>{props.awayTeam}</span>
        <span>{props.awayScore}</span>
      </div>
      <div>
        <span>{props.homeTeam}</span>
        <span>{props.homeScore}</span>
      </div>
      <div className="clock">
        {props.clock}
      </div>
    </div>
  )

}

export default ScoreboardGame;