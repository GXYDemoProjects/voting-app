import React from 'react';

const AuthField = ({ input, label, type, icon, meta: { error, touched } }) => {
  const validateClass = (touched && error) ? 'error' : '';
  return (
    <div className="input-field">
      <i className="material-icons prefix">{icon}</i>
      <input {...input} type={type} required className={validateClass} style={{ marginBottom: '5px' }} />
      <label htmlFor="icon_prefix" className="control-label">{label}</label>
      <div className="error red-text" style={{ marginBottom: '10px' }}>
        {touched && error}
      </div>
    </div>
  );
};

export default AuthField;
