import './Home.css';
import React, { Component } from 'react';
import Chat from './Chat';
import Standings from './Standings';
import ChatTestimonials from './ChatTestimonials';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {},
      passwordFeedback: '',
      post: '',
      authenticated: false,
      testimonialsActive: false
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state.post)
    fetch('/api/password?password=' + this.state.post)
      .then(res => res.json())
      .then(data => {
        console.log(data[0])
        if (data[0]) {
          console.log(data[0]);
          this.setState({user: data[0]});
          this.setState({authenticated: true});
          this.setState({passwordFeedback: `Welcome ${this.state.user.name.split(' ')[0]}!`});
        } else {
          this.setState({passwordFeedback: 'No good!'});
        }
      })
  };

  handleTestimonialsClick = (e) => {
    if (!this.state.testimonialsActive) {
      document.getElementById("dim").classList.add("HomeDim");
      document.getElementsByClassName("HomeInner")[0].classList.add("TestimonialsActive");
    } else {
      document.getElementById("dim").classList.remove("HomeDim");
      document.getElementsByClassName("HomeInner")[0].classList.remove("TestimonialsActive");
    }
    this.setState({testimonialsActive: !this.state.testimonialsActive});
  }


  render() {
    return (
      <div>
        <div className="HomeInner">
          {this.state.testimonialsActive ? <ChatTestimonials /> : null}
        </div>
        <div className="HomeOuter" id="dim">
          <div className="Home">
            <div><Standings /></div>
            <div className="FixChat"><Chat /></div>
          </div>
        </div>
        <div className="TestimonialsToggle">
          <a onClick={this.handleTestimonialsClick}>{this.state.testimonialsActive ? 'Click to Hide Chat Testimonials' : 'Click to View Chat Testimonials'}</a>
        </div>
      </div>
    );
  }
}

export default Home;