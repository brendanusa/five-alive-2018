import React, { Component } from 'react';
import './StandingsTeamList.css';

class StandingsTeamList extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return(
      <div className="StandingsTeamList">
        <div className="pointer"></div>
          <div className="StandingsTeamListContainer">
            {this.props.teams.map((team, i) => {
              return (
                <div className="StandingsTeamContainer">
                  <div key={i} className={"StandingsTeam" + [i]}>
                    {team.name} ({team.w1819}-{team.l1819})
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

export default StandingsTeamList;