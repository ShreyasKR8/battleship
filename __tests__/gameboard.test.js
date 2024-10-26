import { Gameboard, Orientation } from '../modules/gameboard';
import Ship from '../modules/ship';

describe('Test placeShip()', () => {
    let gameboard = null;
    let testGB = null;
    beforeAll(() => {
        gameboard = new Gameboard();
        testGB = new Array(10).fill(0).map(() => new Array(10).fill(0));
    });

    test('Place Cruiser', () => {
        const cruiser = new Ship(3);
        testGB[1][2] = 1;
        testGB[1][3] = 1;
        testGB[1][4] = 1;
        expect(
            gameboard.placeShip(cruiser, [1, 2], Orientation.HORIZONTAL)
        ).toStrictEqual(testGB);
    });

    test('Place Submarine', () => {
        const submarine = new Ship(3);
        testGB[2][7] = 1;
        testGB[2][8] = 1;
        testGB[2][9] = 1;

        expect(
            gameboard.placeShip(submarine, [2, 7], Orientation.HORIZONTAL)
        ).toStrictEqual(testGB);
    });

    test('Place Carrier', () => {
        const carrier = new Ship(5);
        testGB[4][4] = 1;
        testGB[5][4] = 1;
        testGB[6][4] = 1;
        testGB[7][4] = 1;
        testGB[8][4] = 1;

        expect(gameboard.placeShip(carrier, [4, 4], Orientation.VERTICAL)).toStrictEqual(
            testGB
        );
    });

    test('Place Battleship', () => {
        const battleship = new Ship(4);
        testGB[5][8] = 1;
        testGB[6][8] = 1;
        testGB[7][8] = 1;
        testGB[8][8] = 1;

        expect(
            gameboard.placeShip(battleship, [5, 8], Orientation.VERTICAL)
        ).toStrictEqual(testGB);
    });

    test('Place Destroyer', () => {
        const destroyer = new Ship(2);
        testGB[7][0] = 1;
        testGB[7][1] = 1;

        expect(
            gameboard.placeShip(destroyer, [7, 0], Orientation.HORIZONTAL)
        ).toStrictEqual(testGB);
    });
});

describe('Test placeShip() for out of bounds', () => {
    let gameboard = null;
    let testGB = null;
    beforeEach(() => {
        gameboard = new Gameboard();
        testGB = new Array(10).fill(0).map(() => new Array(10).fill(0));
    });

    test('Place Cruiser', () => {
        const cruiser = new Ship(3);
        expect(
            gameboard.placeShip(cruiser, [1, 8], Orientation.HORIZONTAL)
        ).toStrictEqual(null);
    });

    test('Place Submarine', () => {
        const submarine = new Ship(3);
        expect(gameboard.placeShip(submarine, [8, 2], Orientation.VERTICAL)).toStrictEqual(
            null
        );
    });
});

describe('Test placeShip() for overlaps between two ships', () => {
    let gameboard = null;
    let testGB = null;
    beforeAll(() => {
        gameboard = new Gameboard();
        testGB = new Array(10).fill(0).map(() => new Array(10).fill(0));
    });

    test('Place Cruiser', () => {
        testGB[1][7] = 1;
        testGB[1][8] = 1;
        testGB[1][9] = 1;
        const cruiser = new Ship(3);
        expect(
            gameboard.placeShip(cruiser, [1, 7], Orientation.HORIZONTAL)
        ).toStrictEqual(testGB);
    });

    test('Does not allow 2 ships position to overlap', () => {
        const submarine = new Ship(3);
        expect(gameboard.placeShip(submarine, [0, 7], Orientation.VERTICAL)).toStrictEqual(
            null
        );
    });
});
