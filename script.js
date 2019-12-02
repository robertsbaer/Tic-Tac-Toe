const possibleWins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
	[2, 4, 6],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
    ];

let board = '';
let turn = 'X';
let win = '';

function startGame() {
    board = [
    '', '', '',
    '', '', '',
    '', '', ''
    ];
    render();
};

const squares = Array.from(document.querySelectorAll('#board div'));

document.getElementById('board').addEventListener('click', handleTurn);

const messages = document.querySelector('h2');
document.getElementById('reset').addEventListener('click', startGame);


function getWinner() {
    let winner = '';
    possibleWins.forEach(function(wins, index) {
        if (wins[wins[0]] && board[wins[0]] === board[wins[1]] && board[wins[0]] === board[wins[2]]) winner = board[wins[0]];
        });
        return winner ? winner : board.includes('') ? '' : 'T';
};

function handleTurn() {
    let idx = squares.findIndex(function(square) {
        return square === event.target;
    });
    board[idx] = turn;
    turn = turn == 'X' ? 'O' : 'X';
    win = getWinner();
    render();
};


function render() {
    board.forEach(function(mark, index) {
    squares[index].textContent = mark;
    });
    messages.textContent = win === 'T' ? `Tied` : win ? `${win} wins` : `It's ${turn}'s turn!`;
    };

startGame();