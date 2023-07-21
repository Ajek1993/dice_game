const btnPlay = document.getElementById("btn");
const btnReset = document.getElementById("btn-reset");
const scoreNumbers = document.querySelectorAll(".dice_score");
const figure = document.getElementById("figures");
const table = document.querySelector(".table_score");
const tableRow = document.querySelector(".table_row");
let numbersOfGame = 0;
btnPlay.addEventListener("click", ()=>{
    if (numbersOfGame >= 15) {
        figure.innerText = "You have reached your game limit, click reset to play again";
        return;
    }
    figure.innerText = "Click play to try again";
    for(let i = 0; i < scoreNumbers.length; i++){
        const newNumber = getRandomNumber();
        scoreNumbers[i].innerText = newNumber;
    }
    fillTable(scoreNumbers);
});
btnReset.addEventListener("click", ()=>{
    for(let i = 0; i < scoreNumbers.length; i++)scoreNumbers[i].textContent = "";
    while(tableRow.nextElementSibling)tableRow.parentElement.lastElementChild.remove();
    numbersOfGame = 0;
    figure.innerText = "Click play";
});
const getRandomNumber = ()=>{
    return Math.ceil(Math.random() * 6);
};
const pointsCount = (nums)=>{
    const numArr = Array.from(nums).map((e)=>+e.innerText).sort((a, b)=>a - b);
    console.log(numArr);
    const countNumbers = [
        0,
        0,
        0,
        0,
        0,
        0
    ];
    numArr.forEach((e)=>countNumbers[e - 1]++);
    for(let i = 0; i < countNumbers.length; i++){
        if (countNumbers.indexOf(2) && countNumbers.lastIndexOf(2) && countNumbers.indexOf(2) !== countNumbers.lastIndexOf(2)) return `Dwie pary z ${countNumbers.indexOf(2) + 1} oraz ${countNumbers.lastIndexOf(2) + 1}`;
        if (countNumbers.includes(2) && countNumbers.includes(3)) return `Full z ${countNumbers.indexOf(2) + 1} oraz ${countNumbers.indexOf(3) + 1}`;
        if (countNumbers.join("").includes("111110")) return "Mały strit";
        if (countNumbers.join("").includes("011111")) return "Duży strit";
        if (countNumbers.includes(2)) return "Para z " + (countNumbers.indexOf(2) + 1);
        if (countNumbers.includes(3)) return "Tr\xf3jka z " + (countNumbers.indexOf(3) + 1);
        if (countNumbers.includes(4)) return "Kareta z " + (countNumbers.indexOf(4) + 1);
        if (countNumbers.includes(5)) return "Poker z " + (countNumbers.indexOf(5) + 1);
    }
    return numArr.reduce((a, c)=>a + c);
};
const fillTable = (scoreNumbers)=>{
    const newTr = tableRow.cloneNode(true);
    newTr.lastElementChild.innerText = pointsCount(scoreNumbers);
    tableRow.parentElement.appendChild(newTr);
    numbersOfGame++;
    for(let i = 0; i < scoreNumbers.length; i++){
        newTr.firstElementChild.innerText = numbersOfGame;
        newTr.children[i + 1].innerText = scoreNumbers[i].innerText;
    }
};

//# sourceMappingURL=index.672d4772.js.map
