import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';

const PollCard = ({ title, description }) => (
  <div className="col s12 m6">
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title">
          {title}
        </span>
        <p>
          {description}
        </p>
      </div>
      <div className="card-action">
        <Link to="/SinglePoll">
          See details
        </Link>
      </div>  
    </div>
  </div>
);

PollCard.propTypes = {
  title: PropTypes.String.isRequired,
  description: PropTypes.String.isRequired
};

export default PollCard;