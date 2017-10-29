import React from 'react';

class Logout extends React.Component {
  componentWillMount() {
    // logout
    this.props.history.push('/');
  }
  render() {
    return null;
  }
}

export default Logout;