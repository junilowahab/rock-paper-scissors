//linking script to the DOM
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let scissors = document.getElementById('scissors');

let weaponButtons = document.querySelectorAll('.weaponButtons');

//array containing the weapons
const weapons = ['rock', 'paper', 'scissors'];

//called function by clicking button
weaponButtons.forEach(weaponButton => {
    weaponButton.addEventListener('click', game())
});

//function to select random weapon
function game(){
    let computerScore = 0;
    let userScore = 0;


        //select random number
        const randomNumber = Math.floor(Math.random() * weapons.length);

        //computer selects random weapon
        let computerChoice = weapons[randomNumber];
        console.log(computerChoice);

        //user selects weapon
        let userChoice = '';
        userChoice.toLowerCase;
        console.log(userChoice);

        //if user mispells a word -go to line 47-
        if((userChoice === 'rock') || (userChoice === 'paper') || (userChoice === 'scissors')){
                
            //compare choices between user and computer if computer wins
            if((computerChoice === 'rock' && userChoice === 'scissors') || (computerChoice === 'paper' && userChoice === 'rock') || (computerChoice === 'scissors' && userChoice === 'paper')){
            
                //computer gains one point
                computerScore++;
                console.log(`Your computers score is ${computerScore}`);
            };

            //compare choices between user and computer if user wins
            if((userChoice === 'rock' && computerChoice === 'scissors') || (userChoice === 'paper' && computerChoice === 'rock') || (userChoice === 'scissors' && computerChoice === 'paper')){

                //user gains one point
                userScore++;
                console.log(`Your score is ${userScore}`);
            };

            //compare choices between user and computer if both chose same thing
            if((userChoice === 'rock' && computerChoice === 'rock') || (userChoice === 'paper' && computerChoice === 'paper') || (userChoice === 'scissors' && computerChoice === 'scissors')){
                console.log('Tie! Try again');
            };
        }else{
            console.log('Misspelt a word, try again');
        };

    //Determine winner
    if(computerScore > userScore){
        console.log('Your PC won');
    }else if(computerScore < userScore){
        console.log('You won');
    };
};