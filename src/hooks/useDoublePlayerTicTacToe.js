import { useMemo, useState } from 'react';

import { BOARD, DEFAULT_PLAYER_1 } from '../constants';
import { calculateWinner } from '../helpers';

export function useDoublePlayerTicTacToe() {
  const [board, setBoard] = useState(BOARD);
  const [currentPlayer, setCurrentPlayer] = useState(DEFAULT_PLAYER_1);

  const { winner, winningSquare } = useMemo(() => calculateWinner(board), [board]);

  const handleTurn = e => {
    if (winner != null) {
      return;
    }

    const { index } = e.currentTarget.dataset;
    const newBoard = [...board];

    newBoard[index] = currentPlayer;

    setBoard(newBoard);
    setCurrentPlayer(Number(!currentPlayer));
  };

  const handleNewGame = () => {
    setBoard(BOARD);
    setCurrentPlayer(DEFAULT_PLAYER_1);
  };

  return {
    board,
    currentPlayer,
    winner,
    winningSquare,
    isDoublePlayer: true,
    handleTurn,
    handleNewGame,
  };
}
