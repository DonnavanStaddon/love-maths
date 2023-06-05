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
                runGame(gameType);
            }
        })
    }
    runGame("addition");
})

//
/** 
 * Docstrings are used to describe functions
 * The main game "loop", called when the scritp is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    //Creates teo hole numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

function checkAnswer(params) {

}

function calculateCorrectAnswer(params) {

}

function incrementScore(params) {

}

function incrementWrongAnswer(params) {

}

function displayAdditionQuestion(operand1, operand2) {

    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}

function displaySubtractQuestion(params) {

}

function displayMultiplyQuestion(params) {

}

function myFunction(params) {

}