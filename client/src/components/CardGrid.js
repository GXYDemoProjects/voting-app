import React from 'react';
import SingleCard from './SingleCard';

const CardGrid = ({ polls, currentIndex, type }) => {
  
  const loadPolls = polls.slice(0, currentIndex || polls.length);
  console.log(currentIndex);
  console.log(loadPolls);
  return (
    <div className="container">
      <div className="row">
        {
          loadPolls.map((poll, index) => (
            <SingleCard poll={poll} key = {index} type={type && "own"}/>
          ))
        }
      </div>
    </div>
  )
}

export default CardGrid; 