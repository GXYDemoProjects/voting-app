import React from 'react';

// import { Link } from 'react-router';

const Header = ({ user, dropdownVisibility, showDropdown, hideDropdown, sidebarVisibility, showSidebar, hideSidebar }) => { 
  console.log('user:', user);
  const hideSide = () => {
    console.log('hide side');
    hideSidebar();
    document.removeEventListener('click', hideSide);
  };
  const showSide = (e) => {
    // e.preventDefault();
    showSidebar();
    document.addEventListener('click', hideSide);
  };


  const loggedOut = (
    <span>
      {/* <li><a href="#">Login</a></li> */}
      <li><a className="waves-effect btn">Login</a></li>
      <li><a className="waves-effect btn">Register</a></li>
    </span>
  );
  const hideDrop = () => {
    hideDropdown();
    document.removeEventListener('click', hideDrop);
  }
  const showDrop = (e) => {
    if(dropdownVisibility) {
      hideDropdown();
    } else {
      showDropdown();
    }
    e.nativeEvent.stopImmediatePropagation();
    document.addEventListener('click', hideDrop);
  }
  const toggleDrop = (e) => {
    console.log('show drop');
    if (dropdownVisibility) {
      hideDropdown();
    } else {
      showDropdown();
    }
    e.nativeEvent.stopImmediatePropagation();
  };
  const dropdown = (type) => {
    if (!dropdownVisibility) {
      return null;
    }
    if (type === 'PC') {
      return (
        <div className="hide-on-med-and-down dropdownContainer">
          <div className="seperator"></div>
          <a className="waves-effect btn">Log Out</a>
        </div>
      )
    }
    if (type === 'mobile') {
      return (
        <li>
          <a className="waves-effect btn">Log Out</a>
        </li>
      );
    }
  };
  const handleDrop = (type) => {
    if (type === 'PC') {
      return e => showDrop(e)
      
    } else {
      return e => toggleDrop(e);
    }
  }
  const loggedIn = (type) => (
    <span>
      <li className={type==='PC' ? 'item' : ''}>
        <a className="dropdown-button" onClick={handleDrop(type)}>
          {user.userName}
          <i className="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    </span>
  );
  return (
    <header className="header">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              <span className="title">
                <span className="title-first">V</span>
                <span className="title-last">OTING</span>
              </span>
            </a> 
            <a href="#" data-activates="mobile-demo" className="button-collapse" onClick={showSide}>
              <i className="material-icons">menu</i>
            </a>       
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li className="item active"><a href="#">Home</a></li>
              <li className="item"><a href="#">My Polls</a></li>
              <li className="item"><a href="#">New Poll</a></li>
              {user.login ? loggedIn('PC') : loggedOut}
            </ul>
            {dropdown('PC')}      
            {
              (sidebarVisibility) &&
              <ul className="side-nav" id="mobile-demo">
                <li className="active"><a href="#">Home</a></li>
                <li><a href="#">My Polls</a></li>
                <li><a href="#">New Poll</a></li>
                {user.login ? loggedIn('mobile') : loggedOut}
                {dropdown('mobile')}
              </ul> 
            }
          
          </div>
        </div>
      </nav>
    </header> 

  );
};
 

export default Header;