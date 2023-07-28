//Stores statistics

let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;
let playerChoice = null;
let ties = 0;

// Rock button
const rockbtn = document.getElementById("rock-btn");
rockbtn.addEventListener('click', function handleClick(event) {
playerChoice = "rock";
playRound();
});
// Paper button
const paperbtn = document.getElementById("paper-btn");
paperbtn.addEventListener('click', function handleClick(event) {
playerChoice = "paper";
playRound();
});
// Scissors button
const scissorsbtn = document.getElementById("scissors-btn");
scissorsbtn.addEventListener('click', function handleClick(event) {
playerChoice = "scissors";
playRound();
});

// Returns computers choice
function getComputerChoice (){  
    const computerChoice = Math.floor(Math.random() * 3 + 1);
        if (computerChoice===1){
            return "rock";
        }
        else if (computerChoice===2){
            return "paper";
        }
        else {
            return "scissors";
        }
    }

// Plays a round of rock paper scissors
function playRound(){
    const player = playerChoice;
    const computer = getComputerChoice ();
    numberOfRounds++;
    document.getElementById("num-of-rounds").innerHTML = numberOfRounds;

    
    if (player === computer) {
        
        ties++;
        document.getElementById("winner-announcement").style.color = "white";
        document.getElementById("winner-announcement").innerHTML = "It is a tie!";
        checkRound();
        return;
    }
    else if (player === "rock" && computer === "scissors" ||
             player === "scissors" && computer === "paper" ||
             player === "paper" && computer === "rock") {
        
        playerScore++;
        document.getElementById("mortals-win").innerHTML = playerScore;
        document.getElementById("winner-announcement").style.color = "lime";
        document.getElementById("winner-announcement").innerHTML = "You win!";
        checkRound();
        return;
    }
    else {
        
        computerScore++;
        document.getElementById("demons-win").innerHTML = computerScore;
        document.getElementById("winner-announcement").style.color = "red";
        document.getElementById("winner-announcement").innerHTML = "Deamon wins!";
        checkRound();
        return;
    }
}

function checkRound(){
    if (playerScore === 5){
        alert ("The human race is saved, you won!");
    }
    else if (computerScore === 5){
        alert("You lost, human race is doomed..");       
    }
    else {
        return;
    }        
}

function resetGame(){
    document.getElementById("num-of-rounds").innerHTML = 0;
    document.getElementById("mortals-win").innerHTML = 0;
    document.getElementById("demons-win").innerHTML = 0;
    document.getElementById("winner-announcement").style.color = "white";
    document.getElementById("winner-announcement").innerHTML = "Who wins?";
    playerScore = 0;
    computerScore = 0;
    numberOfRounds = 0;
    playerChoice = null;
    ties = 0;
}

function stats(){
    console.log(playerScore);
    console.log(playerChoice);

    console.log(computerScore);

    console.log(ties);
    console.log(numberOfRounds);
}


// function checkRoundTie(){
//     if (numberOfRounds === 5) {
//         document.getElementById("num-of-rounds").innerHTML = numberOfRounds;
//         alert("game over!");
//     }
//     else {
//         return;
//     }
// }

// function checkRoundPlayerWin(){
//     if (numberOfRounds === 5) {
//         document.getElementById("mortals-win").innerHTML = playerScore;
//         alert("game over!");
//     }
//     else {
//         return;
//     }
// }

// function checkRoundComputerWin(){
//     if (numberOfRounds === 5) {
//         document.getElementById("demons-win").innerHTML = computerScore;
//         alert("game over!");
//     }
//     else {
//         return;
//     }
// }