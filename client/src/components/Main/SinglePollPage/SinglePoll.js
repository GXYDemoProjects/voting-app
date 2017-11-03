import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as pollActions from '../../../actions/pollActions';
import * as errorActions from '../../../actions/errorActions';
import * as uiActions from '../../../actions/uiActions';
import Chart from './Chart';
import SelectionForm from './SelectionForm';
import Modal from './Modal';
import Error from '../LoginPage/Error';

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
  componentWillReceiveProps() {
    if(this.props.currentPoll.deleteStatus) {
      this.props.history.push('/mypolls');
    }
  }
  renderDeleteBtn() {
    const currentPoll = this.props.currentPoll;
    if(!currentPoll || !currentPoll.currentUser) {
      return null;
    }
    return (
      <a className="waves-effect waves-light btn red lighten-1" onCLick={() => this.props.toggleModal(true)}>
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
        <Modal title="" body="Are you sure to delete this poll?" 
        onCancel={() => this.props.toggleModal(false)} onConfirm={() => this.props.deletePoll(currentPoll.pollId)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentPoll: state.currentPoll,
  pollError: state.errors.pollError,
  modalVisibility: state.ui.modalVisibility
});
const actions = {...pollActions, ...errorActions, ...uiActions};

export default withRouter(connect(mapStateToProps, actions)(SinglePoll));