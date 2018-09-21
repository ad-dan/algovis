import React from 'react';

const StatusMessage = ({ found, searching }) => (
  <div
    className={`stat ${searching ? 'searching' : ''}${
      found ? 'success' : 'failure'
    }`}>
    {found ? (
      <span>
        <i class="fas fa-check" /> Found
      </span>
    ) : searching ? (
      'Searching'
    ) : (
      <span>
        <i className="ic far fa-frown" />
        Not Found
      </span>
    )}
    {searching ? (
      <span>
        <span className="dots">.</span>
        <span className="dots">.</span>
        <span className="dots">.</span>
      </span>
    ) : (
      ''
    )}
  </div>
);

export default StatusMessage;
