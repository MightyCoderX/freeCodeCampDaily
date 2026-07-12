/* Exact Change

Given an integer amount in cents, return the number of
distinct ways to make exact change using pennies (1 cent),
nickels (5 cents), dimes (10 cents), and quarters (25 cents).

Tests:
 - 1. exactChange(3) should return 1.
 - 2. exactChange(9) should return 2.
 - 3. exactChange(17) should return 6.
 - 4. exactChange(39) should return 24.
 - 5. exactChange(61) should return 73.
 - 6. exactChange(99) should return 213.

*/

const coins = [1, 5, 10, 25];
function exactChange(amount) {
    const ways = new Uint32Array(amount + 1);
    ways[0] = 1;

    for (const coin of coins) {
        if (coin > amount) break;
        for (let i = 0; i <= amount; i++) {
            const value = i;
            if (value < coin) continue;
            // value >= coin
            const rem = value - coin;
            ways[value] += ways[rem];
        }
    }

    return ways[amount];
}

// O(1) alternative hard-coded math formula
function exactChange(amount) {
    const k = Math.floor(amount / 5);
    const c = Math.floor(k / 5);
    const A = k + 2;
    const S = (1 / 4) * (A ** 2 * (c + 1) - 5 * A * c * (c + 1) + (25 * c * (c + 1) * (2 * c + 1)) / 6);
    let frac = (c + 1) / 2;
    frac = k & 1 ? Math.ceil(frac) : Math.floor(frac);
    const E = 1 / 4 * frac;

    return S - E;
}
