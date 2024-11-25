import './style.css';
import Player from './modules/player.js';
import Ship from './modules/ship.js';
// import { Orientation } from './modules/gameboard.js';
import display from './modules/display.js';
import {
    currentPlayer,
    setCurrentPlayer,
    switchTurn,
} from './modules/gameState.js';

const startGameBtn = document.querySelector('.start-game-btn');
const leaveGameBtn = document.querySelector('.leave-game-btn');
const randomPlacementButton = document.querySelector('.randomise-btn');
const arrangeShipsBtn = document.querySelector('.arrange-ships-btn');

//initialise the game
const initialisedObjects = initialiseGame();
const playerOneGameboard = initialisedObjects.playerOneGameboard;
const playerTwoGameboard = initialisedObjects.playerTwoGameboard;

setCurrentPlayer('player-one');

function initialisePlayers() {
    const playerOne = new Player('player-one');

    const playerTwo = new Player('player-two');

    return { playerOne, playerTwo };
}

function initialiseGameboards(playerOne, playerTwo) {
    
    /* setup player one gameboard */
    const playerOneGameboard = playerOne.gameboard;
    
    placeShipAtRandomCoordinate(new Ship(2), playerOneGameboard);
    placeShipAtRandomCoordinate(new Ship(3), playerOneGameboard);
    placeShipAtRandomCoordinate(new Ship(3), playerOneGameboard);
    placeShipAtRandomCoordinate(new Ship(4), playerOneGameboard);
    placeShipAtRandomCoordinate(new Ship(5), playerOneGameboard);

    /* setup player two gameboard */
    const playerTwoGameboard = playerTwo.gameboard;

    placeShipAtRandomCoordinate(new Ship(2), playerTwoGameboard);
    placeShipAtRandomCoordinate(new Ship(3), playerTwoGameboard);
    placeShipAtRandomCoordinate(new Ship(3), playerTwoGameboard);
    placeShipAtRandomCoordinate(new Ship(4), playerTwoGameboard);
    placeShipAtRandomCoordinate(new Ship(5), playerTwoGameboard);

    return { playerOneGameboard, playerTwoGameboard };
}

function initialiseGame() {
    const { playerOne, playerTwo } = initialisePlayers();
    const { playerOneGameboard, playerTwoGameboard } = initialiseGameboards(playerOne, playerTwo);

    /* display player one gameboard */
    const playerOneShipPositions = playerOneGameboard.getShipPositions();
    
    display.displayGameboard(undefined, 'player-one');
    display.displayShipsOnGameboard(playerOneShipPositions, 'player-one');
    
    /* display player two gameboard */
    const playerTwoShipPositions = playerTwoGameboard.getShipPositions();
    
    display.displayGameboard(undefined, 'player-two');
    display.displayShipsOnGameboard(playerTwoShipPositions, 'player-two');

    display.toggleCellBlockers();
    
    return { playerOne, playerTwo, playerOneGameboard, playerTwoGameboard };
}

function reInitialiseGame() {
    display.clearGameboards();

    playerOneGameboard.clearGameboard();

    playerTwoGameboard.clearGameboard();

    initialiseGame();

}

document.addEventListener('OnCellClicked', handleCellClicked); //received from UI on click

function handleCellClicked(e) {
    const gridOwner = e.detail.gridOwner;
    const hitCoordinates = e.detail.coordinates;
    const playerGameboard = gridOwner === 'player-one' ? playerOneGameboard : playerTwoGameboard;
    const isShipHit = attack(playerGameboard, gridOwner, hitCoordinates);

    if(playerGameboard.areAllShipsSunk()) {
        const Winner = gridOwner === 'player-one' ? 'Player Two' : 'Player One';
        display.handleGameOver(Winner);
        return;
    }

    if(!isShipHit) {
        display.toggleGridBlockers();
        switchTurn();
        display.showPlayerTurn();
    }

    isComputersTurn(isShipHit, hitCoordinates);
}

function attack(playerGameboard, gridOwner, coordinates) {
    const [rowNumber, colNumber] = coordinates;
    const { adjacentCells, isShipHit } = playerGameboard.receiveAttack(coordinates);
    markCellsInUI(rowNumber, colNumber, gridOwner, playerGameboard, adjacentCells);
    return isShipHit;
}

function markCellsInUI(rowNumber, colNumber, gridOwner, playerGameboard, adjacentCells) {
    display.markCell(
        [rowNumber, colNumber],
        gridOwner,
        playerGameboard.gameboard[rowNumber][colNumber]
    );
    if (adjacentCells) {
        adjacentCells.forEach((cell) => {
            const [rowNumber, colNumber] = cell.split(',');
            display.markCell([rowNumber, colNumber], gridOwner, playerGameboard.gameboard[rowNumber][colNumber]);
        });
    }
}

function isComputersTurn(isShipHit, hitCoordinates) {
    if (currentPlayer == 'player-two') {
        playComputersTurn(isShipHit, hitCoordinates);
    }
}

function playComputersTurn(isShipHit, hitCoordinates) {
    let randomCoordinate = [];
    if (isShipHit) {
        randomCoordinate =
            playerOneGameboard.getRandomAdjacentCoordinate(hitCoordinates);
    } else {
        randomCoordinate = playerOneGameboard.getRandomCoordinate();
    }

    const mockEvent = {
        detail: {
            coordinates: randomCoordinate,
            gridOwner: 'player-one',
        },
    };
    setTimeout(() => {
        handleCellClicked(mockEvent);
        display.highlightAttackedCell(randomCoordinate, 'player-one');
    }, 2000); //delay to simulate "thinking".
}

function placeShipAtRandomCoordinate(ship, playerGameboard) {
    let { randomCoordinate, randomOrientation } = playerGameboard.getRandomCoordinateForShip(ship.size);
    playerGameboard.placeShip(ship, randomCoordinate, randomOrientation);
}

startGameBtn.addEventListener('click', () => {
    display.toggleCellBlockers();
    display.enableGridBlocker('player-one-gameboard');
    display.disableGridBlocker('player-two-gameboard');

    display.showPlayerTurn('player-one');

    startGameBtn.disabled = true;
    randomPlacementButton.disabled = true;
    leaveGameBtn.disabled = false;
    arrangeShipsBtn.disabled = true;
});

leaveGameBtn.addEventListener('click', () => {
    startGameBtn.disabled = false;
    leaveGameBtn.disabled = true;
    randomPlacementButton.disabled = false;
    arrangeShipsBtn.disabled = false;

    display.hidePlayerInstructions();

    reInitialiseGame();
})

randomPlacementButton.addEventListener('click', () => {

    playerOneGameboard.clearGameboard();

    placeShipAtRandomCoordinate(new Ship(2), playerOneGameboard);
    placeShipAtRandomCoordinate(new Ship(3), playerOneGameboard);
    placeShipAtRandomCoordinate(new Ship(3), playerOneGameboard);
    placeShipAtRandomCoordinate(new Ship(4), playerOneGameboard);
    placeShipAtRandomCoordinate(new Ship(5), playerOneGameboard);

    const shipPositions = playerOneGameboard.getShipPositions();

    display.updateShipsOnGameboard(shipPositions, 'player-one');
});
