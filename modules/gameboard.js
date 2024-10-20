import Ship from './ship.js';

// const Orientation = Object.freeze({
//     'horizontal': HORIZONTAL,
//     'vertical': VERTICAL,
// });

const ROW_SIZE = 10;
const COL_SIZE = 10;

class Gameboard {
    constructor() {
        this.gameboard = new Array(ROW_SIZE)
            .fill(0)
            .map(() => new Array(COL_SIZE).fill(0));
    }

    placeShip(ship, position, orientation) {
        let rowNumber = position[0];
        let colNumber = position[1];
        let shipLength = ship.getShipLength();
        
        if (orientation == 'horizontal') {
            if (colNumber + shipLength > ROW_SIZE) {
                return null; // setting position was unsuccessful.
            }

            while (shipLength--) {
                this.gameboard[rowNumber][colNumber] = 1;
                colNumber++;
            }
        } else {
            if (rowNumber + shipLength > COL_SIZE) {
                return null; // setting position was unsuccessful.
            }

            while (shipLength--) {
                this.gameboard[rowNumber][colNumber] = 1;
                rowNumber++;
            }
        }

        return this.gameboard;
    }
}

export default Gameboard;
