import './StandingNew.css';
import React, { Component } from 'react';
import StandingsTeamList from './StandingsTeamList';

class StandingNew extends Component {

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
      <div className="StandingNew" onClick={this.handleClick}>
        <div className="StandingHeader">
          <span className="StandingName">{this.props.name}</span>
          <span className="StandingWins">{this.props.wins}</span>
        </div>
        <div>
          {this.state.isActive ? <StandingsTeamList teams={this.props.teams} /> : null}
        </div>
      </div>
    )
  }

}

export default StandingNew;