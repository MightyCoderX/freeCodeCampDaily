/*
lowercase words

Given a string, return only the words that are entirely lowercase,
in their original order and with a space between each word.

*/

function getLowercaseWords(str) {
    let lower_only = "";

    let word_start = 0;
    for (let i = 0; i < str.length; i++) {
        if (/[A-Z]/.test(str[i])) {
            while (str[i] != " " && i < str.length)
                i++;
            i++;
            if (i >= str.length) break;
            word_start = i;
        }

        if (str[i] == " " || i == str.length - 1) {
            lower_only += str.substr(word_start, i - word_start + 1);
            word_start = i + 1;
            continue;
        }
    }

    return lower_only;
}
