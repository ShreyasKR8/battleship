const Orientation = Object.freeze({
    HORIZONTAL: 'horizontal',
    VERTICAL: 'vertical',
});

const ROW_SIZE = 10;
const COL_SIZE = 10;

class Gameboard {
    #reservedPositions = new Set();
    constructor() {
        this.gameboard = new Array(ROW_SIZE)
            .fill(0)
            .map(() => new Array(COL_SIZE).fill(0));
    }

    getAdjacentCells(position) {

    }

    isValidPosition(ship, position, orientation) {
        if(this.#reservedPositions.has(position.toString())) {
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
            if (colNumber + shipLength > ROW_SIZE) {
                return null; // setting position was unsuccessful.
            }

            while (shipLength--) {
                this.gameboard[rowNumber][colNumber] = 1;
                colNumber++;
            }
            this.#reservedPositions.add(position.toString());
        } else if (orientation == Orientation.VERTICAL) {
            if (rowNumber + shipLength > COL_SIZE) {
                return null; // setting position was unsuccessful.
            }
            
            while (shipLength--) {
                this.gameboard[rowNumber][colNumber] = 1;
                rowNumber++;
            }
            this.#reservedPositions.add(position.toString());
        } else {
            return null; //invalid orientation
        }

        return this.gameboard;
    }
}

export { Gameboard, Orientation };
