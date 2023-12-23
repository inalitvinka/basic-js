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
  let arr = [...n.toString()].map(item => +item);
  return arr.reduce((acc, item, index) => {
    let nums = arr.concat();
    nums.splice(index, 1);
    let num = +nums.join('');
    return num > acc ? num : acc;
  }, 0)
}

module.exports = {
  deleteDigit
};
