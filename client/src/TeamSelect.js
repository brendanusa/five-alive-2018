import React, { Component } from 'react';
import './TeamSelect.css';

class TeamSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('teamselect mounted')
  }

  render() {
    return (
      <div className="TeamSelect">
        <span>COMING REAL SOON</span>
      </div>
    )
  }

}

export default TeamSelect;