const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = counter(str, options.repeatTimes);
  const sep = '+';

  if ('addition' in options) {
    let add = counter(options.addition, options.additionRepeatTimes);
    const addSep = '|';
    res = res.map(el => el + add.join(options.additionSeparator || addSep));
  } 

  return res.join(options.separator || sep);
}

function counter(item, length) {
  let arr = [];
  for(let i = 0; i < (length || 1); i++) arr.push(`${item}`);
  return arr;
}

module.exports = {
  repeater
};
