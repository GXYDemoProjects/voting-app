import React from 'react';

class AuthContainer extends React.Component {
  
  render() {
    return (
      <div className="model" >
      <div className="auth-container">
        <div className="left-auth">
          <h5>Make Your Own Poll</h5>
        </div>
        <div className="right-auth">
          {this.props.children }
        </div>
      </div>
      </div>
    );
  }
}

export default AuthContainer;