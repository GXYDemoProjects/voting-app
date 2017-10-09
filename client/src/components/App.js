import React from 'react';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';

import Header from './common/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import Footer from './common/Footer';
// import AllPolls from './AllPolls';
// import MyPolls from './MyPolls';
// import SinglePoll from './SinglePoll';

const testUser = {
  login: true,
  userName: 'GuoXiaoyang',
}

const App = () => (
  <MuiThemeProvider>
    <Header user={testUser}/>
  </MuiThemeProvider>
)

// App.propTypes = {
//   polls: PropTypes.arrayOf(PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     description: PropTypes.string.isRequired,
//     answers: PropTypes.arrayOf(PropTypes.shape({
//       answer: PropTypes.string.isRequired,
//       votes: PropTypes.number.isRequired,
//     })).isRequired,
//   })).isRequired,
//   user: PropTypes.shape({
//     current: PropTypes.object,
//     loggedIn: PropTypes.bool.isRequired,
//   }), 
// };

// const mapStateToProps = state => ({
//   polls: state.polls,
//   user: state.user,
// });

export default App;


