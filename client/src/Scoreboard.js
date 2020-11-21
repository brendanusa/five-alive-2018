import './Scoreboard.css';
import React, { Component } from 'react';
import ScoreboardGame from './ScoreboardGame';

class Scoreboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      scores: []
    }
  }

  componentDidMount() {
    fetch('/api/scores')
      .then(res => res.json())
      .then(data => {
        this.setState({scores: data})
      })
  }

  render() {
    return(
      <div className="Scoreboard">
        {this.state.scores.map((game, i) => {
          return (
            <ScoreboardGame key={i} homeTeam={game.homeTeam.abbreviation} homeScore={game.homeTeam.score} awayTeam={game.awayTeam.abbreviation} awayScore={game.awayTeam.score} clock={game.clock}/>
          )
        })}
      </div>
    );
  }

}

export default Scoreboard;