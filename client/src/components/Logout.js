import React from 'react';
import { connect } from 'react-redux';

const mapDispatchToProps = (dispatch) => (
  {
    logout: () => dispatch({type: 'LOGOUT'})
  }
);

class Logout extends React.Component {
  componentWillMount() {
    // logout
    this.props.logout();
    this.props.history.push('/');
  }
  render() {
    return null;
  }
}

export default connect(null, mapDispatchToProps)(Logout);