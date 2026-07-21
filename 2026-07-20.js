/* Golden Ratio

Given two numbers, determine if their ratio approximates the golden ratio.
 - Use a golden ratio of 1.618
 - Allow a tolerance of 0.01

*/

function isGoldenRatio(a, b) {
  if (a > b) {
    const temp = a;
    a = b;
    b = temp;
  }
  return Math.abs(1.618 - (b/a)) <= 0.01;
}
