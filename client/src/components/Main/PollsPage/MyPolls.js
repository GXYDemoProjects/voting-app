import React from 'react';
import CardGrid from './CardGrid';
import { connect } from 'react-redux';
import * as pollActions from '../../../actions/pollActions';
import * as errorActions from '../../../actions/errorActions';

class MyPolls extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchMyPolls();
  }
  componentWillUnmount() {
    this.props.clearPolls();
    this.props.removeErrors();
  }
  
  render() {
    return (
      <main>
        <CardGrid polls={this.props.polls} />
      </main>
    )
  }
}

const mapStateToProps = state => ({
  polls: state.polls,
});
const actions = {...pollActions, ...errorActions};

const MyPollsContainer = connect(mapStateToProps, actions)(MyPolls);
export default MyPollsContainer;