/*
Spellcaster

Given a string of spell codes you are casting, calculate the total score.

Each character in the string represents a spell:
Code 	Spell 	Category 	Base Score
"f" 	Fire 	Destruction 	3
"l" 	Lightning 	Destruction 	3
"i" 	Ice 	Control 	2
"w" 	Wind 	Control 	2
"h" 	Heal 	Restoration 	1
"s" 	Shield 	Restoration 	1

A combo multiplier is applied based on how many spells in a row have been cast from different categories:

 - The first spell always scores at base value.
 - Each consecutive spell from a different category than the previous increases the multiplier by 1.
 - Casting a spell from the same category as the previous resets the multiplier back to 1.
 - The score for each spell is its base score multiplied by the current multiplier.

Return the total score from the sequence of spells.
*/

function cast(spells) {
    const spell_details = {
        "f": { category: "Destruction", score: 3 },
        "l": { category: "Destruction", score: 3 },
        "i": { category: "Control", score: 2 },
        "w": { category: "Control", score: 2 },
        "h": { category: "Restoration", score: 1 },
        "s": { category: "Restoration", score: 1 },
    }

    let prev_spell = "";
    let total_score = 0;
    let mult = 1;
    for (const spell of spells.split("")) {
        console.log("mult:", mult, "total_score:", total_score);
        const spell_cat = spell_details[spell].category;
        if (prev_spell) {
            const prev_spell_cat = spell_details[prev_spell].category;
            if (spell_cat != prev_spell_cat) {
                mult += 1;
            }
            else {
                mult = 1;
            }
        }

        total_score += spell_details[spell].score * mult;
        prev_spell = spell;
    }

    return total_score;
}
