import React from 'react';

const SinglePoll = ({ match }) => (
  <div className="container">
    Single Poll, id:{match.params.id}
  </div>
);

export default SinglePoll;