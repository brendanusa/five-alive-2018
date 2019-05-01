import React, { Component } from 'react';
import PickFiveChampsStanding from './PickFiveChampsStanding';
import './PickFiveChamps.css'

class PickFiveChamps extends Component {

  constructor(props) {
    super(props);
    this.state = {
      PickFiveChamps: [],
    }
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
      <h3>HALL OF CHAMPIONS</h3>
      <div className="PickFiveChamps">
        <div className="PickFiveChampsStandings">
          {this.state.PickFiveChamps ? this.state.PickFiveChamps.map((user, i) => {
            return (
              <PickFiveChampsStanding key={i} name={user.name} points={user.points} teams={user.teams} year={user.year}/>
            )
          }) : null}
        </div>
      </div>
    </div>
    );
  }

}

export default PickFiveChamps;