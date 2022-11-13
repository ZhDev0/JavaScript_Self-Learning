//Guessing Game


function guessGame() {
    let randomNr = Math.floor(Math.random() * 10);
    let guess;

    do {
        guess = prompt('Guess a number between 1-10');
        console.log(guess, randomNr);
        if(randomNr > guess) {
            console.log('You guessed too low');
        }else {
            console.log('Guess was too high');
        }
    }while(guess!=randomNr);
    console.log('You Won');
}

guessGame();