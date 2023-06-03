//Wait for the DOM to finish loading before running the game
//Get the button element and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {//this referes to the button we just clicked
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);//Template literal-Will tell user what button has been clciked
            }
        })
    }
})

function runGame(params) {

}

function checkAnswer(params) {

}

function calculateCorrectAnswer(params) {

}

function incrementScore(params) {

}

function incrementWrongAnswer(params) {

}

function displayAdditionQuestion(params) {

}

function displaySubtractQuestion(params) {

}

function displayMultiplyQuestion(params) {

}

function myFunction(params) {

}