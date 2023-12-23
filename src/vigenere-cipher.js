const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(type = true) {
    return (this.type = type);
  }
  encrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    // const DOUBLE_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LETTERS_AMOUNT = ALPHABET.length;
    const TEXT = text.toUpperCase();
    const KEY = key.toUpperCase();
    let result = '';
    let counter = 0;
    for (let i = 0; i < TEXT.length; i++) {
      if (counter >= KEY.length) counter = 0;
      // console.log(TEXT[i]);
      if (ALPHABET.includes(TEXT[i])) {
        let textIndex = ALPHABET.indexOf(TEXT[i]);
        let keyIndex = ALPHABET.indexOf(KEY[counter]);
        let index = textIndex + keyIndex;
        result += ALPHABET[index % LETTERS_AMOUNT];
        counter++;
      } else result += TEXT[i];
    }
    if (this.type) return result;
    return [...result].reverse().join('');
  }
  decrypt(text, key) {
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }
    const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const LETTERS_AMOUNT = ALPHABET.length;
    const TEXT = text.toUpperCase();
    const KEY = key.toUpperCase();
    let result = '';
    let counter = 0;
    for (let i = 0; i < TEXT.length; i++) {
      if (counter >= KEY.length) counter = 0;
      if (ALPHABET.includes(TEXT[i])) {
        let textIndex = ALPHABET.indexOf(TEXT[i]);
        let keyIndex = ALPHABET.indexOf(KEY[counter]);
        let index = textIndex - keyIndex;
        // console.log(index)
        if (index >= 0) {
          result += ALPHABET[index % LETTERS_AMOUNT];
        }
        else {
          // let index = textIndex - keyIndex + LETTERS_AMOUNT;
          result += ALPHABET[(index + LETTERS_AMOUNT) % LETTERS_AMOUNT];
        }
        counter++;
      }
      else result += TEXT[i];
    }
    if (this.type) return result;
    return [...result].reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
