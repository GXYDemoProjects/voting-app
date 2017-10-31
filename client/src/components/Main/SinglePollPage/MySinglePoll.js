import React from 'react';
import SinglePoll from './SinglePoll';

const MySinglePoll = ({ match }) => (
  <SinglePoll type="own" match={match} />
);

export default MySinglePoll;