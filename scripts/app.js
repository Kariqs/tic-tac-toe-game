let editedPlayer = 0;
const players = [
    {name:'',
    symbol:'X'},
    {name:'',
    symbol:'O'}
];

const playerNameInput = document.getElementById('player-name')

const editPlayer1BtnElement = document.getElementById("edit-player-1-btn");
const editPlayer2BtnElement = document.getElementById("edit-player-2-btn");
const formElement = document.querySelector('form')
const errorOutputElement = document.getElementById('error-message')

const configOverlay = document.getElementById("config-overlay");
const backDrop = document.getElementById("backdrop");

const cancelOverlay = document.getElementById("cancel-player-config");

editPlayer1BtnElement.addEventListener("click", openPlayerConfig);
editPlayer2BtnElement.addEventListener("click", openPlayerConfig);

cancelOverlay.addEventListener("click", cancelPlayerConfig);

formElement.addEventListener('submit',savePlayerConfig);
