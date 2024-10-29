let choices = document.querySelectorAll(".choice");
let score = document.querySelectorAll(".score");
let newbut = document.querySelector("#newbut");
let msg = document.querySelector("#msg");
let userscoreval=document.querySelector("#user-score");
let compscoreval=document.querySelector("#comp-score");
let mincontain=document.querySelector(".min-contain");
let userSCore = 0;
let compScore = 0;

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");

        playgame(userChoice);
    });
});

const drawgame = () => {

    msg.innerText="draw";
    msg.style.color="purple";
}


const playgame = (userChoice) => {
    //generate computer choice
    console.log("user choice= ", userChoice);
    const compChoice = getcompchoice();
    console.log("comp choice= ", compChoice);
    if (userChoice === compChoice) {
        drawgame();
        msg.innerTexr="draw";
   
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            // User chose rock
            // User wins if computer chose scissors, otherwise user loses
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            // User chose paper
            // User wins if computer chose rock, otherwise user loses
            userWin = compChoice === "scissors" ? false : true;
        } else {
            // User chose scissors
            // User wins if computer chose paper, otherwise user loses
            userWin = compChoice === "rock" ? false : true;
        }
        
        showWinner(userWin,userChoice,compChoice);
    }

}

const getcompchoice = () => {
    const arr = ["rock", "paper", "scissors"];//option for random value
    const arrid = Math.floor(Math.random() * 3);//for getting value 0 to 2
    return arr[arrid];//this gave me options and there id 
}

const showWinner=(userWin,userChoice,compChoice)=>{
      if(userWin){
        userSCore++;
        msg.innerText=`You win`;
        msg.style.color="green";
     
      }else{
        compScore++;
        msg.innerText=`Computer win`;
        msg.style.color="red";
    }
    userscoreval.innerText=userSCore;
    compscoreval.innerText=compScore;
};

