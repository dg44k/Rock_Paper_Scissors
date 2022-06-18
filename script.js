const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";

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
console.log(computerPlay())