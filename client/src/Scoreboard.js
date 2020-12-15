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
            <ScoreboardGame key={i} homeTeam={game.hometeam} homeScore={game.homescore} awayTeam={game.awayteam} awayScore={game.awayscore} clock={game.clock}/>
          )
        })}
      </div>
    );
  }

}

export default Scoreboard;