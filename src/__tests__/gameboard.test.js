import { Gameboard, Orientation } from '../modules/gameboard';
import Ship from '../modules/ship';
import {jest} from '@jest/globals'


describe('Test placeShip()', () => {
    let gameboard = null;
    let testGB = null;
    beforeAll(() => {
        gameboard = new Gameboard();
        testGB = new Array(10).fill(null).map(() => new Array(10).fill(null));
    });

    test('Place Cruiser', () => {
        const cruiser = new Ship(3);
        testGB[1][2] = cruiser;
        testGB[1][3] = cruiser;
        testGB[1][4] = cruiser;
        expect(
            gameboard.placeShip(cruiser, [1, 2], Orientation.HORIZONTAL)
        ).toStrictEqual(testGB);
    });

    test('Place Submarine', () => {
        const submarine = new Ship(3);
        testGB[2][7] = submarine;
        testGB[2][8] = submarine;
        testGB[2][9] = submarine;

        expect(
            gameboard.placeShip(submarine, [2, 7], Orientation.HORIZONTAL)
        ).toStrictEqual(testGB);
    });

    test('Place Carrier', () => {
        const carrier = new Ship(5);
        testGB[4][4] = carrier;
        testGB[5][4] = carrier;
        testGB[6][4] = carrier;
        testGB[7][4] = carrier;
        testGB[8][4] = carrier;

        expect(
            gameboard.placeShip(carrier, [4, 4], Orientation.VERTICAL)
        ).toStrictEqual(testGB);
    });

    test('Place Battleship', () => {
        const battleship = new Ship(4);
        testGB[5][8] = battleship;
        testGB[6][8] = battleship;
        testGB[7][8] = battleship;
        testGB[8][8] = battleship;

        expect(
            gameboard.placeShip(battleship, [5, 8], Orientation.VERTICAL)
        ).toStrictEqual(testGB);
    });

    test('Place Destroyer', () => {
        const destroyer = new Ship(2);
        testGB[7][0] = destroyer;
        testGB[7][1] = destroyer;

        expect(
            gameboard.placeShip(destroyer, [7, 0], Orientation.HORIZONTAL)
        ).toStrictEqual(testGB);
    });
});

describe('Test placeShip() for out of bounds', () => {
    let gameboard = null;
    beforeEach(() => {
        gameboard = new Gameboard();
    });
    
    test('Place Submarine', () => {
        const cruiser = new Ship(3);
        gameboard.placeShip(cruiser, [1, 8], Orientation.HORIZONTAL);

        const submarine = new Ship(3);
        expect(
            gameboard.placeShip(submarine, [8, 2], Orientation.VERTICAL)
        ).toStrictEqual(null);
    });
});

describe.only('Test placeShip() for overlaps between two ships', () => {
    let gameboard = null;
    beforeAll(() => {
        gameboard = new Gameboard();
    });
    
    test('Does not allow 2 ships position to overlap', () => {
        const cruiser = new Ship(3);
        gameboard.placeShip(cruiser, [3, 5], Orientation.HORIZONTAL);

        const submarine = new Ship(3);
        expect(
            gameboard.placeShip(submarine, [0, 7], Orientation.VERTICAL)
        ).toStrictEqual(null);
    });
});

describe('Test receiveAttack()', () => {
    let gameboard = null;
    let testGB = null;
    beforeAll(() => {
        gameboard = new Gameboard();
        testGB = new Array(10).fill(null).map(() => new Array(10).fill(null));

        const cruiser = new Ship(3);
        const submarine = new Ship(3);
        const carrier = new Ship(5);
        const battleship = new Ship(4);
        const destroyer = new Ship(2);
        //cruiser
        testGB[1][2] = cruiser;
        testGB[1][3] = cruiser;
        testGB[1][4] = cruiser;

        //submarine
        testGB[2][7] = submarine;
        testGB[2][8] = submarine;
        testGB[2][9] = submarine;

        //carrier
        testGB[4][4] = carrier;
        testGB[5][4] = carrier;
        testGB[6][4] = carrier;
        testGB[7][4] = carrier;
        testGB[8][4] = carrier;

        //battleship
        testGB[5][8] = battleship;
        testGB[6][8] = battleship;
        testGB[7][8] = battleship;
        testGB[8][8] = battleship;

        //destroyer
        testGB[7][0] = destroyer;
        testGB[7][1] = destroyer;

        gameboard.placeShip(battleship, [5, 8], Orientation.VERTICAL);
        gameboard.placeShip(carrier, [4, 4], Orientation.VERTICAL);
        gameboard.placeShip(submarine, [2, 7], Orientation.HORIZONTAL);
        gameboard.placeShip(cruiser, [1, 2], Orientation.HORIZONTAL);
        gameboard.placeShip(destroyer, [7, 0], Orientation.HORIZONTAL);
    });

    // beforeEach(() => {

    // })

    test('test receiveAttack() for carrier', () => {
        gameboard.receiveAttack([4, 4]);
        testGB[4][4] = 'X';
        expect(gameboard.gameboard).toStrictEqual(testGB);
    });

    test('test receiveAttack() for empty', () => {
        testGB[9][9] = 'O';
        gameboard.receiveAttack([9, 9]);
        expect(gameboard.gameboard).toStrictEqual(testGB);
    });
});

