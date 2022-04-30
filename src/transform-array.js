const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(/* arr */) {
  throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  // console.log(arr)
  // if (Array.isArray(arr)) {
  //   const res = [...arr];
  //     res.forEach((v, i, a) => {
  //     if (v === '--discard-next') i === a.length - 1 ? a.splice(i, 1) : a.splice(i, 2);
  //     if (v === '--discard-prev') i === 0 ? a.splice(i, 1) : a.splice(i - 1, 2);
  //     if (v === '--double-next') i === a.length - 1 ? a.splice(i, 1) : a.splice(i, 1, i + 1);
  //     if (v === '--double-prev') i === 0 ? a.splice(i, 1) : a.splice(i, 1, i - 1);

  //   });
  //   console.log(res)
  //   return res;
    
  // } else {
  //   throw new Error("'arr' parameter must be an instance of the Array!");
  // }
}

module.exports = {
  transform
};
