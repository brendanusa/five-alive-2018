import "./Scoreboard.css";
import React, { Component } from "react";
import ScoreboardGame from "./ScoreboardGame";

class Scoreboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scores: [],
      date: "",
    };
  }

  componentDidMount() {
    fetch("/api/scores")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ scores: data });
      });
    fetch("/api/scoreboardDate")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ date: data[0].updated });
      });
  }

  render() {
    return (
      <div className="Scoreboard">
        <div className="ScoreboardDate">{this.state.date}</div>
        <div className="ScoreboardGamesContainer">
          {this.state.scores[0] ? (
            this.state.scores.map((game, i) => {
              return (
                <ScoreboardGame
                  key={i}
                  homeTeam={game.hometeam}
                  homeScore={game.homescore}
                  awayTeam={game.awayteam}
                  awayScore={game.awayscore}
                  clock={game.clock}
                  id={game.id}
                />
              );
            })
          ) : (
            <div className="Empty">
              NO #5ALIVE GAMES TODAY. FEEL FREE TO GO OUTSIDE OR INTERACT WITH
              LOVED ONES.
            </div>
          )}
        </div>
        <div className="MarginCorrection"></div>
      </div>
    );
  }
}

export default Scoreboard;
