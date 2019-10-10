import React, { Component } from 'react';
import PickFiveChampsStanding from './PickFiveChampsStanding';
import './PickFiveChamps.css'

class PickFiveChamps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      PickFiveChamps: [],
      isActive: false
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({isActive: !this.state.isActive})
  }

  componentDidMount() {
    fetch('/api/pickfive/champs')
      .then(res => res.json())
      .then(data => {
        this.setState({PickFiveChamps: data})
      })
  }

  render() {
    return (
    <div className="PickFiveChampsContainer">
      <h3 onClick={this.handleClick}>HALL OF CHAMPIONS</h3>
      {this.state.isActive ? 

        <div className="PickFiveChamps">
          <div className="PickFiveChampsStandings">
            {this.state.PickFiveChamps ? this.state.PickFiveChamps.map((user, i) => {
              return (
                <PickFiveChampsStanding key={i} name={user.name} points={user.points} teams={user.teams} year={user.year}/>
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

export default PickFiveChamps;