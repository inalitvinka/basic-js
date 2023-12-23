const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *  // if(проверка) else throw new Error(errorText)
  // у меня я вижу одну проверку, if(data) - это достаточно что бы выбросить  'Unable to determine the time of year!'
  // Затем можно обернуть код получения данных в try catch чтобы выдать 'Invalid date!';
  // Если данные не корректные то получение из них года/месяца и т.д - дадут ошибку
  // Нужно заглянуть в прототип new Date() и найти метод который есть, только у оригинального Date и нет у new Date()
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try {
    date.getTime();
  } catch (err) {
    throw new Error('Invalid date!');
  };
  let month = date.getMonth();
  if (month === 0 || month === 1 || month === 11) return 'winter';
  if (month === 2 || month === 3 || month === 4) return 'spring';
  if (month === 5 || month === 6 || month === 7) return 'summer';
  if (month === 8 || month === 9 || month === 10) return 'autumn'; 
}

module.exports = {
  getSeason
};
