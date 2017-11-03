import React from 'react';
import CardGrid from './CardGrid';
import { connect } from 'react-redux';
import * as pollActions from '../../../actions/pollActions';

class MyPolls extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.fetchMyPolls();
  }
  componentWillUnmount() {
    this.props.clearPolls();
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

const MyPollsContainer = connect(mapStateToProps, pollActions)(MyPolls);
export default MyPollsContainer;