/* Word Blender

Given two words, return a new word by combining the first half of the first
word with the second half of the second word.

 - For odd-length words, the first half is the shorter half.

*/

function blendWords(word1, word2) {
  return word1.slice(0,Math.floor(word1.length/2)) + word2.slice(Math.floor(word2.length/2));
}
