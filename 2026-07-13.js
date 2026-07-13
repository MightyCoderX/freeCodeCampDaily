/* Tally Counter

Given a string of tally marks, return the total count represented.

 - Each pipe "|" represents one count.
 - Every fifth mark is represented as a forward slash "/", completing a group of five ("||||/").
 - Groups are separated by a space.

Tests:
 1. getTallyCount("||||") should return 4.
 2. getTallyCount("||||/") should return 5.
 3. getTallyCount("||||/ |||") should return 8.
 4. getTallyCount("||||/ ||||/ ||||/ ||") should return 17.
 5. getTallyCount("||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ ||||/ |") should return 41.

*/

function getTallyCount(str) {
    let total = 0;
    let d = 0;

    let i = 0;
    while (i < str.length) {
        const c = str.charAt(i);
        d++;

        if (c == " " || i == str.length - 1) {
            if (c == " ") d--;
            total += d;
            d = 0;
        }
        i++;
    }
    return total;
}
