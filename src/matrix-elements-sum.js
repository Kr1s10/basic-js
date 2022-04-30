const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  for(let r = 0; r < rows; r++) {
    for(let c = 0; c < cols; c++) {
      if(matrix[r][c] === 0 && typeof matrix[r + 1] !== 'undefined') matrix[r + 1][c] = 0;
    }
  }
  return matrix.flat().reduce((sum, curr) => sum += curr, 0);
}


module.exports = {
  getMatrixElementsSum
};
