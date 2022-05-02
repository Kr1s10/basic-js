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
  constructor (mode = true) {
    this.mode = mode;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }
  encrypt(message, key) {
    if(!message || !key) throw new Error("Incorrect arguments!");
    let res = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      this.alphabet.indexOf(message[i]) == -1
        ? (res += message[i])
        : (res +=
            this.alphabet[
              (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[keyIndex++ % key.length])) % this.alphabet.length
            ]);
    }

    return this.mode ? res : res.split("").reverse().join("");
  }
  decrypt(message, key) {
    if(!message || !key) throw new Error("Incorrect arguments!");
    let res = '';
    message = message.toUpperCase();
    key = key.toUpperCase();
    let keyIndex = 0;
    let decryptIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if(this.alphabet.indexOf(message[i]) == -1) {
        res += message[i];
        continue;
      }
      decryptIndex = (this.alphabet.indexOf(message[i]) - this.alphabet.indexOf(key[keyIndex++ % key.length])) % this.alphabet.length;
      res += decryptIndex < 0 ? this.alphabet[this.alphabet.length + decryptIndex] : this.alphabet[decryptIndex];
    }
    
    return this.mode ? res : res.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
