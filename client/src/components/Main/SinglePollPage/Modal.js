  import React from 'react';

  const Modal = ({ modalVisibility, title, body, onConfirm, onCancel}) => {
    if (!modalVisibility) {
      return null;
    }
    return (
      <div className="modal">
        <div className="content">

          <div className="modal-content">
            <h4>{title}</h4>
            <p>{body}</p>
            <a onClick={onConfirm} className="waves-effect waves-green btn">Confirm</a>
            <a onClick={onCancel} className="waves-effect waves-green btn">Cancel</a>
          </div>
        </div>
      </div>
    )
  }

  export default Modal;