import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Tile, GameState } from "../types/types";

type GameActions = {
  initializeTiles: (images: string[]) => void;
  handleClickTile: (tile: Tile) => void;
  resetGame: () => void;
  setDifficulty: (level: GameState["difficulty"]) => void;
  startGame: () => void;
  addToHistory: () => void;
};

const useGameStore = create<GameState & GameActions>()(
  persist(
    (set, get) => ({
      difficulty: "easy",
      tiles: [],
      revealedTiles: [],
      isGameOver: false,
      matchedCards: [],
      attempts: 0,
      time: 0,
      timerId: null,
      gameStarted: false,
      history: [],

      initializeTiles: (images) => {
        const sizes = { easy: 4, medium: 5, hard: 9 };

        const { difficulty } = get();

        const pairs = images.slice(0, sizes[difficulty]);

        const shuffled = [...pairs, ...pairs]
          .sort(() => Math.random() - 0.5)
          .map((img, i) => ({
            id: `${img}-${i}`,
            image: img,
            matched: false,
          }));

        set({ tiles: shuffled });
      },

      handleClickTile: (tile) => {
        set((state) => {
          let { revealedTiles, attempts } = state;

          const { matchedCards, tiles } = state;

          const selectedCardEntry = revealedTiles.find(
            (card) => card.id === tile.id
          );

          if (!selectedCardEntry) {
            if (revealedTiles.length < 2) {
              revealedTiles = [...revealedTiles, tile];
            } else if (revealedTiles.length === 2) {
              revealedTiles = [tile];
            }
          }

          if (revealedTiles.length === 1) attempts = attempts + 1;

          if (
            revealedTiles.length === 2 &&
            revealedTiles[0].image === revealedTiles[1].image
          ) {
            const newTiles = tiles.map((singleTile) =>
              revealedTiles.some((revTile) => revTile.id === singleTile.id)
                ? { ...singleTile, matched: true }
                : singleTile
            );

            const updatedMatchedCards = [
              ...matchedCards,
              ...revealedTiles.map((rt) => ({ ...rt, matched: true })),
            ];

            return {
              tiles: newTiles,
              matchedCards: updatedMatchedCards,
              revealedTiles: [],
            };
          } else if (
            revealedTiles.length === 2 &&
            revealedTiles[0].image !== revealedTiles[1].image
          ) {
            setTimeout(() => {
              set({ revealedTiles: [] });
            }, 1000);
          }

          return { revealedTiles, attempts, matchedCards };
        });

        if (get().matchedCards.length === get().tiles.length) {
          const currentTimerId = get().timerId;

          if (currentTimerId !== null) {
            clearInterval(currentTimerId);
          }

          get().addToHistory();

          set({ timerId: null, isGameOver: true });
        }
      },

      resetGame: () => {
        const currentTimerId = get().timerId;

        if (currentTimerId !== null) {
          clearInterval(currentTimerId);
        }

        set({
          revealedTiles: [],
          matchedCards: [],
          attempts: 0,
          time: 0,
          timerId: null,
          gameStarted: false,
          tiles: [],
        });
      },

      setDifficulty: (level) => {
        set({ difficulty: level });
      },

      startGame: () => {
        set({ gameStarted: true });

        const timer = setInterval(() => {
          set((state) => ({ time: state.time + 1 }));
        }, 1000);

        set({ timerId: timer });
      },

      addToHistory: () => {
        const newEntry = {
          date: new Date().toISOString(),
          attempts: get().attempts,
          time: get().time,
          difficulty: get().difficulty,
        };

        set({ history: [...get().history, newEntry] });
      },
    }),

    {
      name: "memory-game-storage",
      partialize: (state) => ({
        history: state.history,
      }),
    }
  )
);

export default useGameStore;
