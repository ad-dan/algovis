import React from 'react';

const Cell = ({ val, paint, handleInput }) => (
  <div className="cell">
    <input
      type="text"
      value={val}
      className={paint + ' zell'}
      onChange={e => {
        handleInput(e);
      }}
    />
  </div>
);

export default Cell;
