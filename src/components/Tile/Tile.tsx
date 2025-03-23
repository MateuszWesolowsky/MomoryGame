import styles from "./Tile.module.scss";
import useGameStore from "../../../stores/gameStore";
import { Tile as TileTypes } from "../../../types/types";

interface TileProps {
  tile: TileTypes;
  handleClick: (tile: TileTypes) => void;
}

const Tile = ({ tile, handleClick }: TileProps) => {
  const { revealedTiles } = useGameStore();

  const isRevealed = revealedTiles.some(
    (revealedTile) => revealedTile.id === tile.id
  );

  return (
    <button
      className={styles.tile}
      data-revealed={isRevealed}
      data-matched={tile.matched}
      onClick={() => handleClick(tile)}
      disabled={tile.matched || isRevealed || revealedTiles.length === 2}
    >
      {(isRevealed || tile.matched) && <p>{tile.image}</p>}
    </button>
  );
};

export default Tile;
