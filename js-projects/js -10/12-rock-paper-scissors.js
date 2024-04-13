let clicked = 0;

let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0, 
    curResult: ""
}

updateScoreElement();
updateResultElement();

function updateResultElement(){
    document.querySelector('.js-results').innerHTML = `${score.curResult}`
}


function updateScoreElement(){
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`
}


function playGame(playerMove){
    // results
    let computerMove = '';
    let result = '';
    computerMove = pickComputerMove();
    if(playerMove === 'rock'){
        if(computerMove === 'rock'){
        result = 'Tie.';
        }
        else if(computerMove === 'paper'){
            result='You lose.';
        }
        else{
            result='You win!';
        }
    }
    else if(playerMove == 'paper'){
        if(computerMove === 'rock'){
            result = 'You win!';
        }
        else if(computerMove === 'paper'){
            result='Tie.';
        }
        else{
            result='You lose.';
        }
     }
     else{
        if(computerMove === 'rock'){
            result = 'You lose.';
        }
        else if(computerMove === 'paper'){
            result='You win!';
        }
        else{
            result='Tie.';
        }
     }
    
    if(result === 'You win!'){
        score.wins += 1;
        score.curResult = "You Win!"
    }
    else if(result === 'You lose.'){
        score.losses += 1;
        score.curResult = "You lose."
    }
    else{
        score.ties += 1;
        score.curResult = "You tie."
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateResultElement();
    updateScoreElement();
    document.querySelector('.js-picked').innerHTML =` You: <img src="images/${playerMove}.png" class="move-icon">Computer:<img src="images/${computerMove}.png" class="move-icon">`
}

function pickComputerMove(){
    const randomNumber = Math.random();
    let computerMove = ''
    // random to computer move
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    }
    else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    }
    else{
        computerMove = 'scissors';
    }
    return computerMove;
}

let intervalId;
let isAutoPlaying = false;

function autoPlay(){

    if(!isAutoPlaying){
        isAutoPlaying = true;
        document.querySelector('.auto-score-button').innerHTML = 'Stop'
        intervalId = setInterval(() => playGame(pickComputerMove()) , 1000);
    }
    else{
        clearInterval(intervalId);
        isAutoPlaying = false;
        document.querySelector('.auto-score-button').innerHTML = 'Auto Play'
    }
}

// you must make a function to run not just call a function in addeventlistener
// does what onclick does so we can keep all the javascript in the javascript file
document.querySelector('.js-rock-button').addEventListener('click',() => playGame('rock'));
document.querySelector('.js-paper-button').addEventListener('click',() => playGame('paper'));
document.querySelector('.js-scissors-button').addEventListener('click',() => playGame('scissors'));

// checks what key the play presses and runs the game from that
document.body.addEventListener('keydown', (event) => {
    if(event.key === 'r'){
        playGame('rock');
    }
    else if(event.key === 'p'){
        playGame('paper')
    }
    else if(event.key === 's'){
        playGame('scissors')
    }
});