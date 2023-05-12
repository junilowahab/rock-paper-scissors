//array containing the weapons
const weapons = ['Rock', 'Paper', 'Scissors'];

//function to select random weapon
function game(){
    let computerScore = 0;
    let userScore = 0;

    for(let i = 0; i < 5; i++){
        //select random number
        const randomNumber = Math.floor(Math.random() * weapons.length);

        //computer selects random weapon
        let computerChoice = weapons[randomNumber];
        console.log(computerChoice);

        //user selects weapon
        let userChoice = prompt('Rock, Paper or Scissors?');
        userChoice.toLowerCase;
        console.log(userChoice);

        //if user mispells a word
        if((userChoice !== 'rock') || (userChoice !== 'paper') || (userChoice !== 'scissors')){
            console.log('Misspelt word, try again');
            i--;
        }

        //compare choices between user and computer if computer wins
        if((computerChoice === 'Rock' && userChoice === 'scissors') || (computerChoice === 'Paper' && userChoice === 'rock') || (computerChoice === 'Scissors' && userChoice === 'paper')){
            
            //computer gains one point
            computerScore++;
            console.log(`Your computers score is ${computerScore}`);
        };

        //compare choices between user and computer if user wins
        if((userChoice === 'rock' && computerChoice === 'Scissors') || (userChoice === 'paper' && computerChoice === 'Rock') || (userChoice === 'scissors' && computerChoice === 'Paper')){

            //user gains one point
            userScore++;
            console.log(`Your score is ${userScore}`);
        };

        //compare choices between user and computer if both chose same thing
        if((userChoice === 'rock' && computerChoice === 'Rock') || (userChoice === 'paper' && computerChoice === 'Paper') || (userChoice === 'scissors' && computerChoice === 'Scissors')){
            i--;
            console.log('Tie! Try again');
        }
    };
};

game()
