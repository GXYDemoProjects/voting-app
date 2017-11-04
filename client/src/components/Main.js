import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import * as authActions from '../actions/authActions';
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


export class Main extends React.Component {

  componentDidMount() {
    this.props.fetchAuth();
  }
  render() {    
    return (
      <Router>
        <div className="app">
          <Header />
          <Route exact path="/" component={AllPolls} />
          <Route exact path="/allpolls" component={AllPolls} />
          <Route path="/polls/:id" component={SinglePoll} />
          <Route exact path="/mypolls" component={MyPolls} />
          <Route path="/mypolls/:id" component={MySinglePoll} />
          <Route path="/newpoll" component={NewPoll} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/logout" component={Logout} />
          <Footer />
        </div> 
      </Router>
    );
  }
}

// const mapStateToProps = state => ({
//   authentication: state.user.authentication
// }) 
export default connect(null, authActions)(Main);
