class Ship {
    constructor(length, hitCount = 0, isSunkStatus = false) {
        this.length = length;
        this.hitCount = hitCount;
        this.isSunkStatus = isSunkStatus;
    }

    hit() {
        this.hitCount++;
        return;
    }

    isSunk() {
        if (this.hitCount == this.length) {
            return true;
        }
        return false;
    }

    getShipLength() {
        return this.length;
    }
}

export default Ship;
