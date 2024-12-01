import { reInitialiseGame, changeCtrlBtnsState, playerOneGameboard } from '../index.js'
import Ship from './ship.js';
// console.log(reInitialiseGame());

const playerTwoInstructions = document.querySelectorAll(`.player-two-instruction`);
const playerOneInstructions = document.querySelectorAll(`.player-one-instruction`);

const playerOneGrid = document.querySelector(`.player-one-gameboard`);
const playerTwoGrid = document.querySelector(`.player-two-gameboard`);

const gameCtrlButtonSection = document.querySelector('.game-ctrl-section');

const playerOneGridCells = Array.from({ length: 10 }, () => Array(10).fill(null));
let lastChosenCells = [];

const Orientation = Object.freeze({
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
});

let selectedOrientation = 'horizontal';

let shipSizes = [5, 4, 3, 3, 2];

function displayGameboard(size = 10, gridOwner) {
    createGrid(size, gridOwner);
}

function clearAllGameboards() {
    while (playerOneGrid.firstChild) {
        playerOneGrid.removeChild(playerOneGrid.lastChild);
    }

    while (playerTwoGrid.firstChild) {
        playerTwoGrid.removeChild(playerTwoGrid.lastChild);
    }
}

function clearGameboardContent(gridOwner) {
    const cells = document.querySelectorAll(`[data-owner="${gridOwner}"] .cell`);
    cells.forEach(cell => {
        cell.textContent = '';
    });
}

function createGrid(size, gridOwner) {
    let grid = null;
    if (gridOwner == 'player-one') {
        grid = document.querySelector('.player-one-gameboard');
    } else {
        grid = document.querySelector('.player-two-gameboard');
    }

    if (!grid) {
        return;
    }

    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add(`cell`);
            gridCell.setAttribute('data-row', row);
            gridCell.setAttribute('data-col', col);
            grid.appendChild(gridCell);
            grid.setAttribute('data-owner', gridOwner);
            if (gridOwner == 'player-two') {
                gridCell.style.contentVisibility = 'hidden';
                setUpEventListener(gridCell);
            }
        }
    }
}

function updateShipsOnGameboard(shipPositions, gridOwner) {
    const cells = document.querySelectorAll(`[data-owner="${gridOwner}"] .cell`);
    cells.forEach(cell => {
        cell.textContent = '';
    });
    displayShipsOnGameboard(shipPositions, gridOwner);
}

function displayShipsOnGameboard(shipPositions, gridOwner) {
    shipPositions.forEach((position) => {
        const [row, col] = position.split(',');
        document.querySelector(
            `[data-owner="${gridOwner}"] .cell[data-row="${row}"][data-col="${col}"]`
        ).textContent = 's';
    });
}

function toggleGridBlockers() {
    playerOneGrid.classList.toggle('grid-blocker');
    playerTwoGrid.classList.toggle('grid-blocker');
}

function enableGridBlocker(grid) {
    const playerGrid = grid === 'player-one-gameboard' ? playerOneGrid : playerTwoGrid;
    playerGrid.classList.add('grid-blocker');
}

function disableGridBlocker(grid) {
    const playerGrid = grid === 'player-one-gameboard' ? playerOneGrid : playerTwoGrid;
    playerGrid.classList.remove('grid-blocker');
}

function toggleCellBlockers() {
    const cells = playerTwoGrid.childNodes;
    cells.forEach(cell => {
        cell.classList.toggle('blocker');
    });
}

function showPlayerTurn(player = '') {
    if(player !== '') {
        playerOneInstructions.forEach(playerOneInstruction => {
            playerOneInstruction.classList.remove('hidden');
        });
        return;
    }

    playerOneInstructions.forEach(playerOneInstruction => {
        playerOneInstruction.classList.toggle('hidden');
    });
    
    playerTwoInstructions.forEach(playerTwoInstruction => {
        playerTwoInstruction.classList.toggle('hidden');
    });
}

