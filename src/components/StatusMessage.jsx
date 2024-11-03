import { useTicTacToe } from '../context/TicTakToe';

import { PLAYER_MAP } from '../constants';

const StatusMessage = () => {
  const { winner = null, board = [], currentPlayer, isSinglePlayer, userPlayer } = useTicTacToe();

  const isDraw = board.length > 0 ? board.every(square => square != null) : false;
  const isPlayer1 = currentPlayer === 1;

  let waitingForText = PLAYER_MAP[currentPlayer];

  if (isSinglePlayer) {
    if (userPlayer == currentPlayer) {
      waitingForText = 'your';
    } else {
      waitingForText = 'computer';
    }
  }

  return (
    <div className="status-message">
      {winner != null && (
        <>
          Winner is{' '}
          <span className={`${winner === 1 ? 'text-green' : 'text-orange'}`}>
            {PLAYER_MAP[winner]}
          </span>
        </>
      )}
      {winner == null && !isDraw && (
        <>
          Waiting for{' '}
          <span className={isPlayer1 ? 'text-green' : 'text-orange'}>{waitingForText}</span> turn
        </>
      )}
      {winner == null && isDraw && (
        <>
          Game has been tied between <span className="text-green">X</span> and{' '}
          <span className="text-orange">O</span>
        </>
      )}
    </div>
  );
};

export default StatusMessage;
