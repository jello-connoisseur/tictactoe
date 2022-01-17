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
            play.win();
            play.togglePlayer();          
        });
    })

    const btn = document.querySelector('button');
    btn.addEventListener("click", () => {
        play.winner.innerHTML = '';
        tiles.forEach((tile) => {
            tile.innerHTML = "";
        })
    })

    return{
        board
    };
})();



const play = (() => {
    const winner = document.getElementById('winning-message-text');

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7], 
        [2, 5, 8], 
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    function win(){
        winningConditions.forEach((condition) => {
            if ((gameBoard.board[condition[0]] === 'X'|| gameBoard.board[condition[0]] === 'O')&& gameBoard.board[condition[0]] === gameBoard.board[condition[1]] && gameBoard.board[condition[1]] === gameBoard.board[condition[2]] ){
                winner.innerHTML = currentPlayer.token + " wins!";
            }
        })        
    }
    

    function togglePlayer(){
        if (currentPlayer === player1){
            currentPlayer = player2;
        } else if(currentPlayer === player2){
            currentPlayer = player1;
        }
    
    }

    return{
        winningConditions,
        win, 
        winner,
        togglePlayer
    };
})();





















