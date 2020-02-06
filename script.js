const playerOne = document.querySelector("#player1")
const playerTwo = document.querySelector("#player2")
const buttons = document.querySelectorAll("button")

const buttonsValues = []
let playerOnePoint = 0;
let playerTwoPoint = 0;
const tieImage = document.querySelector("#draw")
const loseImage = document.querySelector("#lose")
const winImage = document.querySelector("#win")
const buttonContainer = document.querySelector("#buttons")
const playerOneScore = document.querySelector(".pointPlayer h2")
const pointsComputerDisplay = document.querySelector(".pointsComputer h2")

function updateTheScore() {
  playerOneScore.textContent = playerOnePoint;
  pointsComputerDisplay.textContent = playerTwoPoint;
}

updateTheScore()

const randomComputerChoice = () => {
  return buttonsValues[Math.floor(Math.random() * buttonsValues.length)]
}

function toggleClass(elementOne, elementwo, classToAddRemove) {
  elementOne.classList.toggle(classToAddRemove)
  elementwo.classList.toggle(classToAddRemove)
}


buttons.forEach(button => {
  buttonsValues.push(button.value)
  button.addEventListener("click", () => {
    toggleClass(playerOne, playerTwo, "shake")
    buttonContainer.classList.add("disabled")
    setTimeout(() => {
      toggleClass(playerOne, playerTwo, "shake")
      buttonContainer.classList.remove("disabled")
      winImage.classList.add("hidden");
      addAClassOfButtonValue(playerTwo, randomComputerChoice())
      addAClassOfButtonValue(playerOne, button.value)
      checkTheResult()
    }, 1850);

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
  updateTheScore()
  if (playerOnePoint == 2) {
    winImage.classList.remove("hidden");

    restartGame()
  } else if (playerTwoPoint == 2) {
    loseImage.classList.remove("hidden")

    restartGame()
  }
}


function restartGame() {
  buttonContainer.classList.add("disabled")
  setTimeout(() => {
    playerOnePoint = 0;
    playerTwoPoint = 0;
    updateTheScore();
    buttonContainer.classList.remove("disabled")
    winImage.classList.add("hidden");
    loseImage.classList.add("hidden")
    playerOne.classList.remove(playerOne.classList[1])
    playerTwo.classList.remove(playerTwo.classList[1])
  }, 2000);


}