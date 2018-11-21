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
        <span className="PickName">{this.props.name}</span>
        <div>
          {this.state.isActive ? <PicksTeamList teams={this.props.teams} /> : null}
        </div>
      </div>
    )
  }

}

export default PickNew;