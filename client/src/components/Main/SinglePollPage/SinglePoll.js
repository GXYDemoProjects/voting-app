import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { formValueSelector } from 'redux-form';
import * as pollActions from '../../../actions/pollActions';
import * as errorActions from '../../../actions/errorActions';
import * as uiActions from '../../../actions/uiActions';
import Chart from './Chart';
import SelectionForm from './SelectionForm';
import Modal from './Modal';

class SinglePoll extends React.Component{
  constructor(props) {
    super(props);
    this.formatData = this.formatData.bind(this);
  }
  componentDidMount() {
    const pollId = this.props.match.params.id;
    this.props.fetchCurrentPoll(pollId);
  }
  componentWillUnmount() {
    this.props.clearCurrent();
    this.props.removeErrors();
  }
  componentWillReceiveProps(nextProps) {
    if(nextProps.currentPoll.deleteStatus) {
      this.props.history.push('/mypolls');
    }
  }
  renderDeleteBtn() {
    const currentPoll = this.props.currentPoll;
    if(!currentPoll || !currentPoll.currentUser) {
      return null;
    }
    return (
      <a className="waves-effect waves-light btn red lighten-1" onClick={() => this.props.toggleModal(true)}>
      Remove this poll
      </a>
    );
  }
  formatData(originalVotes) {
    let formatVotes = [['item', 'number']];
    originalVotes.forEach(item => formatVotes.push([item.respond, item.number]))
    return formatVotes;
  }
  render() {
    const pollId = this.props.match.params.id;
    const { currentPoll, vote, voteValue, pollError, toggleModal, modalVisibility, deletePoll } = this.props;
    if (!currentPoll || !currentPoll.title) {
      return null;
    }

    return (
      <div className="container single-poll">
        <div className="row">
          <div className="col m12 l7">
            <div>
              <Chart data={this.formatData(currentPoll.data)} />
              {this.renderDeleteBtn(currentPoll.currentUser)}
            </div>
          </div>
          <div className="col m12 l5">
            <SelectionForm poll={currentPoll} pollId={pollId} vote={vote} pollError={pollError} voteValue={voteValue}/>
          </div>
        </div>
        <Modal title="Are you sure to delete this poll?" body="" modalVisibility={modalVisibility}
        onCancel={() => toggleModal(false)} onConfirm={() => deletePoll(currentPoll.pollId)} />
      </div>
    );
  }
}

const selector = formValueSelector('selectionForm'); // <-- same as form name

const mapStateToProps = state => ({
  currentPoll: state.currentPoll,
  pollError: state.errors.pollError,
  modalVisibility: state.ui.modalVisibility,
  voteValue : selector(state, 'voteValue')
  
});
const actions = {...pollActions, ...errorActions, ...uiActions};

export default withRouter(connect(mapStateToProps, actions)(SinglePoll));