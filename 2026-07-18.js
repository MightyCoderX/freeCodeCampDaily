/* Dice Odds

Given a number of six-sided dice to roll and a target sum, return the
odds of rolling that sum as a string in the format "1 in X".

 - The number of dice will be between 1 and 6.
 - The target sum is always achievable with the given number of dice.
 - Round "X" to the nearest whole number.

Passed: 1. getOdds(1, 5) should return "1 in 6".
Failed: 2. getOdds(2, 4) should return "1 in 12".
Failed: 3. getOdds(3, 10) should return "1 in 8".
Failed: 4. getOdds(4, 7) should return "1 in 65".
Failed: 5. getOdds(5, 26) should return "1 in 111".
Failed: 6. getOdds(6, 35) should return "1 in 7776".
*/

function getOdds(dice, target) {
    const recurse = (dice, target) => {
        if (dice === 1) return [1, 6];
        const part = Math.ceil(target / dice);
        const num = target - part;
        const [n, d] = recurse(dice - 1, num);
        return [n * n, d * d];
    }

    return recurse(dice, target).join(" in ");
}
