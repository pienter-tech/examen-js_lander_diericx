const newGameBtn = document.getElementById("new-game-btn");
const selectionContainer = document.querySelector(".selection-container");
const newGameContainer = document.querySelector(".new-game-container");
const rockbtn = document.querySelectorAll("[data-selection='rock']");
const paperbtn = document.querySelectorAll("[data-selection='paper']");
const scissorsbtn = document.querySelectorAll("[data-selection='scissors']");
const playerCounter = document.getElementById("play-zone-user-counter");
const computerCounter = document.getElementById("play-zone-ai-counter");
let choice = 0;
const choices = ["images/rock.png", "images/paper.png", "images/scissors.png"];
let img = document.querySelectorAll("img")[0];
let imgAI = document.querySelectorAll("img")[1];
let intervals = null;
let winnerContainer = document.querySelector(".game-message-container");
let draw = document.getElementById("draw-message");
function newGame() {
  selectionContainer.classList.remove("hide");
  newGameContainer.classList.add("hide");
  winnerContainer.classList.add("hide");
  draw.classList.add("hide");
  img.src = "";
  intervals = setInterval(interval, 200);
}
function interval() {
  imgAI.src = choices[choice];
  choice = ((choice + 1) % choices.length)+1;
}
let computerChoice = null;
let userChoice = null;
function choiceRock() {
  userChoice = "rock";
  img.src = "images/rock.png";
  clearInterval(intervals);
  newComputerChoice();
  getWinner();
}
function choicePaper() {
  userChoice = "paper";
  img.src = "images/paper.png";
  clearInterval(intervals);
  newComputerChoice();
  getWinner();
}
function choiceScissors() {
  userChoice = "scissors";
  img.src = "images/scissors.png";
  clearInterval(intervals);
  newComputerChoice();
  getWinner();
}
function newComputerChoice() {
  computerChoice = Math.floor(Math.random() * choices.length)
  if (computerChoice == 1) {
    computerChoice = "rock";
    imgAI.src = "images/rock.png";
  } else if (computerChoice == 2) {
    computerChoice = "paper";
    imgAI.src = "images/paper.png";
  } else {
    computerChoice = "scissors";
    imgAI.src = "images/scissors.png";
  }
}
function getWinner() {
  selectionContainer.classList.add("hide");
  newGameContainer.classList.remove("hide");
  winnerContainer.classList.remove("hide");
  let userWon = document.getElementById("user-won-message");
  let aiWon = document.getElementById("ai-won-message");
  if (userChoice == computerChoice) {
    draw.classList.remove("hide");
    aiWon.classList.add("hide");
    userWon.classList.add("hide");
  } else if (userChoice == "rock" && computerChoice == "scissors") {
    userWon.classList.remove("hide");
    aiWon.classList.add("hide");
    playerCounter.textContent++;
  } else if (userChoice == "paper" && computerChoice == "rock") {
    userWon.classList.remove("hide");
    aiWon.classList.add("hide");
    playerCounter.textContent++;
  } else if (userChoice == "scissors" && computerChoice == "paper") {
    userWon.classList.remove("hide");
    aiWon.classList.add("hide");
    playerCounter.textContent++;
  } else if (computerChoice == "rock" && userChoice == "scissors") {
    aiWon.classList.remove("hide");
    userWon.classList.add("hide");
    computerCounter.textContent++;
  } else if (computerChoice == "paper" && userChoice == "rock") {
    aiWon.classList.remove("hide");
    userWon.classList.add("hide");
    computerCounter.textContent++;
  } else if (computerChoice == "scissors" && userChoice == "paper") {
    aiWon.classList.remove("hide");
    userWon.classList.add("hide");
    computerCounter.textContent++;
  }
}
newGameBtn.addEventListener("click", newGame);
rockbtn.forEach(function (rock) {
  rock.addEventListener("click", choiceRock);
});
paperbtn.forEach(function (paper) {
  paper.addEventListener("click", choicePaper);
});
scissorsbtn.forEach(function (scissors) {
  scissors.addEventListener("click", choiceScissors);
});