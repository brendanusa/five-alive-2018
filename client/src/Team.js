import React from "react";
import "./Team.css";

const Team = (props) => {
  return (
    <div className="TeamSelectRows">
      <span className="MainTeamName">{props.name}</span>
      <span className="MainTeamRecord">
        {props.w}-{props.l}
      </span>
    </div>
  );
};

export default Team;
