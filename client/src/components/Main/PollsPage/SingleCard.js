import React from 'react';
import { Link } from 'react-router-dom';
const SingleCard = ({ poll, type }) => {

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{poll.title}</span>
          <p>{poll.description}</p>
        </div>
        <div className="card-action">
          <Link to={`/polls/${poll._id}`} className="waves-effect btn">
            <i className="material-icons left md-light">forward</i> 
            See more
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;