/* Idea Rankings

Given a 2D array where each inner array contains (in this order)
an idea name, an optimistic estimate, a realistic estimate, and
a pessimistic estimate (in days), return an array of the idea
names sorted by expected time to completion, shortest first.

Calculate the expected time to completion for each idea
using the following formula:

    expected = (
        (optimistic + 4*realistic + pessimistic) / 6) *
        length of idea name
    )

*/

function analyzeIdeas(ideas) {
    const expected = ([name, opt, real, pess]) =>
        ((opt + 4 * real + pess) / 6) * name.length;

    return ideas
        .toSorted((a, b) => expected(a) - expected(b))
        .map(row => row[0]);
}
