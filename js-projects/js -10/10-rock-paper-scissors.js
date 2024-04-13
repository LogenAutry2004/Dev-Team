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