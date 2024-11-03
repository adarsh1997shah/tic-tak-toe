import { useTicTacToe } from '../context/TicTakToe';

import StatusMessage from './StatusMessage';
import Board from './Board';

function Game({ handleBack }) {
  const {
    winner,
    userPlayer,
    handleNewGame,
    handlePickPlayer,
    isSinglePlayer = false,
  } = useTicTacToe();

  return (
    <>
      <div className="action-cta-wrap">
        <button
          type="button"
          className={`btn${winner != null ? ' active' : ''}`}
          onClick={handleNewGame}
        >
          Start new game
        </button>

        <button type="button" className="btn" onClick={handleBack}>
          Back to choosing mode
        </button>
      </div>

      {isSinglePlayer && userPlayer == null ? (
        <div className="choose-player-wrap">
          <div className="status-message">Choose player</div>

          <div className="action-cta-wrap">
            <button data-id="1" type="button" className="btn" onClick={handlePickPlayer}>
              Pick X
            </button>

            <button data-id="0" type="button" className="btn" onClick={handlePickPlayer}>
              Pick O
            </button>
          </div>
        </div>
      ) : (
        <>
          <StatusMessage />

          <Board />
        </>
      )}
    </>
  );
}

export default Game;
