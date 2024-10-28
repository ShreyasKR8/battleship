import './style.css';
import Player from './modules/player.js';
import Ship from './modules/ship.js';
import { Gameboard, Orientation } from './modules/gameboard.js';
import display from './modules/display.js';

const humanPlayer = new Player('human');
const computerPlayer = new Player('computer');

const playerGameboard = humanPlayer.gameboard;
const computerGameboard = computerPlayer.gameboard;

display.createGrid(playerGameboard.gameboard[0].length, 'human');
display.createGrid(computerGameboard.gameboard[0].length, 'computer');

playerGameboard.placeShip(new Ship(2), [7, 0], Orientation.HORIZONTAL);
playerGameboard.placeShip(new Ship(3), [1, 2], Orientation.HORIZONTAL);
playerGameboard.placeShip(new Ship(3), [2, 7], Orientation.HORIZONTAL);
playerGameboard.placeShip(new Ship(4), [5, 8], Orientation.VERTICAL);
playerGameboard.placeShip(new Ship(5), [4, 4], Orientation.VERTICAL);

const shipPositions = playerGameboard.getShipPositions();

display.placeShips(shipPositions);