function hidePlayerInstructions() {
    playerOneInstructions.forEach(playerOneInstruction => {
        playerOneInstruction.classList.add('hidden');
    });

    playerTwoInstructions.forEach(playerTwoInstruction => {
        playerTwoInstruction.classList.add('hidden');
    });
}

function markCell(coordinates, gridOwner, markContent) {
    const [row, col] = coordinates;
    const cell = document.querySelector(
        `[data-owner="${gridOwner}"] .cell[data-row="${row}"][data-col="${col}"]`
    );

    cell.textContent = markContent;

    if (markContent == 'X') {
        cell.style.color = 'red';
        cell.style.fontSize = '32px';
    } else {
        cell.style.fontSize = '12px';
    }

    cell.style.contentVisibility = 'visible';

    cell.removeEventListener('click', handleCellClick);
}

function setUpEventListener(cell) {
    cell.addEventListener('click', handleCellClick);
}

function handleCellClick(e) {
    const cell = e.currentTarget;
    const coordinates = [
        Number(cell.getAttribute('data-row')),
        Number(cell.getAttribute('data-col')),
    ];
    const gridOwner = cell.parentElement.getAttribute('data-owner');
    highlightAttackedCell(coordinates, gridOwner);
    sendEventOnCellClicked(coordinates, gridOwner);
}

function sendEventOnCellClicked(coordinates, gridOwner) {
    const eventOnCellClicked = new CustomEvent('OnCellClicked', {
        detail: { coordinates, gridOwner },
    });
    document.dispatchEvent(eventOnCellClicked);
}

function handleGameOver(winner) {
    const remainingCells = document.querySelectorAll('.cell');
    remainingCells.forEach(cell => {
        cell.removeEventListener('click', handleCellClick);
    })

    const winnerResults = document.querySelector('.winner-results');
    winnerResults.textContent = `${winner} Won!`;
}

function highlightAttackedCell(hitCoordinate, gridOwner) {
    const [row, col] = hitCoordinate;
    document.querySelector(
        `[data-owner="${gridOwner}"] .cell[data-row="${row}"][data-col="${col}"]`
    ).style.border = '3px solid blue';
    setTimeout(() => {
        document.querySelector(
            `[data-owner="${gridOwner}"] .cell[data-row="${row}"][data-col="${col}"]`
        ).style.border = '1px solid #7b7b7b';
    }, 1500);
}

function clearResults() {
    const winnerResults = document.querySelector('.winner-results');
    winnerResults.textContent = '';
}

function initialisePlacingShips(playerGameboard, gridOwner) {
    lastChosenCells = [];
    shipSizes = [5, 4, 3, 3, 2];
    const gridCells = document.querySelectorAll(`[data-owner="${gridOwner}"] .cell`);
    gridCells.forEach(cell => {
        const row = parseInt(cell.getAttribute('data-row'), 10);
        const col = parseInt(cell.getAttribute('data-col'), 10);
        playerOneGridCells[row][col] = cell;
        cell.removeEventListener('click', handleCellClick);
        cell.addEventListener('click', handlePlaceShip);
        cell.addEventListener('mouseover', showShipPlacement);
    });
    playerGameboard.clearGameboard();
    clearGameboardContent('player-one');

    //add confirm and cancel buttons
    const confirmBtn = document.createElement('button');
    confirmBtn.innerHTML = 'Confirm';
    confirmBtn.classList.add('game-ctrl-btn');
    confirmBtn.classList.add('confirm-placement-btn');
    confirmBtn.setAttribute('title', 'Confirm ship positions');
    confirmBtn.addEventListener('click', confirmShipsPlacement);
    confirmBtn.disabled = true;
    
    const cancelBtn = document.createElement('button');
    cancelBtn.innerHTML = 'Cancel';
    cancelBtn.classList.add('game-ctrl-btn');
    cancelBtn.classList.add('cancel-placement-btn');
    cancelBtn.setAttribute('title', 'Cancel placing ships');
    cancelBtn.addEventListener('click', cancelShipsPlacement);

    const placementBtnsDiv = document.createElement('div');
    placementBtnsDiv.classList.add('placement-ctrl-btns');

    placementBtnsDiv.appendChild(confirmBtn);
    placementBtnsDiv.appendChild(cancelBtn);

    gameCtrlButtonSection.appendChild(placementBtnsDiv);

    document.addEventListener('keydown', handleKeyPress);
}

