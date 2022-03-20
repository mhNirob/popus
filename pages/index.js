import Board from "../components/Board.tsx";
import styles from "../styles/Cell.module.css";

function HomePage() {
  return (
    <div>
      <div>POPUS</div>
      <div className={styles.cell}>
        <Board />
      </div>
    </div>
  );
}

export default HomePage;
