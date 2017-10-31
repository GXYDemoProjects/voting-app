import React, { Component } from 'react';
import { connect } from 'react-redux';

const RequireAuth = ComposedComponent => {
  class Authentication extends Component {

    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push('/allpolls');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push('/allpolls');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.user.authentication };
  }

  return connect(mapStateToProps)(Authentication);
}
