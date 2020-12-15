import React from 'react';
import './ScoreboardGame.css';

const ScoreboardGame = (props) => {

  return (
    <div className="ScoreboardGame">
      <div>
        <div>
          <span className="ScoreboardGameTeam">{props.awayTeam}</span>
          <span>{props.awayScore}</span>
        </div>
        <div>
          <span className="ScoreboardGameTeam">{props.homeTeam}</span>
          <span>{props.homeScore}</span>
        </div>
      </div>
      <div className="ScoreboardGameClock">
        <span>{props.clock}</span>
      </div>
    </div>
  )

}

export default ScoreboardGame;