import React from 'react';
// import { Link } from 'react-router';

const Header = ({ user }) => { 
  console.log(user);
  const dropdown = (i) => (
    <ul id={`dropdown${i}`} className="dropdown-content">
      <li><a href="#">Sign Out</a></li>
    </ul>
  );

  const loggedIn = (i) => (
    <span>
      <li className={i===1 ? 'item' : ''}>
        <a className="dropdown-button" data-activates={`dropdown${i}`}>
          {user.userName}
          <i className="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    </span>
  );

  const loggedOut = (
    <span>
      {/* <li><a href="#">Login</a></li> */}
      <li><a className="waves-effect waves-light btn">Login</a></li>
      <li><a className="waves-effect waves-light btn">Register</a></li>
    </span>
  );


  return (
  <nav>
    <div className="container">
      {dropdown(1)}
      {dropdown(2)}
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          <span className="title">
            <span className="title-first">V</span>
            <span className="title-last">OTING</span>
          </span>
        </a>
        <a href="#" data-activates="mobile-demo" className="button-collapse">
          <i className="material-icons">menu</i>
        </a>        
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li className="item active"><a href="#">Home</a></li>
          <li className="item"><a href="#">My Polls</a></li>
          <li className="item"><a href="#">New Poll</a></li>
          {user.login ? loggedIn(1) : loggedOut}
        </ul>
        <ul className="side-nav" id="mobile-demo">
          <li className="active"><a href="#">Home</a></li>
          <li><a href="#">My Polls</a></li>
          <li><a href="#">New Poll</a></li>
          {user.login ? loggedIn(2) : loggedOut}
        </ul>        
      </div>
    </div>
  </nav>

  );
};

export default Header;