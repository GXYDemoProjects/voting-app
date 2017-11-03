import React from 'react';
const Error = ({ error }) => {
  if(error) {
    return null;
  }
  return (      
    <div className="auth-error red-text">
    {error}
    </div>
  )
};

export default Error;