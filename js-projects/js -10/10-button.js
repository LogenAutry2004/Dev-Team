let button1 = document.querySelector('.js-button1');
let button2 = document.querySelector('.js-button2');
let button3 = document.querySelector('.js-button3');

function clicked(button){
    if(button === 'b1'){
        button1.classList.replace('notC', 'C');
        button2.classList.replace('C', 'notC');
        button3.classList.replace('C', 'notC');
        
    }
    else if(button === 'b2'){
        button2.classList.replace('notC', 'C');
        button1.classList.replace('C', 'notC');
        button3.classList.replace('C', 'notC');
    
    }
    else{
        button3.classList.replace('notC', 'C');
        button2.classList.replace('C', 'notC');
        button1.classList.replace('C', 'notC');
    }
}
