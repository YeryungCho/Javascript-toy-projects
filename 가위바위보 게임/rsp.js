function getComputerChoice() {
  const random = Math.random();
  if (random < 0.33) {
    return "가위";
  } else if (random < 0.66) {
    return "바위";
  } else {
    return "보";
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "동점";
  } else if (playerSelection == "가위" && computerSelection == "바위") {
    return "컴퓨터";
  } else if (playerSelection == "바위" && computerSelection == "보") {
    return "컴퓨터";
  } else if (playerSelection == "보" && computerSelection == "가위") {
    return "컴퓨터";
  } else if (playerSelection == "가위" && computerSelection == "보") {
    return "플레이어";
  } else if (playerSelection == "바위" && computerSelection == "가위") {
    return "플레이어";
  } else if (playerSelection == "보" && computerSelection == "바위") {
    return "플레이어";
  }
}

function playGame() {
  let result = "";
  let playerWin = 0;
  let computerWin = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = window.prompt(
      "가위, 바위, 보 중 하나를 입력하세요",
      "가위"
    );
    if (
      playerSelection !== "가위" &&
      playerSelection !== "바위" &&
      playerSelection !== "보"
    ) {
      playerSelection = window.prompt(
        "가위, 바위, 보 중 하나를 입력하세요",
        "가위"
      );
    }
    let computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);

    if (result == "플레이어") {
      playerWin += 1;
      console.log(`${i + 1}라운드 결과: 플레이어 승리`);
    } else if (result == "컴퓨터") {
      computerWin += 1;
      console.log(`${i + 1}라운드 결과: 컴퓨터 승리`);
    } else {
      console.log(`${i + 1}라운드 결과: 무승부`);
    }
  }

  if (playerWin > computerWin) {
    console.log("최종 결과: 플레이어 승리!");
  } else if (playerWin < computerWin) {
    console.log("최종 결과: 컴퓨터 승리!");
  } else {
    console.log("최종 결과: 무승부입니다!");
  }
}

setTimeout(function () {
  playGame();
}, 3000);
