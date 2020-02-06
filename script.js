const playerOne = document.querySelector("#player1")
const playerTwo = document.querySelector("#player2")
const buttonsValues = []
let playerOnePoint = 0;
let playerTwoPoint = 0;
const tieImage = document.querySelector("#draw")
const loseImage = document.querySelector("#lose")
const winImage = document.querySelector("#win")

const playerOneScore = document.querySelector(".pointPlayer h2")
const pointsComputerDisplay = document.querySelector(".pointsComputer h2")





const randomComputerChoice = () => {
  return buttonsValues[Math.floor(Math.random() * buttonsValues.length)]
}


const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
  buttonsValues.push(button.value)
  button.addEventListener("click", () => {
    winImage.classList.add("hidden");
    addAClassOfButtonValue(playerTwo, randomComputerChoice())
    addAClassOfButtonValue(playerOne, event.target.value)
    checkTheResult()
  })
})


const addAClassOfButtonValue = (player, classToadd) => {
  player.classList.remove(player.classList[1])
  player.classList.add(classToadd)
}

function checkTheResult() {

  if (playerOne.classList.contains(playerTwo.classList[1])) {

    console.log("it's a tie");
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
    playerOnePoint = 0;
    playerTwoPoint = 0;
    winImage.classList.add("hidden");
    loseImage.classList.add("hidden")
  }, 2000);
}