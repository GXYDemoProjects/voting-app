import React from 'react';
import { Link } from 'react-router-dom';


const ActiveNavLink = ({ label, to, currentLocation, className }) => (
  <li className={`${className} ${currentLocation===to?'active':''}`}>
    <Link to={to} >
    {label}
    </Link> 
  </li>

);

export default ActiveNavLink;