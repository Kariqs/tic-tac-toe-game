function openPlayerConfig(event) {
  editedPlayer = +event.target.getAttribute("data-player-id");

  configOverlay.style.display = "block";
  backDrop.style.display = "block";
}

function cancelPlayerConfig() {
  configOverlay.style.display = "none";
  backDrop.style.display = "none";
  formElement.children[0].classList.remove("error");
  errorOutputElement.textContent = "";
  playerNameInput.value = "";
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayerName = formData.get("playername").trim();

  if (!enteredPlayerName) {
    event.target.children[0].classList.add("error");
    errorOutputElement.textContent = "Please enter a valid name";
    return;
  }

  const updatedPlayerDataElement = document.getElementById(
    "player-" + editedPlayer + "-data"
  );
  updatedPlayerDataElement.children[1].textContent = enteredPlayerName;

  players[editedPlayer - 1].name = enteredPlayerName;

  cancelPlayerConfig();
}
