const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];

  for(let r = 0; r < matrix.length; r++){
    res.push([]);
    for(let c = 0; c < matrix[r].length; c++){
      let cnt = 0;
      if(r > 0){
        if(matrix[r - 1][c]) cnt += 1;
        if(matrix[r - 1][c + 1]) cnt += 1;
        if(matrix[r - 1][c - 1]) cnt += 1;
      }

      if(r < matrix.length - 1){
        if(matrix[r + 1][c]) cnt +=1;
        if(matrix[r + 1][c + 1]) cnt += 1;
        if(matrix[r + 1][c - 1]) cnt +=1;
      }

      if(matrix[r][c + 1]) cnt +=1;
      if(matrix[r][c - 1]) cnt +=1;
      
      res[r].push(cnt);
    }
  }
  return res;
}

module.exports = {
  minesweeper
};
