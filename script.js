const playerOne = document.querySelector("#player1")
const playerTwo = document.querySelector("#player2")
const buttonsValues = []

const randomComputerChoice = () => {
  return buttonsValues[Math.floor(Math.random() * buttonsValues.length)]
}


const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
  buttonsValues.push(button.value)

  button.addEventListener("click", () => {
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
  console.log(playerOne, playerTwo.classList[1]);

  if (playerOne.classList.contains(playerTwo.classList[1])) {

    console.log("it's a tie");
  } else if (!playerOne.classList.contains(playerTwo.classList[1])) {
    // console.log("not contains");
    notTie(playerOne, playerTwo)
  }

}

function notTie(playerOneChoice, computer) {

  if (playerOneChoice.classList.contains("paper") && playerTwo.classList.contains("rock")) {
    console.log("win");
  } else if (playerOneChoice.classList.contains("scissors") && playerTwo.classList.contains("paper")) {
    console.log("win");
  } else if (playerOneChoice.classList.contains("rock") && playerTwo.classList.contains("scissors")) {
    console.log("win");
  } else {
    console.log("loose");
  }

}