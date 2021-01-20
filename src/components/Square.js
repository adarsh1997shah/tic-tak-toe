import React from 'react';

const Square = ({ value, handleTurn, index, winningSquare }) => {
  return (
    <button
      className={`square ${value === 'X' ? 'text-green' : 'text-orange'} ${
        winningSquare.includes(index) ? 'winning' : ''
      }`}
      type="button"
      data-index={index}
      onClick={handleTurn}
    >
      {value}
    </button>
  );
};

export default Square;