describe('test getRelevantAdjacentCoordinates()', () => {
    let gameboard = null;
    let testGB = null;
    beforeEach(() => {
        gameboard = new Gameboard();
        testGB = new Array(10).fill(null).map(() => new Array(10).fill(null));

        const cruiser = new Ship(3);
        const submarine = new Ship(3);
        const carrier = new Ship(5);
        const battleship = new Ship(4);
        const destroyer = new Ship(2);
        //cruiser
        testGB[1][2] = cruiser;
        testGB[1][3] = cruiser;
        testGB[1][4] = cruiser;

        //submarine
        testGB[2][7] = submarine;
        testGB[2][8] = submarine;
        testGB[2][9] = submarine;

        //carrier
        testGB[4][4] = carrier;
        testGB[5][4] = carrier;
        testGB[6][4] = carrier;
        testGB[7][4] = carrier;
        testGB[8][4] = carrier;

        //battleship
        testGB[5][8] = battleship;
        testGB[6][8] = battleship;
        testGB[7][8] = battleship;
        testGB[8][8] = battleship;

        //destroyer
        testGB[7][0] = destroyer;
        testGB[7][1] = destroyer;

        gameboard.placeShip(battleship, [5, 8], Orientation.VERTICAL);
        gameboard.placeShip(carrier, [4, 4], Orientation.VERTICAL);
        gameboard.placeShip(submarine, [2, 7], Orientation.HORIZONTAL);
        gameboard.placeShip(cruiser, [1, 2], Orientation.HORIZONTAL);
        gameboard.placeShip(destroyer, [7, 0], Orientation.HORIZONTAL);
    });
    
    test('test if all adjacent cells are returned', () => {
        testGB[5][8] = 'X'; //mark as previously hit.
        const expectedCells = [
            [4, 8],
            [5, 7],
            [5, 9],
            [6, 8],
        ].sort();
        gameboard.receiveAttack([5, 8]);
        const adjacentCells = gameboard.getRelevantAdjacentCoordinates([5, 8]).sort();
        expect(expectedCells).toStrictEqual(adjacentCells);
    });

    test('test if an adjacent cell is returned excluding already hit cells', () => {
        testGB[5][8] = 'X'; //mark as previously hit.
        testGB[6, 8] = 'O';
        testGB[4, 9] = 'O';
        const expectedCells = [
            [4, 8],
            [5, 7],
            [5, 9],
        ].sort();
        gameboard.receiveAttack([6, 8]);
        gameboard.receiveAttack([5, 8]);
        gameboard.receiveAttack([4, 9]);
        const adjacentCells = gameboard.getRelevantAdjacentCoordinates([5, 8]).sort();
        expect(expectedCells).toStrictEqual(adjacentCells);
    });
    
});

describe('test getRandomCoordinateForShip()', () => {
    let gameboard = null
    beforeAll(() => {
        gameboard = new Gameboard();
        // let testGB = new Array(10).fill(null).map(() => new Array(10).fill(null));
    });

    test('fr', () => {
        jest.spyOn(Gameboard.prototype, 'getRandomCoordinateInRange').mockImplementation(() => {
            return [8, 8];
        });
        jest.spyOn(Gameboard.prototype, 'getRandomOrientation').mockImplementation(() => {
            return Orientation.HORIZONTAL;
        });
        let ans = gameboard.getRandomCoordinateForShip(2).randomCoordinate;
        expect(ans).toEqual([8, 8]);

        //test passed
        // const cruiser = new Ship(3);
        // const submarine = new Ship(3);
        // const carrier = new Ship(5);
        // const battleship = new Ship(4);
        const destroyer = new Ship(2);
        gameboard.placeShip(destroyer, [8, 8], gameboard.getRandomOrientation());
    });

    test('fr', () => {
        jest.spyOn(Gameboard.prototype, 'getRandomCoordinateInRange').mockImplementation(() => {
            return [8, 8];
        });
        jest.spyOn(Gameboard.prototype, 'getRandomOrientation').mockImplementation(() => {
            return Orientation.HORIZONTAL;
        });

        expect(() => {
            gameboard.getRandomCoordinateForShip(2);
        }).toThrow('Failed to find valid coordinate for ship placement');
    });

    test('fr', () => {
        let attempt = 0;
        jest.spyOn(Gameboard.prototype, 'getRandomCoordinateInRange').mockImplementation(() => {
            attempt++;
            if(attempt == 1) {
                return [8, 9];
            }
            if(attempt > 1) {
                return [8, 6];
            }
            return [8, 8];
        });
        jest.spyOn(Gameboard.prototype, 'getRandomOrientation').mockImplementation(() => {
            return Orientation.HORIZONTAL;
        });

        let ans = gameboard.getRandomCoordinateForShip(2).randomCoordinate;

        expect(ans).toEqual([8, 6]);
    });
});