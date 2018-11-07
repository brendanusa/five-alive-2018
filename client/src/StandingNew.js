import './StandingNew.css';
import React, { Component } from 'react';
import StandingsTeamList from './StandingsTeamList';

class StandingNew extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
      
    }
  }

  handleActive = () => {
    this.setState({isActive: true})
  }

  handleInactive = () => {
    this.setState({isActive: false})
  }

  render() {
    return(
      <div className="StandingNew" onMouseEnter={this.handleActive} onMouseLeave={this.handleInactive}>
        <span className="StandingName">{this.props.name}</span>
        <div>
          {this.state.isActive ? <StandingsTeamList teams={this.props.teams} /> : null}
        </div>
      </div>
    )
  }

}

export default StandingNew;