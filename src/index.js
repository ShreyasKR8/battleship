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

setInterval(isComputersTurn, 1500);

function handleCellClicked(e) {
    const gridOwner = e.detail.gridOwner;
    const hitCoordinates = e.detail.coordinates;

    const isShipHit = attack(playerTwoGameboard, gridOwner, hitCoordinates);

    if(!isShipHit) {
        switchTurn();
    }
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

function isComputersTurn() {
    if (currentPlayer == 'player-two') {
        const randomCoordinate = playerOneGameboard.getRandomCoordinate();
        let isShipHit = attack(playerOneGameboard, 'player-one', randomCoordinate);
        switchTurn();
    }
}
