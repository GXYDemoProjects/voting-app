import React from 'react';
import PropTypes from 'prop-types';
import PollCard from './common/PollCard';

const Polls = ({ data }) => {
  <div className="row">
    {
      data.map((poll, index) => (
        <PollCard key={index} title={poll.title} description={poll.description} />
      ))
    }
  </div>
};

Polls.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })).isRequired,
};


export default Polls;