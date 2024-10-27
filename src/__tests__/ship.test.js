import Ship from "../modules/ship";

describe('Test isSunk()', () => {
    const ship = new Ship(2);

    test('hit once', () => {
        ship.hit();
        expect(ship.isSunk()).toBe(false);
    });
    
    test('hit second time', () => {
        ship.hit();
        expect(ship.isSunk()).toBe(true);
    });

});