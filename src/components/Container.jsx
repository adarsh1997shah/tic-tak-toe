import { useState } from 'react';

import { TicTacToeContextProvider } from '../context/TicTakToe';

import { useDoublePlayerTicTacToe } from '../hooks/useDoublePlayerTicTacToe';
import { useSinglePlayerTicTacToe } from '../hooks/useSinglePlayerTicTacToe';

import ChooseMode from './ChooseMode';

import Game from './Game';

function Container() {
  const [mode, setMode] = useState('');

  const handleMode = e => {
    setMode(e.target.id);
  };

  const backToMode = () => {
    setMode('');
  };

  if (mode == 'single') {
    return <SinglePlayerContainer backToMode={backToMode} />;
  } else if (mode == 'double') {
    return <DoublePlayerContainer backToMode={backToMode} />;
  }

  return <ChooseMode handleMode={handleMode} />;
}

function SinglePlayerContainer({ backToMode }) {
  const value = useSinglePlayerTicTacToe();

  return (
    <TicTacToeContextProvider value={value}>
      <Game handleBack={backToMode} />
    </TicTacToeContextProvider>
  );
}

function DoublePlayerContainer({ backToMode }) {
  const value = useDoublePlayerTicTacToe();

  return (
    <TicTacToeContextProvider value={value}>
      <Game handleBack={backToMode} />
    </TicTacToeContextProvider>
  );
}

export default Container;
