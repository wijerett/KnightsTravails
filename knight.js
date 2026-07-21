

const knight_offsets = [
    [1, 2], [2, 1], [2, -1], [1, -2],
    [-1, -2], [-2, -1], [-2, 1], [-1, 2]
];

function onBoard(row, col) {
    return row >= 0 && row <= 7 && col >= 0 && col <= 7;
};

function getKnightMoves([row, col]) {
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

function knightMoves(start, end) {
    const queue = [[start]];
    const visited = new Set();

    visited.add(start.toString());
    
    while (queue.length > 0) {
        const path = queue.shift();
        const currentSquare = path[path.length - 1];
        if (currentSquare.toString() === end.toString()) {
            console.log(`Congrats you made it in ${path.length - 1} moves!`)
            return path;
        }

        const neighbors = getKnightMoves(currentSquare);

        for (const neighbor of neighbors) {
            if (!visited.has(neighbor.toString())) {
                visited.add(neighbor.toString());
                queue.push([...path, neighbor]);
            }
        }
    }
}



console.log(knightMoves([0, 0], [3, 3]));