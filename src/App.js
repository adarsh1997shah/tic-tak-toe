import React, { useState } from 'react';
import Board from './components/Board';
import Record from './components/Record';
import StatusMessage from './components/StatusMessage';
import { calculateWinner } from './helpers';

import './styles/root.scss';

const NEW_GAME = [
  {
    board: Array(9).fill(null),
    isplayer1: true,
  },
];

const App = () => {
  const [records, setRecord] = useState(NEW_GAME);
  const [currentMove, setCurrentMove] = useState(0);
  const [isSetBoard, setIsSetBoard] = useState(false);

  const current = records[currentMove];
  const { winner, winningSquare } = calculateWinner(current.board);

  // Calculating whose turn should be next.
  const handleTurn = e => {
    const { index } = e.currentTarget.dataset;
    const currentBoard = [...current.board];

    if (isSetBoard) {
      console.log('Please press ok button to start from this move');
      return;
    }

    // Check for empty board square
    if (currentBoard[index] || winner) {
      return;
    }

    if (current.isplayer1) {
      currentBoard[index] = 'X';
    } else {
      currentBoard[index] = 'O';
    }

    // Updating the records.
    const newRecords = records.concat({
      board: [...currentBoard],
      isplayer1: !current.isplayer1,
    });

    setRecord(newRecords);
    setCurrentMove(currentMove + 1);
  };

  const handleSetBoard = e => {
    setCurrentMove(parseInt(e.currentTarget.id, 10));
    setIsSetBoard(true);
  };

  const handleRecordBoard = () => {
    if (isSetBoard) {
      const newRecords = records.slice(0, currentMove + 1);

      setRecord(newRecords);
      setIsSetBoard(false);
    }
  };

  const handleNewGame = () => {
    setRecord(NEW_GAME);
    setCurrentMove(0);
  };

  return (
    <div className="app">
      <h1>
        TIC <span className="text-green">TAC</span>{' '}
        <span className="text-orange">TOE</span>
      </h1>
      <StatusMessage winner={winner} current={current} />
      <Board
        board={current.board}
        handleTurn={handleTurn}
        winningSquare={winningSquare}
      />
      <button
        type="button"
        className={`btn-reset ${winner ? 'active' : ''}`}
        onClick={handleNewGame}
      >
        Start new Game
      </button>
      <h3>Press OK to go to a particular move.</h3>
      <Record
        records={records}
        handleSetBoard={handleSetBoard}
        currentMove={currentMove}
      />
      <button
        type="button"
        className="btn-reset"
        onClick={handleRecordBoard}
        style={{ marginTop: '0', marginBottom: '25px' }}
      >
        OK
      </button>
      <div className="bg-balls" />
    </div>
  );
};

export default App;
