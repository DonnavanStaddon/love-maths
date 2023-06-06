//Wait for the DOM to finish loading before running the game
//Get the button element and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {//this referes to the button we just clicked
                checkAnswer();
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
 * The main game "loop", called when the script is first loaded
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    //Creates two hole numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}. Aborting!`;
    }
}

/**
 * Checks the answer against the first element in
 * the returned calculateCorrectAnswer array
 */
function checkAnswer(params) {

    //Checking User input answer from the DOM
    let userAnswer = parseInt(document.getElementById("answer-box").value);
    //getting the correct arrayed answer from pc
    let calculatedAnswer = calculateCorrectAnswer();
    //comparing the users input answer with the computers calculated answer from index[0] from the array
    let isCorrect = userAnswer === calculatedAnswer[0];
    if (isCorrect) {
        alert("Hey you got it right! :o")
    } else {
        alert(`Awww... you answered ${userAnswer}. The correct answer was ${calculatedAnswer[0]}!`);
    }
    runGame(calculatedAnswer[1])//Last thing to do is run another game of the same type
}

/**
 * Gets/Stores the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and returns the correct answer.
 * this function returns an array of the correct answer the stores it
 */
function calculateCorrectAnswer() {

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById("operator").innerText;

    if (operator === "+") {
        return [operand1 + operand2, "addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimplemented operator ${operator}. Aborting!`;
    }

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