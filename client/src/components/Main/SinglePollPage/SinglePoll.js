import React from 'react';
import { connect } from 'react-redux';
import * as pollActions from '../../../actions/pollActions';
import * as errorActions from '../../../actions/errorActions';
import Chart from './Chart';
import SelectionForm from './SelectionForm';

class SinglePoll extends React.Component{
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const pollId = this.props.match.params.id;
    this.props.fetchMyPolls(pollId);
  }
  componentWillUnmount() {
    this.props.clearCurrent();
    this.props.removeErrors();
  }
  renderDeleteBtn(currentUser) {
    if(!currentUser) {
      return null;
    }
    return (
      <a className="waves-effect waves-light btn red lighten-1" >
      Remove this poll
      </a>
    );
  }
  render() {
    const { currentPoll, vote, pollError } = this.props;
    if (!currentPoll) {
      return null;
    }
    const data = currentPoll.data.map(d=>[d.item, d.number])
    const pollId = this.props.match.params.id;
    data.unshift(['item', 'number']);
    console.log('data:', data);
    return (
      <div className="container single-poll">
        <div className="row">
          <div className="col m12 l7">
            <div>
              <Chart data={data} />
              {this.renderDeleteBtn(currentPoll.currentUser)}
            </div>
          </div>
          <div className="col m12 l5">
            <SelectionForm poll={currentPoll} pollId={pollId} vote={vote} pollError={pollError} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPoll: state.currentPoll,
  pollError: state.errors.pollError
});
const actions = {...pollActions, ...errorActions};

export default connect(mapStateToProps, actions)(SinglePoll);