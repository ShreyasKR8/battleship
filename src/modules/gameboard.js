const Orientation = Object.freeze({
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
});

class Gameboard {
    #ROW_SIZE = 10;
    #COL_SIZE = 10;
    #adjacentCellDeltas = [
        [-1, -1],
        [-1, 0],
        [-1, 1],
        [0, -1],
        [0, 1],
        [1, -1],
        [1, 0],
        [1, 1],
    ];
    #reservedPositions = new Set();
    #shipPositions = new Set();
    constructor() {
        this.gameboard = new Array(this.#ROW_SIZE)
            .fill(null)
            .map(() => new Array(this.#COL_SIZE).fill(null));
        this.ships = [];
    }

    getAdjacentCells(position) {
        let [currentX, currentY] = position;
        const adjacentCells = [];
        this.#adjacentCellDeltas.forEach((cellCoordinates) => {
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
        if (
            this.#reservedPositions.has(position.toString()) ||
            this.#shipPositions.has(position.toString())
        ) {
            return false;
        }

        let [rowNumber, colNumber] = position;
        let shipLength = ship.size;

        if (
            orientation == Orientation.HORIZONTAL &&
            colNumber + shipLength > this.#ROW_SIZE
        ) {
            return false;
        } else if (
            orientation == Orientation.VERTICAL &&
            rowNumber + shipLength > this.#COL_SIZE
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
        let shipLength = ship.size;

        if (orientation == Orientation.HORIZONTAL) {
            for (let i = 0; i < shipLength; i++) {
                this.gameboard[rowNumber][colNumber] = ship;
                this.#shipPositions.add([rowNumber, colNumber].toString());
                let adjacentCells = this.getAdjacentCells([
                    rowNumber,
                    colNumber,
                ]);
                adjacentCells.forEach((cell) => {
                    this.#reservedPositions.add(cell.toString());
                });
                colNumber++;
            }
            this.ships.push(ship);
        } else if (orientation == Orientation.VERTICAL) {
            for (let i = 0; i < shipLength; i++) {
                this.gameboard[rowNumber][colNumber] = ship;
                this.#shipPositions.add([rowNumber, colNumber].toString());
                let adjacentCells = this.getAdjacentCells([
                    rowNumber,
                    colNumber,
                ]);
                adjacentCells.forEach((cell) => {
                    this.#reservedPositions.add(cell.toString());
                });
                rowNumber++;
            }
            this.ships.push(ship);
        } else {
            return null; //invalid orientation
        }
        return this.gameboard;
    }

    receiveAttack(hitCoordinate) {
        let [hitCoordinateX, hitCoordinateY] = hitCoordinate;
        let target = this.gameboard[hitCoordinateX][hitCoordinateY];
        if (!target) {
            this.gameboard[hitCoordinateX][hitCoordinateY] = 'O';
            return;
        }
        target.hit();
        if(target.isSunk()) {
            
        }
        this.gameboard[hitCoordinateX][hitCoordinateY] = 'X';
        if(this.areAllShipsSunk()) {
            //gameover, announce winner
            console.log("Gameover")
        }
    }

    areAllShipsSunk() {
        return this.ships.every(ship => ship.isSunkStatus);
    }

    getShipPositions() {
        return this.#shipPositions;
    }
}

export { Gameboard, Orientation };
