export function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (board[a] != null && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], winningSquare: [a, b, c] };
    }
  }

  return { winner: null, winningSquare: [] };
}

/* 
- Used minimax algorithm to compute best possible move.
- Currently we are maximizing the computer move.
- We are using three end states to check.
  - If the path chosen ends in a draw for computer, then return 0.
	- If the path chosen ends in a loss for computer, then return -1.
	- If the path chosen ends in a win for computer, then return 1.
*/
export function getComputerIndex(board, userPlayer, computerPlayer) {
  const newBoard = [...board];

  let max = -Infinity;
  let index = -1;

  for (let i = 0; i < newBoard.length; i++) {
    // Check whether the other player has played or not.
    if (newBoard[i] != null) {
      continue;
    }

    // Assume this to be the ideal turn to play.
    newBoard[i] = computerPlayer;

    // Back track all the turns that can happen to prove it be the ideal turn.
    const val = DFS();

    // Check if the current value stored is less that the value got.
    if (max < val) {
      max = val;
      index = i;
    }

    newBoard[i] = null;
  }

  return index;

  function DFS(isMaximizing) {
    // Calc winner every time a move is played, to check the status of the game.
    const { winner } = calculateWinner(newBoard);

    if (winner == computerPlayer) {
      return 1;
    } else if (winner == userPlayer) {
      return -1;
    } else if (newBoard.every(val => val != null)) {
      return 0;
    }

    let max = -Infinity;
    let min = Infinity;

    for (let i = 0; i < newBoard.length; i++) {
      if (newBoard[i] != null) {
        continue;
      }

      newBoard[i] = isMaximizing ? computerPlayer : userPlayer;

      const val = DFS(!isMaximizing);

      if (isMaximizing) {
        max = Math.max(max, val);
      } else {
        min = Math.min(min, val);
      }

      newBoard[i] = null;
    }

    if (isMaximizing) {
      return max;
    }

    return min;
  }
}
