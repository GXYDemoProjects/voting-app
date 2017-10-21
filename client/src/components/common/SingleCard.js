import React from 'react';

const SingleCard = ({ poll }) => {

  return (
    <div className="col s12 m6 l4">
      <div className="card">
        <div className="card-content">
          <span className="card-title">{poll.title}</span>
          <p>{poll.description}</p>
        </div>
        <div className="card-action">
          <a href="#" className="waves-effect btn">
            <i className="material-icons left md-light">forward</i> 
            See more
          </a>
        </div>
      </div>
    </div>
  );
}

export default SingleCard;