/* Horoscope Match

Given two star sign strings, return their compatibility percentage.

The signs are arranged in a wheel of 12 positions in this order:
"Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra",
"Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces",
wrapping back to "Aries" after "Pisces".

Find the shortest distance between the two signs and return the compatibility:
Distance    Compatibility
0           "100%"
1           "40%"
2           "80%"
3           "30%"
4           "90%"
5           "20%"
6           "50%"

Tests:
    Passed: 1. horoscopeMatch("Libra", "Sagittarius") should return "80%".
    Passed: 2. horoscopeMatch("Gemini", "Scorpio") should return "20%".
    Passed: 3. horoscopeMatch("Pisces", "Aries") should return "40%".
    Passed: 4. horoscopeMatch("Capricorn", "Cancer") should return "50%".
    Passed: 5. horoscopeMatch("Aquarius", "Aquarius") should return "100%".
    Passed: 6. horoscopeMatch("Virgo", "Taurus") should return "90%".
    Passed: 7. horoscopeMatch("Leo", "Scorpio") should return "30%".
*/

function horoscopeMatch(sign1, sign2) {
    const signs = [
        "Aries", "Taurus",
        "Gemini", "Cancer", "Leo",
        "Virgo", "Libra",
        "Scorpio", "Sagittarius",
        "Capricorn", "Aquarius", "Pisces"
    ];

    const signToIndex = {};
    signs.forEach((v, i) => signToIndex[v] = i);

    const distToComp = ["100%", "40%", "80%", "30%", "90%", "20%", "50%"];

    const s1_i = signToIndex[sign1];
    const s2_i = signToIndex[sign2];

    const distInt = Math.abs(s1_i - s2_i);
    const distWrap = signs.length - distInt;

    const dist = Math.min(distInt, distWrap);

    return distToComp[dist];
}
