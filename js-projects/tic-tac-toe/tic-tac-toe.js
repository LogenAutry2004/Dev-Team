let click1 = [0,0,0];
let click2 = [0,0,0];
let click3 = [0,0,0];
let xTurn = true;
let board1 = ['','',''];
let board2 = ['','',''];
let board3 = ['','',''];

const jsBox1 = {class: '.js-box1', index: 0, row: 'row1'};
addChoice(jsBox1);

const jsBox2 = {class: '.js-box2',index: 1, row: 'row1'};
addChoice(jsBox2);

const jsBox3 = {class: '.js-box3',index: 2, row: 'row1'};
addChoice(jsBox3);

const jsBox4 = {class: '.js-box4',index: 0, row: 'row2'};
addChoice(jsBox4);

const jsBox5 = {class: '.js-box5',index: 1, row: 'row2'};
addChoice(jsBox5);

const jsBox6 = {class: '.js-box6',index: 2, row: 'row2'};
addChoice(jsBox6);

const jsBox7 = {class: '.js-box7',index: 0, row: 'row3'};
addChoice(jsBox7);

const jsBox8 = {class: '.js-box8',index: 1, row: 'row3'};
addChoice(jsBox8);

const jsBox9 = {class: '.js-box9',index: 2, row: 'row3'};
addChoice(jsBox9);


function addChoice(obj){
    document.querySelector(obj.class).addEventListener('click',()=>{
        if(!checkClick(obj)){
            updateClick(obj);
            
            if(xTurn){
                updateBoard(obj, 'x')
                xTurn = false;
                document.querySelector(obj.class).innerHTML = `<img src="x.png" alt="" class="choice">`;
            }
            else if(!xTurn){
                updateBoard(obj, 'o')
                xTurn = true;
                document.querySelector(obj.class).innerHTML = `<img src="o.png" alt="" class="choice">`;
            }
            
        }
        else if(checkClick(obj)){
            return;
        }
        checkWin(board1, board2, board3);
    });
}

function checkWin(a1, a2, a3){
    // checking across row1 for win
    if(a1[0] == 'x' && a1[1] == 'x' && a1[2] == 'x'){
        setTimeout(() => alert('x win horizontally'), 3);
    }
    else if(a1[0] == 'o' && a1[1] == 'o' && a1[2] == 'o'){
        setTimeout(() => alert('o win horizontally'), 3);
    }

    // checking across row2 for win
    else if(a2[0] == 'x' && a2[1] == 'x' && a2[2] == 'x'){
        setTimeout(() => alert('x win horizontally'), 3);
    }
    else if(a2[0] == 'o' && a2[1] == 'o' && a2[2] == 'o'){
        setTimeout(() => alert('o win horizontally'), 3);
    }

    //checking across row3 for win
    else if(a3[0] == 'x' && a3[1] == 'x' && a3[2] == 'x'){
        setTimeout(() => alert('x win horizontally'), 3);
    }
    else if(a3[0] == 'o' && a3[1] == 'o' && a3[2] == 'o'){
        setTimeout(() => alert('o win horizontally'), 3);
    }

    //checking across column1 for win
    else if(a1[0] == 'x' && a2[0] == 'x' && a3[0] == 'x'){
        setTimeout(() => alert('x win vertically'), 3);
    }
    else if(a1[0] == 'o' && a2[0] == 'o' && a3[0] == 'o'){
        setTimeout(() => alert('o win vertically'), 3);
    }

    //checking across column2 for win
    else if(a1[1] == 'x' && a2[1] == 'x' && a3[1] == 'x'){
        setTimeout(() => alert('x win vertically'), 3);
    }
    else if(a1[1] == 'o' && a2[1] == 'o' && a3[1] == 'o'){
        setTimeout(() => alert('o win vertically'), 3);
    }

    //checking across column3 for win
    else if(a1[2] == 'x' && a2[2] == 'x' && a3[2] == 'x'){
        setTimeout(() => alert('x win vertically'), 3);
    }
    else if(a1[2] == 'o' && a2[2] == 'o' && a3[2] == 'o'){
        setTimeout(() => alert('o win vertically'), 3);
    }

    //checking across diagonal1 for win
    else if(a1[0] == 'x' && a2[1] == 'x' && a3[2] == 'x'){
        setTimeout(() => alert('x win diagonally'), 3);
    }
    else if(a1[0] == 'o' && a2[1] == 'o' && a3[2] == 'o'){
        setTimeout(() => alert('o win diagonally'), 3);
    }

    //checking across diagonal2 for win
    else if(a1[2] == 'x' && a2[1] == 'x' && a3[0] == 'x'){
        setTimeout(() => alert('x win diagonally'), 3);
    }
    else if(a1[2] == 'o' && a2[1] == 'o' && a3[0] == 'o'){
        setTimeout(() => alert('o win diagonally'), 3);
    }
}
function updateClick(obj){
    if(obj.row == 'row1'){
        click1[obj.index] = 1;
    }
    else if(obj.row == 'row2'){
        click2[obj.index] = 1;
    }
    else if(obj.row == 'row3'){
        click3[obj.index] = 1;
    }
}

function checkClick(obj){
    if(obj.row == 'row1'){
        if(click1[obj.index] == 1){
            return 1;
        }
        else{
            return 0;
        }
    }
    else if(obj.row == 'row2'){
        if(click2[obj.index] == 1){
            return 1;
        }
        else{
            return 0;
        }
    }
    else if(obj.row == 'row3'){
        if(click3[obj.index] == 1){
            return 1;
        }
        else{
            return 0;
        }
    }
}

function updateBoard(obj, a){
    if(obj.row == 'row1'){
        board1[obj.index] = a;
    }
    else if(obj.row == 'row2'){
        board2[obj.index] = a;
    }
    else if(obj.row == 'row3'){
        board3[obj.index] = a;
    }
}