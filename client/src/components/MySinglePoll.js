import React from 'react';

const MySinglePoll = ({ match }) => (
  <div className="container">
    My Single Poll, id:{match.params.id}
  </div>
);

export default MySinglePoll;