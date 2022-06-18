const rock = "rock";
const paper = "paper";
const scissors = "scissors";

//The function that implements the computer's move
function computerPlay() {
    let num;

    num = Math.floor(Math.random() * 3) + 1;

    switch (num) {
        case 1:
            return rock;
            break;
        case 2:
            return paper;
            break;
        case 3:
            return scissors;
            break;
    }

}

//The function player
function playerPlay() {
    let choosePlayer;
    
    // choosePlayer = prompt("Choose rock or paper or scissors: ")

    // if (choosePlayer.toLowerCase() == (rock || paper || scissors)) {
    //     return choosePlayer;
        
    // } else {
    //     console.log("Error");
    //     playerPlay();
    // }

    do {
        choosePlayer = prompt("Choose rock or paper or scissors: ").toLowerCase();
        console.log(choosePlayer);
    } 
    while (choosePlayer != rock && choosePlayer != paper && choosePlayer != scissors);
    
    return choosePlayer;
}



//The function round
function playRound(playerSelection, computerSelection) {
    if(playerSelection == rock && computerSelection == paper){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection == paper && computerSelection == rock){
        return "You Win! Paper beats Rock";
    }
    else if(playerSelection == rock && computerSelection == rock){
        return "Dead Heat!";
    }
    else if(playerSelection == paper && computerSelection == paper){
        return "Dead Heat!";
    }
    else if(playerSelection == rock && computerSelection == scissors){
        return "You Win! Rock beats Scissors";
    }
    else if(playerSelection == scissors && computerSelection == rock){
        return "You Lose! Rock beats Scissors";
    }
    else if(playerSelection == scissors && computerSelection == scissors){
        return "Dead Heat!";
    }
    else if(playerSelection == paper && computerSelection == scissors){
        return "You Lose! Scissors beats Paper";
    }
    else if(playerSelection == scissors && computerSelection == paper){
        return "You Win! Scissors beats Paper";
    }
}



const playerSelection = playerPlay();
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));