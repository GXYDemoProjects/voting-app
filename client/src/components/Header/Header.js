import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ActiveNavLink from './ActiveNavLink';
import * as authActions from '../../actions/authActions';
import * as uiActions from '../../actions/uiActions';

const mapStateToProps = (state) => ({
  user: state.user,
  sidebarVisibility: state.ui.sidebarVisibility,
  dropdownVisibility: state.ui.dropdownVisibility,
  activeLink: state.ui.activeLink
});

const actions = {...authActions, ...uiActions};

// const mapDispatchToProps = (dispatch) => ({
//   toggleSidebar: boolean => dispatch(actionCreators.toggleSideVisibility(boolean)),
//   toggleDropdown: boolean => dispatch(actionCreators.toggleDropdownVisibility(boolean)),
//   switchActive: path => dispatch(actionCreators.activeLink(path)),
//   signoutUser: () => {
//     localStorage.removeItem('token');
//     dispatch({ type: actions.UNAUTH_USER });
//   }
// });


const Header = props => {
  const { user, dropdownVisibility, sidebarVisibility} = props;
  const { toggleSidebar, toggleDropdown, signoutUser} = props;
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
          {/* <Link to="/logout" className="waves-effect btn">Log Out</Link> */}
          <a className="waves-effect btn" onClick={() => signoutUser()}>Log Out</a>
        </div>
      );
    }
    if (type === 'mobile') {
      return (
        <li>
          <a className="waves-effect btn" onClick={() => signoutUser()}>Log Out</a>
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
  const currentLocation = props.history.location.pathname;
  const loggedIn = (type) => {
    return (
    <span>
      {<ActiveNavLink currentLocation={currentLocation} to="/mypolls" label="My Polls"  className={type==='PC' ? 'item' : ''} />}
      {<ActiveNavLink currentLocation={currentLocation} to="/newpoll" label="New Poll" className={type==='PC' ? 'item' : ''} />}

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
            <Link to="/allpolls" className="brand-logo">
              <span className="title">
                <span className="title-first">V</span>
                <span className="title-last">OTING</span>
              </span>
            </Link> 
            <a className="button-collapse" onClick={()=>{showSide()}}>
              <i className="material-icons">menu</i>
            </a>       
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <ActiveNavLink currentLocation={currentLocation} to="/allpolls" label="Home" className="item"/>

              {user.authentication ? loggedIn('PC') : loggedOut}
            </ul>
            {dropdown('PC')}      
            {
              (sidebarVisibility) &&
              <ul className="side-nav" id="mobile-demo">
                <ActiveNavLink currentLocation={currentLocation} to="/allpolls" label="Home" className=""/>
                {/* <li className="active"><Link to="/">Home</Link></li>
                <li><Link to="/mypolls">My Polls</Link></li>
                <li><Link to="/newpoll">New Poll</Link></li> */}
                {user.authentication ? loggedIn('mobile') : loggedOut}
                {dropdown('mobile')}
              </ul> 
            }
          
          </div>
        </div>
      </nav>
    </header> 
  
  );
}  


const HeaderContainer = connect(mapStateToProps, actions)(Header);
export default withRouter(HeaderContainer);