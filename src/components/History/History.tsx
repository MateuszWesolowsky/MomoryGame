import useGameStore from "../../../stores/gameStore";
import { convertTime } from "../../utils/converterTime";
import styles from "./History.module.scss";

const History = () => {
  const { history } = useGameStore();

  return (
    <div className={styles.history}>
      <h3>Game History</h3>
      {history.length === 0 ? (
        <p>No games played yet</p>
      ) : (
        <ul>
          {history.map((game, index) => {
            const { minutes, seconds } = convertTime(game.time);

            return (
              <li key={index} className={styles.historyItem}>
                <span>{new Date(game.date).toLocaleDateString()}</span>
                <span>Difficulty: {game.difficulty}</span>
                <span>
                  Time: {minutes}m {seconds}s
                </span>{" "}
                <span>Attempts: {game.attempts}</span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default History;
