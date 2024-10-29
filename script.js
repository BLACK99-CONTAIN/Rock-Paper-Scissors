let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let userscoreval = document.querySelector("#user-score");
let compscoreval = document.querySelector("#comp-score");
let userSCore = 0;
let compScore = 0;

choices.forEach((choice) => {
    console.log(`Adding event listener to choice with id: ${choice.getAttribute("id")}`);
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("User selected:", userChoice);
        playgame(userChoice);
    });
});

const drawgame = () => {
    msg.innerText = "draw"; // Fixed typo here
    msg.style.color = "purple";
}

const playgame = (userChoice) => {
    console.log("user choice= ", userChoice);
    const compChoice = getcompchoice();
    console.log("comp choice= ", compChoice);
    if (userChoice === compChoice) {
        drawgame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "scissors";
        } else if (userChoice === "paper") {
            userWin = compChoice === "rock";
        } else {
            userWin = compChoice === "paper";
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const getcompchoice = () => {
    const arr = ["rock", "paper", "scissors"];
    const arrid = Math.floor(Math.random() * 3);
    return arr[arrid];
}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userSCore++;
        msg.innerText = "You win";
        msg.style.color = "green";
    } else {
        compScore++;
        msg.innerText = "Computer wins";
        msg.style.color = "red";
    }
    userscoreval.innerText = userSCore;
    compscoreval.innerText = compScore;
}
