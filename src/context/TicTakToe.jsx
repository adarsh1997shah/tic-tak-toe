import { createContext, useContext } from 'react';

const TicTacToeContext = createContext();

export function TicTacToeContextProvider({ children, value }) {
  return <TicTacToeContext.Provider value={value}>{children}</TicTacToeContext.Provider>;
}

export function useTicTacToe() {
  return useContext(TicTacToeContext);
}
