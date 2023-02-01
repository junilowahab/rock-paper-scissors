let choices =['Rock', 'Paper', 'Scissors'];
const random = Math.floor(Math.random() * choices.length);
const getComputerChoice = choices[random];
console.log(random);

function gameStart(){
    let playerSelection = prompt('Choose your weapon');
    if((playerSelection == 'Rock' && getComputerChoice == 'Rock') || (playerSelection == 'Paper' && getComputerChoice == 'Paper') || (playerSelection == 'Scissors' && getComputerChoice == 'Scissors')){
        console.log('Tie Game');
    }else if((playerSelection == 'Rock' && getComputerChoice == 'Paper') || (playerSelection == 'Paper' && getComputerChoice == 'Scissors') || (playerSelection == 'Scissors' && getComputerChoice == 'Rock')){
        console.log('Computer Wins!');
    }else if((playerSelection == 'Paper' && getComputerChoice == 'Rock') || (playerSelection == 'Scissors' && getComputerChoice == 'Paper') || (playerSelection == 'Rock' && getComputerChoice == 'Scissors')){
        console.log('You Win!');
    }

}

gameStart();