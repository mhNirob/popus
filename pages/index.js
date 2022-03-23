import Board from "../components/Board.tsx";
import styles from "../styles/Cell.module.css";
import { useState } from "react";

function HomePage() {
  const [score, setScore] = useState(0);
  const [finalScore, setFinalScore] = useState(null);
  const [gameOver, setGameOver] = useState(false);

  const handleCellClick = (value) => {
    if (value === 0) {
      setFinalScore(score);
      setScore(0);
      setGameOver(true);
      console.log("YES");
    } else {
      setScore(score + value);
    }
  };

  const restartGame = () => {
    setGameOver(false);
  };

  return (
    <div className={styles.board}>
      <div>POPUS</div>
      <br />
      {gameOver ? (
        <div className={styles.board}>
          <div>Game is over :( Your score: {finalScore} </div>
          <br />
          <button onClick={restartGame}>Restart Game</button>
        </div>
      ) : (
        <div>Score: {score} </div>
      )}
      {!gameOver && (
        <div>
          <Board handleCellClickBoard={handleCellClick} />
        </div>
      )}
    </div>
  );
}

export default HomePage;
