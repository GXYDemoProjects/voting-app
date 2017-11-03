import React from 'react';
import CardGrid from './CardGrid';
import MoreButton from './MoreButton';
import ToUpButton from './ToTopButton';
import { connect } from 'react-redux';
import * as pollActions from '../../../actions/pollActions';
import * as uiActions from '../../../actions/uiActions';
import * as errorActions from '../../../actions/errorActions';

class AllPolls extends React.Component {

  componentDidMount() {
    this.props.fetchAllPolls();
  }
  componentWillUnmount() {
    this.props.clearPolls();
    this.props.removeErrors();
  }
  
  render() {
    const { polls, currentIndex, loadMore } = this.props;
    return (
      <main>
        <CardGrid polls={polls} currentIndex={currentIndex} />
        <MoreButton polls={polls} currentIndex={currentIndex} loadMore={loadMore}/>
        <ToUpButton />
      </main>
   );
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
  currentIndex: state.polls.length < state.ui.currentIndex ? state.polls.length : state.ui.currentIndex,
});

const actions = {...pollActions, ...uiActions, ...errorActions};
// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators(actionCreators, dispatch);
// };


const AllPollsContainer = connect(mapStateToProps, actions)(AllPolls);
export default AllPollsContainer;