import React, { Component } from "react";
import "./SimScore.css";

class SimScore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("/api/simscore")
      .then((res) => res.json())
      .then((users) => {
        this.setState({ users: users });
      });
  }

  render() {
    return (
      <div>
        <h3>
          <span>SHADEK-ACTIONTHAL SIMDEX</span>
        </h3>
        <div className="SimScore">
          <div>
            {this.state.users.map((user, i) => {
              return (
                <div className="SimScoreScore">
                  <span className="SimScoreName">{user.name}</span>
                  <span className="SimScoreNumber">{user.sim_score_2020}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default SimScore;
