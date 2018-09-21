import React from 'react';

const Label = ({ name, val }) => (
  <div className="label">
    <div className="title">{val}</div>
    <div className="subtitle">{name}</div>
  </div>
);

export default Label;
