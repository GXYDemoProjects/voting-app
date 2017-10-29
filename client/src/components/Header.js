import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ActiveNavLink from './ActiveNavLink';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => (
  Object.assign({},{
    user: state.user,
    sidebarVisibility: state.ui.sidebarVisibility,
    dropdownVisibility: state.ui.dropdownVisibility,
    activeLink: state.ui.activeLink
  })
)

const mapDispatchToProps = (dispatch) => ({
  toggleSidebar: (boolean) => dispatch(actionCreators.toggleSideVisibility(boolean)),
  toggleDropdown: (boolean) => dispatch(actionCreators.toggleDropdownVisibility(boolean)),
  switchActive: (path) => dispatch(actionCreators.activeLink(path))
});


const Header = ({user, toggleSidebar, toggleDropdown, dropdownVisibility, sidebarVisibility, switchActive}) => {

  const hideSide = () => {
    toggleSidebar(false);
    document.removeEventListener('click', hideSide);
  }
  const showSide = (e) => {
    toggleSidebar(true);
    document.addEventListener('click', hideSide);
  }
  const hideDrop = () => {
    toggleDropdown(false);
    document.removeEventListener('click', hideDrop);
  }
  const showDrop = (e) => {
    if(dropdownVisibility) {
      toggleDropdown(false);
    } else {
      toggleDropdown(true);
    }
    e.nativeEvent.stopImmediatePropagation();
    document.addEventListener('click', hideDrop);
  }
  const toggleDrop = (e) => {
    console.log('show drop');
    if (dropdownVisibility) {
      toggleDropdown(false);
    } else {
      toggleDropdown(true);
    }
    e.nativeEvent.stopImmediatePropagation();
  }
  const dropdown = (type) => {
    if (!dropdownVisibility) {
      return null;
    }
    if (type === 'PC') {
      return (
        <div className="hide-on-med-and-down dropdownContainer">
          <div className="seperator"></div>
          <Link to="/logout" className="waves-effect btn">Log Out</Link>
        </div>
      );
    }
    if (type === 'mobile') {
      return (
        <li>
          <Link to="/logout" className="waves-effect btn">Log Out</Link>
        </li>
      );
    }
  }
  const handleDrop = (type) => {
    if (type === 'PC') {
      return e => showDrop(e)
      
    } else {
      return e => toggleDrop(e);
    }
  }
  const loggedIn = (type) => {
    return (
    <span>
      <li className={type==='PC' ? 'item' : ''}>
        <a className="dropdown-button" onClick={handleDrop(type)} >
          {user.userName}
          <i className="material-icons right">arrow_drop_down</i>
        </a>
      </li>
    </span>
    );
  }

  const loggedOut = (
    <span>
      <li><Link to="/login" className="waves-effect btn">Login</Link></li>
      <li><Link to="/register" className="waves-effect btn">Register</Link></li>
    </span>
  );
  return (
    <header className="header">
      <nav>
        <div className="container">
          <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
              <span className="title">
                <span className="title-first">V</span>
                <span className="title-last">OTING</span>
              </span>
            </Link> 
            <Link to="/" className="button-collapse" onClick={()=>{showSide()}}>
              <i className="material-icons">menu</i>
            </Link>       
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <ActiveNavLink switchActive={switchActive} to="/" activeOnlyWhenExact={true} label="Home" className="item"/>
              <ActiveNavLink switchActive={switchActive} to="/mypolls" label="My Polls" className="item"/>
              <ActiveNavLink switchActive={switchActive} to="/newpoll" label="New Poll" className="item"/>
              {/* <li className="item active"><Link to="/">Home</Link></li>
              <li className="item"><Link to="/mypolls">My Polls</Link></li>
              <li className="item"><Link to="/newpoll">New Poll</Link></li> */}
              {user.login ? loggedIn('PC') : loggedOut}
            </ul>
            {dropdown('PC')}      
            {
              (sidebarVisibility) &&
              <ul className="side-nav" id="mobile-demo">
                <ActiveNavLink switchActive={switchActive} to="/" activeOnlyWhenExact={true} label="Home" className=""/>
                <ActiveNavLink switchActive={switchActive} to="/mypolls" label="My Polls" className=""/>
                <ActiveNavLink switchActive={switchActive} to="/newpoll" label="New Poll" className=""/>
                {/* <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/mypolls">My Polls</Link></li>
                <li><Link to="/newpoll">New Poll</Link></li> */}
                {user.login ? loggedIn('mobile') : loggedOut}
                {dropdown('mobile')}
              </ul> 
            }
          
          </div>
        </div>
      </nav>
    </header> 
  
  );
}  


const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);
export default HeaderContainer;