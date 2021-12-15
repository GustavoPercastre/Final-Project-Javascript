const statusDisplay = document.querySelector('.game--status');
// This will keep track of who's turn it is.

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
// Game active will store the current player to keep track of who's turn it is. Current player will will store the current game state. And game state will store the messages for the game. 

const winningMessage = () => `Player ${currentPlayer} has won!`;
const drawMessage = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
// These messages will go into the game status h2.

statusDisplay.innerHTML = currentPlayerTurn();
// This will display the current turn.

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
// These are the win conditions in tic tac toe.

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerHTML = currentPlayer;
}
// This would allow the player to click on the cells and match with the current player.




