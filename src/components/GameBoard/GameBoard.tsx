import Tile from "../Tile/Tile";
import styles from "./GameBoard.module.scss";
import useGameStore from "../../../stores/gameStore";

const GameBoard = () => {
  const { tiles, difficulty, handleClickTile } = useGameStore();

  return (
    <div className={styles.board} data-difficulty={difficulty}>
      {tiles.map((tile) => (
        <Tile
          key={tile.id}
          tile={tile}
          handleClick={() => handleClickTile(tile)}
        />
      ))}
    </div>
  );
};

export default GameBoard;
