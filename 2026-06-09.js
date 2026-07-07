/*
Roommates

Given an array of people and their roommate group, return the room assignments for a hotel stay using the following rules:

    Each person has a name and a group property:

[
  { "name": "Alice", "group": "A" },
  { "name": "Bob", "group": "B" },
  { "name": "Carol", "group": "A" }
]

 - People can only share a room with someone from the same group and are paired in the order they are given.
 - Return an array of strings with names separated by " and " for a shared room, and just the name for a solo room. Names must appear in the order they were paired. For the example above, return ["Alice and Carol", "Bob"].


*/


/**
 * @param {[{ name: string, group: string }]} people
 */
function getRoommates(people) {

    // { "A": [[J, J], [J]], "B": [[], []] }
    const group_to_pairs = {};

    for (const p of people) {
        const pairs = group_to_pairs?.[p.group];

        if (pairs) {
            let i;
            for (i = 0; pairs[i]?.length === 2; i++);

            if (pairs[i]) {
                pairs[i].push(p.name);
            } else {
                pairs[i] = [p.name];
            }
        }
        else {
            group_to_pairs[p.group] = [[p.name]];
        }
    }

    // Object.values(group_to_pairs) is gonna be an array of arrays of pairs,
    // so we need to flatten it to an array of pairs then join each pair with " and "
    return Object.values(group_to_pairs).flat(1).map(pair => pair.join(" and "));
}
