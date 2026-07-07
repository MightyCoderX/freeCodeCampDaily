/*
Bucket Fill

Given a 2D grid, a starting position ([row, col]), and a new value, replace the value at the starting position and all connected cells of the same value with the new value.

 - Cells are connected if they are adjacent horizontally or vertically (not diagonally).

Return the updated grid.
*/

function bucketFill(grid, [row, col], newValue) {

    const directions = [
        [0, 1], // right
        [-1, 0], // up
        [0, -1], // left
        [1, 0], // down
    ];

    const oldValue = grid[row][col];
    grid[row][col] = newValue;

    for (const [dx, dy] of directions) {
        const new_row = row + dy;
        const new_col = col + dx;
        if (new_row < 0 || new_row >= grid.length) continue;
        if (new_col < 0 || new_col >= grid[0].length) continue;

        const adjValue = grid[new_row][new_col];
        if (adjValue == oldValue) {
            bucketFill(grid, [new_row, new_col], newValue);
        }
    }

    return grid;
}
