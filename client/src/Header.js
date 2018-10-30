import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <span className="title"><strong>
      <span className="bordered" id="one">#</span>
      <span className="bordered" id="two">5</span>
      <span className="bordered" id="three">A</span>
      <span className="bordered" id="four">L</span>
      <span className="bordered" id="five">I</span>
      <span className="bordered" id="six">V</span>
      <span className="bordered" id="seven">E</span>
    </strong></span>
    <Router>
      <span className="link">
          <span>
            <Link to='/login' style={{marginRight:"40px"}}>Login</Link>
          </span>
          <span>
            <Link to='/teamselect' style={{marginRight:"40px"}}>Select Teams</Link>
          </span>
          <span>
            <Link to='/standings'>Standings</Link>
          </span>
      </span>
    </Router>
  </header>
)

export default Header;