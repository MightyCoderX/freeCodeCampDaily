/*
Kaprekar's Routine

Given a 4-digit number, return the number of times you need to
apply Kaprekar's routine until reaching 6174.

Kaprekar's routine works as follows:

 - Arrange the digits in descending order to form the largest number
 - Arrange the digits in ascending order to form the smallest number (pad with leading zeros if necessary)
 - Subtract the smaller from the larger
 - Repeat with the new number

*/

function kaprekar(n) {
    let res = n;

    let count = 0;

    while (res != 6174) {
        const digits = [...res.toString()];
        const n1 = +digits.sort((a, b) => b - a).join("");
        const n2 = +digits.sort((a, b) => a - b).join("");
        res = Math.abs(n1 - n2);
        count++;
    }

    return count;
}
