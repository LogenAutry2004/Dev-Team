// sets the history object to the local storage history json string or a default object
let history = JSON.parse(localStorage.getItem('history')) || {
    results: "",
    lastEqual: "null",
}

// sets history equal to current history at the start
printHistory();

// sets all the variables
let userInput = ''
let operation = ''
let operationClicked = false;
let secondInput = ''
let result = 0
let equalPressed = false;

// allows enter to submit rounding point without pressing button
function enterPressed(event){
    if(event.key === "Enter"){
        roundPoint = roundingPoint();
    }
}

// sets rounding point for result
function roundingPoint(){
    let inputElement = document.querySelector('.js-rounding');
    let roundingPoint = inputElement.value || 2;
    roundingPointInt = Number(roundingPoint);
    return roundingPointInt;

}

let roundPoint = roundingPoint();
console.log(roundPoint);


// prints history
function printHistory(){
    document.querySelector('.historyPrinted').innerHTML = `History: ${history.results}`;
}

// when ans button is pressed
function ans(){
    if(equalPressed == true){
        userInput = ''
        operation = ''
        operationClicked = false;
        secondInput = ''
        result = 0
        document.querySelector('.buttons').innerHTML = `[_____]`
    }
    equalPressed = false;

    // checks if there is a valid last equal
    if(history.lastEqual == null){
        alert("You have no last answer");
    }
    else{
        if(!operationClicked){
            userInput += history.lastEqual;
            document.querySelector('.buttons').innerHTML = userInput;
        }
        // when operator is clicked every number afterwards is second input
        else{
            secondInput += history.lastEqual;
            document.querySelector('.buttons').innerHTML = `${userInput} ${operation} ${secondInput}`
        }
    }
    
}

function backspace(){
    if(!operationClicked){
        userInput = userInput.split("");
        userInput = userInput.slice(0,-1)
        userInput = userInput.join("");
        document.querySelector('.buttons').innerHTML = userInput;
    }
    // when operator is clicked every number afterwards is second input
    else{
        secondInput = secondInput.split("");
        secondInput = secondInput.slice(0,-1)
        secondInput = secondInput.join("");
        document.querySelector('.buttons').innerHTML = `${userInput} ${operation} ${secondInput}`
    }
}

// takes in input
function input(input){

    // allows you to write over previous function
    if(equalPressed == true){
        userInput = ''
        operation = ''
        operationClicked = false;
        secondInput = ''
        result = 0
        document.querySelector('.buttons').innerHTML = `[_____]`
    }
    equalPressed = false;
    if(!operationClicked){
        userInput += input;
        document.querySelector('.buttons').innerHTML = userInput;
    }
    // when operator is clicked every number afterwards is second input
    else{
        secondInput += input;
        document.querySelector('.buttons').innerHTML = `${userInput} ${operation} ${secondInput}`
    }
}

// when an operator is clicked
function operatorClick(operator){
    operation = operator
    operationClicked = true;
    document.querySelector('.buttons').innerHTML = `${userInput} ${operation}`
    console.log(operation);
}

// calculates math once eqaul is pressed
function arithmetic(userInput, secondInput, operation){

    equalPressed = true;
    // sets strings to floats
    intInput1 = parseFloat(userInput);
    intInput2 = parseFloat(secondInput); 
    if(secondInput == ''){
        result = Number(intInput1).toFixed(roundPoint);
        history.results += ` ${userInput} = ${result},`;
    }
    else if(operation === '+'){
        result = intInput1 + intInput2;
        history.results += ` ${userInput} ${operation} ${secondInput} = ${result},`;
    }
    else if(operation === '-'){
        result = intInput1 - intInput2;
        result = Number(result).toFixed(roundPoint);
        history.results += ` ${userInput} ${operation} ${secondInput} = ${result},`;
    }
    else if(operation === '*'){
        result = intInput1 * intInput2;
        result = Number(result).toFixed(roundPoint);
        history.results += ` ${userInput} ${operation} ${secondInput} = ${result},`;
    }
    else if(operation === '/'){
        result = intInput1 / intInput2;
        result = Number(result).toFixed(roundPoint);
        // updates history object
        history.results += ` ${userInput} ${operation} ${secondInput} = ${result},`;

    }
    history.lastEqual = result;
    console.log(history.lastEqual);
    document.querySelector('.buttons').innerHTML = `${userInput} ${operation} ${secondInput} = ${result}`
    // prints history and updates local storage
    printHistory();
    localStorage.setItem('history', JSON.stringify(history));
}
