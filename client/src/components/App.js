import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';

import Header from './Header';
import Footer from './Footer';
import AllPolls from './AllPolls';
import MyPolls from './MyPolls';
import NewPoll from './NewPoll';
import Login from './Login';
import Register from './Register';
import Logout from './Logout';
import SinglePoll from './SinglePoll';
import MySinglePoll from './MySinglePoll';
import '../styles/App.css';


class App extends React.Component {

  render() {    
    return (
      <div className="app">
        <Header />
        <Route exact path="/" component={AllPolls} />
        <Route exact path="/allpolls" component={AllPolls} />
        <Route path="/allpolls/:id" component={SinglePoll} />
        <Route exact path="/mypolls" component={MyPolls} />
        <Route path="/mypolls/:id" component={MySinglePoll} />
        <Route path="/newpoll" component={NewPoll} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/logout" component={Logout} />
        <Footer />
      </div> 
    );
  }
}
export default App;
