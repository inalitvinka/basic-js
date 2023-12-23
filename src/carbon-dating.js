const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
/* 
  Ваша задача — реализовать функцию dateSample(sampleActivity), 
  вычисляющую приблизительный возраст выборки (в годах). Пожалуйста, 
  используйте данные MODERN_ACTIVITYи HALF_LIFE_PERIOD.
  Параметр функции sampleActivity— это string. Рассчитанный возраст выборки должен быть number.
  Возраст должен быть целым числом . Возраст необходимо округлить в большую сторону (потолок). 
  В случае неправильного типа входного параметра , неадекватного значения активности или отсутствия аргумента 
  функция должна вернуться false.
  dateSample('1') => 22387 22392
  dateSample('WOOT!') => false
  Вы можете использовать формулу из статьи по ссылке выше. 
  0,693 — это приближение натурального логарифма двух.
  t = ln(N0 / n); k = .693 / t1/2    
*/
function dateSample(sampleActivity) {
  const NATURAL_LOGARITHM_OF_TWO = .693;
  if (typeof sampleActivity !== 'string' || sampleActivity.length === 0 || isNaN(parseFloat(sampleActivity)) || parseFloat(sampleActivity) <= 0 || parseFloat(sampleActivity) > MODERN_ACTIVITY) return false;
  const k = NATURAL_LOGARITHM_OF_TWO / HALF_LIFE_PERIOD;
  const years = Math.ceil(Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / k);
  return years;  
}

module.exports = {
  dateSample
};
