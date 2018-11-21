import React, { Component } from 'react';
import './Picks.css';
import Pickles from './Pickles';
import PicksTestimonials from './PicksTestimonials';
import PicksBySchool from './PicksBySchool';
import SimScore from './SimScore';

class Picks extends Component {

  constructor(props) {

    super(props);
    this.state = {
      testimonialsActive: false
    }

  }

  handleTestimonialsClick = (e) => {
    if (!this.state.testimonialsActive) {
      document.getElementById("dim").classList.add("HomeDim");
    } else {
      document.getElementById("dim").classList.remove("HomeDim");
    }
    this.setState({testimonialsActive: !this.state.testimonialsActive});
  }

  render() {
    return (
      <div>
        <div className="PicksInner">
          {this.state.testimonialsActive ? <PicksTestimonials /> : null}
        </div>
        <div className="PicksOuter" id="dim">
          <div className="Picks">
            <div><PicksBySchool /></div>
            <div><Pickles /></div>
            <div><SimScore /></div>
          </div>
        </div>
        <div className="PicksTestimonialsToggle">
          <a onClick={this.handleTestimonialsClick}>{this.state.testimonialsActive ? 'Click to Hide Testimonials' : 'Click to View Picks Page Testimonials'}</a>
        </div>
      </div>
    );
  }

}

export default Picks;