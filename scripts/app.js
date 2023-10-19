const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
];

let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;

const players = [
  { name: "", symbol: "X" },
  { name: "", symbol: "O" },
];

const playerNameInput = document.getElementById("player-name");
const gameOverElement = document.getElementById("game-over");

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const startNewGameBtnElement = document.getElementById("start-game-btn");
const gameFieldElements = document.querySelectorAll("#game-board li");

const formElement = document.querySelector("form");
const errorOutputElement = document.getElementById("error-message");
const activePlayerElement = document.getElementById("active-player-name");

const configOverlay = document.getElementById("config-overlay");
const backDrop = document.getElementById("backdrop");
const gameAreaElement = document.getElementById("active-game");

const cancelOverlay = document.getElementById("cancel-player-config");

startNewGameBtnElement.addEventListener("click", startNewGame);
editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelOverlay.addEventListener("click", cancelPlayerConfig);

formElement.addEventListener("submit", savePlayerConfig);

for (const gameFieldElement of gameFieldElements) {
  gameFieldElement.addEventListener("click", selectGameField);
}
