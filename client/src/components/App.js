import React from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../actions';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';

import Header from './common/Header';
import Main from './Main';
import Footer from './common/Footer';
// import AllPolls from './AllPolls';
// import MyPolls from './MyPolls';
// import SinglePoll from './SinglePoll';
import '../styles/App.css';


let App = (props) => {
  console.log('props:', props);
  return (
    <div className="app">
      <Header {...props} />
      <Main {...props} />
      <Footer />
    </div> 
  );
};

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

const mapStateToProps = (state) => (
  Object.assign({},{
    user: state.user,
    sidebarVisibility: state.sidebarVisibility,
    dropdownVisibility: state.dropdownVisibility,
    polls: state.polls,
    currentIndex: state.polls.length < state.currentIndex ? state.polls.length : state.currentIndex,
  })
)

const mapDispatchToProps = (dispatch) => ({
  showSidebar: () => dispatch(actionCreators.toggleSideVisibility(true)),
  hideSidebar: () => dispatch(actionCreators.toggleSideVisibility(false)),
  showDropdown: () => dispatch(actionCreators.toggleDropdownVisibility(true)),
  hideDropdown: () => dispatch(actionCreators.toggleDropdownVisibility(false)),
  loadMore: () => dispatch(actionCreators.loadMore()),
});

App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;


