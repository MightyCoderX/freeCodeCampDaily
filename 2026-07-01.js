/* Lucky Number
Given a string of a person's first and last name, calculate their lucky number using the following rules:

  - First and last names are separated by a space
  - Find the vowel and consonant count for each name
  - Multiply the smaller vowel and consonant counts by each other and then by the length of the smaller name
  - Do the same for the two larger counts and the larger name
  - Subtract the smaller value from the larger one to get their lucky number

If the final value is zero (0), return 13.
*/

function getLuckyNumber(name) {
    // 1. "John", "Doe"
    // 2. "John": Vf=1, Cf=3; "Doe": Vl=2, Cl=1
    // 3. (Vf * Cl * 3) = 1 * 1 * 3 = 3
    // 4. (Cf * Vl * 4) = 3 * 2 * 4 = 6 * 4 = 24
    // 5. 24 - 3 = 21

    const [fn, ln] = name.split(" ");

    let shortest_len;
    let longest_len;
    if (fn.length < ln.length) {
        shortest_len = fn.length;
        longest_len = ln.length;
    }
    else {
        shortest_len = ln.length;
        longest_len = fn.length;
    }

    const isVowel = (c) => /[aeiou]/i.test(c);

    const [fn_cvow, fn_ccons] = fn.split("")
        .reduce((acc, l) => [acc[0] + isVowel(l), acc[1] + !isVowel(l)], [0, 0]);

    const [ln_cvow, ln_ccons] = ln.split("")
        .reduce((acc, l) => [acc[0] + isVowel(l), acc[1] + !isVowel(l)], [0, 0]);

    const min_cvow = Math.min(fn_cvow, ln_cvow);
    const min_ccons = Math.min(fn_ccons, ln_ccons);

    const max_cvow = Math.max(fn_cvow, ln_cvow);
    const max_ccons = Math.max(fn_ccons, ln_ccons);

    const n1 = min_cvow * min_ccons * shortest_len;
    const n2 = max_cvow * max_ccons * longest_len;


    const res = Math.abs(n1 - n2);


    return res == 0 ? 13 : res;
}
