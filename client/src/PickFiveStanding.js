import './PickFiveStanding.css';
import React, { Component } from 'react';
import PickFiveStandingsTeamList from './PickFiveStandingsTeamList';

class PickFiveStanding extends Component {

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
      <div className="PickFiveStanding" onClick={this.handleClick}>
        <div className="PickFiveStandingHeader">
          <span className="PickFiveStandingNameYearContainer">
            <span className="PickFiveStandingName">{this.props.name}</span>
            <span className="PickFiveStandingYear">
            {this.props.year || null}
            </span>
          </span>
          <span className="PickFiveStandingScore">{this.props.score}</span>
        </div>
        <div>
          {this.state.isActive ? <PickFiveStandingsTeamList teams={this.props.teams} /> : null}
        </div>
      </div>
    )
  }

}

export default PickFiveStanding;