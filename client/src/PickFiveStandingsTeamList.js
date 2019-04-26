import React, { Component } from 'react';
import './PickFiveStandingsTeamList.css';

class PickFiveStandingsTeamList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return(
      <div className="PickFiveStandingsTeamList">
          <div className="PickFiveStandingsTeamListContainer">
          <div className="PickFivePointer">
            <div></div>
          </div>
            {this.props.teams.map((team, i) => {
              return (
                <div className="PickFiveStandingsTeamContainer">
                  <div key={i} className={"PickFiveStandingsTeam" + [i]}>
                    <span>{team.name}</span>
                    <span>--</span>
                    <span className="PickFiveStandingsTeamRound">{team.round}</span>
                    <span>--</span>
                    <span className="PickFiveStandingsTeamPoints">{team.points}</span>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    )

  }

}

// insert this before map to sort teams by wins
// .sort((a, b) => b.w2018-a.w2018)

export default PickFiveStandingsTeamList;