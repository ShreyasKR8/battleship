const Orientation = Object.freeze({
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
});

const ROW_SIZE = 10;
const COL_SIZE = 10;

const adjacentCellDeltas = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1],
];

class Gameboard {
    #reservedPositions = new Set();
    constructor() {
        this.gameboard = new Array(ROW_SIZE)
            .fill(0)
            .map(() => new Array(COL_SIZE).fill(0));
    }

    getAdjacentCells(position) {
        let [currentX, currentY] = position;
        const adjacentCells = [];
        adjacentCellDeltas.forEach((cellCoordinates) => {
            let [adjacentDeltaX, adjacentDeltaY] = cellCoordinates;
            let adjacentX = currentX + adjacentDeltaX;
            let adjacentY = currentY + adjacentDeltaY;
            if (
                adjacentX >= 0 &&
                adjacentX <= 9 &&
                adjacentY >= 0 &&
                adjacentY <= 9
            ) {
                let adjacentCellsCoordinate = [adjacentX, adjacentY];
                adjacentCells.push(adjacentCellsCoordinate);
            }
        });

        return adjacentCells;
    }

    isValidPosition(ship, position, orientation) {
        if (this.#reservedPositions.has(position.toString())) {
            return false;
        }

        let [rowNumber, colNumber] = position;
        let shipLength = ship.getShipLength();

        if (
            orientation == Orientation.HORIZONTAL &&
            colNumber + shipLength > ROW_SIZE
        ) {
            return false;
        } else if (
            orientation == Orientation.VERTICAL &&
            rowNumber + shipLength > COL_SIZE
        ) {
            return false;
        }

        return true;
    }

    placeShip(ship, position, orientation) {
        if (!this.isValidPosition(ship, position, orientation)) {
            return null;
        }

        let [rowNumber, colNumber] = position;
        let shipLength = ship.getShipLength();

        if (orientation == Orientation.HORIZONTAL) {
            while (shipLength--) {
                this.gameboard[rowNumber][colNumber] = 1;
                this.#reservedPositions.add([rowNumber, colNumber].toString());
                let adjacentCells = this.getAdjacentCells([
                    rowNumber,
                    colNumber,
                ]);
                adjacentCells.forEach((cell) => {
                    this.#reservedPositions.add(cell.toString());
                });
                colNumber++;
            }
        } else if (orientation == Orientation.VERTICAL) {
            while (shipLength--) {
                this.gameboard[rowNumber][colNumber] = 1;
                this.#reservedPositions.add([rowNumber, colNumber].toString());
                let adjacentCells = this.getAdjacentCells([
                    rowNumber,
                    colNumber,
                ]);
                adjacentCells.forEach((cell) => {
                    this.#reservedPositions.add(cell.toString());
                });
                rowNumber++;
            }
        } else {
            return null; //invalid orientation
        }
        return this.gameboard;
    }
}

export { Gameboard, Orientation };
