import GameBoard from "./components/GameBoard/GameBoard";
import DifficultySelector from "./components/DifficultySelector/DifficultySelector";
import Stats from "./components/Stats/Stats";
import History from "./components/History/History";
import "./styles/main.scss";
import useGameStore from "../stores/gameStore";
import { Button } from "./components/Button/Button";

const images = ["🚀", "🏠", "💖", "🎁", "🎂", "🎉", "🎈", "🎃", "🎨", "👑"];

function App() {
  const { gameStarted, startGame, resetGame, initializeTiles } = useGameStore();

  const handleStartGame = () => {
    initializeTiles(images);
    startGame();
  };

  return (
    <div className="app">
      <h1>Memory Card Game</h1>
      <DifficultySelector />
      <Stats />
      {!gameStarted ? (
        <Button onClick={handleStartGame}>Start New Game</Button>
      ) : (
        <Button onClick={resetGame}>Reset Game</Button>
      )}
      <GameBoard />
      <History />
    </div>
  );
}

export default App;
