import React from 'react';

const AuthField = ({ input, label, type, icon, meta: { error, touched } }) => {

  return (
    <div className="input-field">
      <i className="material-icons prefix">{icon}</i>
      <input {...input} type={type} required className="validate" style={{ marginBottom: '5px' }} />
      <label htmlFor="icon_prefix" className="control-label">{label}</label>
      <div className="red-text" style={{ marginBottom: '10px' }}>
        {touched && error}
      </div>
    </div>
  );
};

export default AuthField;
