let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
}

updateScoreElement();

let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(function() {
      const playerMove = pickComputerMove();
      playGame(playerMove);
    }, 1000);
    isAutoPlaying = true;
  } else {
    clearInterval(intervalId)
    isAutoPlaying = false;
  }
}

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let resultMessage = "";
  let result = "";
  if (playerMove === computerMove) {
    result = "tie";
  } else {
    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "lose";
      } else if (computerMove === "paper") {
        result = "win";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "win";
      } else if (computerMove === "scissors") {
        result = "lose";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "paper") {
        result = "lose";
      } else if (computerMove === "scissors") {
        result = "win";
      }
    }
  }

  if (result === "win") {
    resultMessage = "Mega kill, u slayed that bitch";
    score.wins += 1;
  } else if (result == "lose") {
    resultMessage = "Talo ka gaga";
    score.losses += 1;
  } else {
    resultMessage = "ULET! Parehas kayo";
    score.ties += 1;
  }

  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  document.querySelector('.js-result')
    .innerHTML = `${resultMessage}`;
  document.querySelector('.js-moves')
    .innerHTML = `You
<img src="rock-paper-scissors-resources/images/${playerMove}-emoji.png" class="move-icon">
<img src="rock-paper-scissors-resources/images/${computerMove}-emoji.png" class="move-icon">
Computer`;
}

function updateScoreElement() {
  document.querySelector('.js-score')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  let randomNumber = Math.random();
  let computerChoice = "";

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerChoice = "rock";
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerChoice = "paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerChoice = "scissors";
  }

  return computerChoice;
}