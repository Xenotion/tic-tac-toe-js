let turn = 'X';

document.querySelectorAll('#tic-tac-toe-board td').forEach(cell => {
    cell.addEventListener('click', event => {
        if (!event.target.textContent) {
            event.target.textContent = turn;
            turn = turn === 'X' ? 'O' : 'X';
        }
        const winner = checkWinner();
        if (winner) {
            alert(winner + " won the game!");
        }
    });
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.querySelectorAll('#tic-tac-toe-board td').forEach(cell => {
        cell.innerHTML = '';
    });
    turn = 'X';
});

function checkWinner() {
    const board = [];
    document.querySelectorAll('#tic-tac-toe-board td').forEach(cell => board.push(cell.textContent));
    
    // Define the winning combinations
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];
    
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

