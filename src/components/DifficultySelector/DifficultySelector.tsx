import useGameStore from "../../../stores/gameStore";
import styles from "./DifficultySelector.module.scss";

const DifficultySelector = () => {
  const { difficulty, setDifficulty, gameStarted } = useGameStore();

  const difficulties: ["easy", "medium", "hard"] = ["easy", "medium", "hard"];

  return (
    <div className={styles.selector}>
      {difficulties.map((level) => (
        <button
          disabled={gameStarted}
          key={level}
          className={`${styles.button} ${
            difficulty === level ? styles.active : ""
          }`}
          onClick={() => setDifficulty(level)}
        >
          {level.charAt(0).toUpperCase() + level.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;
