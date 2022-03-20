import Cell from "./Cell.tsx";

const Board = () => {
  let cells = [];
  for (let x = 1; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
      cells.push(<Cell x={x} y={y} />);
    }
  }

  return <div>{cells}</div>;
};

export default Board;
