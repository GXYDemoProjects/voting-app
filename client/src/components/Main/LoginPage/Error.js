import React from 'react';
const Error = ({ error, className }) => {
  if(!error) {
    return null;
  }
  return (      
    <div className={`${className} error red-text`} >
    {error}
    </div>
  )
};

export default Error;