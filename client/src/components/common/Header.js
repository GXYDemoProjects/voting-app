import React from 'react';
import AppBar from 'material-ui/AppBar';
// import Tabs from 'material-ui/tabs/tabs';
// import Tab from 'material-ui/tabs/tab';
// import IconButton from 'material-ui/IconButton';
// import IconMenu from 'material-ui/IconMenu';
// import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';
import ExpandMore from 'material-ui/svg-icons/navigation/expand-more';
// import Toggle from 'material-ui/Toggle';
// import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import { Link } from 'react-router';


const Header = ({ user }) => {
  const labelStyle = {
    color: 'white',
  };
  const renderLogin = () => (
    <div>
      <FlatButton label="Home" labelStyle={labelStyle} />
      <FlatButton label="Login with Twitter" labelStyle={labelStyle} />
    </div>
  );
  const renderLogout = (userName) => (
    <div>
      <FlatButton label="Home" labelStyle={labelStyle} />
      <FlatButton label="My Polls" labelStyle={labelStyle} />
      <FlatButton label={userName} style={labelStyle} 
      labelPosition="before"
      icon={<ExpandMore />} />
    </div>
  );
  return (
  <AppBar 
    title="Voting App" 
    iconElementRight={user.login ? renderLogout(user.userName) : renderLogin(user.userName) }
  />
  );
};
export default Header;