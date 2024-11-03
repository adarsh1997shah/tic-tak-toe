import Square from './Square';

const Board = () => {
  return (
    <div className="board">
      {new Array(3).fill(null).map((_, rowIdx) => {
        return (
          <div key={rowIdx} className="board-row">
            {new Array(3).fill(null).map((_, colIdx) => {
              return <Square key={colIdx} rowIdx={rowIdx} colIdx={colIdx} />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Board;
