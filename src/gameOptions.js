import Game from "./scenes/game.js";
import PreloadGame from "./scenes/preload.js";

export const gameOptions = {
  platformSpaceRange: [300, 400],
  mountainSpeed: 80,
  spawnRange: [80, 300],
  platformSizeRange: [90, 300],
  platformHeightRange: [-5, 5],
  platformHeightScale: 10,
  platformVerticalLimit: [0.4, 0.7],
  playerGravity: 900,
  jumpForce: 400,
  playerStartPosition: 200,
  jumps: 2,
  coinPercent: 25,
};

export const gameConfig = {
  type: Phaser.Auto,
  width: screen.availWidth,
  height: screen.availHeight,
  scene: [PreloadGame, Game],
  backgroundColor: "#4488aa",
  physics: {
    default: "arcade",
  },
};
