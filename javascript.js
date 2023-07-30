//Stores statistics

let playerScore = 0;
let computerScore = 0;
let numberOfRounds = 0;
let playerChoice = null;
let ties = 0;

function choices(){
    console.log("player choice is " + playerChoice);
    console.log("computer choice is " + computerChoice);
}

// Rock button
const rockbtn = document.getElementById("rock-btn");
rockbtn.addEventListener('click', function handleClick(event) {
playerChoice = "rock";
document.getElementById("player-choice-container").style.transform = "rotateY(0)";
document.getElementById("computer-choice-container").style.transform = "rotateY(180deg)";
document.getElementById("player-choice-img").src="images/150_rock.png";
playRound();
});
// Paper button
const paperbtn = document.getElementById("paper-btn");
paperbtn.addEventListener('click', function handleClick(event) {
playerChoice = "paper";
document.getElementById("player-choice-container").style.transform = "rotateY(0)";
document.getElementById("computer-choice-container").style.transform = "rotateY(180deg)";
document.getElementById("player-choice-img").src="images/150_paper.png";
playRound();
});
// Scissors button
const scissorsbtn = document.getElementById("scissors-btn");
scissorsbtn.addEventListener('click', function handleClick(event) {
playerChoice = "scissors";
document.getElementById("player-choice-container").style.transform = "rotateY(0)";
document.getElementById("computer-choice-container").style.transform = "rotateY(180deg)";
document.getElementById("player-choice-img").src="images/150_scissors.png";
playRound();
});

// Returns computers choice
function getComputerChoice (){  
    const computerChoice = Math.floor(Math.random() * 3 + 1);
        if (computerChoice === 1){
            document.getElementById("computer-choice-img").src="images/150_rock.png";
            console.log("computer choice is " + computerChoice);
            return "rock";
        }
        else if (computerChoice === 2){
            document.getElementById("computer-choice-img").src="images/150_paper.png";
            console.log("computer choice is " + computerChoice);
            return "paper";
        }
        else {
            document.getElementById("computer-choice-img").src="images/150_scissors.png";
            console.log("computer choice is " + computerChoice);
            return "scissors";
        }
    }

// Plays a round of rock paper scissors
function playRound(){
    const player = playerChoice;
    const computer = getComputerChoice ();
    console.log("computer choice inside the function is " + computer);
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
        document.getElementById("end-game-message").innerHTML = "Congratulations!<br> You won!";
        document.getElementById("end-game-message").style.color = "lime";
        document.getElementById("overlay").style.opacity = "1";
        document.getElementById("overlay").style.backgroundImage = "url('victory_image.jpg')";
        document.getElementById("overlay").style.backgroundSize = "cover";
        document.getElementById("overlay").style.backgroundAttachment = "fixed";
        document.getElementById("overlay").style.backgroundRepeat = "no-repeat";
        document.getElementById("btn-restart").style.boxShadow = "0 0 .2rem #00fff2, 0 0 .1rem #00fff2, 0 0 1rem #00fff2, 0 0 0.4rem #00fff2, 0 0 1.4rem #00fff2, inset 0 0 0.7rem #00fff2";
        document.getElementById("btn-restart").style.animation = "restartBtnHoverAngel 0.3s forwards";
        document.getElementById("restartContainer").style.boxShadow = "0 0 .2rem #00fff2, 0 0 .1rem #00fff2, 0 0 1rem #00fff2, 0 0 0.4rem #00fff2, 0 0 1.4rem #00fff2, inset 0 0 0.7rem #00fff2";
        openRestartContainer();
    }
    else if (computerScore === 5){
        document.getElementById("end-game-message").innerHTML = "Game over!<br>You lost!";
        document.getElementById("end-game-message").style.color = "red";
        document.getElementById("overlay").style.opacity = "1";
        document.getElementById("overlay").style.backgroundImage = "url('thresh.jpg')";
        document.getElementById("overlay").style.backgroundSize = "cover";
        document.getElementById("overlay").style.backgroundAttachment = "fixed";
        document.getElementById("overlay").style.backgroundRepeat = "no-repeat";
        document.getElementById("overlay").style.backgroundPosition = "center center";
        document.getElementById("btn-restart").style.boxShadow = "0 0 .2rem #ff0000, 0 0 .1rem #ff0000, 0 0 1rem #ff0000, 0 0 0.4rem #ff0000, 0 0 1.4rem #ff0000, inset 0 0 0.7rem #ff0000;";
        document.getElementById("btn-restart").style.animation = "restartBtnHover 0.3s forwards";
        document.getElementById("restartContainer").style.boxShadow = "0 0 .2rem #ff0000, 0 0 .1rem #ff0000, 0 0 1rem #ff0000, 0 0 0.4rem #ff0000, 0 0 1.4rem #ff0000, inset 0 0 0.7rem #ff0000";
        openRestartContainer();   
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

function openRestartContainer() {
    
    document.getElementById("restartContainer").style.transform = "translate(-50%, -50%) scale(1)";
    document.getElementById("overlay").style.display = "block";
  }
  
  function closeRestartContainer() {
    document.getElementById("restartContainer").style.transform = "translate(-50%, -50%) scale(0)";
    document.getElementById("overlay").style.display = "none";
  }

//   Restart game button

    const restartbtn = document.getElementById("btn-restart");
    restartbtn.addEventListener('click', function handleClick(event) {
        closeRestartContainer();
        resetGame();
        document.getElementById("player-choice-container").style.transform = "rotateY(90deg)";
        document.getElementById("computer-choice-container").style.transform = "rotateY(90deg)";
    });

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