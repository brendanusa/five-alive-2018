import './Standing.css';
import React, { Component } from 'react';
import StandingsTeamList from './StandingsTeamList';

class Standing extends Component {

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
      <div className="Standing">
        <div className="StandingHeader" onClick={this.handleClick}>
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

export default Standing;