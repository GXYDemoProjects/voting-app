import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import AllPolls from './Main/PollsPage/AllPolls';
import MyPolls from './Main/PollsPage/MyPolls';
import NewPoll from './Main/NewPollPage/NewPoll';
import Login from './Main/LoginPage/Login';
import Register from './Main/RegisterPage/Register';
import Logout from './Main/Logout';
import SinglePoll from './Main/SinglePollPage/SinglePoll';
import MySinglePoll from './Main/SinglePollPage/MySinglePoll';
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
