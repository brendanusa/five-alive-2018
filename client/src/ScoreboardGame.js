import React from "react";
import "./ScoreboardGame.css";

const ScoreboardGame = (props) => {
  return (
    <a
      className="ScoreboardGame"
      href={`https://www.espn.com/mens-college-basketball/game?gameId=${props.id}`}
      target="_blank"
    >
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
    </a>
  );
};

export default ScoreboardGame;
