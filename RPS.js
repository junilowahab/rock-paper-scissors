const choices =['Rock', 'Paper', 'Scissors'];
const random = Math.floor(Math.random() * choices.length);
const getComputerChoice = choices[random];

let computerScore = 0;
let playerScore = 0;

    function playRound(){
        let playerSelection = prompt('Choose your weapon');
        console.log(`The computer chose ${choices[random]}`);
        playerSelection = playerSelection.toLowerCase();
        if((playerSelection == 'rock' && getComputerChoice == 'Rock') || (playerSelection == 'paper' && getComputerChoice == 'Paper') || (playerSelection == 'scissors' && getComputerChoice == 'Scissors')){
            console.log('Tie Game');
        }else if((playerSelection == 'rock' && getComputerChoice == 'Paper') || (playerSelection == 'paper' && getComputerChoice == 'Scissors') || (playerSelection == 'scissors' && getComputerChoice == 'Rock')){
            console.log('Computer wins this round!');
            computerScore++;
        }else if((playerSelection == 'paper' && getComputerChoice == 'Rock') || (playerSelection == 'scissors' && getComputerChoice == 'Paper') || (playerSelection == 'rock' && getComputerChoice == 'Scissors')){
            console.log('You win this round!');
            playerScore++;
        }
        console.log(`Your score is ${playerScore}`);
        console.log(`The computer has a score of ${computerScore}`)
        
    }

function game(){
    for (let i = 0; i < 100; i++) {
        playRound();
        if(computerScore === 3){
            console.log('Awwn, AI takes the W.')
            computerScore = 0;
            playerScore = 0;
            i = 0;
        }else if(playerScore === 3){
            console.log('Yayyy, humans are the champions!!!')
            computerScore = 0;
            playerScore = 0;
            i = 0;
        }// else if(computerScore === 2 && playerScore === 2){
        //     console.log('Game point...');
        // }
         
    }
}

game();