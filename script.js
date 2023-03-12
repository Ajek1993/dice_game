const numbers = [1, 2, 3, 4, 5, 6];
const btn = document.getElementById("btn");
const firstNumber = document.getElementById("number1");
const secondNumber = document.getElementById("number2");
const thirdNumber = document.getElementById("number3");
const fourthNumber = document.getElementById("number4");
const fifthNumber = document.getElementById("number5");

const scoreNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber];
console.log(scoreNumbers);

btn.addEventListener("click", function () {
    for (let i = 0; i <scoreNumbers.length; i++) {
        const newNumber = getRandomNumber();
        console.log(newNumber);
        scoreNumbers[i].textContent = newNumber;
    }
})

function getRandomNumber() {
    let randomNumber = Math.ceil(Math.random()*numbers.length);
    return randomNumber;
}