function handleKeyPress(e) {
    if (e.key === 'q') {
        switchShipOrientation();
    }
}

function switchShipOrientation() {
    selectedOrientation =
        selectedOrientation === Orientation.HORIZONTAL
            ? Orientation.VERTICAL
            : Orientation.HORIZONTAL;
}

function confirmShipsPlacement(e) {
    const confirmBtn = e.currentTarget;
    gameCtrlButtonSection.removeChild(confirmBtn.parentElement);
    changeCtrlBtnsState();
    document.removeEventListener('keydown', handleKeyPress);

    const gridCells = document.querySelectorAll(`[data-owner="player-one"] .cell`);
    gridCells.forEach(cell => {
        // cell.addEventListener('click', handleCellClick);
        cell.removeEventListener('click', handlePlaceShip);
        cell.removeEventListener('mouseover', showShipPlacement);
    });
}

function cancelShipsPlacement(e) {
    const cancelBtn = e.currentTarget;
    reInitialiseGame();
    gameCtrlButtonSection.removeChild(cancelBtn.parentElement); //remove placementBtnsDiv
}

function handlePlaceShip(e) {
    const chosenCell = e.currentTarget;
    let [coordinateX, coordinateY] = [
        Number(chosenCell.getAttribute('data-row')),
        Number(chosenCell.getAttribute('data-col')),
    ];

    const currentShipSize = shipSizes[0];
    if(!playerOneGameboard.isValidPosition(currentShipSize, [coordinateX, coordinateY], selectedOrientation)) {
        return;
    
    }
    shipSizes.shift();

    if(shipSizes.length === 0) {
        const confirmBtn = document.querySelector('.confirm-placement-btn');
        confirmBtn.disabled = false;
    }

    console.log('placeShip');

    const shipCells = playerOneGameboard.placeShip(new Ship(currentShipSize), [coordinateX, coordinateY], selectedOrientation);
    displayShipsOnGameboard(shipCells, 'player-one');
}

function showShipPlacement(e) {
    const cell = e.currentTarget;
    let [coordinateX, coordinateY] = [
        Number(cell.getAttribute('data-row')),
        Number(cell.getAttribute('data-col')),
    ];

    lastChosenCells.forEach(cell => {
        cell.style.backgroundColor = 'white';
    });

    const currentShipSize = shipSizes[0];
    if(!playerOneGameboard.isValidPosition(currentShipSize, [coordinateX, coordinateY], selectedOrientation)) {
        cell.style.backgroundColor = 'rgba(255, 0, 0, 0.5)';
        lastChosenCells.push(cell);
        return;
    }

    for(let i = 0; i < currentShipSize; i++) {
        if(selectedOrientation == Orientation.HORIZONTAL) {
            let dY = coordinateY + i;
            let chosenCell = playerOneGridCells[coordinateX][dY];
            chosenCell.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
            lastChosenCells.push(chosenCell);
        } else {
            let dX = coordinateX + i;
            let chosenCell = playerOneGridCells[dX][coordinateY];
            chosenCell.style.backgroundColor = 'rgba(0, 255, 0, 0.5)';
            lastChosenCells.push(chosenCell);
        }
    }
}

export default{
    displayGameboard,
    markCell,
    toggleGridBlockers,
    disableGridBlocker,
    enableGridBlocker,
    toggleCellBlockers,
    showPlayerTurn,
    hidePlayerInstructions,
    handleGameOver,
    displayShipsOnGameboard,
    updateShipsOnGameboard,
    clearAllGameboards,
    highlightAttackedCell,
    clearResults,
    initialisePlacingShips,
};
