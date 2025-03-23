# Memory Game

This is a simple **Memory Game** built using **React** and **Zustand** for state management. The game challenges the player to match pairs of cards, and it's designed to be fun and challenging at different difficulty levels.

## Features

- **Difficulty Levels**: Choose between easy, medium, and hard difficulty.
- **Timer**: Tracks time spent on the game.
- **Attempts Counter**: Keeps track of the number of attempts made by the player.
- **Game History**: Saves the history of games played with the date, number of attempts, time spent, and difficulty level.
- **Matched Pairs**: Displays a game board where the player can match pairs of cards.

## Tech Stack

- **React**: Used for building the user interface.
- **Zustand**: State management for handling game state, tiles, matched cards, and history.
- **TypeScript**: Provides static type checking for better development experience.
- **SCSS**: Used for styling and creating the layout of the game board.

## Setup

To run the game locally, follow these steps:

1. Clone the repository:

   git clone https://github.com/MateuszWesolowsky/MomoryGame.git

2. Navigate to the project directory:

   cd game

3. Install the dependencies:

   npm install

4. Start the development server:

   npm run dev

## Gameplay Instructions

1. Start the game by selecting the difficulty level.

2. Click on tiles to reveal their images. Try to match pairs of identical tiles.

3. Once all pairs are matched, the game ends, and information about the game appears in the history.

Enjoy the game!
