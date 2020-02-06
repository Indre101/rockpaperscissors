const playerOne = document.querySelector("#player1")
const playerTwo = document.querySelector("#player2")


const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    addAClassOfButtonValue(playerOne)
  })
})



const addAClassOfButtonValue = (playerOne) => {

  playerOne.classList.remove(playerOne.classList[1])

  playerOne.classList.add(event.target.value)
  console.log(playerOne);
}