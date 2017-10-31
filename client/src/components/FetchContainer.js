import React from 'react';
import { connect } from 'react-redux';
// bind action HOC
const FetchContainer = (action, param, item) => {
  const mapStateToProps = state => ({
    data : state[item]
  })
  return Presentation => {
    class HOC extends React.Component {
      componentDidMount() {
        action(param);
      }

      render() {
        return (
          connect(mapStateToProps, null)(Presentation)
        );
      }
    }
    return HOC;
  }
}

export default FetchContainer;