/* Dice Odds

Given a number of six-sided dice to roll and a target sum, return the
odds of rolling that sum as a string in the format "1 in X".

 - The number of dice will be between 1 and 6.
 - The target sum is always achievable with the given number of dice.
 - Round "X" to the nearest whole number.

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
