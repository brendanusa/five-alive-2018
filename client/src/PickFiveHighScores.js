import React, { Component } from 'react';
import PickFiveStanding from './PickFiveStanding';
import './PickFiveHighScores.css'

class PickFiveHighScores extends Component {

  constructor(props) {
    super(props);
    this.state = {
      PickFiveHighScores: [],
    }
  }

  componentDidMount() {
    fetch('/api/pickfive/highscores')
      .then(res => res.json())
      .then(data => {
        this.setState({PickFiveHighScores: data})
      })
  }

  render() {
    return (
    <div className="PickFiveHighScoresContainer">
      <h3>HALL OF HIGH SCORES</h3>
      <div className="PickFiveHighScores">
        <div className="PickFiveHighScoresStandings">
          {this.state.PickFiveHighScores ? this.state.PickFiveHighScores.map((user, i) => {
            return (
              <PickFiveStanding key={i} rank={i + 1} name={user.name} score={user.score} teams={user.teams} year={user.year}/>
            )
          }) : null}
        </div>
      </div>
    </div>
    );
  }

}

export default PickFiveHighScores;