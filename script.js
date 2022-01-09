/*
You’re going to store the gameboard as an array inside of a Gameboard object, so start there! 
Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself.
Your main goal here is to have as little global code as possible. 
Try tucking everything away inside of a module or factory. 
Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
If you need multiples of something (players!), create them with factories.
*/

//const tiles = Array.from(document.querySelectorAll(".cell"));

const btn = document.querySelector('button');
const input = document.querySelector('input');


let board = ['','','','','','','','',''];


function Player(token){
    this.token = token;
}

let player1 = new Player('X');
let player2 = new Player('O');
let currentPlayer = player1;

function togglePlayer(){
    if (currentPlayer === player1){
        currentPlayer = player2;
    } else if(currentPlayer === player2){
        currentPlayer = player1;
    }

}


const winningConditions = [
    //row
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],

    //column
    [0, 3, 6],
    [1, 4, 7], 
    [2, 5, 8], 

    //criss-cross
    [0, 4, 8],
    [2, 4, 6],
]


function play() {

    btn.addEventListener('click', (e) => {
        board[input.value] = currentPlayer.token;
        console.table(board);
        e.preventDefault();
        //xSequence's last entry as 
        // console.log(input.value);
        // xSequence.push(input.value);
        // xSequence.sort();

        // console.log(xSequence);
        input.value = ''; 

        win();
        togglePlayer();
        
    });





}

function win(){

    winningConditions.forEach((condition) => {
        if ((board[condition[0]] === 'X' || board[condition[0]] === 'O')&& board[condition[0]] === board[condition[1]] && board[condition[1]] === board[condition[2]]){
            console.log("you win!");
        }

    })

    
        
}



/*
if x's are aligned in a way that falls within winningConditions, the player wins

use indexOf
- indexOf(searchElement, fromIndex)
*/


play();





