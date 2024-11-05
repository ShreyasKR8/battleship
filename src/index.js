import './style.css';
import Player from './modules/player.js';
import Ship from './modules/ship.js';
import { Gameboard, Orientation } from './modules/gameboard.js';
import display from './modules/display.js';

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

document.addEventListener('OnCellClicked', (e) => {
    const row = Number(e.detail.coordinates[0]);
    const col = Number(e.detail.coordinates[1]);
    console.log(row, col)
})