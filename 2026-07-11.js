/* Five Dice

Given an array of five dice with values 1-6, return the best possible hand.

Here are the hands ranked lowest to highest:

Hand                Description
"no pair"           No pair or better
"pair"              Two dice with the same value
"two pair"          Two different pairs
"three of a kind"   Three dice with the same value
"small straight"    Four consecutive values
"large straight"    Five consecutive values
"full house"        Three of a kind and a pair
"four of a kind"    Four dice with the same value
"five of a kind"    All five dice with the same value


*/

// FIX: very ugly way to do it, there must be a better way
function fiveDice(dice) {
    dice.sort((a, b) => a - b);

    if (dice[0] === dice[4]) {
        return "five of a kind";
    }

    if (dice[0] === dice[3] || dice[1] === dice[4]) {
        return "four of a kind";
    }

    const count = new Uint8Array(6 + 1);
    for (const die of dice) {
        count[die] += 1;
    }

    if (count.some(c => c === 3) && count.some(c => c === 2)) {
        return "full house";
    }

    let consecutive = 1;
    for (let i = 1; i < dice.length; i++) {
        if (dice[i] != dice[i - 1] + 1) {
            break;
        }
        consecutive++;
    }
    if (consecutive == 5) {
        return "large straight";
    }

    if (consecutive == 4) {
        return "small straight";
    }

    consecutive = 1;
    for (let i = 2; i < dice.length; i++) {
        if (dice[i] != dice[i - 1] + 1) {
            break;
        }
        consecutive++;
    }
    if (consecutive == 4) {
        return "small straight";
    }

    if (count.some(c => c === 3)) {
        return "three of a kind";
    }

    const pairs = count.filter(c => c === 2);

    if (pairs.length == 2) {
        return "two pair";
    }

    if (pairs.length == 1) {
        return "pair";
    }

    return "no pair";
}
