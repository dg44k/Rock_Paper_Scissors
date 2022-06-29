const rock = "rock";
const paper = "paper";
const scissors = "scissors";

const btn_rock = document.querySelector('.card_rock');
const btn_paper = document.querySelector('.card_paper');
const btn_scissors = document.querySelector('.card_scissors');

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

    if(countPC == 5){
        countPC = 0, countPlayer = 0;
        score_pc.textContent = countPC;
        score_man.textContent = countPlayer;
        return alert("PC Win!");
    }
    
    if(num == 1){
        countPlayer += 1;
        score_man.textContent = countPlayer;

    }
    if(countPlayer == 5){
        countPC = 0, countPlayer = 0;
        score_man.textContent = countPlayer;
        score_pc.textContent = countPC;
        return alert("You Win!");
        
    }
    
}

//The function round
function playRound(playerSelection, computerSelection) {

    if(playerSelection == rock && computerSelection == paper){
        console.log("You Lose! Paper beats Rock");
        return 0;
    }
    else if(playerSelection == paper && computerSelection == rock){
        console.log("You Win! Paper beats Rock");
        return 1;
    }
    else if(playerSelection == rock && computerSelection == rock){
        console.log("Dead Heat!");
        return 2;
    }
    else if(playerSelection == paper && computerSelection == paper){
        console.log("Dead Heat!");
        return 2;
    }
    else if(playerSelection == rock && computerSelection == scissors){
        console.log("You Win! Rock beats Scissors");
        return 1;
    }
    else if(playerSelection == scissors && computerSelection == rock){
        console.log("You Lose! Rock beats Scissors");
        return 0;
    }
    else if(playerSelection == scissors && computerSelection == scissors){
        console.log("Dead Heat!");
        return 2;
    }
    else if(playerSelection == paper && computerSelection == scissors){
        console.log("You Lose! Scissors beats Paper");
        return 0;
    }
    else if(playerSelection == scissors && computerSelection == paper){
        console.log("You Win! Scissors beats Paper");
        return 1;
    }
}

