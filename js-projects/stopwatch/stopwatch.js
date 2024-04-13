document.querySelector('.js-start').addEventListener('click',() =>clickStart());

let n = JSON.parse(localStorage.getItem('history')) || 0;
document.querySelector('.js-timer'). innerHTML = n
let nUnround = 0;
let id;
function clickStart(){
    if(document.querySelector('.js-start').innerHTML == 'Start'){
        document.querySelector('.js-start').innerHTML = 'Stop';
        id = setInterval(()=> {

            nUnround += .01
            n = nUnround.toFixed(2);
            localStorage.setItem('history', JSON.stringify(n));
            document.querySelector('.js-timer').innerHTML = `${n}`;
        },10)
    }
    else if(document.querySelector('.js-start').innerHTML == 'Stop'){
        document.querySelector('.js-start').innerHTML = 'Start';
         clearInterval(id);
        
    }
}

document.querySelector('.js-reset').addEventListener('click', () => {
    n = 0;
    nUnround = 0;
    localStorage.removeItem('history')
    document.querySelector('.js-timer').innerHTML = `0.00`
});

