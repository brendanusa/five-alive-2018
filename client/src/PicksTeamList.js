import React, { Component } from "react";
import "./PicksTeamList.css";

class PicksTeamList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="PicksTeamList">
        <div className="PicksTeamListContainer">
          {this.props.teams.map((team, i) => {
            return (
              <div className="PicksTeamContainer">
                <div key={i} className={"PicksTeam" + [i]}>
                  {team.name} ({team.w2122}-{team.l2122})
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default PicksTeamList;
