function createGrid(size, gridOwner) {
    const grid =
        gridOwner == 'human'
            ? document.querySelector('.human-gameboard')
            : document.querySelector('.computer-gameboard');
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            const gridCell = document.createElement('div');
            gridCell.classList.add(`cell`);
            // gridCell.classList.add(`cell-[${row}][${col}]`);
            gridCell.setAttribute('data-row', row);
            gridCell.setAttribute('data-col', col);
            grid.appendChild(gridCell);
        }
    }
}

function placeShips(shipPositions) {
    shipPositions.forEach(position => {
        const [row, col] = position.split(',');
        document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`).textContent = 's';
    })
}

export default {
    createGrid,
    placeShips,
};
