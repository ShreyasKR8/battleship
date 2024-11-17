import './style.css';
import Player from './modules/player.js';
import Ship from './modules/ship.js';
import { Orientation } from './modules/gameboard.js';
import display from './modules/display.js';
import {
    currentPlayer,
    setCurrentPlayer,
    switchTurn,
} from './modules/gameState.js';

setCurrentPlayer('player-one');

/* setup player one gameboard */
const playerOne = new Player('player-one');

const playerOneGameboard = playerOne.gameboard;

playerOneGameboard.placeShip(new Ship(2), [7, 0], Orientation.HORIZONTAL);
playerOneGameboard.placeShip(new Ship(3), [1, 2], Orientation.HORIZONTAL);
playerOneGameboard.placeShip(new Ship(3), [2, 7], Orientation.HORIZONTAL);
playerOneGameboard.placeShip(new Ship(4), [5, 8], Orientation.VERTICAL);
playerOneGameboard.placeShip(new Ship(5), [4, 4], Orientation.VERTICAL);

const playerOneShipPositions = playerOneGameboard.getShipPositions();

display.displayGameboard(undefined, 'player-one', playerOneShipPositions);

/* setup player two gameboard */
const playerTwo = new Player('player-two');

const playerTwoGameboard = playerTwo.gameboard;

playerTwoGameboard.placeShip(new Ship(2), [8, 1], Orientation.HORIZONTAL);
playerTwoGameboard.placeShip(new Ship(3), [2, 1], Orientation.HORIZONTAL);
playerTwoGameboard.placeShip(new Ship(3), [1, 7], Orientation.VERTICAL);
playerTwoGameboard.placeShip(new Ship(4), [6, 7], Orientation.VERTICAL);
playerTwoGameboard.placeShip(new Ship(5), [4, 1], Orientation.HORIZONTAL);

const playerTwoShipPositions = playerTwoGameboard.getShipPositions();

display.displayGameboard(undefined, 'player-two', playerTwoShipPositions);

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
    if(isShipHit) {
        randomCoordinate = playerOneGameboard.getRandomAdjacentCoordinate(hitCoordinates);
    } else {
        randomCoordinate = playerOneGameboard.getRandomCoordinate();
    }

    const mockEvent = {
        detail: {
            coordinates: randomCoordinate,
            gridOwner: 'player-one'
        }
    };
    setTimeout(() => handleCellClicked(mockEvent), 2000);  //delay to simulate "thinking".
}
