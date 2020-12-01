import React, { Component } from 'react';
import './PicksBySchool.css'

class PicksBySchool extends Component {

  constructor(props) {
    super(props);
    this.state = {
      schools: []
    }
  }

  componentDidMount() {
    fetch('/api/picksbyschool')
      .then(res => res.json())
      .then(data => {
        this.setState({schools: data})
      })
  }

  render() {
    return (
    <div>
      <h3>PICKS BY SCHOOL</h3>
      <div className="PicksBySchool">
        <div>
          {this.state.schools.map(school => {
            return <div className="PicksBySchoolSchool">
              <span className="PickSchoolName">{school.name}</span>
              <span className="PickNumber">{school.count}</span>
            </div>
          })}
        </div>
      </div>
    </div>
    );
  }

}

export default PicksBySchool;