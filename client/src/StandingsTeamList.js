import React, { Component } from 'react';
import TeamBox from './TeamBox';
import './StandingsTeamList.css';

class StandingsTeamList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      activeTeam: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (this.state.activeTeam === e.target.className[e.target.className.length - 1]) {
      this.setState({activeTeam: null})
    } else {
      this.setState({activeTeam: e.target.className[e.target.className.length - 1]})
    }
  }

  render() {

    return(
      <div className="StandingsTeamList">
        <div className="StandingsTeamListContainer">
          {this.props.teams.map((team, i) => {
            return (
              <div className="StandingsTeamContainer">
                <div key={i} className={"StandingsTeam" + [i]} onClick={this.handleClick}>
                  <span className={"StandingsSpan" + [i]}>{team.name}</span>
                  <span>{team.w2020}</span>
                </div>
              </div>
            )
          })}
        </div>
          {this.state.activeTeam ? 
            <div className="TeamBoxContainer">
              <TeamBox team={this.props.teams[this.state.activeTeam]} />
            </div>
            : null
          }
      </div>
    )

  }

}

export default StandingsTeamList;