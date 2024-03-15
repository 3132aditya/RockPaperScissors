const playerText = document.querySelector(".player");
const computerText = document.querySelector(".computer");
const status = document.querySelector(".status");
const btnChoice = document.querySelectorAll(".btn");
const reset = document.querySelector(".reset");
const playerScore = document.querySelector(".playerScore");
const computerScore= document.querySelector(".computerScore");

let player;
let computer;
let result;
let pScore=0;
let cScore=0;

reset.addEventListener("click", ()=>{
    pScore=0;
    cScore=0;
    playerScore.textContent = `Score: ${pScore}`;
    computerScore.textContent = `Score: ${cScore}`;

})

btnChoice.forEach(button => button.addEventListener("click", ()=>{
    player = button.getAttribute("name");
    Ai();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    status.textContent = checkWinner();
    playerScore.textContent = `Score: ${pScore}`;
    computerScore.textContent = `Score: ${cScore}`;
    
    
}))

function Ai(){
    const num = Math.floor(Math.random()*3)+1;

    switch (num){
        case 1:
            computer ="ROCK";
            break;
        
        case 2:
            computer ="PAPER";
            break;

        case 3:
             computer ="SCISSORS";
             break;
    }
}

function checkWinner(){
    if(player==computer){
        return "Draw!!";
    }

    else if(player=="ROCK"){
        if(computer=="SCISSORS"){
            pScore++;
            return "Player Wins!!";
        }
        else{
            cScore++;
            return "Computer Wins!!"
        }
    }

    else if(player=="PAPER"){
        if(computer=="ROCK"){
            pScore++;
            return "Player Wins!!";
        }
        else{
            cScore++;
            return "Computer Wins!!"
        }
    }
    
    else if(player=="SCISSORS"){
        if(computer=="PAPER"){
            pScore++;
            return "Player Wins!!";
        }
        else{
            cScore++;
            return "Computer Wins!!"
        }
    }
}




// const playerText = document.querySelector(".player");
// const computerText = document.querySelector(".computer");
// const resultText = document.querySelector(".status");
// const choiceBtns = document.querySelectorAll(".choiceBtn");
// let player;
// let computer;
// let result;

// choiceBtns.forEach(button => button.addEventListener("click", () => {

//     player = button.textContent;
//     computerTurn();
//     playerText.textContent = `Player: ${player}`;
//     computerText.textContent = `Computer: ${computer}`;
//     resultText.textContent = checkWinner();
// }));

// function computerTurn(){

//     const randNum = Math.floor(Math.random() * 2) + 1;

//     switch(randNum){
//       case 1:
//         computer = "ROCK";
//         break;
//       case 2:
//         computer = "PAPER";
//         break;
//       case 3:
//         computer = "SCISSORS";
//         break;
//     }
// }
// function checkWinner(){
//     if(player == computer){
//       return "Draw!";
//     }
//     else if(computer == "ROCK"){
//       return (player == "PAPER") ? "You Win!" : "You Lose!"
//     }
//     else if(computer == "PAPER"){
//       return (player == "SCISSORS") ? "You Win!" : "You Lose!"
//     }
//     else if(computer == "SCISSORS"){
//       return (player == "ROCK") ? "You Win!" : "You Lose!"
//     }
// }