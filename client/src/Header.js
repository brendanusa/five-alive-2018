import React from 'react';
// import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './Header.css';
        
// SELECT TEAMS LINK
// <span>
//   <Link to={'/teamselect'} style={{marginRight:"40px"}}>SELECT TEAMS</Link>
// </span>

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
    <span className="links">
        <span>
          <Link to={'/home'}>HOME</Link>
        </span>
        <span>
          <Link to={'/stats'}>STATS</Link>
        </span>
        <span>
          <Link to={'/history'}>HISTORY</Link>
        </span>
        <span>
          <Link to={'/about'}>ABOUT</Link>
        </span>
        <span style={{marginLeft: '1.5vw'}}>
          <Link to={'/pickfive'}>PICK5</Link>
        </span>
    </span>
  </header>
)

// class Header extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       activeComponent: 'home'
//     }
//   }

//   componentDidMount() {

//   }

//   handleClick = (e) => {
//     console.log('58', this.state.activeComponent)
//     if (e.target.href) {
//       let url = e.target.href.slice(e.target.href.lastIndexOf('/') + 1) || 'home';
//       console.log('url', url)
//       document.getElementById(this.state.activeComponent).className -= 'selectedComponent';
//       this.setState({activeComponent: url})
//       document.getElementById(url).className += 'selectedComponent';
//     }
//     console.log('67', this.state.activeComponent)
//   }

//   render() {
//     return(
//       <header>
//         <span className="title"><strong>
//           <span className="bordered" id="one">#</span>
//           <span className="bordered" id="two">5</span>
//           <span className="bordered" id="three">A</span>
//           <span className="bordered" id="four">L</span>
//           <span className="bordered" id="five">I</span>
//           <span className="bordered" id="six">V</span>
//           <span className="bordered" id="seven">E</span>
//         </strong></span>
//         <span className="links" onClick={this.handleClick}>
//             <span>
//               <Link to={'/home'}>HOME</Link>
//             </span>
//             <span>
//               <Link to={'/stats'}>STATS</Link>
//             </span>
//             <span>
//               <Link to={'/history'}>HISTORY</Link>
//             </span>
//             <span>
//               <Link to={'/about'}>ABOUT</Link>
//             </span>
//             <span style={{marginLeft: '1.5vw'}}>
//               <Link to={'/pickfive'}>PICK5</Link>
//             </span>
//         </span>
//       </header>
//     )
//   }

// }

export default Header;