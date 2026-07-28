/* Letter Distance

Given two strings of equal length, return the sum of the
shortest distances between each pair of characters.

 - The input will only contain lowercase letters
 - The alphabet is treated as a circle, so the
    distance between a and z is 1.

Tests:

 1. letterDistance("abc", "bcd") should return 3.
 2. letterDistance("abc", "xyz") should return 9.
 3. letterDistance("encrypt", "decrypt") should return 10.
 4. letterDistance("algorithm", "codeblock") should return 43.
 5. letterDistance("lobster", "penguin") should return 47.
 6. letterDistance("alligator", "crocodile") should return 55.

*/

function letterDistance(str1, str2) {
    const idx = letter => letter.charCodeAt(0) - 'a'.charCodeAt(0);

    let tot = 0;
    for (let i = 0; i < str1.length; i++) {
        const l1 = str1[i];
        const l2 = str2[i];
        const l1_i = idx(l1);
        const l2_i = idx(l2);

        const dist = Math.abs(l1_i - l2_i);
        const wrapDist = 26 - dist;

        tot += Math.min(dist, wrapDist);
    }

    return tot;
}
