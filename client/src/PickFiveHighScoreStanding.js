import './PickFiveHighScoreStanding.css';
import React, { Component } from 'react';
import PickFiveStandingsTeamList from './PickFiveStandingsTeamList';

class PickFiveHighScoreStanding extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isActive: !this.state.isActive})
  }

  render() {
    return(
      <div className="PickFiveHighScoreStanding" onClick={this.handleClick}>
        <div className="PickFiveHighScoreStandingHeader">
          <span className = "PickFiveHighScoreStandingRank">{this.props.rank}</span>
          <span className="PickFiveHighScoreStandingName">{this.props.name}
            <span className="PickFiveHighScoreStandingYear"> {this.props.year}</span>
          </span>
          <span className="PickFiveHighScoreStandingScore">{this.props.score}</span>
        </div>
        <div>
          {this.state.isActive ? <PickFiveStandingsTeamList teams={this.props.teams} /> : null}
        </div>
      </div>
    )
  }

}

export default PickFiveHighScoreStanding;