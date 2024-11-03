import { useEffect, useMemo, useState } from 'react';

import { BOARD, DEFAULT_PLAYER_1 } from '../constants';
import { calculateWinner, getComputerIndex } from '../helpers';

export function useSinglePlayerTicTacToe() {
  const [board, setBoard] = useState(BOARD);
  const [currentPlayer, setCurrentPlayer] = useState(DEFAULT_PLAYER_1);
  const [isComputerPlaying, setIsComputerPlaying] = useState(false);
  const [userPlayer, setUserPlayer] = useState(null);

  const PLAYER_1 = useMemo(() => userPlayer, [userPlayer]);
  const PLAYER_2 = useMemo(() => Number(!userPlayer), [userPlayer]);

  const { winner, winningSquare } = useMemo(() => calculateWinner(board), [board]);

  useEffect(() => {
    if (userPlayer != null && currentPlayer != userPlayer) {
      setIsComputerPlaying(true);

      new Promise(res => setTimeout(res, 1000)).then(() => {
        const idx = getComputerIndex(board, PLAYER_1, PLAYER_2);

        const newBoard = [...board];
        newBoard[idx] = PLAYER_2;

        setCurrentPlayer(PLAYER_1);
        setBoard(newBoard);
        setIsComputerPlaying(false);
      });
    }
  }, [currentPlayer, board, userPlayer]);

  const handleTurn = e => {
    if (winner != null) {
      return;
    }

    const { index } = e.currentTarget.dataset;
    const newBoard = [...board];

    if (currentPlayer == PLAYER_1) {
      newBoard[index] = PLAYER_1;

      setBoard(newBoard);
      setCurrentPlayer(Number(!currentPlayer));
    }
  };

  const handlePickPlayer = e => {
    const { id } = e.target.dataset;

    if (id == 1) {
      setCurrentPlayer(Number(id));
    }

    setUserPlayer(Number(id));
  };

  const handleNewGame = () => {
    setBoard(BOARD);
    setCurrentPlayer(DEFAULT_PLAYER_1);
    setUserPlayer(null);
  };

  return {
    board,
    currentPlayer,
    winner,
    winningSquare,
    isComputerPlaying,
    isSinglePlayer: true,
    userPlayer,
    handleTurn,
    handleNewGame,
    handlePickPlayer,
  };
}
