let currentPlayer = '';

function setCurrentPlayer(player) {
    currentPlayer = player;
}

function switchTurn() {
    if (currentPlayer === 'player-one') {
        currentPlayer = 'player-two';
    } else {
        currentPlayer = 'player-one';
    }
}

export { currentPlayer, setCurrentPlayer, switchTurn };