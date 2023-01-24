const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const btn_rock = document.querySelector('.card_rock');
const btn_paper = document.querySelector('.card_paper');
const btn_scissors = document.querySelector('.card_scissors');
const notification = document.querySelector('.notification');

//The function that implements the computer's move
function computerPlay() {
    let num;

    num = Math.floor(Math.random() * 3) + 1;

    switch (num) {
        case 1:
            return rock;
        case 2:
            return paper;
        case 3:
            return scissors;
    }

}

//events
let num = 0;
let pcChoose;

btn_rock.addEventListener('click', () => {
    pcChoose = computerPlay();
    num = playRound(rock, pcChoose);
    game(num);
});
btn_paper.addEventListener('click', ()  => {
    pcChoose = computerPlay();
    num = playRound(paper, computerPlay());
    game(num);
});
btn_scissors.addEventListener('click', () => {
    pcChoose = computerPlay();
    num = playRound(scissors, computerPlay());
    game(num);
});

//the game
let countPC = 0, countPlayer = 0;
function game(num){
    
    const score_man = document.querySelector('.score_man');
    const score_pc = document.querySelector('.score_pc');

    if (num == 0) {
        countPC += 1;
        score_pc.textContent = countPC;

    }

    if(num == 1){
        countPlayer += 1;
        score_man.textContent = countPlayer;

    }
    if(countPlayer == 5 || countPC == 5){
        if(countPlayer == 5) alert("You Win!");
        else alert("PC Win!");

        countPC = 0, countPlayer = 0;
        score_pc.textContent = countPC;
        score_man.textContent = countPlayer; 
        notification.textContent = "";
    }
    
}

//The function round
function playRound(playerSelection, computerSelection) {

    if(playerSelection == rock && computerSelection == paper){
        notification.textContent = "You Lose! Paper beats Rock";
        return 0;
    }
    else if(playerSelection == paper && computerSelection == rock){
        notification.textContent = "You Win! Paper beats Rock";
        return 1;
    }
    else if(playerSelection == rock && computerSelection == rock){
        notification.textContent = "Dead Heat!";
        return 2;
    }
    else if(playerSelection == paper && computerSelection == paper){
        notification.textContent = "Dead Heat!";
        return 2;
    }
    else if(playerSelection == rock && computerSelection == scissors){
        notification.textContent = "You Win! Rock beats Scissors";
        return 1;
    }
    else if(playerSelection == scissors && computerSelection == rock){
        notification.textContent = "You Lose! Rock beats Scissors";
        return 0;
    }
    else if(playerSelection == scissors && computerSelection == scissors){
        notification.textContent = "Dead Heat!";
        return 2;
    }
    else if(playerSelection == paper && computerSelection == scissors){
        notification.textContent = "You Lose! Scissors beats Paper";
        return 0;
    }
    else if(playerSelection == scissors && computerSelection == paper){
        notification.textContent = "You Win! Scissors beats Paper";
        return 1;
    }
}

