//array containing the weapons
const weapons = ['rock', 'paper', 'scissors'];

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
                i--;
                console.log('Tie! Try again');
            };
        }else{
            console.log('Misspelt a word, try again');
            i--;
        };
    };
};

game();
