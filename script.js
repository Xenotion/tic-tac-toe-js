let turn = 'X';

document.querySelectorAll('#tic-tac-toe-board td').forEach(cell => {
    cell.addEventListener('click', event => {
        if (!event.target.textContent) {
            event.target.textContent = turn;
            turn = turn === 'X' ? 'O' : 'X';
        }
    });
});

document.getElementById('reset-button').addEventListener('click', function() {
    document.querySelectorAll('#tic-tac-toe-board td').forEach(cell => {
        cell.innerHTML = '';
    });
});

console.log(document.querySelectorAll('#tic-tac-toe-board td'));