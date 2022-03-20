import styles from "../styles/Cell.module.css";

const CellType = {
  Empty: "empty",
  Pop: "pop",
};

const Config = {
  size: 32,
};

const Cell = ({ x, y }: { x: number; y: number }) => {
  console.log({ x, y });
  return (
    <div
      className={styles.cellContainer}
      style={{
        top: y * Config.size,
        left: x * Config.size,
        height: Config.size,
        width: Config.size,
      }}
    ></div>
  );
};

export default Cell;
