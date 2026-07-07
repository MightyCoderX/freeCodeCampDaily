// Given two integers, round the first to the nearest multiple of the second.
function roundToNearestMultiple(num, f) {
    const quotient = num / f;
    const int_quotient = Math.floor(quotient);

    let nearest;

    if (int_quotient < quotient) // quotient is not integer
    {
        // nearest is either the floor or the ceiling of the quotient times f
        const low = int_quotient * f; // floor of quotient times f
        const high = (int_quotient + 1) * f; // ceil of quotient times f

        const low_dist = Math.abs(num - low);
        const high_dist = Math.abs(num - high);

        nearest = low_dist < high_dist ? low : high;
    }
    else // quotient is integer, f was a divisor of num
    {
        // nearest is num itself since (quotient * f == num)
        nearest = num;
    }

    return nearest;
}
