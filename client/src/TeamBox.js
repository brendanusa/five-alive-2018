import React from 'react';
import './TeamBox.css';

const TeamBox = (props) => {

  return (

    <div className="TeamBox">
      <div className="TeamLogoContainer">
        <img src={`https://five-alive-team-logos.s3-us-west-1.amazonaws.com/${props.team.name}.gif`} />
      </div>
      <div className="TeamTextContainer">
        <h2>{props.team.name} {props.team.nickname}</h2>
        <h6>CONF</h6>
        <div>{props.team.conference}</div>
        <h6>W-L</h6>
        <div>{props.team.w2019}-{props.team.l2019}</div>
        <h6>2018-19 W-L</h6>
        <div>{props.team.w1819}-{props.team.l1819}</div>
      </div>
    </div>

  )

}

export default TeamBox;