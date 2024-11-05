function displayGameboard(size = 10, gridOwner, shipPositions) {
    createGrid(size, gridOwner);
    placeShips(shipPositions, gridOwner);
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
                // gridCell.style.contentVisibility = 'hidden';
            }
            setUpEventListener(gridCell);
        }
    }
}

function placeShips(shipPositions, gridOwner) {
    shipPositions.forEach((position) => {
        const [row, col] = position.split(',');
        document.querySelector(
            `[data-owner="${gridOwner}"] .cell[data-row="${row}"][data-col="${col}"]`
        ).textContent = 's';
    });
}

function setUpEventListener(cell) {
    cell.addEventListener('click', () => {
        const coordinates = [
            cell.getAttribute('data-row'),
            cell.getAttribute('data-col'),
        ];
        sendEventOnCellClicked(coordinates);
    });
}

function sendEventOnCellClicked(coordinates) {
    const eventOnCellClicked = new CustomEvent('OnCellClicked', { detail: { coordinates } });
    document.dispatchEvent(eventOnCellClicked);
}

export default {
    displayGameboard,
};
