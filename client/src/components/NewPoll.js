import React from 'react';
import NewPollForm from './NewPollForm';
import PreviewForm from './PreviewForm';

const NewPoll = () => {
  return (
    <div className="container new-poll">
      <div className="row">
        <div className="col m12 l7">
          <div className="new-poll-form">
            <h4>Create Your Poll</h4>
            <NewPollForm />
          </div>
        </div>
        <div className="col m12 l5">
          <PreviewForm />
        </div>
      </div>
    </div>
  );
}


export default NewPoll;