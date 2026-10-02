/* Contrast Rating 3

Given two arrays representing RGB values and a boolean indicating whether the text is large, return the WCAG contrast rating using the following method:

First, convert each RGB value to relative luminance:

    Divide each channel [R, G, B] by 255 to get a value between 0 and 1
    Apply the gamma correction formula to each channel:
        If the channel value is less than or equal to 0.04045: channel / 12.92
        Otherwise: ((channel + 0.055) / 1.055) ^ 2.4
    Calculate luminance: 0.2126 * R + 0.7152 * G + 0.0722 * B

Then, calculate the contrast ratio by adding 0.05 to each luminance value, then dividing the lighter one by the darker one. The lighter one will always be the first argument.

Return the rating based on the contrast ratio using the following table:
Rating 	Normal Text 	Large Text
"AAA" 	7.0+ 	4.5+
"AA" 	4.5+ 	3.0+
"Fail" 	below 4.5 	below 3.0
Tests:

    Passed: 1. getContrastRating([255, 255, 255], [0, 0, 0], false) should return "AAA".
    Passed: 2. getContrastRating([215, 188, 188], [55, 55, 55], false) should return "AA".
    Passed: 3. getContrastRating([143, 144, 210], [46, 47, 61], false) should return "Fail".
    Passed: 4. getContrastRating([167, 167, 210], [53, 10, 53], true) should return "AAA".
    Passed: 5. getContrastRating([135, 147, 155], [60, 70, 90], true) should return "AA".
    Passed: 6. getContrastRating([125, 210, 195], [105, 130, 90], true) should return "Fail".
*/

function getContrastRating(rgb1, rgb2, isLargeText) {

    const factor = [
        0.2126,
        0.7152,
        0.0722
    ];

    const rgb_to_luminance = (rgb) => rgb
        .map(ch => ch / 255)
        .map(ch => {
            if (ch <= 0.04045) {
                return ch / 12.92;
            }

            return ((ch + 0.055) / 1.055) ** 2.4;
        })
        .map((ch, i) => ch * factor[i])
        .reduce((acc, x) => acc + x, 0);

    const lum1 = rgb_to_luminance(rgb1);
    const lum2 = rgb_to_luminance(rgb2);

    const ratio = (lum1 + 0.05) / (lum2 + 0.05);

    if (!isLargeText) {
        if (ratio >= 7.0) {
            return "AAA";
        }
        else if (ratio >= 4.5) {
            return "AA";
        }
        else {
            return "Fail";
        }
    }
    else {
        if (ratio >= 4.5) {
            return "AAA";
        }
        else if (ratio > 3.0) {
            return "AA";
        }
        else {
            return "Fail";
        }
    }
}
