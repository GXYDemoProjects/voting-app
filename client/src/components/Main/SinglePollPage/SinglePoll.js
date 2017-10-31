import React from 'react';
import { connect } from 'react-redux';
import Chart from './Chart';
import SelectionForm from './SelectionForm';

const SinglePoll = ({ match, type, polls}) => {
  const renderDeleteBtn = (
    type &&
      <a className="waves-effect waves-light btn red lighten-1" >
        Remove this poll
      </a>
    );
  const pollId = match.params.id;
  const poll = polls[pollId-1];
  const data = poll.data.map(d=>[d.item, d.number])
  data.unshift(['item', 'number']);
  console.log('data:', data);
  return (
    <div className="container single-poll">
      <div className="row">
        <div className="col m12 l7">
          <div>
            <Chart data={data} />
            {renderDeleteBtn}
          </div>
        </div>
        <div className="col m12 l5">
          <SelectionForm {...poll} pollId={pollId}/>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  polls: state.polls,
  myPolls: state.myPolls
});

export default connect(mapStateToProps, null)(SinglePoll);