const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const res = [];
  const indxOfNagetives = arr.map((el, i) => el < 0 ? i : 'pos').filter(el => el !== 'pos');
  const sortedWithoutNag = arr.filter(el => el >= 0).sort((a, b) => a - b);
  arr.forEach((el, i) => {
    if(indxOfNagetives.includes(i)) res.push(-1);
    else res.push(...sortedWithoutNag.splice(0, 1));
  })
  return res;
}

module.exports = {
  sortByHeight
};
