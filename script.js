const playerOne = document.querySelector("#player1")
const playerTwo = document.querySelector("#player2")
const buttonsValues = []
let playerOnePoint = 0;
let playerTwoPoint = 0;
const tieImage = document.querySelector("#draw")
const loseImage = document.querySelector("#lose")
const winImage = document.querySelector("#win")
const buttonContainer = document.querySelector("#buttons")
const playerOneScore = document.querySelector(".pointPlayer h2")
const pointsComputerDisplay = document.querySelector(".pointsComputer h2")





const randomComputerChoice = () => {
  return buttonsValues[Math.floor(Math.random() * buttonsValues.length)]
}


const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
  buttonsValues.push(button.value)

  button.addEventListener("click", () => {
    playerOne.classList.add("shake");
    playerTwo.classList.add("shake");
    button.classList.add("disabled");
    buttonContainer.classList.add("disabled")

    setTimeout(() => {
      playerOne.classList.remove("shake");
      playerTwo.classList.remove("shake");
      buttonContainer.classList.remove("disabled")
      winImage.classList.add("hidden");
      addAClassOfButtonValue(playerTwo, randomComputerChoice())
      addAClassOfButtonValue(playerOne, button.value)
      checkTheResult()
    }, 1800);

  })
})


const addAClassOfButtonValue = (player, classToadd) => {
  player.classList.remove(player.classList[1])
  player.classList.add(classToadd)


}

function checkTheResult() {

  if (playerOne.classList.contains(playerTwo.classList[1])) {
    tieImage.classList.remove("hidden")
    setTimeout(() => {
      tieImage.classList.add("hidden")
    }, 1000);
  } else if (!playerOne.classList.contains(playerTwo.classList[1])) {
    notTie(playerOne, playerTwo)
  }
  checkWhoWon()
}


function notTie(playerOneChoice, computer) {
  if (playerOneChoice.classList.contains("paper") && playerTwo.classList.contains("rock")) {
    playerOnePoint++

  } else if (playerOneChoice.classList.contains("scissors") && playerTwo.classList.contains("paper")) {
    playerOnePoint++

  } else if (playerOneChoice.classList.contains("rock") && playerTwo.classList.contains("scissors")) {
    playerOnePoint++

  } else {
    playerTwoPoint++
  }

}


function checkWhoWon() {
  playerOneScore.textContent = playerOnePoint;
  pointsComputerDisplay.textContent = playerTwoPoint;

  if (playerOnePoint == 2) {
    winImage.classList.remove("hidden");
    restartGame()
  } else if (playerTwoPoint == 2) {
    loseImage.classList.remove("hidden")
    restartGame()
  }
}

function restartGame() {
  setTimeout(() => {
    playerOneScore.textContent = 0;
    pointsComputerDisplay.textContent = 0;
    winImage.classList.add("hidden");
    loseImage.classList.add("hidden")
    playerOne.classList.remove(playerOne.classList[1])
    playerTwo.classList.remove(playerTwo.classList[1])
  }, 2000);


}