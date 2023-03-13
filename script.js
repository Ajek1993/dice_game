const numbers = [1, 2, 3, 4, 5, 6];
const btn = document.getElementById("btn");
const btnReset = document.getElementById("btn-reset");
const firstNumber = document.getElementById("number1");
const secondNumber = document.getElementById("number2");
const thirdNumber = document.getElementById("number3");
const fourthNumber = document.getElementById("number4");
const fifthNumber = document.getElementById("number5");
const figure = document.getElementById("figures");

const scoreNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber];
console.log(scoreNumbers);


btn.addEventListener("click", function () {
    for (let i = 0; i <scoreNumbers.length; i++) {
        const newNumber = getRandomNumber();
        console.log(newNumber);
        scoreNumbers[i].textContent = newNumber;
    }
    finderNumbers();
})

btnReset.addEventListener("click", function () {
    for (let i = 0; i <scoreNumbers.length; i++) {
        const newNumber = getRandomNumber();
        console.log(newNumber);
        scoreNumbers[i].textContent = "";
        figure.textContent = "Play to find number 1"
    }
})

function getRandomNumber() {
    return Math.ceil(Math.random()*numbers.length);
}

function finderNumbers() {
    for (let i = 0; i <scoreNumbers.length; i++) {
        if (scoreNumbers[i].textContent == 1) {
            figure.textContent = "You found first number one on position: " + (i + 1);
            break;
        } else {
            figure.textContent = "You didn't find number one";
        }
    }
}