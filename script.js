const playerOne = document.querySelector("#player1")
const playerTwo = document.querySelector("#player2")
const buttonsValues = []
let playerOnePoint = 0;
let playerTwoPoint = 0;
const tieImage = document.querySelector("#draw")
const loseImage = document.querySelector("#lose")
const winImage = document.querySelector("#win")



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

  console.log("win loose", checkWhoWon());
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
    notTie(playerOne, playerTwo)
  }

}

function notTie(playerOneChoice, computer) {

  if (playerOneChoice.classList.contains("paper") && playerTwo.classList.contains("rock")) {
    playerOnePoint++
    console.log("win");
    winImage.classList.remove("hidden");

  } else if (playerOneChoice.classList.contains("scissors") && playerTwo.classList.contains("paper")) {
    playerOnePoint++
    console.log("win");
    winImage.classList.remove("hidden");

  } else if (playerOneChoice.classList.contains("rock") && playerTwo.classList.contains("scissors")) {
    playerOnePoint++
    console.log("win");
    winImage.classList.remove("hidden");

  } else {
    playerTwoPoint++
    console.log("loose");
  }
}


function checkWhoWon() {
  if (playerOnePoint == 2 || playerTwoPoint == 2) {
    return true;
  } else {
    return false;
  }
}