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
    #relevantAdjacentCellDeltas = [
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
        this.availableCells = this.initializeAvailableCoordinates();
        this.ships = [];
    }

    initializeAvailableCoordinates() {
        const cells = [];
        for (let rowNum = 0; rowNum < this.#ROW_SIZE; rowNum++) {
            for (let colNum = 0; colNum < this.#COL_SIZE; colNum++) {
                cells.push([rowNum, colNum]);
            }
        }
        return cells;
    }

    clearGameboard() {
        this.gameboard = this.gameboard.map((row) => row.fill(null));
        this.#reservedPositions.clear();
        this.#shipPositions.clear();
        this.#shipToAdjacentCellsMap.clear();
        // this.ships.clear();
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

    isValidPosition(shipLength, position, orientation) {
        let [rowNumber, colNumber] = position;

        //check if position is already filled or is adjacent position of filled cell.
        for (let i = 0; i < shipLength; i++) {
            if (orientation == Orientation.HORIZONTAL) {
                let dPosition = [rowNumber, colNumber + i];
                if (
                    this.#reservedPositions.has(dPosition.toString()) ||
                    this.#shipPositions.has(dPosition.toString())
                ) {
                    return false;
                }
            } else {
                let dPosition = [rowNumber + i, colNumber];
                if (
                    this.#reservedPositions.has(dPosition.toString()) ||
                    this.#shipPositions.has(dPosition.toString())
                ) {
                    return false;
                }
            }
        }

        //check if its length can go out of bounds;
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
        if (!this.isValidPosition(ship.size, position, orientation)) {
            // console.log(this.gameboard);
            return null;
        }

        let [rowNumber, colNumber] = position;
        let shipLength = ship.size;
        let allAdjacentCellsOfShip = new Set();

        if (orientation == Orientation.HORIZONTAL) {
            for (let i = 0; i < shipLength; i++) {
                this.gameboard[rowNumber][colNumber] = ship;
                this.#shipPositions.add([rowNumber, colNumber].toString());
                let adjacentCells = this.getAdjacentCells(
                    [rowNumber, colNumber],
                    this.#adjacentCellDeltas
                );
                adjacentCells.forEach((cell) => {
                    this.#reservedPositions.add(cell.toString());
                    allAdjacentCellsOfShip.add(cell.toString());
                });
                colNumber++;
            }
            console.log(ship)
            this.ships.push(ship);
        } else if (orientation == Orientation.VERTICAL) {
            for (let i = 0; i < shipLength; i++) {
                this.gameboard[rowNumber][colNumber] = ship;
                this.#shipPositions.add([rowNumber, colNumber].toString());
                let adjacentCells = this.getAdjacentCells(
                    [rowNumber, colNumber],
                    this.#adjacentCellDeltas
                );
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
        // console.log(hitCoordinate);
        let [hitCoordinateX, hitCoordinateY] = hitCoordinate;
        let target = this.gameboard[hitCoordinateX][hitCoordinateY];
        if (target == null) {
            this.gameboard[hitCoordinateX][hitCoordinateY] = 'O';
            return { adjacentCells: null, isShipHit: false };
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
                this.removeCellFromAvailableCells([row, col]);
            });
            return { adjacentCells: adjacentCellsSet, isShipHit: true };
        }
        return { adjacentCells: null, isShipHit: true };
    }

    areAllShipsSunk() {
        return this.ships.every((ship) => ship.isSunkStatus);
    }

    getShipPositions(logShipPositions = false) {
        if(logShipPositions) console.log(this.#shipPositions);
        return this.#shipPositions;
    }

    getRandomCoordinateForShip(shipLength) {
        if (this.availableCells.length === 0) {
            throw new Error('No available cells to place ship');
        }

        const MAX_RETRIES = 100;
        let attempts = 0;

        while (attempts < MAX_RETRIES) {
            const randomOrientation = this.getRandomOrientation();

            const rangeX =
                randomOrientation === Orientation.HORIZONTAL
                    ? this.#ROW_SIZE
                    : this.#ROW_SIZE - (shipLength - 1);
            const rangeY =
                randomOrientation === Orientation.HORIZONTAL
                    ? this.#COL_SIZE - (shipLength - 1)
                    : this.#COL_SIZE;
            const randomCoordinate = this.getRandomCoordinateInRange(
                rangeX,
                rangeY
            );

            if (
                this.isValidPosition(
                    shipLength,
                    randomCoordinate,
                    randomOrientation
                )
            ) {
                return { randomCoordinate, randomOrientation };
            }

            attempts++;
        }

        throw new Error('Failed to find valid coordinate for ship placement');
    }

    getRandomOrientation() {
        return Math.random() < 0.5
            ? Orientation.HORIZONTAL
            : Orientation.VERTICAL;
        // return Orientation.HORIZONTAL;
    }

    getRandomCoordinateInRange(rangeX, rangeY) {
        let x = Math.floor(Math.random() * rangeX);
        let y = Math.floor(Math.random() * rangeY);
        return [x, y];
    }

    getRandomCoordinate() {
        if (this.availableCells.length === 0) {
            throw new Error('No more available cells');
        }

        let randomIndex = Math.floor(
            Math.random() * this.availableCells.length
        );

        let randomCoordinate = this.availableCells[randomIndex];
        this.availableCells.splice(randomIndex, 1);

        return randomCoordinate;
    }

    getRandomAdjacentCoordinate(hitCoordinate) {
        const allAdjacentCoordinates =
            this.getRelevantAdjacentCoordinates(hitCoordinate);
        if (!allAdjacentCoordinates || allAdjacentCoordinates.length === 0) {
            return this.getRandomCoordinate();
        }

        const randomIndex = Math.floor(
            Math.random() * allAdjacentCoordinates.length
        );

        const randomAdjacentCoordinate = allAdjacentCoordinates[randomIndex];

        this.removeCellFromAvailableCells(randomAdjacentCoordinate);

        return randomAdjacentCoordinate;
    }

    getRelevantAdjacentCoordinates(hitCoordinate) {
        const allAdjacentCoordinates = this.getAdjacentCells(
            hitCoordinate,
            this.#relevantAdjacentCellDeltas
        );
        const relevantAdjacentCoordinates = allAdjacentCoordinates.filter(
            (coordinate) =>
                this.gameboard[coordinate[0]][coordinate[1]] !== 'X' &&
                this.gameboard[coordinate[0]][coordinate[1]] !== 'O'
        );
        return relevantAdjacentCoordinates;
    }

    removeCellFromAvailableCells(cellToRemove) {
        this.availableCells = this.availableCells.filter(
            (availableCell) =>
                !(
                    availableCell[0] == cellToRemove[0] &&
                    availableCell[1] == cellToRemove[1]
                )
        );
    }
}

export { Gameboard, Orientation };
