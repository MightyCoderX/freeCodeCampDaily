/*
Last Load

Given the number of scoops of laundry detergent you have remaining
and an array of how many scoops you used in each of the previous days,
return the number of full days of detergent you have remaining.

Calculate your average daily usage from the usage history and assume
that amount of usage each day going forward.
*/

function lastLoadDate(scoops, usage) {
    const avg_usage = usage.reduce((acc, x) => acc + x) / usage.length;

    return Math.floor(
        scoops / avg_usage
    );
}
