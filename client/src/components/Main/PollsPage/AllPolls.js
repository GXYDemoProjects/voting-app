import React from 'react';
import CardGrid from './CardGrid';
import MoreButton from './MoreButton';
import ToUpButton from './ToTopButton';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../../actions';

const mapStateToProps = (state) => (
  Object.assign({},{
    user: state.user,
    polls: state.polls,
    currentIndex: state.polls.length < state.ui.currentIndex ? state.polls.length : state.ui.currentIndex,
  })
)

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};


let AllPolls = ({ polls, currentIndex, loadMore }) => {
  console.log(polls);
  return (
    <main>
      <CardGrid polls={polls} currentIndex={currentIndex} />
      <MoreButton polls={polls} currentIndex={currentIndex} loadMore={loadMore}/>
      <ToUpButton />
    </main>
  )
}

AllPolls = connect(mapStateToProps, mapDispatchToProps)(AllPolls);
export default AllPolls;