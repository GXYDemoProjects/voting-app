import React from 'react';
import { Link, Route, withRouter, NavLink } from 'react-router-dom';


const ActiveNavLink = ({ label, to, currentLocation, className }) => (
  <li className={`${className} ${currentLocation===to?'active':''}`}>
    <NavLink to={to} >
    {label}
    </NavLink> 
  </li>
  // <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
  //   // console.log('match:', match);
  //   // if(match) {
  //   //   switchActive(match.path);
  //   // }

  //   return (
  //   // <li className={`${className} ${match ? 'active' : ''}`}>
  //   <li className={`${className} ${match ? 'active' : ''}`}>
  //     <Link to={to}>{label}</Link>
  //   </li>
  // );}} />
);

export default ActiveNavLink;