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
    
    do {
        choosePlayer = prompt("Choose rock or paper or scissors: ").toLowerCase();
    } while (choosePlayer != rock && choosePlayer != paper && choosePlayer != scissors);
    
    return choosePlayer;
}

let player;

//Five rounds
function game(){
    let string;
    let prowerka;
    let countComputer = 0, countPlayer = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = playerPlay();
        let computerSelection = computerPlay();
        prowerka = playRound(playerSelection, computerSelection);
        if (prowerka == 1) {
            countPlayer += 1;
            countComputer += 0;
        } 
        else if(prowerka == 0){
            countPlayer += 0;
            countComputer += 1;
        }
        else if(prowerka == 2){
            countPlayer += 0;
            countComputer += 0;
        }
        string = `Computer - ${countComputer}: User - ${countPlayer}`;
        console.log(string);
    }
    
    string = `Final: Computer - ${countComputer}: User - ${countPlayer}`;
    return string;
}

console.log(game());




//The function round
function playRound(playerSelection, computerSelection) {

    if(playerSelection == rock && computerSelection == paper){
        console.log("You Lose! Paper beats Rock");
        return player = 0;
    }
    else if(playerSelection == paper && computerSelection == rock){
        console.log("You Win! Paper beats Rock");
        return player = 1;
    }
    else if(playerSelection == rock && computerSelection == rock){
        console.log("Dead Heat!");
        return player = 2;
    }
    else if(playerSelection == paper && computerSelection == paper){
        console.log("Dead Heat!");
        return player = 2;
    }
    else if(playerSelection == rock && computerSelection == scissors){
        console.log("You Win! Rock beats Scissors");
        return player = 1;
    }
    else if(playerSelection == scissors && computerSelection == rock){
        console.log("You Lose! Rock beats Scissors");
        return player = 0;
    }
    else if(playerSelection == scissors && computerSelection == scissors){
        console.log("Dead Heat!");
        return player = 2;
    }
    else if(playerSelection == paper && computerSelection == scissors){
        console.log("You Lose! Scissors beats Paper");
        return player = 0;
    }
    else if(playerSelection == scissors && computerSelection == paper){
        console.log("You Win! Scissors beats Paper");
        return player = 1;
    }
}

