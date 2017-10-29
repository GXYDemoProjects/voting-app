import React from 'react';
import { Link, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';


const ActiveNavLink = ({ label, to, activeOnlyWhenExact, className, switchActive }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => {
    console.log('match:', match);
    if(match) {
      switchActive(match.path);
    }
    return (
    // <li className={`${className} ${match ? 'active' : ''}`}>
    <li className={match ? 'active' : ''}>
      <Link onClick={() => switchActive('/aa')} to={to}>{label}</Link>
    </li>
  );}} />
);

export default ActiveNavLink;