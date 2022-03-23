import styles from "../styles/Cell.module.css";

export const CellType = {
  Empty: "empty",
  Pop: "pop",
  MinusPop: "minuspop",
};

const Config = {
  size: 64,
};

const Cell = ({
  x,
  y,
  cellType,
  handleCellClick,
}: {
  x: number;
  y: number;
  cellType: "empty" | "pop";
  handleCellClick: any;
}) => {
  const getStyles = () => {
    if (cellType === CellType.Pop) {
      return {
        backgroundColor: "orange",
      };
    } else if (cellType === CellType.MinusPop) {
      return {
        backgroundColor: "red",
      };
    } else {
      return {
        backgroundColor: "aquamarine",
      };
    }
  };

  const updateScore = () => {
    if (cellType === CellType.Pop) {
      handleCellClick(1);
    } else if (cellType === CellType.MinusPop) {
      handleCellClick(-1);
    } else {
      handleCellClick(0);
    }
  };

  return (
    <div
      className={styles.cellContainer}
      style={{
        top: y * Config.size,
        left: x * Config.size,
        height: Config.size,
        width: Config.size,
        ...getStyles(),
      }}
      onClick={() => {
        console.log({ cellType });
        updateScore();
      }}
    ></div>
  );
};

export default Cell;
