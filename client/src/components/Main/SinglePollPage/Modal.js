  import React from 'react';

  const Modal = ({ show, title, body, onConfirm, onCancel}) => {
    if (!show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-content">
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className="modal-footer">
          <a onClick={onConfirm} class="waves-effect waves-green btn-flat">Confirm</a>
          <a onClick={onCancel} class="waves-effect waves-green btn-flat">Cancel</a>
        </div>
      </div>
    )
  }