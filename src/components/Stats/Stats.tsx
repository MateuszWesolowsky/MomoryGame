import useGameStore from "../../../stores/gameStore";
import { convertTime } from "../../utils/converterTime";
import styles from "./Stats.module.scss";

const Stats = () => {
  const { attempts, time, difficulty } = useGameStore();

  const { minutes, seconds } = convertTime(time);

  return (
    <div className={styles.stats}>
      <div className={styles.statItem}>
        <span>Attempts:</span>
        <strong>{attempts}</strong>
      </div>
      <div className={styles.statItem}>
        <span>Time:</span>
        <strong>
          {minutes}m {seconds}s
        </strong>
      </div>
      <div className={styles.statItem}>
        <span>Difficulty:</span>
        <strong>{difficulty}</strong>
      </div>
    </div>
  );
};

export default Stats;
