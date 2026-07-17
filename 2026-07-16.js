/* Pig Latin Converter

Given a string, convert it to Pig Latin using the following rules:

 - If a word begins with a vowel ("a", "e", "i", "o", or "u"),
    add "way" to the end. For example, "universe" converts to "universeway".

 - If a word begins with one or more consonants,
    move them to the end and add "ay". For example,
    "hello" converts to "ellohay".

 - Preserve the case of the first letter. For example,
    "Hello" converts to "Ellohay".

*/

// my attempt without maintaining capitalization
function pigLatin(str) {
    return str
        .replace(/\b([aeiou][^ ]+)\b/g, "$1way")
        .replace(/\b([^aeiou ]+)([^ ]+)\b/g, "$2$1ay");
}

// inspired by Claude (didn't remember replace could take a function)
function pigLatin(str) {
    return str.replace(/\b([^aeiou\s]*)([a-z]+)\b/gi, (word, consonants, rest) => {
        const wasCapitalized = word[0].toUpperCase() === word[0];

        word = word.toLowerCase();
        consonants = consonants.toLowerCase();
        rest = rest.toLowerCase();

        let converted = consonants === ""
            ? word + "way"
            : rest + consonants + "ay";

        if (wasCapitalized) {
            converted = converted[0].toUpperCase() + converted.slice(1);
        }

        console.log(word, converted);

        return converted;
    })
}


