import React from 'react';

export const Input = ({ label, type = 'number', value, onChange, name }) => {
  return (
    <p>
      <label>{label}</label>
      <input
        type={type}
        min={0}
        required
        value={value}
        onChange={onChange}
        name={name}
      />
    </p>
  );
};
