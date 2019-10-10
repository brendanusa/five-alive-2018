import React, { Component } from 'react';
import PickFiveStanding from './PickFiveStanding';
import './PickFiveHighScores.css'

class PickFiveHighScores extends Component {

  constructor(props) {
    super(props);
    this.state = {
      PickFiveHighScores: [],
      isActive: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    fetch('/api/pickfive/highscores')
      .then(res => res.json())
      .then(data => {
        this.setState({PickFiveHighScores: data})
      })
  }

  handleClick() {
    this.setState({isActive: !this.state.isActive})
  }

  render() {
    return (
    <div className="PickFiveHighScoresContainer" onClick={this.handleClick}>
      <h3>HALL OF HIGH SCORES</h3>

      {this.state.isActive ?
      
        <div className="PickFiveHighScores">
          <div className="PickFiveHighScoresStandings">
            {this.state.PickFiveHighScores ? this.state.PickFiveHighScores.map((user, i) => {
              return (
                <PickFiveStanding key={i} rank={i + 1} name={user.name} score={user.score} teams={user.teams} year={user.year}/>
              )
            }) : null}
          </div>
        </div>

        : null

      }

    </div>
    );
  }

}

export default PickFiveHighScores;