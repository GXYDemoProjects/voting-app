import React from 'react';
import CardGrid from './CardGrid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../actions';

const mapStateToProps = (state) => (
  Object.assign({},{
    user: state.user,
    myPolls: state.myPolls,
  })
)

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};


let MyPolls = ({ myPolls }) => {
  console.log('myPolls:', myPolls);
  return (
    <main>
      <CardGrid polls={myPolls} type="own"/>
    </main>
  )
}

MyPolls = connect(mapStateToProps, mapDispatchToProps)(MyPolls);
export default MyPolls;