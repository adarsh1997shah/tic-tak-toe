import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const isDraw = current.board.every(square => square != null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={`${winner === 'X' ? 'text-green' : 'text-orange'}`}>
            {winner}
          </span>
        </>
      )}
      {!winner && !isDraw && (
        <>
          Waiting for{' '}
          <span className={current.isplayer1 ? 'text-green' : 'text-orange'}>
            {current.isplayer1 ? 'X' : 'O'}
          </span>{' '}
          turn
        </>
      )}
      {!winner && isDraw && (
        <>
          Game has been tied between <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span>
        </>
      )}
    </div>
  );
};

export default StatusMessage;
