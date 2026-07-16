/* British to American

Given a sentence, convert any British English spellings to their American
English equivalents using the following lookup table and return the updated
sentence:

British       American
"colour"      "color"
"flavour"     "flavor"
"honour"      "honor"
"neighbour"   "neighbor"
"labour"      "labor"
"humour"      "humor"
"centre"      "center"
"fibre"       "fiber"
"defence"     "defense"
"offence"     "offense"
"organise"    "organize"
"recognise"   "recognize"
"analyse"     "analyze"

 - Replacements should be case-insensitive.
    For example, "Colour" should become "Color".
 - The input may contain words that build on the
    exact spelling of a root in the table that also
    need to be changed. For example, "colouring"
    should become "coloring", and "disorganised"
    should become "disorganized".

Tests:
 1. britishToAmerican("I love the colour blue.") should return "I love the color blue."
 2. britishToAmerican("The fibre optic cable is new.") should return "The fiber optic cable is new."
 3. britishToAmerican("It's an honour to meet someone with such humour.") should return "It's an honor to meet someone with such humor."
 4. britishToAmerican("The unrecognised artist analysed his colour palette at the centre.") should return "The unrecognized artist analyzed his color palette at the center."
 5. britishToAmerican("The offence analysed, with organisation, the defence centre and recognised that the neighbouring labouror was humourous, flavourful, and colourful.") should return "The offense analyzed, with organisation, the defense center and recognized that the neighboring laboror was humorous, flavorful, and colorful."

*/


// map based exact solution
function britishToAmerican(sentence) {
    const brToUs = {
        "colour": "color",
        "flavour": "flavor",
        "honour": "honor",
        "neighbour": "neighbor",
        "labour": "labor",
        "humour": "humor",
        "centre": "center",
        "fibre": "fiber",
        "defence": "defense",
        "offence": "offense",
        "organise": "organize",
        "recognise": "recognize",
        "analyse": "analyze",
    };

    const isUpper = c => c === c.toUpperCase() && c !== c.toLowerCase();

    const mapUpper = word => [...word]
        .map((c, i) => [i, c])
        .filter(pair => isUpper(pair[1]))
        .reduce((acc, pair) => Object.assign(acc, { [pair[0]]: pair[1] }), {})

    for (const [br, us] of Object.entries(brToUs)) {
        const re = new RegExp(br, "gi");
        const matches = sentence.matchAll(re);
        for (const match of matches) {
            const { 0: brWord, index } = match;
            const map = mapUpper(brWord);
            const brWordChars = [...br];
            const usWordChars = [...us];
            for (const i in map) {
                if (brWordChars[i] !== usWordChars[i]) break;
                usWordChars[i] = map[i];
            }

            sentence = sentence.substring(0, index) +
                usWordChars.join("") +
                sentence.substring(index + brWord.length);
        }
    }

    return sentence;
}

// heuristic regex solution
function britishToAmerican(sentence) {
    return (sentence
        .replace(/([^ ]+)our([^ ]*)/g, "$1or$2")
        .replace(/([^ ]{2,})([^ aeiou])re([^ ]*)/g, "$1$2er$3")
        .replace(/([^ ]+)se([^ ]*)/g, "$1ze$2")
        .replace(/([^ ]+)ce([^ ]*)/g, "$1se$2")
    );
}
