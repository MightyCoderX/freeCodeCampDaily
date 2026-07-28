/* Pronic Number

Given a number, determine whether it is a pronic number.

A pronic number is the product of two consecutive integers.
For example, 6 is pronic because 2 * 3 = 6.

Tests:

 1. isPronic(6) should return true.
 2. isPronic(15) should return false.
 3. isPronic(12) should return true.
 4. isPronic(132) should return true.
 5. isPronic(80) should return false.
 6. isPronic(0) should return true.

*/

// almost a square n*(n+1) =~ n*n sooo...
function isPronic(n) {
    const n1 = Math.floor(Math.sqrt(n));
    const n2 = n1 + 1;

    return n1 * n2 == n;
}
