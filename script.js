/*
You’re going to store the gameboard as an array inside of a Gameboard object, so start there! 
Your players are also going to be stored in objects… and you’re probably going to want an object to control the flow of the game itself.
Your main goal here is to have as little global code as possible. 
Try tucking everything away inside of a module or factory. 
Rule of thumb: if you only ever need ONE of something (gameBoard, displayController), use a module. 
If you need multiples of something (players!), create them with factories.
*/


//player factory
const Player = (num, token) => {
    const getName = () => prompt(`what is player ${num}'s name?`);
    //const pickToken = prompt(`pick player ${num}'s token'`);
    return {num, getName, token};
}

const player1 = Player(1, 'X');
const player2 = Player(2, 'O');
let currentPlayer = player1;

const tiles = Array.from(document.querySelectorAll(".cell"));

const gameBoard = (() => {

    let board = [];
    for (i=0; i< 9; i++){
        board.push('');
    }

    tiles.forEach((tile) => {
        tile.addEventListener('click', (e) => {
            if (tile.innerHTML === ''){
                tile.innerHTML = currentPlayer.token;
            } else {
                alert(tile.innerHTML +' has already played in this tile! Try again');
                play.togglePlayer();
            }
            board[tiles.indexOf(e.target)] = tile.innerHTML; 
            win();
            play.togglePlayer();          
        });
    })

    return{
        board
    };
})();

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
    [2, 4, 6]
];

function win(){
    winningConditions.forEach((condition) => {
        if ((board[condition[0]] === 'X' || board[condition[0]] === 'O')&& board[condition[0]] === board[condition[1]] && board[condition[1]] === board[condition[2]]){
            console.log(currentPlayer.token + " wins!");
        }
    })        
}

const play = (() => {


    

    function togglePlayer(){
        if (currentPlayer === player1){
            currentPlayer = player2;
        } else if(currentPlayer === player2){
            currentPlayer = player1;
        }
    
    }

    return{
        win, 
        togglePlayer
    };
})();





















