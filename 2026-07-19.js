/* Elevator Stops

Given a number for the current floor of an elevator and an array of requested
floors, return an array of the order the elevator should visit them to minimize
number of floors traveled.

 - If tied, go up first
 - Floors with a request must be visited when the elevator first passes them

Tests:
 1. elevatorStops(5, [2, 8, 3, 9]) should return [3, 2, 8, 9].
 2. elevatorStops(6, [2, 10, 8, 3, 1, 9]) should return [8, 9, 10, 3, 2, 1].
 3. elevatorStops(1, [4, 8, 3, 6, 9]) should return [3, 4, 6, 8, 9].
 4. elevatorStops(12, [6, 10, 7, 3, 1, 4]) should return [10, 7, 6, 4, 3, 1].
 5. elevatorStops(11, [2, 8, 23, 5, 12, 10, 6, 9, 19]) should return [10, 9, 8, 6, 5, 2, 12, 19, 23].
*/


function elevatorStops(currentFloor, stops) {
    const result = [];
    const len = stops.length;
    let lastFloor = currentFloor;
    for (let i = 0; i < len; i++) {
        let minDiff = Infinity;
        let closestFloor = 0;
        for (let j = 0; j < stops.length; j++) {
            const diff = Math.abs(lastFloor - stops[j]);
            if (diff <= minDiff) {
                closestFloor = stops[j];
                minDiff = diff;
            }
        }

        stops = stops.filter(v => v !== closestFloor);

        result.push(closestFloor);
        lastFloor = closestFloor;
    }

    return result;
}
