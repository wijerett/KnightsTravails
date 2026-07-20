

const knight_offsets = [
    [1, 2], [2, 1], [2, -1], [1, -2],
    [-1, -2], [-2, -1], [-2, 1], [-1, 2]
];

function onBoard(row, col) {
    return row >= 0 && row <= 7 && col >= 0 && col <= 7;
};

function knightMoves([row, col]) {
    const moves = [];

    for (const [dRow, dCol] of knight_offsets) {
        const newRow = row + dRow;
        const newCol = col + dCol;

        if (onBoard(newRow, newCol)) {
            moves.push([newRow, newCol]);
        }
    }
    return moves;
}



console.log(knightMoves([0, 0], [1, 2]));