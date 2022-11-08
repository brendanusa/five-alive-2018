import React from "react";
import "./TeamBox.css";

const TeamBox = (props) => {
  return (
    <div className="TeamBox">
      <div className="TeamLogoContainer">
        <img
          alt={"logo"}
          src={`https://five-alive-team-logos.s3-us-west-1.amazonaws.com/${props.team.name}.gif`}
        />
      </div>
      <div className="TeamTextContainer">
        <h2>
          {props.team.name} {props.team.nickname}
        </h2>
        <h6>CONF</h6>
        <div>{props.team.conference}</div>
        <h6>W-L</h6>
        <div>
          {props.team.w2223}-{props.team.l2223}
        </div>
        <h6>2021-22 W-L</h6>
        <div>
          {props.team.w2122}-{props.team.l2122}
        </div>
        <h6>PREV</h6>
        <div>{props.team.prevgm}</div>
        <h6>NEXT</h6>
        <div>{props.team.nextgm}</div>
      </div>
    </div>
  );
};

export default TeamBox;
