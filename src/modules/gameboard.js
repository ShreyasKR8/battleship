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
    #relevantAdjacentCellDeltas = [ //only horizontal and vertical adjacent cell deltas
        [-1, 0],
        [0, -1],
        [0, 1],
        [1, 0],
    ];
    #reservedPositions = new Set();
    #shipPositions = new Set();
    #shipToAdjacentCellsMap = new Map(); //map of ship object to adjacentCellsOfShip set()
    constructor() {
        this.gameboard = new Array(this.#ROW_SIZE)
            .fill(null)
            .map(() => new Array(this.#COL_SIZE).fill(null));
        this.ships = [];
    }

    getAdjacentCells(position, adjacentDeltas) {
        let [currentX, currentY] = position;
        const adjacentCells = [];
        adjacentDeltas.forEach((cellCoordinates) => {
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
        let allAdjacentCellsOfShip = new Set();

        if (orientation == Orientation.HORIZONTAL) {
            for (let i = 0; i < shipLength; i++) {
                this.gameboard[rowNumber][colNumber] = ship;
                this.#shipPositions.add([rowNumber, colNumber].toString());
                let adjacentCells = this.getAdjacentCells([
                    rowNumber,
                    colNumber,
                ], this.#adjacentCellDeltas);
                adjacentCells.forEach((cell) => {
                    this.#reservedPositions.add(cell.toString());
                    allAdjacentCellsOfShip.add(cell.toString());
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
                ], this.#adjacentCellDeltas);
                adjacentCells.forEach((cell) => {
                    this.#reservedPositions.add(cell.toString());
                    allAdjacentCellsOfShip.add(cell.toString());
                });
                rowNumber++;
            }
            this.ships.push(ship);
        } else {
            return null; //invalid orientation
        }

        //remove all cells that have ships
        allAdjacentCellsOfShip.forEach((cell) => {
            const [row, col] = cell.split(',');
            if (this.gameboard[row][col] !== null) {
                allAdjacentCellsOfShip.delete(cell);
            }
        });

        this.#shipToAdjacentCellsMap.set(ship, allAdjacentCellsOfShip);
        return this.gameboard;
    }

    receiveAttack(hitCoordinate) {
        let [hitCoordinateX, hitCoordinateY] = hitCoordinate;
        let target = this.gameboard[hitCoordinateX][hitCoordinateY];
        if (target == null) {
            this.gameboard[hitCoordinateX][hitCoordinateY] = 'O';
            return { adjacentCells : null, isShipHit : false };
        }
        target.hit();
        this.gameboard[hitCoordinateX][hitCoordinateY] = 'X';
        if (this.areAllShipsSunk()) {
            //gameover, announce winner
            console.log('Gameover');
        }
        if (target.isSunk()) {
            const adjacentCellsSet = this.#shipToAdjacentCellsMap.get(target);
            adjacentCellsSet.forEach((cell) => {
                const [row, col] = cell.split(',');
                this.gameboard[row][col] = 'O';
            });
            return { adjacentCells : adjacentCellsSet, isShipHit : true };
        }
        return { adjacentCells : null, isShipHit : true };
    }

    areAllShipsSunk() {
        return this.ships.every((ship) => ship.isSunkStatus);
    }

    getShipPositions() {
        return this.#shipPositions;
    }

    getRandomCoordinate() {
        let randomRowNumber = Math.floor(Math.random() * (this.#ROW_SIZE - 1));
        let randomColNumber = Math.floor(Math.random() * (this.#COL_SIZE - 1));
        let randomCoordinate = [randomRowNumber, randomColNumber];
        if (
            this.gameboard[randomRowNumber][randomColNumber] === 'X' ||
            this.gameboard[randomRowNumber][randomColNumber] === 'O'
        ) {
            return this.getRandomCoordinate();
        }
        return randomCoordinate;
    }

    getRandomAdjacentCoordinate(hitCoordinate) {
        const allAdjacentCoordinates = this.getRelevantAdjacentCoordinates(hitCoordinate);
        if(!allAdjacentCoordinates || allAdjacentCoordinates.length === 0) {
            return this.getRandomCoordinate();
        }
        const randomIndex = Math.floor(Math.random() * (allAdjacentCoordinates.length - 1));
        const randomAdjacentCoordinate = allAdjacentCoordinates[randomIndex];
        return randomAdjacentCoordinate;
    }

    getRelevantAdjacentCoordinates(hitCoordinate) {
        const allAdjacentCoordinates = this.getAdjacentCells(hitCoordinate, this.#relevantAdjacentCellDeltas);
        const relevantAdjacentCoordinates = allAdjacentCoordinates.filter((coordinate) => this.gameboard[coordinate[0]][coordinate[1]] !== 'X' && this.gameboard[coordinate[0]][coordinate[1]] !== 'O')
        return relevantAdjacentCoordinates;
    }
}

export { Gameboard, Orientation };
