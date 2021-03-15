import "./PickFiveChampsStanding.css";
import React, { Component } from "react";
import PickFiveStandingsTeamList from "./PickFiveStandingsTeamList";

class PickFiveChampsStanding extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <div className="PickFiveChampsStanding" onClick={this.handleClick}>
        <div className="PickFiveChampsStandingHeader">
          <div className="PickFiveChampsStandingYear">
            <span>{this.props.year}</span>
          </div>
          <div className="PickFiveChampsStandingName">{this.props.name}</div>
        </div>
        <div>
          {this.state.isActive ? (
            <PickFiveStandingsTeamList teams={this.props.teams} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default PickFiveChampsStanding;
