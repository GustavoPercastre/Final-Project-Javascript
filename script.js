const statusDisplay = document.querySelector('.game--status');
// This will keep track of who's turn it is.

const statusScoreX = document.querySelector('#scoreboard-x');
const statusScoreO = document.querySelector('#scoreboard-o');
//These will allow for the scoreboard to keep count of the x and o scores

let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
// Game active will store the current player to keep track of who's turn it is. Current player will will store the current game state. And game state will store the messages for the game. 

let playerX = 0;
let playerO = 0;
// These will allow for the scores to start at zero.

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

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
// This will let the game change between X and O.

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break
        }
    }

    if (roundWon) {
        if (currentPlayer == 'X') {
            playerX++;
        }
        else {
            playerO++;
        } // These will allow the scores to go up by one.
        statusDisplay.innerHTML = winningMessage();
        statusScoreO.innerHTML = playerO;
        statusScoreX.innerHTML = playerX; // This will connect to the scoreboard and let the numbers go up when someone wins.
        gameActive = false;
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        statusDisplay.innerHTML = drawMessage();
        gameActive = false;
        return;
    }

    handlePlayerChange();
}
// This would allow for people to actually play the game and either return if a player one, lost, or draw.

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}
// This will make sure that a person cant click on a cell that another person has clicked on already.

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll('.cell').forEach(cell => cell.innerHTML = "");
}
// This would allow for the restart button to clear all the cells once clicked.

document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
// This is so when you actually click on the blocks on the webpage the X and O will appear.

document.querySelector('#button-play-again').addEventListener('click', handleRestartGame);
// This will make so when you click the the Play Again Button it will reset the board.

