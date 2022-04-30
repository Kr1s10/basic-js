const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  const s = `${n}`;
  for(let i = 0; i < s.length; i++) {
    const ex = Number(s.replace(s[i], ''));
    if(ex > max) max = ex;
  }
  return max;
}

module.exports = {
  deleteDigit
};
