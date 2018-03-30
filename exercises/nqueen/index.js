const generateBoard = function(n) {
    const matrix = [];
    let index = n;
    while (index > 0) {
        matrix.push(Array.apply(null, Array(n)).map(Number.prototype.valueOf, 0))
        index--;
    }

    return matrix;
}

function isCellAttacked(board, size, row, col) {
    for (let i = 0; i < size; i++) {
        if (i !== col) {
            if (board[row][i]) {
                return true;
            }
        }

        if (i !== row) {
            if (board[i][col]) {
                return true;
            }
        }
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i + j) === (row + col)) {
                if (i !== row && j !== col && board[i][j]) {
                    return true;
                }
            }
        }
    }

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if ((i - j) === (row - col)) {
                if (i !== row && j !== col && board[i][j]) {
                    return true;
                }
            }
        }
    }

    return false;

}

function canPlaceQueens(board, numQueens) {
    if (numQueens === 0) {
        return { possible: true, board };
    }
    let boardSize = board.length;
    for (let row = 0; row < boardSize; row++) {
        for (let col = 0; col < boardSize; col++) {
            if (!isCellAttacked(board, boardSize, row, col)) {
                board[row][col] = 1;

                if (canPlaceQueens(board, numQueens - 1)) {
                    return { possible: true, board };
                }

                board[row][col] = 0;
            }
        }
    }

    return {
        possible: false,
        board
    };
}

function NQueen(n) {
    let { possible, board } = canPlaceQueens(generateBoard(n), n);
    console.log(board)
    return possible;
}

/*var iterations = 0

var print_board = function (columns) {
  var n = columns.length, row = 0, col = 0
  while (row < n) {
    while (col < n) {
      process.stdout.write(columns[row] === col ? 'Q ' : '# ')
      col++
    }

    process.stdout.write('\n')
    col = 0
    row++
  }
}

var has_conflict = function (columns) {
  var len = columns.length, last = columns[len - 1], previous = len - 2

  while (previous >= 0) {
    if (columns[previous] === last) return true
    if (last - (len - 1) === columns[previous] - previous) return true
    if (last + (len - 1) === columns[previous] + previous) return true
    previous--
  }

  return false
}

var place_next_queen = function (total, queens, columns) {
  if (queens === 0) return columns
  columns = columns || []

  for (var column = 0; column < total; column++) {
    columns.push(column)
    iterations++
    if (!has_conflict(columns) &&
        place_next_queen(total, queens - 1, columns)) {
      return columns
    }
    columns.pop(column)
  }

  return null
}
function NQueen(n) {
    return place_next_queen(n, n) !== null;
}*/

module.exports = NQueen;