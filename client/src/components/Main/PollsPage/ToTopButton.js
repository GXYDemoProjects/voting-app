import React from 'react';
const ToTopButton = () => (
    <div className="fixed-action-btn">
      <a className="btn-floating btn-large waves-effect" onClick={() => window.scrollTo(0,0)}>
        <i className="large material-icons">arrow_upward</i>
      </a>
  </div>
  );

export default ToTopButton;