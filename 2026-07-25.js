/* Cell Signal

Given a grid containing three cell tower readings,
determine the location of the phone.

 - Each cell in the grid is either 0 (no tower) or a positive
    integer representing the number of cells to the phone,
    measured in a straight line: horizontal, vertical, or diagonal.
 
 - Return the [row, col] of the cell that is the correct number of
    cells from all three towers.
 
 - There is always exactly one solution.

Tests:

 1. findSignal([[0, 0, 1], [0, 1, 0], [0, 0, 1]]) should return [1, 2].
 2. findSignal([[0, 2, 0], [1, 0, 0], [0, 0, 1]]) should return [2, 1].
 3. findSignal([[0, 0, 2, 0], [0, 0, 0, 0], [2, 0, 0, 0], [0, 0, 0, 1]]) should return [2, 2].
 4. findSignal([[0, 3, 0, 0, 0], [0, 0, 0, 0, 2], [0, 0, 0, 0, 0], [4, 0, 0, 0, 0], [0, 0, 0, 0, 0]]) should return [3, 4].
 5. findSignal([[3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 2]]) should return [3, 3].

*/

function findSignal(grid) {
    const directions = [
        [1, 0],
        [1, 1],
        [0, 1],
        [-1, 1],
        [-1, 0],
        [-1, -1],
        [0, -1],
        [1, -1]
    ];

    const getPoints = (cx, cy) => {
        const r = grid[cy][cx];
        const points = new Set();
        for (const [dx, dy] of directions) {
            const px = cx + dx * r;
            const py = cy + dy * r;

            if (px < 0 || px >= grid[0].length) continue;
            if (py < 0 || py >= grid.length) continue;

            if (grid[py][px] == 0) {
                points.add(`[${py},${px}]`)
            }
        }
        return points;
    }

    let points = new Set();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] > 0) {
                if (points.size === 0) {
                    points = getPoints(j, i);
                } else {
                    points = points.intersection(getPoints(j, i));
                }
            }
        }
    }

    const point = [...points][0];

    return JSON.parse(point);
}
