import React from 'react';
import Cell from './Cell';

const Cells = ({ arr, lowIndex, midIndex, highIndex, handleText }) => {
  const cells = arr.map((value, index) => {
    let paint =
      index >= lowIndex && index <= highIndex ? 'valid-cell' : 'invalid-cell';
    paint = index === midIndex ? 'search-cell' : paint;
    return (
      <Cell val={value} paint={paint} handleInput={e => handleText(e, index)} />
    );
  });
  return cells;
};

export default Cells;
