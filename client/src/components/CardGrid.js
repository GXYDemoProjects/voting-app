import React from 'react';
import SingleCard from './SingleCard';

const CardGrid = ({ polls, currentIndex }) => {
  const loadPolls = polls.slice(0, currentIndex);
  console.log(currentIndex);
  console.log(loadPolls);
  return (
    <div className="container">
      <div className="row">
        {
          loadPolls.map((poll, index) => (
            <SingleCard poll={poll} key = {index} />
          ))
        }
      </div>
    </div>
  )
}

export default CardGrid; 