const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let dns = {};
  domains.map(item => {
    let arr = item.split('.').reverse();
    let key = '';
    arr.forEach(item => {
      key = `${key}.${item}`;
      // console.log(key);
      Object.hasOwn(dns, key) ? dns[key]++ : dns[key] = 1;
      // console.log(dns);
    })
  });
  return dns;
}

module.exports = {
  getDNSStats
};
