import React from 'react';
import CardGrid from './CardGrid';
import MoreButton from './MoreButton';
import ToUpButton from './ToTopButton';

const Main = ({ polls, currentIndex, loadMore }) => {
  console.log(polls);
  return (
    <main>
      <CardGrid polls={polls} currentIndex={currentIndex} />
      <MoreButton polls={polls} currentIndex={currentIndex} loadMore={loadMore}/>
      <ToUpButton />
    </main>
  )
}

export default Main;