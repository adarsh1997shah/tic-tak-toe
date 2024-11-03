import { useTicTacToe } from '../context/TicTakToe';

import { PLAYER_MAP } from '../constants';

const Square = ({ rowIdx, colIdx }) => {
  const {
    winningSquare = [],
    winner = null,
    board = [],
    isComputerPlaying = false,
    handleTurn,
  } = useTicTacToe();

  const absoluteIndex = colIdx + rowIdx + rowIdx * 2;
  const value = board[absoluteIndex];

  const isPlayer1 = value === 1;
  const isWinningSquare = winningSquare.includes(absoluteIndex);

  const isDisabled = winner != null || isComputerPlaying || board[absoluteIndex] != null;

  return (
    <button
      type="button"
      className={`square${isPlayer1 ? ' text-green' : ' text-orange'}${
        isWinningSquare ? ' winning' : ''
      }`}
      data-index={absoluteIndex}
      onClick={handleTurn}
      disabled={isDisabled}
    >
      {PLAYER_MAP[value]}
    </button>
  );
};

export default Square;
