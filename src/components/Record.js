import React from 'react';

const Record = ({ records, handleSetBoard, currentMove }) => {
  return (
    <div className="history-wrapper">
      <ul className="history">
        {records.map((record, index) => {
          return (
            <li key={index}>
              <button
                className={`btn-move ${currentMove === index ? 'active' : ''}`}
                id={index}
                type="button"
                onClick={handleSetBoard}
              >
                #{index} move
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Record;
