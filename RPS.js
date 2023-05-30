//linking script to the DOM
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let yourDisplayedScore = document.getElementById('yourscore');
let computerDisplayedScore = document.getElementById('compscore');
let winnerDiv = document.getElementById('winner');

let weaponButtons = document.querySelectorAll('.weaponButtons');

//array containing the weapons
const weapons = ['rock', 'paper', 'scissors'];

//scores of game
let computerScore = 0;
let userScore = 0;

game();

//function to select random weapon
function game(){

        let randomNumber;
        let computerChoice;

        
        function getComputerChoices(){
            //select random number
            randomNumber = Math.floor(Math.random() * weapons.length);

            //computer selects random weapon
            computerChoice = weapons[randomNumber];
            console.log(computerChoice);
        }


        let userChoice;

        //user selects weapon from button
        rock.addEventListener('click', () => {
            userChoice = 'rock';
            getComputerChoices();
            gameResults();
        });
        
        paper.addEventListener('click', () => {
            userChoice = 'paper';
            getComputerChoices();
            gameResults()
        });

        scissors.addEventListener('click', () => {
            userChoice = 'scissors';
            getComputerChoices();
            gameResults()
        });

        function gameResults(){

        //user selects weapon
        console.log(`My choice is ${userChoice}`);

        //if user mispells a word
        if((userChoice === 'rock') || (userChoice === 'paper') || (userChoice === 'scissors')){
                
            //compare choices between user and computer if computer wins
            if((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper')){
            
                //computer gains one point
                computerScore++;
                computerDisplayedScore.innerText = computerScore;

                if(computerScore === 5){
                    console.log('The computer won');
                    let userWins = document.createElement('div');
                    userWins.innerText = 'Thee computer won. Refresh to try again.';
                    winnerDiv.appendChild(userWins);
                }
            };

            //compare choices between user and computer if user wins
            if((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')){

                //user gains one point
                userScore++;
                yourDisplayedScore.innerText = userScore;
                
                if(userScore === 5){
                    console.log('YOU WON')
                    let userWins = document.createElement('div');
                    userWins.innerText = 'You won!!! Refresh to try again.';
                    winnerDiv.appendChild(userWins);
                }

            };

            //compare choices between user and computer if both chose same thing
            if((userChoice === 'rock' && computerChoice === 'rock') || (userChoice === 'paper' && computerChoice === 'paper') || (userChoice === 'scissors' && computerChoice === 'scissors')){
                console.log('Tie! Try again');
                
            };
        }else{
            console.log('That is not part of your choices, try again.');
        }
        }

};