const ROWS_COLS = 8;
var chessBoard = [];


for (let i = 0; i < ROWS_COLS; i++) {
    chessBoard[i] = [];
    for (let j = 0; j < ROWS_COLS; j++) {
        chessBoard[i][j] = (i+j)%2;
    }
}

const table = document.createElement('table');
for (let i = 0; i < ROWS_COLS; i++) {
    const tr = document.createElement('tr');
    for (let j = 0; j < ROWS_COLS; j++) {
        const td = document.createElement('td');
        if (chessBoard[i][j] == 0)
            td.className = 'black';
        else if (chessBoard[i][j] == 1)
            td.className = 'white'; 
        else {
            throw "What happend?";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}

document.getElementById('chess').appendChild(table);