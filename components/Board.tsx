import { useEffect, useState } from "react";
import Cell from "./Cell.tsx";
import { CellType } from "./Cell.tsx";
import { getRandom } from "../helpers/utility.ts";

const Board = ({ handleCellClickBoard }: { handleCellClickBoard: any }) => {
  const [cellXY, setCellXY] = useState({ x: 1, y: 1 });

  let cells = [];

  const handleCellClick = (value) => {
    handleCellClickBoard(value);
  };

  const setPop = () => {
    setCellXY({ x: getRandom(1, 10), y: getRandom(1, 10) });
  };

  useEffect(() => {
    setInterval(setPop, 1000);

    return clearInterval();
  }, [getRandom]);

  for (let x = 1; x < 10; x++) {
    for (let y = 1; y < 10; y++) {
      if (x === cellXY.x && y === cellXY.y) {
        if (getRandom(1, 5) === 1) {
          cells.push(
            <Cell
              x={x}
              y={y}
              cellType={CellType.MinusPop}
              handleCellClick={handleCellClick}
            />
          );
        } else {
          cells.push(
            <Cell
              x={x}
              y={y}
              cellType={CellType.Pop}
              handleCellClick={handleCellClick}
            />
          );
        }
      } else {
        cells.push(
          <Cell
            x={x}
            y={y}
            cellType={CellType.Empty}
            handleCellClick={handleCellClick}
          />
        );
      }
    }
  }

  return <div>{cells}</div>;
};

export default Board;
