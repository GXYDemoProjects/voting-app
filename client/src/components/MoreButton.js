import React from 'react';

const MoreButton = ({ loadMore, currentIndex, polls }) => {
  if (currentIndex >= polls.length) return null;
  return (
    <div className="container">
        <a className="wave-effect btn more" onClick={loadMore}>More</a>
    </div>
  );
}

export default MoreButton;