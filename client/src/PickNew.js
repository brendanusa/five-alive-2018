import './PickNew.css';
import React, { Component } from 'react';
import PicksTeamList from './PicksTeamList';

class PickNew extends Component {

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
      <div className="PickNew" onClick={this.handleClick}>
        <div className="StandingHeader" onClick={this.handleClick}>
          <span className="StandingName">{this.props.name}</span>
        </div>
        <div>
          {this.state.isActive ? <PicksTeamList teams={this.props.teams} /> : null}
        </div>
      </div>
    )
  }

}

export default PickNew;