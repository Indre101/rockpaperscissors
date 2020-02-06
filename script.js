const playerOne = document.querySelector("#player1")
const playerTwo = document.querySelector("#player2")
const buttonsValues = []




const randomComputerChoice = () => {
  console.log(buttonsValues[Math.floor(Math.random() * buttonsValues.length)])
}


const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
  buttonsValues.push(button.value)

  button.addEventListener("click", () => {
    randomComputerChoice()

    addAClassOfButtonValue(playerOne)
  })
})


const addAClassOfButtonValue = (playerOne) => {
  playerOne.classList.remove(playerOne.classList[1])
  playerOne.classList.add(event.target.value)
}