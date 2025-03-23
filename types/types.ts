export type Tile = {
  id: string;
  image: string;
  matched: boolean;
};

export interface GameState {
  difficulty: "easy" | "medium" | "hard";
  tiles: Tile[];
  revealedTiles: Tile[];
  matchedCards: Tile[];
  attempts: number;
  time: number;
  isGameOver: boolean;
  gameStarted: boolean;
  timerId: NodeJS.Timeout | number | null;
  history: Array<{
    date: string;
    attempts: number;
    time: number;
    difficulty: string;
  }>;
}
