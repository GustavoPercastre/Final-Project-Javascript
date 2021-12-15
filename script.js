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




