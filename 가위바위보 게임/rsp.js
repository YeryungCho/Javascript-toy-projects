function getComputerChoice() {
  const random = Math.random();
  if (random <= 0.33) {
    return "scissors";
  } else if (random <= 0.66) {
    return "rock";
  } else {
    return "paper";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "동점";
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return "컴퓨터";
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return "컴퓨터";
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return "컴퓨터";
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return "플레이어";
  } else if (playerSelection == "rock" && computerSelection == "scissors") {
    return "플레이어";
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return "플레이어";
  }
}

function playGame() {
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);

  const content = document.createElement("div");

  if (result == "플레이어") {
    playerWin += 1;
    content.textContent = `${++count}라운드 결과: 플레이어 승리`;
  } else if (result == "컴퓨터") {
    computerWin += 1;
    content.textContent = `${++count}라운드 결과: 컴퓨터 승리`;
  } else {
    content.textContent = `${++count}라운드 결과: 무승부`;
  }

  document.body.appendChild(content);

  if (count == 5) {
    const result = document.createElement("div");
    result.setAttribute("id", "result");

    if (playerWin > computerWin) {
      result.textContent = "최종 결과: 플레이어 승리!";
    } else if (playerWin < computerWin) {
      result.textContent = "최종 결과: 컴퓨터 승리!";
    } else {
      result.textContent = "최종 결과: 무승부!";
    }

    document.body.appendChild(result);
    count = 0;
    playerWin = 0;
    computerWin = 0;
  }
}

let count = 0;
let playerWin = 0;
let computerWin = 0;

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerSelection = button.id;
    playGame();
  });
});
